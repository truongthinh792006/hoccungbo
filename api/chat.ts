// Vercel Serverless Function: Socratic Math Tutor AI
// Endpoint: POST /api/chat
// Security: GEMINI_API_KEY is read strictly from server-side environment variables.

export const config = {
  maxDuration: 30, // seconds
};

interface ChatRequestBody {
  lessonTitle?: string;
  competencies?: string[] | { code?: string; description?: string }[];
  chatHistory?: { role: string; content: string }[];
  studentMessage: string;
}

// Build strictly alternating Gemini conversation contents
function buildGeminiContents(
  chatHistory: { role: string; content: string }[] = [],
  studentMessage: string
) {
  const contents: { role: 'user' | 'model'; parts: { text: string }[] }[] = [];

  for (const msg of chatHistory) {
    if (!msg.content || typeof msg.content !== 'string') continue;
    const role: 'user' | 'model' =
      msg.role === 'assistant' || msg.role === 'model' || msg.role === 'ai'
        ? 'model'
        : 'user';

    // Gemini API requires first message to be from 'user'
    if (contents.length === 0 && role === 'model') {
      continue;
    }

    const last = contents[contents.length - 1];
    if (last && last.role === role) {
      last.parts[0].text += `\n${msg.content}`;
    } else {
      contents.push({
        role,
        parts: [{ text: msg.content }],
      });
    }
  }

  // Append current student message
  if (studentMessage) {
    const last = contents[contents.length - 1];
    if (last && last.role === 'user') {
      last.parts[0].text += `\n${studentMessage}`;
    } else {
      contents.push({
        role: 'user',
        parts: [{ text: studentMessage }],
      });
    }
  }

  return contents;
}

// Call Google Gemini REST API with fallback models
async function callGemini(apiKey: string, payload: any) {
  const models = ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-2.5-flash'];
  let lastError: any = null;

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error?.message ||
            `HTTP ${response.status}: ${response.statusText}`
        );
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        return { text, model };
      }
    } catch (err: any) {
      lastError = err;
    }
  }

  throw lastError || new Error('Không thể kết nối đến Gemini AI');
}

// Core processing logic
export async function processSocraticChat(body: ChatRequestBody, apiKey: string) {
  const { lessonTitle, competencies, chatHistory = [], studentMessage } = body;

  if (!studentMessage || typeof studentMessage !== 'string' || !studentMessage.trim()) {
    throw new Error('Thiếu nội dung câu hỏi của học sinh (studentMessage)');
  }

  // Format competencies
  const formattedCompetencies = Array.isArray(competencies)
    ? competencies
        .map((c, i) =>
          typeof c === 'string'
            ? `${i + 1}. ${c}`
            : `${i + 1}. [${c.code || 'NL'}] ${c.description || ''}`
        )
        .join('\n')
    : 'Nắm vững kiến thức trọng tâm và biết vận dụng giải bài tập.';

  // Pedagogical System Instructions for Gemini
  const systemPrompt = `Bạn là Thầy/Cô gia sư AI Socratic môn Toán lớp 7 theo bộ sách giáo khoa "Kết nối tri thức với cuộc sống" (Chương trình GDPT 2018).
Học sinh của bạn đang học bài: "${lessonTitle || 'Toán 7'}".
Yêu cầu cần đạt (Năng lực bài học):
${formattedCompetencies}

NGUYÊN TẮC SƯ PHẠM SOCRATIC BẮT BUỘC:
1. KIÊN NHẪN GỢI MỞ - TUYỆT ĐỐI KHÔNG GIẢI HỘ HAY ĐƯA NGAY ĐÁP ÁN:
   - Dù học sinh có nài nỉ xin đáp án hoặc nhờ giải hộ, hãy khích lệ nhẹ nhàng và đưa ra MỘT gợi ý nhỏ để em tự suy nghĩ.
2. QUY TRÌNH 3 BƯỚC PHẢN HỒI:
   - Bước 1: Khen ngợi nỗ lực hoặc chỉ ra điểm hợp lý trong suy nghĩ/câu trả lời của học sinh.
   - Bước 2: Nêu ngắn gọn một nhận xét hoặc liên hệ với kiến thức cốt lõi của bài học.
   - Bước 3: Đặt DUY NHẤT MỘT câu hỏi gợi ý bước tiếp theo để học sinh tự tư duy (kết thúc bằng dấu ?).
3. ĐỊNH DẠNG CÔNG THỨC TOÁN HỌC BẮT BUỘC (KATEX):
   - MỌI công thức toán, phân số, phương trình, số mũ, biến số BẮT BUỘC phải đặt trong cặp dấu đô la $...$ hoặc $$...$$.
   - Ví dụ chuẩn: "$x = \\frac{a}{b}$", "$b \\neq 0$", "$(-2)^3 = -8$", "$\\Delta ABC$".
   - Tuyệt đối không viết kí hiệu toán học trần trụi ngoài dấu $.
4. PHONG CÁCH GIAO TIẾP:
   - Thân thiện, khích lệ, dùng đại từ xưng hô "thầy/cô" và "em".
   - Ngắn gọn, súc tích (khoảng 3 - 5 câu), không viết tràn lan dài dòng.`;

  const geminiContents = buildGeminiContents(chatHistory, studentMessage.trim());

  const payload = {
    system_instruction: {
      parts: [{ text: systemPrompt }],
    },
    contents: geminiContents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 800,
      topP: 0.95,
    },
  };

  const { text: reply, model } = await callGemini(apiKey, payload);

  return {
    reply,
    model,
    hintLevel: 2,
    timestamp: new Date().toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
    }),
  };
}

// Universal Serverless Handler (Supports both Vercel Node.js and Edge runtimes)
export default async function handler(req: any, res?: any) {
  // Edge runtime handler
  if (typeof Request !== 'undefined' && req instanceof Request) {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const body = await req.json();
      const result = await processSocraticChat(body, apiKey);
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: err.message || 'Internal server error' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  }

  // Node.js serverless handler
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const result = await processSocraticChat(body, apiKey);
    return res.status(200).json(result);
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
