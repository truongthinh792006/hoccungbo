import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { 
  Sparkles, 
  Volume2, 
  ArrowLeft, 
  BookOpen, 
  Layers, 
  Flame, 
  Award, 
  CheckCircle2, 
  Play
} from 'lucide-react';

// Vocabulary preview for Unit 1: Hobbies
interface VocabItem {
  word: string;
  type: string;
  ipa: string;
  meaning: string;
  example: string;
}

const UNIT1_VOCAB_PREVIEW: VocabItem[] = [
  { word: 'hobby', type: 'n', ipa: '/ˈhɒbi/', meaning: 'sở thích', example: 'My favourite hobby is reading books.' },
  { word: 'origami', type: 'n', ipa: '/ˌɒrɪˈɡɑːmi/', meaning: 'nghệ thuật gấp giấy Nhật Bản', example: 'She likes making origami paper birds.' },
  { word: 'horse riding', type: 'n', ipa: '/ˈhɔːs raɪdɪŋ/', meaning: 'cưỡi ngựa', example: 'Horse riding is an exciting outdoor activity.' },
  { word: 'gardening', type: 'n', ipa: '/ˈɡɑːdnɪŋ/', meaning: 'làm vườn', example: 'My grandparents love gardening on weekends.' },
  { word: 'collecting coins', type: 'phr', ipa: '/kəˈlektɪŋ kɔɪnz/', meaning: 'sưu tầm tiền xu', example: 'He has been collecting coins for 3 years.' },
  { word: 'dollhouse', type: 'n', ipa: '/ˈdɒlhaʊs/', meaning: 'nhà búp bê', example: 'She made a tiny wooden dollhouse with her dad.' },
  { word: 'fragile', type: 'adj', ipa: '/ˈfrædʒaɪl/', meaning: 'dễ vỡ, mỏng manh', example: 'Be careful! Eggshell carvings are very fragile.' },
  { word: 'carve', type: 'v', ipa: '/kɑːv/', meaning: 'chạm khắc', example: 'My uncle can carve beautiful flowers from wood.' }
];

const ENGLISH_UNITS = [
  { id: 'unit-01', number: 1, title: 'Hobbies', viTitle: 'Sở thích', status: 'ready', badge: 'Sẵn sàng học' },
  { id: 'unit-02', number: 2, title: 'Healthy Living', viTitle: 'Lối sống lành mạnh', status: 'locked', badge: 'Kế tiếp' },
  { id: 'unit-03', number: 3, title: 'Community Service', viTitle: 'Hoạt động cộng đồng', status: 'locked', badge: 'Kế tiếp' },
  { id: 'unit-04', number: 4, title: 'Music and Arts', viTitle: 'Âm nhạc & Nghệ thuật', status: 'locked', badge: 'Kế tiếp' },
  { id: 'unit-05', number: 5, title: 'Food and Drink', viTitle: 'Ẩm thực & Thức uống', status: 'locked', badge: 'Kế tiếp' },
  { id: 'unit-06', number: 6, title: 'A Visit to a School', viTitle: 'Thăm một ngôi trường', status: 'locked', badge: 'Học kì 1' },
];

export const English7StudyView: React.FC = () => {
  const { setCurrentSubject, openSubjectHub, xp, streak } = useApp();
  const [activeTab, setActiveTab] = useState<'vocab' | 'grammar' | 'pronunciation'>('vocab');
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Quick Text-to-Speech using native Web Speech API
  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const currentWord = UNIT1_VOCAB_PREVIEW[selectedWordIndex];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner: English 7 Global Success */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 p-6 sm:p-7 text-white shadow-lg shadow-indigo-950/10">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white">
                <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                <span>Tiếng Anh 7 • Global Success</span>
              </span>
              <span className="text-xs bg-indigo-500/60 px-2.5 py-0.5 rounded-full font-semibold">
                NXB Giáo dục & Pearson
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black tracking-tight">
              Unit 1: Hobbies (Sở Thích)
            </h1>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              Khởi động làm chủ từ vựng chỉ hoạt động giải trí, phân biệt cặp âm <span className="font-mono bg-white/20 px-1 rounded">/ə/</span> và <span className="font-mono bg-white/20 px-1 rounded">/ɜ:/</span>, cùng cấu trúc câu với động từ chỉ sự yêu thích (like, love, enjoy + V-ing).
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setCurrentSubject('toan')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 backdrop-blur-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Về môn Toán 7</span>
            </button>

            <button
              onClick={openSubjectHub}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-indigo-900 text-xs font-bold shadow-md hover:bg-indigo-50 transition-all"
            >
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Bàn học 4 môn</span>
            </button>
          </div>
        </div>
      </div>

      {/* Units Horizontal Selector */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-3 shadow-xs">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-extrabold text-slate-800 tracking-tight flex items-center gap-1.5">
            <span>Danh mục 12 Units Tiếng Anh 7</span>
          </span>
          <span className="text-[11px] text-slate-500">
            Học kỳ I & II
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {ENGLISH_UNITS.map((u) => {
            const isCurrent = u.number === 1;
            return (
              <button
                key={u.id}
                onClick={() => {
                  if (u.number !== 1) {
                    alert(`Unit ${u.number}: ${u.title} đang được hoàn thiện bài tập! Hiện tại con đang học Unit 1: Hobbies.`);
                  }
                }}
                className={`px-3 py-2 rounded-xl text-left shrink-0 transition-all flex flex-col min-w-[150px] border ${
                  isCurrent
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-bold ${isCurrent ? 'text-indigo-200' : 'text-slate-400'}`}>
                    UNIT {u.number}
                  </span>
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                    isCurrent ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {u.badge}
                  </span>
                </div>
                <span className="text-xs font-bold truncate mt-0.5">{u.title}</span>
                <span className={`text-[11px] truncate ${isCurrent ? 'text-indigo-100' : 'text-slate-500'}`}>
                  {u.viTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Learning Sections: Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Vocabulary & Grammar & Pronunciation */}
        <div className="lg:col-span-2 space-y-4">
          {/* Section Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <button
              onClick={() => setActiveTab('vocab')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'vocab'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              1. Từ Vựng & Flashcard ({UNIT1_VOCAB_PREVIEW.length} từ)
            </button>
            <button
              onClick={() => setActiveTab('pronunciation')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'pronunciation'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              2. Phát Âm: /ə/ & /ɜ:/
            </button>
            <button
              onClick={() => setActiveTab('grammar')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'grammar'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              3. Ngữ Pháp Trọng Tâm
            </button>
          </div>

          {/* TAB 1: VOCABULARY FLASHCARD & LIST */}
          {activeTab === 'vocab' && (
            <div className="space-y-4">
              {/* Interactive Flashcard Card */}
              <div className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 rounded-3xl border-2 border-indigo-200/80 p-6 sm:p-8 shadow-sm text-center relative">
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-3">
                  Từ {selectedWordIndex + 1} / {UNIT1_VOCAB_PREVIEW.length} • Flashcard tương tác
                </span>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    {currentWord.word}
                  </h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="font-mono text-sm text-slate-600 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200">
                      {currentWord.ipa}
                    </span>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                      ({currentWord.type})
                    </span>
                    <button
                      onClick={() => speakWord(currentWord.word)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md transition-transform active:scale-95 ${
                        isSpeaking ? 'bg-amber-500 animate-pulse' : 'bg-indigo-600 hover:bg-indigo-700'
                      }`}
                      title="Phát âm từ này (Nhấn để nghe)"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="mt-5 p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs max-w-md mx-auto">
                  <p className="text-lg font-bold text-emerald-700">
                    {currentWord.meaning}
                  </p>
                  <p className="text-xs text-slate-500 italic mt-1">
                    "{currentWord.example}"
                  </p>
                </div>

                {/* Next / Prev Buttons */}
                <div className="flex items-center justify-center gap-3 mt-6">
                  <button
                    onClick={() => setSelectedWordIndex((prev) => (prev > 0 ? prev - 1 : UNIT1_VOCAB_PREVIEW.length - 1))}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all shadow-2xs"
                  >
                    ← Từ trước
                  </button>
                  <button
                    onClick={() => speakWord(currentWord.example)}
                    className="px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-all flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Nghe câu mẫu</span>
                  </button>
                  <button
                    onClick={() => setSelectedWordIndex((prev) => (prev < UNIT1_VOCAB_PREVIEW.length - 1 ? prev + 1 : 0))}
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-all shadow-sm"
                  >
                    Từ kế tiếp →
                  </button>
                </div>
              </div>

              {/* Vocabulary Grid List */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-3">
                  Danh sách từ vựng Unit 1
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {UNIT1_VOCAB_PREVIEW.map((item, idx) => (
                    <button
                      key={item.word}
                      onClick={() => {
                        setSelectedWordIndex(idx);
                        speakWord(item.word);
                      }}
                      className={`p-2.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                        selectedWordIndex === idx
                          ? 'bg-indigo-50 border-indigo-400 shadow-2xs'
                          : 'bg-slate-50/60 hover:bg-slate-100/80 border-slate-200/80'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-900">{item.word}</span>
                          <span className="text-[10px] text-slate-400">({item.type})</span>
                        </div>
                        <div className="text-[11px] text-indigo-700 font-medium">{item.meaning}</div>
                      </div>
                      <span className="font-mono text-[11px] text-slate-500">{item.ipa}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRONUNCIATION /ə/ vs /ɜ:/ */}
          {activeTab === 'pronunciation' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-5">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Phân biệt âm ngắn /ə/ và âm dài /ɜ:/
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Trong Unit 1, con cần phân biệt được nguyên âm ngắn <span className="font-mono font-bold text-indigo-700">/ə/</span> (schwa sound) và nguyên âm dài <span className="font-mono font-bold text-indigo-700">/ɜ:/</span> (nhấn dài và hơi cong lưỡi).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Column 1: /ə/ */}
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-black text-sky-800 bg-white px-3 py-1 rounded-xl border border-sky-200">
                      /ə/
                    </span>
                    <span className="text-xs font-bold text-sky-700">Âm ngắn, thả lỏng</span>
                  </div>
                  <ul className="space-y-2 text-xs">
                    {[
                      { word: 'away', ipa: '/əˈweɪ/', vi: 'xa cách' },
                      { word: 'answer', ipa: '/ˈɑːnsə/', vi: 'câu trả lời' },
                      { word: 'neighbour', ipa: '/ˈneɪbə/', vi: 'hàng xóm' },
                      { word: 'common', ipa: '/ˈkɒmən/', vi: 'phổ biến' }
                    ].map((item) => (
                      <li key={item.word} className="flex items-center justify-between p-2 rounded-lg bg-white border border-sky-100">
                        <span className="font-bold text-slate-800">{item.word}</span>
                        <span className="font-mono text-slate-500">{item.ipa}</span>
                        <button
                          onClick={() => speakWord(item.word)}
                          className="w-7 h-7 rounded-lg bg-sky-100 hover:bg-sky-200 flex items-center justify-center text-sky-800"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: /ɜ:/ */}
                <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-black text-indigo-800 bg-white px-3 py-1 rounded-xl border border-indigo-200">
                      /ɜ:/
                    </span>
                    <span className="text-xs font-bold text-indigo-700">Âm dài, căng lưỡi</span>
                  </div>
                  <ul className="space-y-2 text-xs">
                    {[
                      { word: 'burn', ipa: '/bɜːn/', vi: 'đốt cháy' },
                      { word: 'birth', ipa: '/bɜːθ/', vi: 'sinh ra' },
                      { word: 'hurt', ipa: '/hɜːt/', vi: 'bị thương' },
                      { word: 'girl', ipa: '/ɡɜːl/', vi: 'cô gái' }
                    ].map((item) => (
                      <li key={item.word} className="flex items-center justify-between p-2 rounded-lg bg-white border border-indigo-100">
                        <span className="font-bold text-slate-800">{item.word}</span>
                        <span className="font-mono text-slate-500">{item.ipa}</span>
                        <button
                          onClick={() => speakWord(item.word)}
                          className="w-7 h-7 rounded-lg bg-indigo-100 hover:bg-indigo-200 flex items-center justify-center text-indigo-800"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GRAMMAR FOCUS */}
          {activeTab === 'grammar' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-5">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Hai điểm ngữ pháp cốt lõi của Unit 1
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Được dùng để nói về thói quen, sự thật hiển nhiên và sở thích của bản thân.
                </p>
              </div>

              {/* Point 1: Present Simple */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <h4 className="text-xs font-black text-indigo-900 uppercase tracking-wide">
                  1. Thì Hiện tại đơn (The Present Simple Tense)
                </h4>
                <div className="text-xs space-y-1.5 text-slate-700">
                  <p><strong>Khẳng định:</strong> S + V(s/es) + O</p>
                  <p className="text-slate-500 italic">Ví dụ: He plays badminton every Sunday. / They go swimming twice a week.</p>
                  <p><strong>Phủ định:</strong> S + do not (don't) / does not (doesn't) + V-bare</p>
                  <p><strong>Nghi vấn:</strong> Do / Does + S + V-bare?</p>
                </div>
              </div>

              {/* Point 2: Verbs of liking + V-ing */}
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2.5">
                <h4 className="text-xs font-black text-indigo-900 uppercase tracking-wide">
                  2. Động từ chỉ cảm xúc yêu/ghét + V-ing (Gerund)
                </h4>
                <div className="text-xs space-y-1.5 text-slate-700">
                  <p className="font-semibold text-indigo-800">
                    like / love / enjoy / prefer / hate / dislike + V-ing
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    <li>I <strong>enjoy doing</strong> origami in my free time.</li>
                    <li>My brother <strong>hates getting</strong> up early.</li>
                    <li>Does she <strong>like collecting</strong> stamps?</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column (1 Col): Study Goals & Step 2 Announcement */}
        <div className="space-y-4">
          {/* Quick Stats Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Tiến độ học môn Tiếng Anh</span>
            </h4>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                <div className="text-lg font-black text-indigo-700">1 / 12</div>
                <div className="text-[10px] text-slate-500 font-semibold">Unit đang mở</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-100">
                <div className="text-lg font-black text-amber-700">+{xp} XP</div>
                <div className="text-[10px] text-slate-500 font-semibold">Tích lũy chung</div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span>Bộ sách:</span>
                <span className="font-bold text-slate-800">Global Success 7</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Trọng tâm Unit 1:</span>
                <span className="font-bold text-indigo-700">Hobbies (Sở thích)</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Chuỗi ngày học:</span>
                <span className="font-bold text-amber-600 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>{streak} ngày liên tiếp</span>
                </span>
              </div>
            </div>
          </div>

          {/* Socratic AI English Companion Box */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-5 text-white shadow-md space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-xs font-extrabold">English Buddy Socratic</h5>
                <p className="text-[10px] text-indigo-200">Gợi ý cách tự học tiếng Anh cùng bố</p>
              </div>
            </div>

            <p className="text-xs text-indigo-100 leading-relaxed">
              "Bố có thể đố con: <em className="text-amber-300">What is your favourite hobby and why do you like it?</em> Con chỉ cần trả lời đơn giản: <em className="text-emerald-300">I like reading because it is relaxing!</em>"
            </p>

            <button
              onClick={() => speakWord("What is your favourite hobby and why do you like it? I like reading because it is relaxing!")}
              className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-white/20"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-300" />
              <span>Nghe đoạn hội thoại mẫu</span>
            </button>
          </div>

          {/* Quick Return to Math Button */}
          <button
            onClick={() => setCurrentSubject('toan')}
            className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Quay lại học môn Toán 7</span>
          </button>
        </div>
      </div>
    </div>
  );
};
