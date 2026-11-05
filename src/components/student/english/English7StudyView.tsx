import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { 
  UNIT1_VOCABULARY, 
  UNIT1_EXERCISES, 
  EnglishExercise 
} from '../../../data/english/unit1_hobbies_data';
import { 
  Sparkles, 
  Volume2, 
  ArrowLeft, 
  BookOpen, 
  Layers, 
  Flame, 
  Award, 
  CheckCircle2, 
  Play,
  Check,
  X,
  HelpCircle,
  RotateCcw,
  GraduationCap
} from 'lucide-react';

const ENGLISH_UNITS = [
  { id: 'unit-01', number: 1, title: 'Hobbies', viTitle: 'Sở thích', status: 'ready', badge: 'Sẵn sàng học' },
  { id: 'unit-02', number: 2, title: 'Healthy Living', viTitle: 'Lối sống lành mạnh', status: 'locked', badge: 'Kế tiếp' },
  { id: 'unit-03', number: 3, title: 'Community Service', viTitle: 'Hoạt động cộng đồng', status: 'locked', badge: 'Kế tiếp' },
  { id: 'unit-04', number: 4, title: 'Music and Arts', viTitle: 'Âm nhạc & Nghệ thuật', status: 'locked', badge: 'Kế tiếp' },
  { id: 'unit-05', number: 5, title: 'Food and Drink', viTitle: 'Ẩm thực & Thức uống', status: 'locked', badge: 'Kế tiếp' },
  { id: 'unit-06', number: 6, title: 'A Visit to a School', viTitle: 'Thăm một ngôi trường', status: 'locked', badge: 'Học kì 1' },
];

export const English7StudyView: React.FC = () => {
  const { setCurrentSubject, openSubjectHub, xp, addXp, streak } = useApp();
  const [activeTab, setActiveTab] = useState<'vocab' | 'pronunciation' | 'grammar' | 'practice'>('vocab');
  
  // Flashcard state
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Practice Drills state
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'vocabulary' | 'pronunciation' | 'grammar' | 'reading'>('all');
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showHint, setShowHint] = useState(false);
  const [rewardedQuestionIds, setRewardedQuestionIds] = useState<Record<string, boolean>>({});

  // Quick Text-to-Speech using native Web Speech API
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/_+/g, 'blank').replace(/[\/\(\)]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = 0.88;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const currentWord = UNIT1_VOCABULARY[selectedWordIndex];

  // Filtered exercises based on category
  const filteredExercises = UNIT1_EXERCISES.filter((ex) => {
    if (selectedCategory === 'all') return true;
    return ex.category === selectedCategory;
  });

  const activeExercise: EnglishExercise | undefined = filteredExercises[currentQuizIndex] || filteredExercises[0];

  // Calculate statistics
  const totalQuestions = UNIT1_EXERCISES.length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([qId, answerIdx]) => {
    const q = UNIT1_EXERCISES.find((item) => item.id === qId);
    return q && q.correctIndex === answerIdx;
  }).length;

  const handleSelectAnswer = (optionIdx: number) => {
    if (!activeExercise) return;
    if (userAnswers[activeExercise.id] !== undefined) return; // already answered

    const isCorrect = optionIdx === activeExercise.correctIndex;
    setUserAnswers((prev) => ({ ...prev, [activeExercise.id]: optionIdx }));

    if (isCorrect && !rewardedQuestionIds[activeExercise.id]) {
      addXp(10, 'Đúng câu phản xạ Tiếng Anh Unit 1');
      setRewardedQuestionIds((prev) => ({ ...prev, [activeExercise.id]: true }));
    }
  };

  const handleResetQuiz = () => {
    if (window.confirm('Con có chắc muốn làm lại từ đầu bộ câu hỏi trắc nghiệm này không?')) {
      setUserAnswers({});
      setCurrentQuizIndex(0);
      setShowHint(false);
    }
  };

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
              Khởi động làm chủ từ vựng chỉ hoạt động giải trí, phân biệt cặp âm <span className="font-mono bg-white/20 px-1 rounded">/ə/</span> và <span className="font-mono bg-white/20 px-1 rounded">/ɜ:/</span>, cùng cấu trúc câu với động từ chỉ sự yêu thích (like, love, enjoy + V-ing) và bộ 20 câu trắc nghiệm phản xạ.
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
            <span>Danh mục 12 Units Tiếng Anh 7 Global Success</span>
          </span>
          <span className="text-[11px] text-slate-500">
            Bộ GD&ĐT (GDPT 2018)
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
                    alert(`Unit ${u.number}: ${u.title} đang được biên soạn tiếp. Hiện tại Unit 1 đã có đầy đủ từ vựng, phát âm, ngữ pháp và 20 bài tập phản xạ!`);
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

      {/* Main Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('vocab')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'vocab'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          1. Từ Vựng & Flashcard ({UNIT1_VOCABULARY.length} từ)
        </button>
        <button
          onClick={() => setActiveTab('pronunciation')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'pronunciation'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          2. Phát Âm: /ə/ & /ɜ:/
        </button>
        <button
          onClick={() => setActiveTab('grammar')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'grammar'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          3. Ngữ Pháp Trọng Tâm
        </button>
        <button
          onClick={() => setActiveTab('practice')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'practice'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs'
              : 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>4. Luyện Tập Phản Xạ ({UNIT1_EXERCISES.length} câu)</span>
          <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px] font-black">
            {answeredCount}/{totalQuestions}
          </span>
        </button>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Active Tab Content */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* TAB 1: VOCABULARY FLASHCARD & LIST */}
          {activeTab === 'vocab' && (
            <div className="space-y-4">
              {/* Interactive Flashcard Card */}
              <div className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 rounded-3xl border-2 border-indigo-200/80 p-6 sm:p-8 shadow-sm text-center relative">
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-3">
                  Từ {selectedWordIndex + 1} / {UNIT1_VOCABULARY.length} • Flashcard phát âm chuẩn
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
                      onClick={() => speakText(currentWord.word)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md transition-transform active:scale-95 ${
                        isSpeaking ? 'bg-amber-500 animate-pulse' : 'bg-indigo-600 hover:bg-indigo-700'
                      }`}
                      title="Phát âm từ này (Nhấn để nghe)"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="mt-5 p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs max-w-md mx-auto space-y-1.5">
                  <p className="text-base sm:text-lg font-bold text-emerald-700">
                    {currentWord.meaning}
                  </p>
                  {currentWord.collocation && (
                    <p className="text-xs font-semibold text-indigo-600 bg-indigo-50/70 px-2 py-1 rounded-lg">
                      💡 Cụm từ: {currentWord.collocation}
                    </p>
                  )}
                  <p className="text-xs text-slate-500 italic">
                    "{currentWord.example}"
                  </p>
                </div>

                {/* Next / Prev Buttons */}
                <div className="flex items-center justify-center gap-3 mt-6">
                  <button
                    onClick={() => setSelectedWordIndex((prev) => (prev > 0 ? prev - 1 : UNIT1_VOCABULARY.length - 1))}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all shadow-2xs"
                  >
                    ← Từ trước
                  </button>
                  <button
                    onClick={() => speakText(currentWord.example)}
                    className="px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-all flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Nghe câu mẫu</span>
                  </button>
                  <button
                    onClick={() => setSelectedWordIndex((prev) => (prev < UNIT1_VOCABULARY.length - 1 ? prev + 1 : 0))}
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-all shadow-sm"
                  >
                    Từ kế tiếp →
                  </button>
                </div>
              </div>

              {/* Vocabulary Grid List */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-3">
                  Danh sách từ vựng trọng tâm Unit 1
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {UNIT1_VOCABULARY.map((item, idx) => (
                    <button
                      key={item.word}
                      onClick={() => {
                        setSelectedWordIndex(idx);
                        speakText(item.word);
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
                          onClick={() => speakText(item.word)}
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
                          onClick={() => speakText(item.word)}
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

          {/* TAB 4: PRACTICE DRILLS (20 QUESTIONS) */}
          {activeTab === 'practice' && (
            <div className="space-y-4">
              {/* Category Filter Pills & Reset */}
              <div className="flex items-center justify-between gap-2 flex-wrap bg-white rounded-2xl border border-slate-200/90 p-3 shadow-2xs">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  {[
                    { id: 'all', label: 'Tất cả (20)' },
                    { id: 'vocabulary', label: 'Từ vựng (5)' },
                    { id: 'pronunciation', label: 'Phát âm (4)' },
                    { id: 'grammar', label: 'Ngữ pháp (7)' },
                    { id: 'reading', label: 'Đọc hiểu & Phản xạ (4)' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id as any);
                        setCurrentQuizIndex(0);
                        setShowHint(false);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                        selectedCategory === cat.id
                          ? 'bg-indigo-600 text-white shadow-2xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleResetQuiz}
                  className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-rose-600 px-2 py-1 rounded-lg hover:bg-rose-50 transition-colors shrink-0"
                  title="Làm lại bộ câu hỏi"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Làm lại</span>
                </button>
              </div>

              {/* Question Navigation Numbers */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-3 shadow-2xs">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
                  <span className="font-bold text-slate-800">
                    Câu hỏi {currentQuizIndex + 1} / {filteredExercises.length}
                  </span>
                  <span>Đã làm: {answeredCount}/{totalQuestions} câu</span>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                  {filteredExercises.map((ex, idx) => {
                    const isAnswered = userAnswers[ex.id] !== undefined;
                    const isCorrect = isAnswered && userAnswers[ex.id] === ex.correctIndex;
                    const isCurrent = idx === currentQuizIndex;

                    return (
                      <button
                        key={ex.id}
                        onClick={() => {
                          setCurrentQuizIndex(idx);
                          setShowHint(false);
                        }}
                        className={`w-8 h-8 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center justify-center ${
                          isCurrent
                            ? 'ring-2 ring-indigo-600 font-black'
                            : ''
                        } ${
                          isAnswered
                            ? isCorrect
                              ? 'bg-emerald-500 text-white shadow-2xs'
                              : 'bg-rose-500 text-white shadow-2xs'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Question Card */}
              {activeExercise && (
                <div className="bg-white rounded-3xl border-2 border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-4">
                  {/* Question Header */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                        {activeExercise.title}
                      </span>
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md ${
                        activeExercise.level === 'nhan_biet'
                          ? 'bg-sky-100 text-sky-800'
                          : activeExercise.level === 'thong_hieu'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {activeExercise.level === 'nhan_biet' ? 'Nhận biết' : activeExercise.level === 'thong_hieu' ? 'Thông hiểu' : 'Vận dụng'}
                      </span>
                    </div>

                    <button
                      onClick={() => speakText(activeExercise.question)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
                      title="Nghe câu hỏi bằng tiếng Anh"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Nghe đọc</span>
                    </button>
                  </div>

                  {/* Question Content */}
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed pt-1">
                    {activeExercise.question}
                  </div>

                  {/* 4 Options Grid */}
                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    {activeExercise.options.map((option, optIdx) => {
                      const isSelected = userAnswers[activeExercise.id] === optIdx;
                      const isAnswered = userAnswers[activeExercise.id] !== undefined;
                      const isCorrect = optIdx === activeExercise.correctIndex;

                      let btnStyle = 'border-slate-200/90 bg-white hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-800';
                      if (isAnswered) {
                        if (isCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-2 ring-emerald-500/20';
                        } else if (isSelected) {
                          btnStyle = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                        } else {
                          btnStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isAnswered}
                          onClick={() => handleSelectAnswer(optIdx)}
                          className={`w-full p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between text-sm ${btnStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                              isSelected
                                ? isCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-rose-600 text-white'
                                : isAnswered && isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}>
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="leading-snug">{option}</span>
                          </div>

                          {isAnswered && (
                            <div className="shrink-0 ml-2">
                              {isCorrect ? (
                                <Check className="w-5 h-5 text-emerald-600" />
                              ) : isSelected ? (
                                <X className="w-5 h-5 text-rose-600" />
                              ) : null}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Hint and Action Row */}
                  <div className="pt-2 flex items-center justify-between gap-2 flex-wrap">
                    <button
                      onClick={() => setShowHint(!showHint)}
                      className="flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-xl border border-amber-200 transition-all"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                      <span>{showHint ? 'Ẩn gợi ý' : 'Xem gợi ý tư duy'}</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        disabled={currentQuizIndex === 0}
                        onClick={() => {
                          setCurrentQuizIndex((prev) => Math.max(0, prev - 1));
                          setShowHint(false);
                        }}
                        className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 disabled:hover:bg-slate-100 transition-all"
                      >
                        ← Câu trước
                      </button>

                      <button
                        disabled={currentQuizIndex === filteredExercises.length - 1}
                        onClick={() => {
                          setCurrentQuizIndex((prev) => Math.min(filteredExercises.length - 1, prev + 1));
                          setShowHint(false);
                        }}
                        className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 disabled:hover:bg-indigo-600 transition-all shadow-xs"
                      >
                        Câu kế tiếp →
                      </button>
                    </div>
                  </div>

                  {/* Hint Box */}
                  {showHint && (
                    <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 animate-fadeIn">
                      <p className="font-bold flex items-center gap-1 mb-1">
                        <span>💡 Gợi ý từ cô giáo:</span>
                      </p>
                      <p className="leading-relaxed">{activeExercise.hint}</p>
                    </div>
                  )}

                  {/* Detailed Explanation upon Answer */}
                  {userAnswers[activeExercise.id] !== undefined && (
                    <div className={`p-4 rounded-2xl border animate-fadeIn space-y-1.5 ${
                      userAnswers[activeExercise.id] === activeExercise.correctIndex
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                        : 'bg-rose-50 border-rose-200 text-rose-950'
                    }`}>
                      <div className="flex items-center gap-2">
                        {userAnswers[activeExercise.id] === activeExercise.correctIndex ? (
                          <div className="flex items-center gap-1.5 text-xs font-black text-emerald-700 uppercase tracking-wide">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Chính xác! (+10 XP)</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-xs font-black text-rose-700 uppercase tracking-wide">
                            <X className="w-4 h-4" />
                            <span>Chưa chính xác! Cùng xem giải thích bên dưới:</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed font-medium">
                        {activeExercise.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column (1 Col): Study Goals & AI Socratic Buddy */}
        <div className="space-y-4">
          {/* Practice Summary Score Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3.5">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Tiến độ Unit 1: Hobbies</span>
            </h4>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                <div className="text-lg font-black text-indigo-700">
                  {correctCount}/{totalQuestions}
                </div>
                <div className="text-[10px] text-slate-500 font-semibold">Đúng trắc nghiệm</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <div className="text-lg font-black text-emerald-700">+{xp} XP</div>
                <div className="text-[10px] text-slate-500 font-semibold">Điểm tích lũy</div>
              </div>
            </div>

            {/* Quick Practice Trigger Button */}
            {activeTab !== 'practice' && (
              <button
                onClick={() => setActiveTab('practice')}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Làm 20 câu trắc nghiệm phản xạ</span>
              </button>
            )}

            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span>Bộ sách:</span>
                <span className="font-bold text-slate-800">Global Success 7</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Số từ vựng:</span>
                <span className="font-bold text-indigo-700">{UNIT1_VOCABULARY.length} từ kèm audio</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Chuỗi học:</span>
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
              onClick={() => speakText("What is your favourite hobby and why do you like it? I like reading because it is relaxing!")}
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
            <GraduationCap className="w-4 h-4" />
            <span>Quay lại học môn Toán 7</span>
          </button>
        </div>
      </div>
    </div>
  );
};
