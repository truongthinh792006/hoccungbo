import React, { useState, useEffect, useRef } from 'react';
import { Lesson } from '../../types/curriculum';
import { SocraticMessage } from '../../types/study';
import { SocraticTutorEngine } from '../../services/socraticTutor';
import { StorageService } from '../../services/storageService';
import { MathRenderer } from '../common/MathRenderer';
import { Send, Sparkles, Bot, User, RefreshCw, ChevronRight, Lightbulb } from 'lucide-react';

interface SocraticChatbotProps {
  lesson: Lesson;
}

export const SocraticChatbot: React.FC<SocraticChatbotProps> = ({ lesson }) => {
  const [messages, setMessages] = useState<SocraticMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hintTier, setHintTier] = useState<number>(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chat history or initialize with Socratic welcome
  useEffect(() => {
    const saved = StorageService.getChatHistory(lesson.id);
    if (saved && saved.length > 0) {
      setMessages(saved);
    } else {
      const welcome = SocraticTutorEngine.getInitialWelcomeMessage(lesson);
      setMessages([welcome]);
      StorageService.saveChatHistory(lesson.id, [welcome]);
    }
  }, [lesson.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: SocraticMessage = {
      id: `msg-${Date.now()}-user`,
      sender: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [...messages, userMsg];
    setMessages(updated);
    setInputText('');
    setIsTyping(true);

    // Simulate Socratic reasoning thought delay
    setTimeout(() => {
      const response = SocraticTutorEngine.generateResponse(query, lesson, hintTier);
      const assistantMsg: SocraticMessage = {
        id: `msg-${Date.now()}-assistant`,
        sender: 'assistant',
        content: response.message,
        mathFormula: response.mathFormula,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        hintLevel: response.hintLevel,
        suggestedAction: response.suggestedAction,
        quickReplies: response.quickReplies
      };

      const finalMessages = [...updated, assistantMsg];
      setMessages(finalMessages);
      StorageService.saveChatHistory(lesson.id, finalMessages);
      setIsTyping(false);
      setHintTier(prev => (prev >= 3 ? 1 : prev + 1));
    }, 600);
  };

  const handleResetChat = () => {
    const welcome = SocraticTutorEngine.getInitialWelcomeMessage(lesson);
    setMessages([welcome]);
    setHintTier(1);
    StorageService.saveChatHistory(lesson.id, [welcome]);
  };

  const handleRequestHint = () => {
    handleSendMessage('Thầy/cô ơi, hãy cho em thêm một gợi ý từng bước (bậc tiếp theo) nhé!');
  };

  return (
    <div className="flex flex-col h-[650px] bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 ring-2 ring-white/10">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-sm tracking-wide">Trợ Lý Socratic GDPT 2018</h4>
              <span className="text-[10px] font-semibold bg-emerald-400/20 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-300/20">
                Gợi Mở • Không Đưa Đáp Án Sẵn
              </span>
            </div>
            <p className="text-[11px] text-emerald-100">
              Học qua phản biện & Dẫn dắt từng bước suy luận
            </p>
          </div>
        </div>

        <button
          onClick={handleResetChat}
          title="Bắt đầu lại cuộc hội thoại"
          className="p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors text-xs flex items-center gap-1"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Làm mới</span>
        </button>
      </div>

      {/* Socratic Pedagogy Banner */}
      <div className="bg-amber-50/80 border-b border-amber-200/60 px-4 py-2 text-[11px] text-amber-900 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>
            <strong>Nguyên tắc Socratic:</strong> Thầy/cô đặt câu hỏi định hướng để em tự làm chủ lời giải. Hãy mạnh dạn thử nghiệm!
          </span>
        </div>
        <button
          onClick={handleRequestHint}
          className="text-xs font-bold text-amber-800 underline hover:text-amber-950 shrink-0 ml-2"
        >
          Xin gợi ý bậc {hintTier}
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50">
        {messages.map((msg) => {
          const isAssistant = msg.sender === 'assistant';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isAssistant ? 'justify-start' : 'justify-end'}`}
            >
              {isAssistant && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-sm space-y-2.5 ${
                  isAssistant
                    ? 'bg-white text-slate-800 border border-slate-200/80'
                    : 'bg-emerald-600 text-white shadow-emerald-500/10'
                }`}
              >
                {/* Sender badge & timestamp */}
                <div className="flex items-center justify-between gap-4 text-[10px] font-semibold opacity-70 border-b border-slate-100 pb-1">
                  <span>{isAssistant ? 'Gia sư Socratic' : 'Minh Quân'}</span>
                  <span>{msg.timestamp}</span>
                </div>

                {/* Text Content */}
                <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  <MathRenderer content={msg.content} />
                </div>

                {/* Math Formula Highlight in Assistant response */}
                {msg.mathFormula && isAssistant && (
                  <div className="bg-slate-900 text-emerald-300 rounded-xl p-2.5 text-center text-xs sm:text-sm font-mono overflow-x-auto shadow-inner">
                    <MathRenderer math={msg.mathFormula} block={true} />
                  </div>
                )}

                {/* Hint Tier Tag */}
                {msg.hintLevel && isAssistant && (
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <Sparkles className="w-3 h-3 text-emerald-500" />
                    <span>Mức gợi ý {msg.hintLevel}/3: {msg.hintLevel === 1 ? 'Định hướng' : msg.hintLevel === 2 ? 'Gợi ý quy tắc' : 'Chi tiết suy luận'}</span>
                  </div>
                )}

                {/* Quick Reply Chips if assistant provided them */}
                {msg.quickReplies && isAssistant && (
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {msg.quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(reply)}
                        className="text-[11px] bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors flex items-center gap-1"
                      >
                        <span>{reply}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {!isAssistant && (
                <div className="w-8 h-8 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Thầy/cô đang suy nghĩ câu hỏi gợi ý phù hợp...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box & Quick Questions */}
      <div className="p-3 sm:p-4 bg-white border-t border-slate-200/90 space-y-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Hỏi thầy/cô về một bước chưa hiểu, ví dụ: 'So sánh -3/4 và -5/6 thế nào?'..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Gửi câu hỏi</span>
          </button>
        </form>
      </div>
    </div>
  );
};
