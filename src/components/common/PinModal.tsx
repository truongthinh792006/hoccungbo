import React, { useState, useEffect, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Lock, X, Delete, Check } from 'lucide-react';

export const PinModal: React.FC = () => {
  const { isPinModalOpen, closePinModal, verifyPin } = useApp();
  const [pin, setPin] = useState('');
  const [errorShake, setErrorShake] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const submitCheck = useCallback((pinCandidate: string) => {
    const ok = verifyPin(pinCandidate);
    if (!ok) {
      setErrorShake(true);
      setErrorMessage('Mã PIN không đúng. Vui lòng nhập: 1234');
      setTimeout(() => {
        setErrorShake(false);
        setPin('');
      }, 500);
    } else {
      setPin('');
      setErrorMessage('');
    }
  }, [verifyPin]);

  const handleKeyPress = (digit: string) => {
    if (pin.length < 4) {
      const nextPin = pin + digit;
      setPin(nextPin);
      setErrorMessage('');

      if (nextPin.length === 4) {
        submitCheck(nextPin);
      }
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
    setErrorMessage('');
  };

  const handleClose = () => {
    setPin('');
    setErrorMessage('');
    closePinModal();
  };

  const handleAutoFill = () => {
    setPin('1234');
    setErrorMessage('');
    submitCheck('1234');
  };

  // Keyboard navigation support
  useEffect(() => {
    if (!isPinModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        handleKeyPress(e.key);
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'Enter') {
        if (pin.length === 4) {
          submitCheck(pin);
        } else {
          // If empty and hit Enter, autofill 1234
          handleAutoFill();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPinModalOpen, pin, submitCheck]);

  if (!isPinModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div
        className={`bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 space-y-5 transition-transform ${
          errorShake ? 'animate-bounce text-rose-600' : ''
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center text-indigo-700">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Xác Nhận Phụ Huynh</h3>
              <p className="text-xs text-slate-500">Nhập mã PIN để mở Dashboard</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* PIN Dots Display */}
        <div className="py-2 text-center space-y-2">
          <div className="flex justify-center items-center gap-3">
            {[0, 1, 2, 3].map(index => {
              const filled = index < pin.length;
              return (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full border-2 transition-all ${
                    filled
                      ? 'bg-indigo-600 border-indigo-600 scale-110 shadow-sm'
                      : 'border-slate-300 bg-slate-100'
                  }`}
                />
              );
            })}
          </div>

          {errorMessage ? (
            <p className="text-xs text-rose-600 font-semibold mt-2">{errorMessage}</p>
          ) : (
            <div className="flex items-center justify-center gap-1.5 mt-2">
              <span className="text-xs text-slate-500">Mã PIN mặc định:</span>
              <button
                onClick={handleAutoFill}
                className="px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold font-mono text-xs hover:bg-indigo-100 transition-colors"
                title="Bấm để tự điền 1234"
              >
                1234
              </button>
            </div>
          )}
        </div>

        {/* Numeric Keypad */}
        <div className="grid grid-cols-3 gap-2.5 max-w-[260px] mx-auto pt-1">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(digit => (
            <button
              key={digit}
              onClick={() => handleKeyPress(digit)}
              className="h-12 rounded-2xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 font-bold text-lg text-slate-800 border border-slate-200/80 active:scale-95 transition-all shadow-sm"
            >
              {digit}
            </button>
          ))}
          <button
            onClick={handleAutoFill}
            className="h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-sm active:scale-95"
            title="Mở nhanh với mã 1234"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Mở (1234)</span>
          </button>
          <button
            onClick={() => handleKeyPress('0')}
            className="h-12 rounded-2xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 font-bold text-lg text-slate-800 border border-slate-200/80 active:scale-95 transition-all shadow-sm"
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className="h-12 rounded-2xl bg-slate-50 hover:bg-rose-50 hover:text-rose-600 text-slate-600 border border-slate-200/80 active:scale-95 transition-all shadow-sm flex items-center justify-center"
          >
            <Delete className="w-5 h-5" />
          </button>
        </div>

        {/* Footer Note */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Bảo mật chống xao nhãng cho học sinh (PIN: 1234)</span>
        </div>
      </div>
    </div>
  );
};
