import React, { useState, useRef, useEffect } from 'react';
import { Math7Lesson } from '../../types/curriculum';
import { MathText } from '../common/MathText';
import { SocraticTutorEngine } from '../../services/socraticTutor';
import { Bot, User, Send, RefreshCw, Lightbulb, ChevronRight, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  formula?: string;
  timestamp: string;
  hintLevel?: 1 | 2 | 3;
  modelBadge?: string;
  isLocalFallback?: boolean;
}

interface SocraticTutorProps {
  lesson: Math7Lesson;
}

export const SocraticTutor: React.FC<SocraticTutorProps> = ({ lesson }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Chào em! Thầy/cô là Gia sư Socratic môn Toán 7. 🎯\nThầy/cô ở đây để đồng hành cùng em khám phá bài **"${lesson.title}"**.\n\nThầy/cô sẽ không giải hộ hay đọc ngay đáp án, mà sẽ gợi mở từng bước để em tự tìm ra chân lý toán học! Em đang băn khoăn ở phần nào?`,
      formula: '\\mathbb{Q} = \\frac{a}{b} \\quad (b \\neq 0)',
      timestamp: 'Vừa xong',
      hintLevel: 1,
      modelBadge: 'Socratic AI'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const presetChips = [
    'Thầy/Cô gợi ý bước tiếp theo cho em',
    'Vì sao mẫu số bắt buộc phải khác 0?',
    'Làm sao để so sánh hai số hữu tỉ âm?',
    'Thử thách em một câu hỏi tương tự!'
  ];

  // Graceful fallback to local Socratic heuristics
  const triggerLocalFallback = (query: string) => {
    const fallback = SocraticTutorEngine.generateResponse(query, lesson as any);
    const aiMsg: ChatMessage = {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: fallback.message,
      formula: fallback.mathFormula,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      hintLevel: fallback.hintLevel,
      modelBadge: 'Gợi ý chuẩn SGK',
      isLocalFallback: true
    };
    setMessages(prev => [...prev, aiMsg]);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    // Update conversation state with user message
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputText('');
    setIsTyping(true);

    try {
      // Send message to secure serverless endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonTitle: lesson.title,
          competencies: lesson.learningTargets.map(t => ({
            code: t.code,
            description: t.description
          })),
          chatHistory: updatedMessages.map(m => ({
            role: m.sender === 'ai' ? 'assistant' : 'user',
            content: m.text
          })),
          studentMessage: query.trim()
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply) {
          const aiMsg: ChatMessage = {
            id: `ai-${Date.now()}`,
            sender: 'ai',
            text: data.reply,
            timestamp: data.timestamp || new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
            hintLevel: data.hintLevel || 2,
            modelBadge: data.model ? `Gemini (${data.model.replace('gemini-', '')})` : 'Gemini Live'
          };
          setMessages(prev => [...prev, aiMsg]);
          return;
        }
      }

      // If server returned non-200 or missing reply (e.g. API key not set or quota limit)
      triggerLocalFallback(query);
    } catch {
      // Seamless network fallback
      triggerLocalFallback(query);
    } finally {
      setIsTyping(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'ai',
        text: `Chào em! Thầy/cô đã sẵn sàng tiếp tục đồng hành cùng em trong bài **"${lesson.title}"**.\n\nHãy đặt bất kỳ câu hỏi nào em muốn, hoặc bấm vào các nút gợi ý bên dưới nhé!`,
        timestamp: 'Vừa xong',
        hintLevel: 1,
        modelBadge: 'Socratic AI'
      }
    ]);
  };

  return (
    <div className="flex flex-col h-[540px] bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
      {/* Tutor Header */}
      <div className="px-5 py-3.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 shadow-xs">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-bold text-xs sm:text-sm">Trợ Lý Socratic AI</h4>
              <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-400/25 px-2 py-0.5 rounded-full font-semibold text-emerald-100 border border-emerald-300/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                <span>Live Socratic</span>
              </span>
            </div>
            <p className="text-[10px] text-emerald-100">Kiên nhẫn gợi mở • Chuẩn SGK Kết nối tri thức</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="text-emerald-100 hover:text-white p-1.5 rounded-lg hover:bg-white/10 text-xs flex items-center gap-1 transition-colors"
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
                <div className="flex items-center justify-between text-[10px] opacity-75 border-b border-current/10 pb-1 gap-2">
                  <span className="font-semibold">{isAi ? 'Thầy/Cô Socratic' : 'Em'}</span>
                  <div className="flex items-center gap-1.5">
                    {msg.modelBadge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-mono">
                        {msg.modelBadge}
                      </span>
                    )}
                    <span>{msg.timestamp}</span>
                  </div>
                </div>

                {/* KaTeX Markdown Text */}
                <div className="text-xs leading-relaxed whitespace-pre-line">
                  <MathText>{msg.text}</MathText>
                </div>

                {/* Centered Formula Display if provided */}
                {msg.formula && isAi && (
                  <div className="bg-slate-900 text-emerald-300 rounded-xl p-2.5 text-center text-xs font-mono shadow-xs">
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

        {/* Animated Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2.5 text-xs text-slate-600 bg-white border border-slate-200/90 p-3 rounded-2xl w-fit shadow-xs animate-fadeIn">
            <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
            </div>
            <div className="flex items-center gap-1.5">
              <span>Thầy/Cô đang suy nghĩ câu hỏi gợi mở...</span>
              <div className="flex gap-1 items-center ml-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
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
          disabled={isTyping}
          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 active:scale-95"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Hỏi</span>
        </button>
      </form>
    </div>
  );
};
