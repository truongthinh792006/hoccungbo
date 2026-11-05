import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { 
  UNIT1_VOCABULARY, 
  UNIT1_EXERCISES, 
  EnglishExercise,
  EnglishVocabWord
} from '../../../data/english/unit1_hobbies_data';
import { 
  UNIT2_VOCABULARY, 
  UNIT2_EXERCISES 
} from '../../../data/english/unit2_healthy_living_data';
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
  GraduationCap,
  HeartPulse
} from 'lucide-react';

interface UnitInfo {
  id: string;
  number: number;
  title: string;
  viTitle: string;
  status: 'ready' | 'locked';
  badge: string;
  tagline: string;
  description: string;
  buddyPrompt: string;
}

const ENGLISH_UNITS: UnitInfo[] = [
  { 
    id: 'unit-01', 
    number: 1, 
    title: 'Hobbies', 
    viTitle: 'Sở thích', 
    status: 'ready', 
    badge: 'Đã hoàn thành',
    tagline: 'Từ vựng sở thích • Cặp âm /ə/ & /ɜ:/ • Thì hiện tại đơn & like/love + V-ing',
    description: 'Khởi động làm chủ từ vựng chỉ hoạt động giải trí, phân biệt cặp âm /ə/ và /ɜ:/, cùng cấu trúc câu với động từ chỉ sự yêu thích (like, love, enjoy + V-ing) và bộ 20 câu trắc nghiệm phản xạ.',
    buddyPrompt: 'Bố có thể đố con: "What is your favourite hobby and why do you like it?" Con chỉ cần trả lời: "I like reading because it is relaxing!"'
  },
  { 
    id: 'unit-02', 
    number: 2, 
    title: 'Healthy Living', 
    viTitle: 'Lối sống lành mạnh', 
    status: 'ready', 
    badge: 'Mới mở • Sẵn sàng học',
    tagline: 'Vấn đề sức khỏe • Cặp âm /f/ & /v/ • Câu đơn & liên từ and/but/or/so • Lời khuyên should/shouldn\'t',
    description: 'Nhận biết các vấn đề sức khỏe thường gặp (sunburn, acne, chapped lips), phân biệt cặp âm /f/ và /v/, làm chủ câu đơn với liên từ and, but, or, so, và đưa ra lời khuyên sức khỏe với should/shouldn\'t.',
    buddyPrompt: 'Bố có thể đố con: "What should we do to stay in shape and avoid acne?" Con chỉ cần trả lời: "We should eat plenty of colored vegetables, drink water, and wash our face regularly!"'
  },
  { id: 'unit-03', number: 3, title: 'Community Service', viTitle: 'Hoạt động cộng đồng', status: 'locked', badge: 'Kế tiếp', tagline: '', description: '', buddyPrompt: '' },
  { id: 'unit-04', number: 4, title: 'Music and Arts', viTitle: 'Âm nhạc & Nghệ thuật', status: 'locked', badge: 'Kế tiếp', tagline: '', description: '', buddyPrompt: '' },
  { id: 'unit-05', number: 5, title: 'Food and Drink', viTitle: 'Ẩm thực & Thức uống', status: 'locked', badge: 'Kế tiếp', tagline: '', description: '', buddyPrompt: '' },
  { id: 'unit-06', number: 6, title: 'A Visit to a School', viTitle: 'Thăm một ngôi trường', status: 'locked', badge: 'Học kì 1', tagline: '', description: '', buddyPrompt: '' },
];

export const English7StudyView: React.FC = () => {
  const { setCurrentSubject, openSubjectHub, xp, addXp, streak } = useApp();
  
  // Selected Unit state (defaults to Unit 2 as requested, or toggle between 1 & 2)
  const [selectedUnitNumber, setSelectedUnitNumber] = useState<1 | 2>(2);
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

  // Dynamic datasets based on selected unit
  const currentUnitInfo = ENGLISH_UNITS.find(u => u.number === selectedUnitNumber) || ENGLISH_UNITS[1];
  const unitVocabulary: EnglishVocabWord[] = selectedUnitNumber === 1 ? UNIT1_VOCABULARY : UNIT2_VOCABULARY;
  const unitExercises: EnglishExercise[] = selectedUnitNumber === 1 ? UNIT1_EXERCISES : UNIT2_EXERCISES;

  // Switch Unit handler
  const handleSelectUnit = (unitNumber: number) => {
    if (unitNumber > 2) {
      alert(`Unit ${unitNumber} đang được chuẩn bị. Con có thể học Unit 1: Hobbies hoặc Unit 2: Healthy Living!`);
      return;
    }
    setSelectedUnitNumber(unitNumber as 1 | 2);
    setSelectedWordIndex(0);
    setCurrentQuizIndex(0);
    setShowHint(false);
    setSelectedCategory('all');
  };

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

  const currentWord = unitVocabulary[selectedWordIndex] || unitVocabulary[0];

  // Filtered exercises based on category
  const filteredExercises = unitExercises.filter((ex) => {
    if (selectedCategory === 'all') return true;
    return ex.category === selectedCategory;
  });

  const activeExercise: EnglishExercise | undefined = filteredExercises[currentQuizIndex] || filteredExercises[0];

  // Calculate statistics for currently active unit
  const totalQuestions = unitExercises.length;
  const answeredCount = unitExercises.filter(ex => userAnswers[ex.id] !== undefined).length;
  const correctCount = unitExercises.filter(ex => userAnswers[ex.id] === ex.correctIndex).length;

  const handleSelectAnswer = (optionIdx: number) => {
    if (!activeExercise) return;
    if (userAnswers[activeExercise.id] !== undefined) return; // already answered

    const isCorrect = optionIdx === activeExercise.correctIndex;
    setUserAnswers((prev) => ({ ...prev, [activeExercise.id]: optionIdx }));

    if (isCorrect && !rewardedQuestionIds[activeExercise.id]) {
      addXp(10, `Đúng câu phản xạ Tiếng Anh Unit ${selectedUnitNumber}`);
      setRewardedQuestionIds((prev) => ({ ...prev, [activeExercise.id]: true }));
    }
  };

  const handleResetQuiz = () => {
    if (window.confirm(`Con có chắc muốn làm lại từ đầu bộ câu hỏi trắc nghiệm của Unit ${selectedUnitNumber} không?`)) {
      setUserAnswers((prev) => {
        const next = { ...prev };
        unitExercises.forEach(ex => delete next[ex.id]);
        return next;
      });
      setCurrentQuizIndex(0);
      setShowHint(false);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner: Dynamic based on Unit */}
      <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-7 text-white shadow-lg shadow-indigo-950/10 transition-colors ${
        selectedUnitNumber === 2 
          ? 'bg-gradient-to-r from-teal-700 via-emerald-700 to-indigo-800'
          : 'bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700'
      }`}>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white">
                <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                <span>Tiếng Anh 7 • Global Success</span>
              </span>
              <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full font-semibold">
                NXB Giáo dục & Pearson
              </span>
              <span className="text-xs bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full font-black">
                {selectedUnitNumber === 2 ? 'Mới cập nhật' : 'Đã học'}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
              {selectedUnitNumber === 2 && <HeartPulse className="w-6 h-6 text-rose-300 inline-block" />}
              <span>Unit {currentUnitInfo.number}: {currentUnitInfo.title} ({currentUnitInfo.viTitle})</span>
            </h1>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              {currentUnitInfo.description}
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
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-md hover:bg-indigo-50 transition-all"
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
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
            Đã mở Unit 1 & Unit 2
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {ENGLISH_UNITS.map((u) => {
            const isCurrent = u.number === selectedUnitNumber;
            const isAvailable = u.status === 'ready';

            return (
              <button
                key={u.id}
                onClick={() => handleSelectUnit(u.number)}
                className={`px-3.5 py-2 rounded-xl text-left shrink-0 transition-all flex flex-col min-w-[160px] border ${
                  isCurrent
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-500/20'
                    : isAvailable
                    ? 'bg-slate-50 hover:bg-indigo-50/50 hover:border-indigo-300 text-slate-800 border-slate-200 cursor-pointer'
                    : 'bg-slate-50/60 text-slate-400 border-slate-200/70 cursor-not-allowed opacity-70'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-bold ${isCurrent ? 'text-indigo-200' : 'text-slate-400'}`}>
                    UNIT {u.number}
                  </span>
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                    isCurrent 
                      ? 'bg-white/20 text-white' 
                      : isAvailable
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-200 text-slate-600'
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
          1. Từ Vựng & Flashcard ({unitVocabulary.length} từ)
        </button>
        <button
          onClick={() => setActiveTab('pronunciation')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'pronunciation'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          2. Phát Âm: {selectedUnitNumber === 1 ? '/ə/ & /ɜ:/' : '/f/ & /v/'}
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
          <span>4. Luyện Tập Phản Xạ ({unitExercises.length} câu)</span>
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
                  Unit {selectedUnitNumber} • Từ {selectedWordIndex + 1} / {unitVocabulary.length} • Flashcard phát âm chuẩn
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
                    onClick={() => setSelectedWordIndex((prev) => (prev > 0 ? prev - 1 : unitVocabulary.length - 1))}
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
                    onClick={() => setSelectedWordIndex((prev) => (prev < unitVocabulary.length - 1 ? prev + 1 : 0))}
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-all shadow-sm"
                  >
                    Từ kế tiếp →
                  </button>
                </div>
              </div>

              {/* Vocabulary Grid List */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-3">
                  Danh sách từ vựng trọng tâm Unit {selectedUnitNumber} ({currentUnitInfo.title})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {unitVocabulary.map((item, idx) => (
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

          {/* TAB 2: PRONUNCIATION */}
          {activeTab === 'pronunciation' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-5">
              {selectedUnitNumber === 1 ? (
                // UNIT 1 PRONUNCIATION: /ə/ vs /ɜ:/
                <>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Phân biệt âm ngắn /ə/ và âm dài /ɜ:/
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Trong Unit 1, con cần phân biệt được nguyên âm ngắn <span className="font-mono font-bold text-indigo-700">/ə/</span> (schwa sound) và nguyên âm dài <span className="font-mono font-bold text-indigo-700">/ɜ:/</span> (nhấn dài và hơi cong lưỡi).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </>
              ) : (
                // UNIT 2 PRONUNCIATION: /f/ vs /v/
                <>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Phân biệt phụ âm vô thanh /f/ và hữu thanh /v/
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Cả hai âm đều được tạo ra bằng cách đặt răng hàm trên chạm nhẹ vào môi dưới và đẩy luồng hơi ra. 
                      Với âm <span className="font-mono font-bold text-teal-700">/f/</span> (vô thanh - dây thanh không rung), và âm <span className="font-mono font-bold text-emerald-700">/v/</span> (hữu thanh - cảm nhận cổ họng rung).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Column 1: /f/ */}
                    <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xl font-black text-teal-800 bg-white px-3 py-1 rounded-xl border border-teal-200">
                          /f/
                        </span>
                        <span className="text-xs font-bold text-teal-700">Vô thanh (không rung)</span>
                      </div>
                      <p className="text-[11px] text-teal-900 font-medium">Chú ý cách viết đặc biệt: "ph" (photo) và "gh" (cough, laugh)</p>
                      <ul className="space-y-2 text-xs">
                        {[
                          { word: 'fat', ipa: '/fæt/', vi: 'béo, mỡ' },
                          { word: 'fruit', ipa: '/fruːt/', vi: 'trái cây' },
                          { word: 'cough', ipa: '/kɒf/', vi: 'ho' },
                          { word: 'laugh', ipa: '/lɑːf/', vi: 'cười' },
                          { word: 'safe', ipa: '/seɪf/', vi: 'an toàn' }
                        ].map((item) => (
                          <li key={item.word} className="flex items-center justify-between p-2 rounded-lg bg-white border border-teal-100">
                            <span className="font-bold text-slate-800">{item.word}</span>
                            <span className="font-mono text-slate-500">{item.ipa}</span>
                            <button
                              onClick={() => speakText(item.word)}
                              className="w-7 h-7 rounded-lg bg-teal-100 hover:bg-teal-200 flex items-center justify-center text-teal-800"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: /v/ */}
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xl font-black text-emerald-800 bg-white px-3 py-1 rounded-xl border border-emerald-200">
                          /v/
                        </span>
                        <span className="text-xs font-bold text-emerald-700">Hữu thanh (cổ họng rung)</span>
                      </div>
                      <p className="text-[11px] text-emerald-900 font-medium">Âm /v/ luôn rung thanh quản khi phát âm</p>
                      <ul className="space-y-2 text-xs">
                        {[
                          { word: 'view', ipa: '/vjuː/', vi: 'tầm nhìn' },
                          { word: 'vegetables', ipa: '/ˈvedʒtəblz/', vi: 'rau củ' },
                          { word: 'have', ipa: '/hæv/', vi: 'có' },
                          { word: 'activity', ipa: '/ækˈtɪvəti/', vi: 'hoạt động' },
                          { word: 'vitamin', ipa: '/ˈvɪtəmɪn/', vi: 'vi-ta-min' }
                        ].map((item) => (
                          <li key={item.word} className="flex items-center justify-between p-2 rounded-lg bg-white border border-emerald-100">
                            <span className="font-bold text-slate-800">{item.word}</span>
                            <span className="font-mono text-slate-500">{item.ipa}</span>
                            <button
                              onClick={() => speakText(item.word)}
                              className="w-7 h-7 rounded-lg bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center text-emerald-800"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* TAB 3: GRAMMAR FOCUS */}
          {activeTab === 'grammar' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-5">
              {selectedUnitNumber === 1 ? (
                // UNIT 1 GRAMMAR
                <>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Ngữ pháp trọng tâm Unit 1: Hobbies
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Thì Hiện tại đơn và các động từ chỉ cảm xúc yêu/ghét đi với danh động từ (V-ing).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <h4 className="text-xs font-black text-indigo-900 uppercase tracking-wide">
                      1. Thì Hiện tại đơn (The Present Simple Tense)
                    </h4>
                    <div className="text-xs space-y-1.5 text-slate-700">
                      <p><strong>Khẳng định:</strong> S + V(s/es) + O</p>
                      <p className="text-slate-500 italic">Ví dụ: He plays badminton every Sunday.</p>
                      <p><strong>Phủ định:</strong> S + do not (don't) / does not (doesn't) + V-bare</p>
                      <p><strong>Nghi vấn:</strong> Do / Does + S + V-bare?</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2.5">
                    <h4 className="text-xs font-black text-indigo-900 uppercase tracking-wide">
                      2. Động từ chỉ cảm xúc yêu/ghét + V-ing
                    </h4>
                    <div className="text-xs space-y-1.5 text-slate-700">
                      <p className="font-semibold text-indigo-800">
                        like / love / enjoy / prefer / hate / dislike + V-ing
                      </p>
                      <p className="text-slate-600">Ví dụ: I <strong>enjoy doing</strong> origami. / She <strong>hates getting</strong> up early.</p>
                    </div>
                  </div>
                </>
              ) : (
                // UNIT 2 GRAMMAR: SIMPLE SENTENCES & ADVICE
                <>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Ngữ pháp trọng tâm Unit 2: Healthy Living
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Cấu trúc câu đơn (Simple Sentences), các liên từ kết hợp (and, but, or, so) và mẫu câu đưa ra lời khuyên sức khỏe (should/shouldn't, câu mệnh lệnh).
                    </p>
                  </div>

                  {/* Point 1: Simple Sentences & Conjunctions */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <h4 className="text-xs font-black text-indigo-900 uppercase tracking-wide">
                      1. Câu đơn (Simple Sentences) & Liên từ kết hợp (and, but, or, so)
                    </h4>
                    <div className="text-xs space-y-2 text-slate-700">
                      <p>
                        <strong>Câu đơn:</strong> Là câu chỉ chứa <em>một mệnh đề độc lập</em> (có thể có chủ ngữ ghép hoặc vị ngữ ghép).
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                          <span className="font-bold text-indigo-800">and (và)</span>: Thêm thông tin, bổ sung.
                          <p className="text-[11px] text-slate-500 italic mt-0.5">Eat vegetables <strong>and</strong> drink water.</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                          <span className="font-bold text-indigo-800">but (nhưng)</span>: Diễn tả sự tương phản, đối lập.
                          <p className="text-[11px] text-slate-500 italic mt-0.5">He is tired, <strong>but</strong> he still smiles.</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                          <span className="font-bold text-indigo-800">or (hoặc/nếu không)</span>: Sự lựa chọn, cảnh báo.
                          <p className="text-[11px] text-slate-500 italic mt-0.5">Wear a warm hat, <strong>or</strong> you will get cold.</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                          <span className="font-bold text-indigo-800">so (vì vậy/nên)</span>: Chỉ kết quả của hành động trước.
                          <p className="text-[11px] text-slate-500 italic mt-0.5">She exercises daily, <strong>so</strong> she is fit.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Point 2: Giving Advice */}
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2.5">
                    <h4 className="text-xs font-black text-emerald-900 uppercase tracking-wide">
                      2. Mẫu câu đưa ra lời khuyên sức khỏe (Giving Health Advice)
                    </h4>
                    <div className="text-xs space-y-2 text-slate-700">
                      <p>
                        <strong>Cấu trúc với Should / Shouldn't:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-slate-600">
                        <li>You <strong>should</strong> + V-bare: Bạn nên làm gì (VD: <em>You should sleep 8 hours a night.</em>)</li>
                        <li>You <strong>shouldn't</strong> + V-bare: Bạn không nên làm gì (VD: <em>You shouldn't touch your acne.</em>)</li>
                      </ul>

                      <p className="pt-1">
                        <strong>Câu mệnh lệnh (Imperatives):</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-slate-600">
                        <li><strong>V-bare...</strong> (Khẳng định): <em>Drink more warm water. Wash your hands.</em></li>
                        <li><strong>Don't + V-bare...</strong> (Phủ định): <em>Don't eat too many sweet candies!</em></li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
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
                    { id: 'pronunciation', label: selectedUnitNumber === 1 ? 'Phát âm /ə/ /ɜ:/ (4)' : 'Phát âm /f/ /v/ (4)' },
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
                    Unit {selectedUnitNumber} • Câu hỏi {currentQuizIndex + 1} / {filteredExercises.length}
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
              <span>Tiến độ Unit {selectedUnitNumber}: {currentUnitInfo.title}</span>
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
                <span>Làm 20 câu trắc nghiệm Unit {selectedUnitNumber}</span>
              </button>
            )}

            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span>Bộ sách:</span>
                <span className="font-bold text-slate-800">Global Success 7</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Số từ vựng:</span>
                <span className="font-bold text-indigo-700">{unitVocabulary.length} từ kèm audio</span>
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

            <p className="text-xs text-indigo-100 leading-relaxed italic">
              "{currentUnitInfo.buddyPrompt}"
            </p>

            <button
              onClick={() => speakText(currentUnitInfo.buddyPrompt)}
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
