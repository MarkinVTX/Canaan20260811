import { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, MINISTRIES } from '../data';
import { ArrowRight, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MinistriesProps {
  currentLang: Language;
  onInquire: () => void;
}

export default function Ministries({ currentLang, onInquire }: MinistriesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="ministries" className="py-16 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {TRANSLATIONS.ministriesHeader[currentLang]}
          </h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto my-4 rounded"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            {TRANSLATIONS.ministriesSub[currentLang]}
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MINISTRIES.map((ministry) => {
            const isExpanded = expandedId === ministry.id;
            return (
              <motion.div
                key={ministry.id}
                layout
                className="bg-white rounded-3xl border border-stone-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
              >
                {/* Ministry Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={ministry.image}
                    alt={ministry.name[currentLang]}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest block mb-0.5">
                      {ministry.tagline[currentLang]}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                      {ministry.name[currentLang]}
                    </h3>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <p className="text-stone-600 text-sm leading-relaxed font-sans font-light line-clamp-3">
                    {ministry.description[currentLang]}
                  </p>

                  <div className="pt-2 border-t border-stone-100">
                    {/* Collapsible Meeting Time */}
                    <button
                      onClick={() => toggleExpand(ministry.id)}
                      id={`ministry-toggle-${ministry.id}`}
                      className="flex items-center justify-between w-full text-xs font-semibold text-stone-500 hover:text-emerald-800 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {currentLang === 'en' ? 'Weekly Meeting Schedule' : '每週聚會時間'}
                      </span>
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mt-2"
                        >
                          <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100/50 mt-1">
                            <span className="block text-xs font-semibold text-emerald-950">
                              {ministry.meetingTime[currentLang]}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Contact CTA */}
                  <div className="pt-2">
                    <button
                      onClick={onInquire}
                      id={`ministry-inquire-${ministry.id}`}
                      className="inline-flex items-center text-xs font-bold text-amber-700 hover:text-amber-900 group cursor-pointer"
                    >
                      <span>{currentLang === 'en' ? 'Get Connected' : '加入我們'}</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
