import React, { useState } from 'react';
import { Language, Sermon } from '../types';
import { RECENT_SERMONS } from '../data/churchData';
import { Play, Video, Volume2, FileText, Search, BookOpen, Download, X, Sparkles, Share2, Check } from 'lucide-react';

interface SermonProps {
  lang: Language;
}

export const SermonArchive: React.FC<SermonProps> = ({ lang }) => {
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);
  const [activeTab, setActiveTab] = useState<'video' | 'audio' | 'notes'>('video');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const filteredSermons = RECENT_SERMONS.filter(s => {
    const q = searchQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.titleZh.includes(q) ||
      s.scripture.toLowerCase().includes(q) ||
      s.speaker.toLowerCase().includes(q) ||
      s.speakerZh.includes(q)
    );
  });

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="sermons" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-500/30">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>{lang === 'zh' ? '主日講道影音' : 'Sermons & Messages'}</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {lang === 'zh' ? '生命的道 • 神的話語' : 'The Word of Life & Truth'}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {lang === 'zh' 
                ? '在線上收聽與觀看陳嘉彰牧師及主講者的證道訊息，下載講道大綱，讓神的話語成為您路上的光。'
                : 'Listen or watch past Sunday messages by Rev. Chen Jiachang. Read scriptures and download sermon outlines.'}
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'zh' ? '搜尋講道題目、經文或講員...' : 'Search sermon, verse, speaker...'}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Sermon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSermons.map((sermon) => (
            <div 
              key={sermon.id}
              className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden shadow-lg hover:border-amber-500/60 transition-all group flex flex-col justify-between"
            >
              {/* Card Header & Series Badge */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-amber-400 font-medium">
                  <span className="bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-500/30">
                    {lang === 'zh' ? sermon.seriesZh : sermon.series}
                  </span>
                  <span className="text-slate-400">{sermon.date}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {lang === 'zh' ? sermon.titleZh : sermon.title}
                  </h3>
                  <div className="text-xs text-amber-200/90 font-medium">
                    {lang === 'zh' ? sermon.speakerZh : sermon.speaker} • {lang === 'zh' ? sermon.scriptureZh : sermon.scripture}
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 font-light leading-relaxed">
                  {lang === 'zh' ? sermon.summaryZh : sermon.summary}
                </p>

                {/* Key Points snippet */}
                <div className="pt-2 border-t border-slate-700/60 space-y-1">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {lang === 'zh' ? '證道大綱綱要' : 'Outline Highlights'}
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {(lang === 'zh' ? sermon.pointsZh : sermon.points).slice(0, 2).map((pt, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-amber-400 mr-1.5">•</span>
                        <span className="truncate">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-4 bg-slate-850 border-t border-slate-700/60 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setSelectedSermon(sermon);
                    setActiveTab('video');
                  }}
                  className="flex-1 flex items-center justify-center space-x-1.5 bg-amber-600 hover:bg-amber-700 text-white py-2 px-3 rounded-xl text-xs font-semibold transition-colors"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? '觀看影音' : 'Watch Video'}</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedSermon(sermon);
                    setActiveTab('audio');
                  }}
                  className="flex items-center justify-center space-x-1 bg-slate-700 hover:bg-slate-600 text-slate-200 py-2 px-3 rounded-xl text-xs font-medium transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'zh' ? '收聽音訊' : 'Audio'}</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedSermon(sermon);
                    setActiveTab('notes');
                  }}
                  className="p-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-xl transition-colors"
                  title="View Scripture & Notes"
                >
                  <FileText className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sermon Player Modal */}
        {selectedSermon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl space-y-4">
              
              {/* Modal Header */}
              <div className="p-6 pb-0 flex items-start justify-between border-b border-slate-800">
                <div>
                  <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                    {lang === 'zh' ? selectedSermon.seriesZh : selectedSermon.series} • {selectedSermon.date}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {lang === 'zh' ? selectedSermon.titleZh : selectedSermon.title}
                  </h3>
                  <div className="text-sm text-slate-400 mt-1">
                    {lang === 'zh' ? selectedSermon.speakerZh : selectedSermon.speaker} | {lang === 'zh' ? selectedSermon.scriptureZh : selectedSermon.scripture}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSermon(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Tabs */}
              <div className="px-6 flex space-x-2 border-b border-slate-800">
                <button
                  onClick={() => setActiveTab('video')}
                  className={`py-2 px-4 text-xs font-bold rounded-t-lg transition-colors flex items-center space-x-1.5 ${
                    activeTab === 'video' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? '影音播放' : 'Video Player'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('audio')}
                  className={`py-2 px-4 text-xs font-bold rounded-t-lg transition-colors flex items-center space-x-1.5 ${
                    activeTab === 'audio' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? '錄音廣播' : 'Audio Stream'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('notes')}
                  className={`py-2 px-4 text-xs font-bold rounded-t-lg transition-colors flex items-center space-x-1.5 ${
                    activeTab === 'notes' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? '證道講義大綱' : 'Sermon Notes'}</span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6 pt-2 space-y-6">
                {activeTab === 'video' && (
                  <div className="space-y-4">
                    <div className="aspect-video w-full rounded-2xl bg-black overflow-hidden relative border border-slate-800">
                      <iframe 
                        className="w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0"
                        title="Sermon Live Stream"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'audio' && (
                  <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 space-y-4 text-center">
                    <div className="p-4 rounded-full bg-amber-500/20 text-amber-400 inline-block border border-amber-500/30">
                      <Volume2 className="w-8 h-8 animate-pulse" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">
                        {lang === 'zh' ? selectedSermon.titleZh : selectedSermon.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {lang === 'zh' ? selectedSermon.speakerZh : selectedSermon.speaker}
                      </div>
                    </div>

                    {/* Simulated Audio Controls */}
                    <div className="max-w-md mx-auto space-y-3 pt-2">
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-1/3 transition-all duration-300" />
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span>08:24</span>
                        <span>38:15</span>
                      </div>
                      <button
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md transition-all"
                      >
                        {isPlayingAudio ? (lang === 'zh' ? '暫停播放' : 'Pause Audio') : (lang === 'zh' ? '播放廣播錄音' : 'Play Audio Stream')}
                      </button>
                    </div>
                  </div>
                )}

                {/* Sermon Notes & Outline */}
                <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/80 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-2">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                      <BookOpen className="w-4 h-4" />
                      <span>{lang === 'zh' ? '經文與證道綱要' : 'Scripture & Outline'}</span>
                    </div>

                    <button
                      onClick={handleShare}
                      className="text-xs text-slate-300 hover:text-white flex items-center space-x-1 bg-slate-700 px-2.5 py-1 rounded-lg"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? (lang === 'zh' ? '已複製' : 'Copied') : (lang === 'zh' ? '分享訊息' : 'Share')}</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-300">
                      {lang === 'zh' ? '核心經文：' : 'Scripture Passage:'} <span className="text-amber-300 font-bold">{lang === 'zh' ? selectedSermon.scriptureZh : selectedSermon.scripture}</span>
                    </div>
                    <p className="text-xs text-slate-300 italic bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                      {lang === 'zh' ? selectedSermon.summaryZh : selectedSermon.summary}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs font-bold text-slate-200 mb-2">
                      {lang === 'zh' ? '證道三大要點：' : 'Key Message Points:'}
                    </div>
                    <ol className="space-y-1.5 text-xs text-slate-300 list-decimal list-inside">
                      {(lang === 'zh' ? selectedSermon.pointsZh : selectedSermon.points).map((pt, idx) => (
                        <li key={idx} className="pl-1">
                          <span className="font-medium">{pt}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
