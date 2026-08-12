import { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, SERVICE_TIMES } from '../data';
import { Calendar, MapPin, Clock, Video, Youtube, Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceScheduleProps {
  currentLang: Language;
}

export default function ServiceSchedule({ currentLang }: ServiceScheduleProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('s1');
  const [copiedLink, setCopiedLink] = useState(false);

  const selectedService = SERVICE_TIMES.find((s) => s.id === selectedServiceId) || SERVICE_TIMES[0];

  const handleCopyZoom = () => {
    navigator.clipboard.writeText('310-626-6103');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {TRANSLATIONS.servicesHeader[currentLang]}
          </h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto my-4 rounded"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            {TRANSLATIONS.servicesSub[currentLang]}
          </p>
        </div>

        {/* Sunday Schedule Overview Timeline Card */}
        <div className="mb-12 bg-emerald-50/70 border border-emerald-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 border-b border-emerald-100 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-1">
                {currentLang === 'en' ? 'Lord\'s Day Schedule' : '主日時間流程表'}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                {currentLang === 'en' ? 'Sunday Order of Gathering' : '主日崇拜與交通時間表'}
              </h3>
            </div>
            <span className="px-3 py-1 bg-white border border-emerald-200 text-emerald-900 rounded-full text-xs font-bold font-mono">
              {currentLang === 'en' ? 'Every Sunday' : '每週主日'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs hover:shadow-sm transition-all">
              <span className="font-mono text-xs font-bold text-emerald-700 block mb-1">10:00 AM</span>
              <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                {currentLang === 'en' ? 'Pre-Service Sunday School' : '禮拜前主日學'}
              </h4>
              <p className="text-stone-500 text-xs">
                {currentLang === 'en' ? 'Classroom & Sanctuary study' : '主堂及各團契教室聖經研讀'}
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs hover:shadow-sm transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500/10 rounded-bl-2xl flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              </div>
              <span className="font-mono text-xs font-bold text-emerald-700 block mb-1">11:00 AM</span>
              <h4 className="font-serif font-bold text-emerald-950 text-base mb-1">
                {currentLang === 'en' ? 'Sunday Worship Service' : '禮拜聖會'}
              </h4>
              <p className="text-stone-500 text-xs">
                {currentLang === 'en' ? 'Main Sanctuary corporate worship' : '大堂主日崇拜、證道與聖餐'}
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs hover:shadow-sm transition-all">
              <span className="font-mono text-xs font-bold text-emerald-700 block mb-1">12:30 PM</span>
              <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                {currentLang === 'en' ? 'Saints Fellowship Lunch' : '聖徒交通會餐'}
              </h4>
              <p className="text-stone-500 text-xs">
                {currentLang === 'en' ? 'Fellowship meal & community' : '副堂聖徒共進午餐愛筵'}
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs hover:shadow-sm transition-all">
              <span className="font-mono text-xs font-bold text-emerald-700 block mb-1">01:00 PM</span>
              <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                {currentLang === 'en' ? 'Choir Rehearsal' : '詩班練歌'}
              </h4>
              <p className="text-stone-500 text-xs">
                {currentLang === 'en' ? 'Choir room praise practice' : '詩班團員練習獻詩與合聲'}
              </p>
            </div>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2 pl-2">
              {currentLang === 'en' ? 'Select a Service' : '選擇聚會'}
            </span>
            {SERVICE_TIMES.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  id={`service-tab-${service.id}`}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-emerald-50/80 border-emerald-300 shadow-sm'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-100'
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className={`font-serif text-base sm:text-lg font-bold ${
                      isSelected ? 'text-emerald-950' : 'text-stone-800'
                    }`}>
                      {service.name[currentLang]}
                    </h3>
                    <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                      <Clock className="h-3.5 w-3.5 text-stone-400" />
                      <span>{service.time[currentLang]}</span>
                    </div>
                  </div>
                  <div className={`p-2 rounded-xl transition-colors ${
                    isSelected ? 'bg-emerald-700 text-white' : 'bg-stone-200 text-stone-600 group-hover:bg-stone-300'
                  }`}>
                    <Calendar className="h-4 w-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed View */}
          <div className="lg:col-span-7">
            <motion.div
              key={selectedServiceId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-stone-50/60 border border-stone-100 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm"
            >
              {/* Service Header Info */}
              <div className="space-y-3 pb-6 border-b border-stone-200/60">
                <span className="inline-block px-3 py-1 bg-emerald-100/80 text-emerald-950 rounded-full text-xs font-bold uppercase tracking-wider">
                  {currentLang === 'en' ? 'Active Focus' : '選中聚會'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">
                  {selectedService.name[currentLang]}
                </h3>
                <p className="text-stone-600 font-sans font-light text-base leading-relaxed">
                  {selectedService.description[currentLang]}
                </p>
              </div>

              {/* Service Metadata Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Time Card */}
                <div className="bg-white p-4 rounded-2xl border border-stone-100 flex items-start gap-3">
                  <div className="p-2.5 bg-amber-50 text-amber-800 rounded-xl">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-stone-400 font-bold uppercase tracking-wider mb-0.5">
                      {currentLang === 'en' ? 'When' : '聚會時間'}
                    </span>
                    <span className="font-sans text-sm font-semibold text-stone-800">
                      {selectedService.time[currentLang]}
                    </span>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-white p-4 rounded-2xl border border-stone-100 flex items-start gap-3">
                  <div className="p-2.5 bg-amber-50 text-amber-800 rounded-xl">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-stone-400 font-bold uppercase tracking-wider mb-0.5">
                      {currentLang === 'en' ? 'Where' : '聚會地點'}
                    </span>
                    <span className="font-sans text-sm font-semibold text-stone-800">
                      {selectedService.location[currentLang]}
                    </span>
                  </div>
                </div>

              </div>

              {/* Live Streaming Info Box */}
              <div className="bg-white rounded-2xl border border-stone-100 p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-50 text-red-600 p-2.5 rounded-xl">
                      <Video className="h-5 w-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">
                        {TRANSLATIONS.watchLive[currentLang]}
                      </h4>
                      <p className="text-xs text-stone-500">
                        {TRANSLATIONS.onlinePlatform[currentLang]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://youtube.com/@canaanshinsheng"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="youtube-live-btn"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold cursor-pointer transition-colors"
                    >
                      <Youtube className="h-4 w-4" />
                      YouTube
                    </a>
                    <button
                      onClick={handleCopyZoom}
                      id="zoom-copy-btn"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold cursor-pointer transition-colors"
                    >
                      {copiedLink ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-emerald-700" />}
                      <span>{copiedLink ? (currentLang === 'en' ? 'Copied Zoom ID!' : '已複製 Zoom ID！') : (currentLang === 'en' ? 'Copy Zoom ID' : '複製 Zoom 號')}</span>
                    </button>
                  </div>
                </div>

                {/* Zoom Credentials Badge */}
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-400 font-sans text-[11px] font-bold uppercase">
                      ZOOM ID:
                    </span>
                    <span className="text-stone-900 font-extrabold bg-white px-2 py-0.5 rounded border border-stone-200">
                      310-626-6103
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-stone-400 font-sans text-[11px] font-bold uppercase">
                      {currentLang === 'en' ? 'Passcode:' : '密碼:'}
                    </span>
                    <span className="text-emerald-950 font-extrabold bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200">
                      25226
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
