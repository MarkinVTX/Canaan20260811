import React, { useState, useEffect } from 'react';
import { Language, Sermon } from '../types';
import { TRANSLATIONS, SERMONS } from '../data';
import { Play, Pause, Search, User, BookOpen, Clock, RotateCcw, Volume2, Youtube, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SermonsProps {
  currentLang: Language;
}

export default function Sermons({ currentLang }: SermonsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState('all');
  const [activeSermon, setActiveSermon] = useState<Sermon | null>(null);
  
  // Audio Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100%
  const [currentTime, setCurrentTime] = useState(0); // in seconds
  const totalDuration = 1845; // 30 minutes, 45 seconds mockup length

  // List of unique speakers
  const speakers = Array.from(
    new Set(SERMONS.map((s) => s.speaker[currentLang]))
  );

  // Filtered Sermons
  const filteredSermons = SERMONS.filter((s) => {
    const matchesSearch =
      s.title[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.summary[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.passage[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.speaker[currentLang].toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSpeaker =
      selectedSpeaker === 'all' || s.speaker[currentLang] === selectedSpeaker;

    return matchesSearch && matchesSpeaker;
  });

  // Simulated Sermon Audio Player Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && activeSermon) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            setProgress(0);
            return 0;
          }
          const nextTime = prev + 1;
          setProgress((nextTime / totalDuration) * 100);
          return nextTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeSermon]);

  const handlePlaySermon = (sermon: Sermon) => {
    setActiveSermon(sermon);
    setIsPlaying(true);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(e.target.value);
    setProgress(newProgress);
    setCurrentTime(Math.floor((newProgress / 100) * totalDuration));
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  return (
    <section id="sermons" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {TRANSLATIONS.sermonsHeader[currentLang]}
          </h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto my-4 rounded"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            {TRANSLATIONS.sermonsSub[currentLang]}
          </p>
        </div>

        {/* Filters and Search Controls */}
        <div className="bg-stone-50 border border-stone-100 p-4 sm:p-6 rounded-2xl shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="sermon-search"
                className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                placeholder={TRANSLATIONS.searchSermons[currentLang]}
              />
            </div>

            {/* Speaker Dropdown */}
            <div className="md:col-span-5 flex items-center gap-2">
              <span className="text-xs font-bold text-stone-500 whitespace-nowrap uppercase tracking-wider hidden sm:inline">
                {currentLang === 'en' ? 'Speaker' : '講員'}:
              </span>
              <select
                value={selectedSpeaker}
                onChange={(e) => setSelectedSpeaker(e.target.value)}
                id="sermon-speaker-filter"
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 cursor-pointer"
              >
                <option value="all">{TRANSLATIONS.allSpeakers[currentLang]}</option>
                {speakers.map((speaker, idx) => (
                  <option key={idx} value={speaker}>
                    {speaker}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Sermon Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List of sermons */}
          <div className="lg:col-span-7 space-y-4">
            {filteredSermons.length > 0 ? (
              filteredSermons.map((sermon) => {
                const isActive = activeSermon?.id === sermon.id;
                return (
                  <div
                    key={sermon.id}
                    className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row gap-5 justify-between items-start sm:items-center ${
                      isActive
                        ? 'bg-emerald-50/80 border-emerald-300 shadow-sm'
                        : 'bg-white border-stone-100 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="space-y-2 flex-grow">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-xs text-stone-400 font-semibold font-mono">
                          {sermon.date}
                        </span>
                        <div className="flex gap-1.5">
                          {sermon.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="font-serif text-lg font-extrabold text-stone-900 leading-tight">
                        {sermon.title[currentLang]}
                      </h3>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500 font-medium">
                        <span className="flex items-center gap-1">
                          <User className="h-3.5 w-3.5 text-stone-400" />
                          {sermon.speaker[currentLang]}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3.5 w-3.5 text-stone-400" />
                          {sermon.passage[currentLang]}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
                      <button
                        onClick={() => handlePlaySermon(sermon)}
                        id={`sermon-play-${sermon.id}`}
                        className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-colors ${
                          isActive && isPlaying
                            ? 'bg-emerald-800 text-white'
                            : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                        }`}
                      >
                        {isActive && isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        <span>{TRANSLATIONS.listenNow[currentLang]}</span>
                      </button>
                      <a
                        href={sermon.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`sermon-video-${sermon.id}`}
                        className="p-2.5 rounded-xl border border-stone-200 text-stone-500 hover:text-red-600 hover:bg-red-50 transition-all cursor-pointer"
                        title={TRANSLATIONS.watchVideo[currentLang]}
                      >
                        <Youtube className="h-4.5 w-4.5" />
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center p-12 bg-stone-50/50 rounded-2xl border border-stone-100">
                <p className="text-stone-500 font-sans text-sm">
                  {currentLang === 'en' ? 'No sermons found matching your criteria.' : '未找到符合條件的講道信息。'}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Active Sermon Player View */}
          <div className="lg:col-span-5 sticky top-24">
            <AnimatePresence mode="wait">
              {activeSermon ? (
                <motion.div
                  key={activeSermon.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden"
                >
                  {/* Backdrop art design */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/10 filter blur-2xl"></div>

                  {/* Header */}
                  <div className="space-y-2">
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      {TRANSLATIONS.audioPlayer[currentLang]}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white pt-1">
                      {activeSermon.title[currentLang]}
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium font-mono">
                      {activeSermon.passage[currentLang]}
                    </p>
                  </div>

                  {/* Meta Details */}
                  <div className="flex justify-between items-center bg-stone-800/80 rounded-2xl p-4 text-xs text-stone-300">
                    <div className="space-y-1">
                      <span className="block text-[10px] text-stone-500 uppercase tracking-widest font-bold">
                        {currentLang === 'en' ? 'Speaker' : '講員'}
                      </span>
                      <span className="font-bold">{activeSermon.speaker[currentLang]}</span>
                    </div>
                    <div className="space-y-1 text-right">
                      <span className="block text-[10px] text-stone-500 uppercase tracking-widest font-bold">
                        {currentLang === 'en' ? 'Date' : '日期'}
                      </span>
                      <span className="font-bold font-mono">{activeSermon.date}</span>
                    </div>
                  </div>

                  {/* Sermon Scripture/Brief Summary */}
                  <div className="bg-stone-800/40 p-4 rounded-2xl border border-stone-800 space-y-2">
                    <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">
                      {TRANSLATIONS.readSummary[currentLang]}
                    </span>
                    <p className="text-xs text-stone-300 leading-relaxed font-light line-clamp-4">
                      {activeSermon.summary[currentLang]}
                    </p>
                  </div>

                  {/* Progress Bar Controller */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center text-xs text-stone-400 font-mono">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(totalDuration)}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress}
                      onChange={handleProgressChange}
                      id="sermon-scrub"
                      className="w-full accent-emerald-500 h-1.5 rounded-lg bg-stone-700 cursor-pointer appearance-none focus:outline-none"
                    />
                  </div>

                  {/* Player Buttons */}
                  <div className="flex items-center justify-center gap-6 pt-2">
                    <button
                      onClick={() => {
                        setCurrentTime(0);
                        setProgress(0);
                      }}
                      id="sermon-reset"
                      className="p-2.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
                      title={currentLang === 'en' ? 'Restart' : '重新播放'}
                    >
                      <RotateCcw className="h-5 w-5" />
                    </button>

                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      id="sermon-play-toggle"
                      className="p-4 rounded-full bg-emerald-500 text-stone-950 hover:bg-emerald-400 hover:scale-105 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
                    >
                      {isPlaying ? <Pause className="h-6 w-6 fill-stone-950" /> : <Play className="h-6 w-6 fill-stone-950" />}
                    </button>

                    <div className="p-2.5 text-stone-400 flex items-center gap-1.5" title="Volume">
                      <Volume2 className="h-5 w-5" />
                      <span className="text-[10px] font-mono font-bold">MAX</span>
                    </div>
                  </div>

                </motion.div>
              ) : (
                <div className="bg-stone-50 border border-stone-200/60 border-dashed rounded-3xl p-8 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                    <Play className="h-5 w-5 fill-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-base">
                      {currentLang === 'en' ? 'Ready to listen?' : '準備好聆聽主日講道了嗎？'}
                    </h4>
                    <p className="text-xs text-stone-500 max-w-xs mx-auto leading-relaxed mt-1">
                      {currentLang === 'en' 
                        ? 'Select any sermon from the archive and press "Listen Now" to stream its full audio directly.' 
                        : '從檔案中選擇任何一篇講道，然後點擊「立即聆聽」即可直接線上收聽完整音訊。'}
                    </p>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
