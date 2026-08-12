import React, { useState } from 'react';
import { Language, ChurchEvent } from '../types';
import { UPCOMING_EVENTS, CHURCH_INFO } from '../data/churchData';
import { Calendar, Clock, MapPin, Video, ExternalLink, Plus, Check } from 'lucide-react';

interface EventsProps {
  lang: Language;
}

export const EventsCalendar: React.FC<EventsProps> = ({ lang }) => {
  const [addedCalId, setAddedCalId] = useState<string | null>(null);

  const handleAddToCalendar = (evt: ChurchEvent) => {
    setAddedCalId(evt.id);
    setTimeout(() => setAddedCalId(null), 2500);
  };

  return (
    <section id="events" className="py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-amber-700" />
              <span>{lang === 'zh' ? '教會最新活動日程' : 'Church Calendar & Events'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              {lang === 'zh' ? '聚會日程 • 靈修活動' : 'Upcoming Gatherings & Events'}
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              {lang === 'zh' 
                ? '歡迎關注加南新生基督教會每週主日、線上禱告會與節期愛宴聚會。'
                : 'Stay updated with upcoming Sunday worship, Zoom prayer meetings, quarterly Holy Communion, and special celebrations.'}
            </p>
          </div>

          <a 
            href={`tel:${CHURCH_INFO.phone1}`}
            className="inline-flex items-center space-x-2 text-xs font-bold text-amber-800 hover:text-amber-900 bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-200"
          >
            <span>{lang === 'zh' ? '洽詢活動詳情: (310) 626-6103' : 'Event Inquiry: (310) 626-6103'}</span>
          </a>
        </div>

        {/* Events Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((evt) => (
            <div 
              key={evt.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Category Badge & Date */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    evt.category === 'prayer' ? 'bg-indigo-100 text-indigo-800' :
                    evt.category === 'worship' ? 'bg-amber-100 text-amber-900' :
                    'bg-emerald-100 text-emerald-800'
                  }`}>
                    {evt.category === 'prayer' ? (lang === 'zh' ? '線上禱告會' : 'Prayer') :
                     evt.category === 'worship' ? (lang === 'zh' ? '主日禮拜' : 'Worship') :
                     (lang === 'zh' ? '團契愛宴' : 'Fellowship')}
                  </span>

                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {evt.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-900">
                  {lang === 'zh' ? evt.titleZh : evt.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {lang === 'zh' ? evt.descriptionZh : evt.description}
                </p>

                <div className="space-y-1.5 pt-2 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{lang === 'zh' ? evt.timeZh : evt.time}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {evt.zoomId ? <Video className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> : <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />}
                    <span className="font-medium text-slate-800">{lang === 'zh' ? evt.locationZh : evt.location}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleAddToCalendar(evt)}
                  className="w-full flex items-center justify-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl text-xs font-semibold transition-colors"
                >
                  {addedCalId === evt.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{lang === 'zh' ? '已加入日曆' : 'Added to Calendar'}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>{lang === 'zh' ? '加入個人日曆' : 'Add to Calendar'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
