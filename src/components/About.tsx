import { useState } from 'react';
import { Language } from '../types';
import { CHURCH_HISTORY, STATEMENT_OF_FAITH } from '../data';
import { History, ShieldCheck, Calendar, BookOpen, ScrollText, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  const [activeTab, setActiveTab] = useState<'history' | 'faith'>('history');

  return (
    <section id="about" className="py-20 bg-stone-50 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-emerald-50 rounded-full border border-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <ScrollText className="h-4 w-4 text-emerald-700" />
            <span>{currentLang === 'en' ? 'Our Heritage & Faith' : '教會歷史與信仰根基'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {currentLang === 'en' ? 'History & Statement of Faith' : '加南新生基督教會 歷史與信仰告白'}
          </h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto my-4 rounded"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            {currentLang === 'en'
              ? 'Anchored in Holy Scripture, committed to Christ, and serving as a home for believers in Southern California.'
              : '立界於無誤聖經，委身於基督，作為南加州廣大聖徒與家庭靈魂的溫馨港灣。'}
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex p-1 bg-stone-200/70 rounded-2xl mt-8">
            <button
              onClick={() => setActiveTab('history')}
              id="about-tab-history"
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                activeTab === 'history'
                  ? 'bg-white text-emerald-950 font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <History className="h-4 w-4" />
              <span>{currentLang === 'en' ? 'Church History' : '教會歷史'}</span>
            </button>
            <button
              onClick={() => setActiveTab('faith')}
              id="about-tab-faith"
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                activeTab === 'faith'
                  ? 'bg-white text-emerald-950 font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              <span>{currentLang === 'en' ? 'Statement of Faith' : '信仰告白 (A-L)'}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Church History Timeline */}
        {activeTab === 'history' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative border-l-2 border-emerald-200/80 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-10 py-4">
              {CHURCH_HISTORY.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Circle dot on timeline */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-emerald-600 group-hover:scale-125 group-hover:bg-emerald-600 transition-all shadow-xs" />

                  {/* Year Tag */}
                  <div className="sm:absolute sm:-left-36 sm:top-1 text-emerald-800 font-mono font-extrabold text-base sm:text-lg sm:text-right w-28 mb-1 sm:mb-0">
                    <span className="inline-flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                      <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                      {item.year}
                    </span>
                  </div>

                  {/* Milestone Card */}
                  <div className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-2xs hover:shadow-md transition-all">
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 mb-2">
                      {item.title[currentLang]}
                    </h3>
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
                      {item.detail[currentLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Independent Church Highlight Banner */}
            <div className="bg-gradient-to-r from-teal-900 via-teal-950 to-cyan-950 text-white p-6 sm:p-8 rounded-3xl shadow-md border border-teal-800 flex flex-col sm:flex-row items-center gap-6 mt-12">
              <div className="p-4 bg-teal-800/80 rounded-2xl shrink-0 text-cyan-200">
                <BookOpen className="h-8 w-8" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
                  {currentLang === 'en' ? 'Church Identity & Today' : '教會現況與定位'}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold">
                  {currentLang === 'en' ? 'Independent Evangelical Christian Church' : '獨立基督教會'}
                </h4>
                <p className="text-teal-100/90 text-sm leading-relaxed">
                  {currentLang === 'en'
                    ? 'Canaan New Life Christian Church operates as an independent evangelical church, dedicated to preaching pure gospel truth, worshipping God, and serving the South Bay / Harbor City community.'
                    : '加南新生基督教會現已脫離台福宗派，正式成為一間獨立基督教會，持續堅守聖經真理，高舉基督，同心服事南加州 Harbor City 與南灣社區。'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Statement of Faith (A-L) */}
        {activeTab === 'faith' && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl text-emerald-900 text-xs sm:text-sm font-medium flex items-center gap-3 mb-8">
              <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0" />
              <span>
                {currentLang === 'en'
                  ? 'We firmly hold the traditional Evangelical Statement of Faith consisting of 12 core Biblical tenets (Articles A through L).'
                  : '我們堅守正統福音信仰，包含以下十二條完備聖經信仰告白（A 至 L 條）：'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {STATEMENT_OF_FAITH.map((article) => (
                <div
                  key={article.letter}
                  className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-2xs hover:shadow-sm transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 font-serif font-extrabold text-sm flex items-center justify-center shrink-0">
                        {article.letter}
                      </span>
                      <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                        {article.title[currentLang]}
                      </h3>
                    </div>
                    <p className="text-stone-700 font-sans text-sm leading-relaxed pl-11">
                      {article.content[currentLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
