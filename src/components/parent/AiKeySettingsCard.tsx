import React, { useState, useEffect } from 'react';
import {
  getCustomApiKey,
  setCustomApiKey,
  removeCustomApiKey,
  testGeminiApiKey,
  KeyTestResult
} from '../../services/aiService';
import {
  KeyRound,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ExternalLink,
  Save,
  Trash2,
  Activity,
  ShieldCheck
} from 'lucide-react';

export const AiKeySettingsCard: React.FC = () => {
  const [apiKeyInput, setApiKeyInput] = useState<string>('');
  const [showKey, setShowKey] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<KeyTestResult | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Initialize from localStorage on mount
  useEffect(() => {
    const saved = getCustomApiKey();
    if (saved) {
      setApiKeyInput(saved);
      setIsSaved(true);
    }
  }, []);

  const handleSave = () => {
    const clean = apiKeyInput.trim();
    if (!clean) {
      setFeedbackMsg({ text: 'Vui lòng nhập API Key trước khi lưu.', type: 'error' });
      return;
    }
    setCustomApiKey(clean);
    setIsSaved(true);
    setFeedbackMsg({ text: 'Đã lưu API Key cá nhân thành công!', type: 'success' });
    setTestResult(null);
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  const handleClear = () => {
    removeCustomApiKey();
    setApiKeyInput('');
    setIsSaved(false);
    setTestResult(null);
    setFeedbackMsg({ text: 'Đã xóa Key cá nhân. Hệ thống chuyển về máy chủ mặc định.', type: 'info' });
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  const handleTestKey = async () => {
    const keyToTest = apiKeyInput.trim();
    if (!keyToTest) {
      setFeedbackMsg({ text: 'Vui lòng nhập mã API Key để kiểm tra.', type: 'error' });
      return;
    }

    setIsTesting(true);
    setTestResult(null);
    setFeedbackMsg(null);

    const result = await testGeminiApiKey(keyToTest);
    setIsTesting(false);
    setTestResult(result);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xs space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center shrink-0">
            <KeyRound className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                ⚙️ Cài đặt Trợ lý AI (Gemini API)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Cơ chế Hybrid BYOK: Mang API Key cá nhân của gia đình hoặc dùng máy chủ mặc định
            </p>
          </div>
        </div>

        {/* Status Indicator Badge */}
        <div className="self-start sm:self-auto">
          {isSaved ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Đang dùng Key cá nhân của gia đình</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span>Đang dùng máy chủ mặc định / Chế độ mẫu</span>
            </span>
          )}
        </div>
      </div>

      {/* Input Field Area */}
      <div className="space-y-3">
        <label className="block text-xs font-bold text-slate-700">
          Google Gemini API Key:
        </label>
        <div className="relative flex items-center">
          <input
            type={showKey ? 'text' : 'password'}
            value={apiKeyInput}
            onChange={e => {
              setApiKeyInput(e.target.value);
              setTestResult(null);
            }}
            placeholder="AIzaSy... (Dán mã Gemini API Key vào đây)"
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-4 pr-12 py-3 text-xs sm:text-sm font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
          />
          <button
            type="button"
            onClick={() => setShowKey(!showKey)}
            className="absolute right-3.5 text-slate-400 hover:text-slate-700 transition-colors p-1"
            title={showKey ? 'Ẩn Key' : 'Hiện Key'}
          >
            {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {/* Feedback message banner if any */}
        {feedbackMsg && (
          <div
            className={`p-3 rounded-xl text-xs flex items-center gap-2 animate-fadeIn ${
              feedbackMsg.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : feedbackMsg.type === 'error'
                ? 'bg-rose-50 text-rose-800 border border-rose-200'
                : 'bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            {feedbackMsg.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
            {feedbackMsg.type === 'error' && <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />}
            <span>{feedbackMsg.text}</span>
          </div>
        )}

        {/* Test Result Banner */}
        {testResult && (
          <div
            className={`p-3.5 rounded-2xl text-xs flex items-start gap-2.5 animate-fadeIn border ${
              testResult.success
                ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                : 'bg-rose-50 text-rose-900 border-rose-200'
            }`}
          >
            {testResult.success ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-bold">{testResult.message}</p>
              {testResult.success && (
                <p className="text-[11px] text-emerald-700 mt-0.5">
                  Mô hình hoạt động: <strong>{testResult.model}</strong>. Trợ lý Socratic trong phòng học của con sẽ phản hồi trực tiếp bằng Key này.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs shadow-xs transition-all"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Lưu Key</span>
          </button>

          <button
            onClick={handleTestKey}
            disabled={isTesting || !apiKeyInput.trim()}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 active:scale-95 text-white font-bold text-xs shadow-xs transition-all"
          >
            <Activity className={`w-3.5 h-3.5 ${isTesting ? 'animate-spin' : ''}`} />
            <span>{isTesting ? 'Đang kiểm tra...' : 'Kiểm tra kết nối'}</span>
          </button>

          {isSaved && (
            <button
              onClick={handleClear}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs border border-rose-200 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Xóa Key</span>
            </button>
          )}
        </div>
      </div>

      {/* Helper Note & 3-Step Guide */}
      <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-3 text-xs text-slate-700">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="font-bold text-slate-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Hướng dẫn 3 bước lấy Gemini API Key miễn phí:</span>
          </span>
          <a
            href="https://aistudio.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-600 hover:text-indigo-800 underline flex items-center gap-1"
          >
            <span>Mở Google AI Studio</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
          <div className="bg-white p-3 rounded-xl border border-slate-200/70 space-y-1">
            <span className="font-extrabold text-indigo-600">Bước 1:</span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Truy cập <strong>Google AI Studio</strong> và đăng nhập bằng tài khoản Gmail của bố/mẹ.
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200/70 space-y-1">
            <span className="font-extrabold text-indigo-600">Bước 2:</span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Bấm nút <strong>"Get API key"</strong> hoặc <strong>"Create API key"</strong> (hoàn toàn miễn phí, hạn ngạch cao).
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200/70 space-y-1">
            <span className="font-extrabold text-indigo-600">Bước 3:</span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Sao chép mã Key và dán vào ô bên trên $\rightarrow$ Bấm <strong>"Kiểm tra kết nối"</strong> rồi <strong>"Lưu Key"</strong>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            <strong>Bảo mật:</strong> API Key được lưu trực tiếp trên trình duyệt của máy tính gia đình (<code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px]">localStorage</code>), tuyệt đối không gửi về máy chủ thứ ba.
          </span>
        </div>
      </div>
    </div>
  );
};
