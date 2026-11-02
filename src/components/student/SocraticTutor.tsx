import React, { useState, useRef, useEffect } from 'react';
import { Math7Lesson } from '../../types/curriculum';
import { MathText } from '../common/MathText';
import { Bot, User, Send, RefreshCw, Lightbulb, ChevronRight } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  formula?: string;
  timestamp: string;
  hintLevel?: 1 | 2 | 3;
}

interface SocraticTutorProps {
  lesson: Math7Lesson;
}

export const SocraticTutor: React.FC<SocraticTutorProps> = ({ lesson }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Chào em! Thầy/cô là Gia sư Socratic môn Toán 7. 🎯\nThầy/cô ở đây để đồng hành cùng em khám phá **"${lesson.title}"**.\n\nThầy/cô sẽ không làm hộ hay đưa đáp án giải sẵn, mà sẽ đặt các câu hỏi định hướng để chính em tự suy luận ra kết quả. Em đang băn khoăn ở phần nào?`,
      formula: '\\mathbb{Q} = \\frac{a}{b} \\quad (b \\neq 0)',
      timestamp: 'Vừa xong',
      hintLevel: 1
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const presetChips = [
    'Gợi ý bước tiếp theo',
    'Giải thích vì sao mẫu số khác 0',
    'Thử giải câu tương tự',
    'Phân số âm trên trục số'
  ];

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = '';
      let replyFormula = '';
      let hintLevel: 1 | 2 | 3 = 1;

      const q = query.toLowerCase();

      if (q.includes('mẫu số khác 0') || q.includes('mẫu') || q.includes('5/0')) {
        replyText = `Câu hỏi then chốt của bài học! 💡\n\nTrong toán học từ tiểu học đến nay, em đã từng gặp phép tính chia cho số 0 bao giờ chưa? Nếu có 5 cái kẹo mà chia cho 0 bạn, liệu việc chia đó có thực hiện được không?\n\nChính vì phép chia cho 0 không xác định, nên phân số $\\frac{a}{b}$ bắt buộc mẫu số $b$ phải khác 0!`;
        replyFormula = 'b \\neq 0 \\implies \\frac{5}{0} \\notin \\mathbb{Q}';
        hintLevel = 1;
      } else if (q.includes('gợi ý bước tiếp theo') || q.includes('bước tiếp theo')) {
        replyText = `Thầy/cô gợi ý cho em nhé:\n\n1. Bước 1: Hãy xác định xem các số cần so sánh hoặc tính toán đã ở cùng dạng phân số có mẫu dương chưa.\n2. Bước 2: Với hai số hữu tỉ âm, số nào có khoảng cách đến điểm 0 ngắn hơn thì số đó lớn hơn! Em thử kiểm tra lại nháp xem sao nhé?`;
        replyFormula = '-9 > -10 \\implies -\\frac{9}{12} > -\\frac{10}{12}';
        hintLevel = 2;
      } else if (q.includes('tương tự') || q.includes('thử giải')) {
        replyText = `Thầy/cô thử thách em một câu hỏi tương tự để kiểm tra độ hiểu sâu nhé:\n\nTrong các số sau: $-1\\frac{2}{5}, \\; 0,75, \\; \\frac{-7}{0}, \\; -4$. Số nào vi phạm định nghĩa số hữu tỉ?`;
        replyFormula = '\\text{Xét các mẫu số: } 5, \\; 100, \\; 0, \\; 1';
        hintLevel = 1;
      } else if (q.includes('trục số') || q.includes('phân số âm')) {
        replyText = `Rất trực quan! Trên trục số nằm ngang:\n- Điểm gốc là số 0.\n- Tất cả các số âm luôn nằm ở bên **trái** điểm 0.\n- Hai số đối nhau sẽ nằm đối xứng nhau qua gốc 0 và có khoảng cách bằng nhau. Ví dụ $-\\frac{3}{4}$ và $\\frac{3}{4}$.`;
        replyFormula = '-\\frac{3}{4} \\text{ (bên trái)} \\longleftrightarrow \\frac{3}{4} \\text{ (bên phải)}';
        hintLevel = 2;
      } else {
        replyText = `Ý kiến của em rất đáng chú ý! Để cùng làm sáng tỏ vấn đề này:\n\nEm đã thử nháp bước đầu tiên chưa? Hãy chia sẻ cách em đang bắt đầu suy nghĩ, thầy/cô sẽ chỉ ra điểm then chốt cho em nhé!`;
        hintLevel = 2;
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: replyText,
        formula: replyFormula,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        hintLevel
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'ai',
        text: `Chào em! Thầy/cô đã sẵn sàng. Em hãy đặt câu hỏi hoặc bấm vào các nút gợi ý bên dưới để bắt đầu nhé!`,
        timestamp: 'Vừa xong',
        hintLevel: 1
      }
    ]);
  };

  return (
    <div className="flex flex-col h-[520px] bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
      {/* Tutor Header */}
      <div className="px-5 py-3.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-bold text-xs sm:text-sm">Trợ Lý Socratic AI</h4>
              <span className="text-[10px] bg-emerald-400/25 px-1.5 py-0.2 rounded font-semibold text-emerald-100 border border-emerald-300/30">
                Gợi mở
              </span>
            </div>
            <p className="text-[10px] text-emerald-100">Kiên nhẫn dẫn dắt • Không giải hộ</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="text-emerald-100 hover:text-white p-1 rounded-lg hover:bg-white/10 text-xs flex items-center gap-1"
          title="Làm mới cuộc trò chuyện"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px]">Làm mới</span>
        </button>
      </div>

      {/* Preset Chips Bar */}
      <div className="bg-slate-50 border-b border-slate-200/70 p-2.5 overflow-x-auto flex gap-1.5 no-scrollbar">
        {presetChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(chip)}
            className="text-[11px] font-semibold bg-white hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs whitespace-nowrap transition-colors flex items-center gap-1"
          >
            <span>{chip}</span>
            <ChevronRight className="w-2.5 h-2.5 text-slate-400" />
          </button>
        ))}
      </div>

      {/* Message Stream */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/40">
        {messages.map(msg => {
          const isAi = msg.sender === 'ai';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${isAi ? 'justify-start' : 'justify-end'}`}
            >
              {isAi && (
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 shadow-xs space-y-2 ${
                  isAi
                    ? 'bg-white text-slate-800 border border-slate-200/80'
                    : 'bg-emerald-600 text-white'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] opacity-70 border-b border-current/10 pb-1">
                  <span>{isAi ? 'Thầy/Cô Socratic' : 'Em'}</span>
                  <span>{msg.timestamp}</span>
                </div>

                <div className="text-xs leading-relaxed whitespace-pre-line">
                  <MathText>{msg.text}</MathText>
                </div>

                {msg.formula && isAi && (
                  <div className="bg-slate-900 text-emerald-300 rounded-xl p-2 text-center text-xs font-mono">
                    <MathText formula={msg.formula} block={true} />
                  </div>
                )}

                {msg.hintLevel && isAi && (
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <Lightbulb className="w-3 h-3 text-emerald-600" />
                    <span>Mức gợi ý {msg.hintLevel}/3</span>
                  </div>
                )}
              </div>

              {!isAi && (
                <div className="w-7 h-7 rounded-lg bg-slate-700 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-500 bg-white border border-slate-200 p-2.5 rounded-2xl w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Thầy/cô đang suy nghĩ gợi ý phản biện...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 bg-white border-t border-slate-200/80 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Nhập câu hỏi của em (ví dụ: 'Tại sao số 0 là số hữu tỉ?')..."
          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Hỏi</span>
        </button>
      </form>
    </div>
  );
};
