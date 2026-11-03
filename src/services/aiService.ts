import { SocraticTutorEngine } from './socraticTutor';

export const CUSTOM_GEMINI_KEY_STORAGE = 'custom_gemini_api_key';

export interface SocraticChatParams {
  lessonTitle?: string;
  competencies?: { code?: string; description?: string }[] | string[];
  chatHistory?: { role: string; content: string }[];
  studentMessage: string;
}

export interface SocraticChatResult {
  reply: string;
  formula?: string;
  hintLevel?: 1 | 2 | 3;
  model: string;
  timestamp: string;
  source: 'byok' | 'server' | 'local';
}

export interface KeyTestResult {
  success: boolean;
  message: string;
  model?: string;
}

// Read custom API key from localStorage
export function getCustomApiKey(): string | null {
  if (typeof window === 'undefined') return null;
  const key = localStorage.getItem(CUSTOM_GEMINI_KEY_STORAGE);
  return key && key.trim().length > 0 ? key.trim() : null;
}

// Save custom API key
export function setCustomApiKey(key: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CUSTOM_GEMINI_KEY_STORAGE, key.trim());
}

// Remove custom API key
export function removeCustomApiKey(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CUSTOM_GEMINI_KEY_STORAGE);
}

// Test custom API Key by sending a ping prompt
export async function testGeminiApiKey(apiKey: string): Promise<KeyTestResult> {
  const cleanKey = apiKey.trim();
  if (!cleanKey) {
    return { success: false, message: 'Vui lòng nhập API Key trước khi kiểm tra.' };
  }

  const models = ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-2.5-flash'];
  let lastErrMsg = '';

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${cleanKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: 'Trả lời đúng 1 chữ: OK' }]
            }
          ],
          generationConfig: { maxOutputTokens: 10 }
        })
      });

      if (response.ok) {
        return {
          success: true,
          message: `Kết nối thành công tới Gemini AI (${model})!`,
          model
        };
      } else {
        const errorData = await response.json().catch(() => ({}));
        lastErrMsg = errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`;
      }
    } catch (err: any) {
      lastErrMsg = err.message || 'Lỗi mạng khi kết nối đến máy chủ Google';
    }
  }

  return {
    success: false,
    message: `Kiểm tra thất bại: ${lastErrMsg}`
  };
}

// Generate the pedagogical Socratic instructions
export function getPedagogicalSystemPrompt(
  lessonTitle?: string,
  competencies?: { code?: string; description?: string }[] | string[]
): string {
  const formattedCompetencies = Array.isArray(competencies)
    ? competencies
        .map((c, i) =>
          typeof c === 'string'
            ? `${i + 1}. ${c}`
            : `${i + 1}. [${c.code || 'NL'}] ${c.description || ''}`
        )
        .join('\n')
    : 'Nắm vững kiến thức trọng tâm và biết vận dụng giải bài tập.';

  return `Bạn là Thầy/Cô gia sư AI Socratic môn Toán lớp 7 theo bộ sách giáo khoa "Kết nối tri thức với cuộc sống" (Chương trình GDPT 2018).
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
}

// Convert history to Gemini contents structure
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

    if (contents.length === 0 && role === 'model') {
      continue;
    }

    const last = contents[contents.length - 1];
    if (last && last.role === role) {
      last.parts[0].text += `\n${msg.content}`;
    } else {
      contents.push({
        role,
        parts: [{ text: msg.content }]
      });
    }
  }

  if (studentMessage) {
    const last = contents[contents.length - 1];
    if (last && last.role === 'user') {
      last.parts[0].text += `\n${studentMessage}`;
    } else {
      contents.push({
        role: 'user',
        parts: [{ text: studentMessage }]
      });
    }
  }

  return contents;
}

// Unified client-side dispatcher: BYOK -> Serverless Proxy -> Local Socratic Engine
export async function askSocraticTutor(
  params: SocraticChatParams,
  lessonContext?: any
): Promise<SocraticChatResult> {
  const { lessonTitle, competencies, chatHistory = [], studentMessage } = params;
  const nowStr = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

  // 1. Check if custom Gemini API Key is present in localStorage (BYOK Mode)
  const customKey = getCustomApiKey();

  if (customKey) {
    const models = ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-2.5-flash'];
    const systemPrompt = getPedagogicalSystemPrompt(lessonTitle, competencies);
    const geminiContents = buildGeminiContents(chatHistory, studentMessage);

    const payload = {
      system_instruction: {
        parts: [{ text: systemPrompt }]
      },
      contents: geminiContents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 800,
        topP: 0.95
      }
    };

    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${customKey}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            return {
              reply: text,
              model: `Gemini (${model.replace('gemini-', '')} • Key cá nhân)`,
              hintLevel: 2,
              timestamp: nowStr,
              source: 'byok'
            };
          }
        }
      } catch (err) {
        console.warn(`BYOK direct call failed on ${model}, checking next...`, err);
      }
    }
  }

  // 2. Serverless Proxy Mode (/api/chat)
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(customKey ? { 'x-gemini-api-key': customKey } : {})
      },
      body: JSON.stringify({
        lessonTitle,
        competencies,
        chatHistory,
        studentMessage,
        customApiKey: customKey || undefined
      })
    });

    if (response.ok) {
      const data = await response.json();
      if (data.reply) {
        return {
          reply: data.reply,
          model: data.model ? `Gemini (${data.model.replace('gemini-', '')})` : 'Gemini Live',
          hintLevel: data.hintLevel || 2,
          timestamp: data.timestamp || nowStr,
          source: 'server'
        };
      }
    }
  } catch (err) {
    console.warn('Serverless proxy call failed, switching to local Socratic engine...', err);
  }

  // 3. Graceful Fallback: Local Socratic Engine
  const fallback = SocraticTutorEngine.generateResponse(studentMessage, lessonContext || { title: lessonTitle });
  return {
    reply: fallback.message,
    formula: fallback.mathFormula,
    hintLevel: fallback.hintLevel,
    model: 'Gợi ý chuẩn SGK',
    timestamp: nowStr,
    source: 'local'
  };
}
