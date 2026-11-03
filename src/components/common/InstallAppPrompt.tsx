import React, { useState, useEffect } from 'react';
import { Smartphone, Download, X, Share, PlusSquare } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const InstallAppPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [showIOSTooltip, setShowIOSTooltip] = useState<boolean>(false);

  useEffect(() => {
    // 1. Detect if running in standalone mode (already installed)
    const checkStandalone = () => {
      const isStandaloneMode =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true ||
        document.referrer.includes('android-app://');
      setIsInstalled(Boolean(isStandaloneMode));
    };
    checkStandalone();

    // 2. Check dismissal in session
    const dismissed = sessionStorage.getItem('hoccungbo_install_dismissed');
    if (dismissed) {
      setIsDismissed(true);
    }

    // 3. Detect iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isAppleDevice);

    // 4. Capture beforeinstallprompt for Android/Chrome
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for appinstalled
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSTooltip(true);
      return;
    }

    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      // Fallback instruction
      setShowIOSTooltip(true);
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('hoccungbo_install_dismissed', 'true');
  };

  // If already installed or dismissed, do not render banner
  if (isInstalled || isDismissed) {
    return null;
  }

  return (
    <>
      {/* Floating Bottom Install Banner */}
      <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-slideUp">
        <div className="bg-slate-900/95 backdrop-blur-md text-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-slate-700/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-inner">
              <Smartphone className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xs sm:text-sm text-white">
                  Cài đặt Học Cùng Bố
                </span>
                <span className="text-[10px] bg-emerald-500 text-slate-950 font-bold px-1.5 py-0.2 rounded">
                  PWA
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                Thêm về màn hình chính để học nhanh mỗi ngày, dùng offline
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleInstallClick}
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Cài đặt</span>
            </button>
            <button
              onClick={handleDismiss}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Đóng thông báo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* iOS / General Safari Install Tooltip Modal */}
      {showIOSTooltip && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-end sm:items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-sm w-full p-5 sm:p-6 shadow-2xl border border-slate-200 space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  📲
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Cài đặt trên {isIOS ? 'iPhone / iPad' : 'Trình duyệt'}
                </h4>
              </div>
              <button
                onClick={() => setShowIOSTooltip(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Chỉ mất 5 giây để đưa ứng dụng ra màn hình chính như một app bản địa:
            </p>

            <div className="space-y-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <p>
                  Bấm nút <strong>Chia sẻ</strong> (biểu tượng <Share className="w-3.5 h-3.5 inline text-indigo-600 mx-0.5" /> ở thanh công cụ dưới Safari hoặc menu ⋮ trên Chrome).
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <p>
                  Cuộn xuống và chọn <strong>"Thêm vào Màn hình chính"</strong> (<PlusSquare className="w-3.5 h-3.5 inline text-emerald-600 mx-0.5" /> Add to Home Screen).
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <p>
                  Bấm <strong>"Thêm"</strong> (Add) ở góc trên bên phải để hoàn tất!
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowIOSTooltip(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}
    </>
  );
};
