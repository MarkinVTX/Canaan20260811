import React, { useState } from 'react';
import { Language } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Car, Navigation, Sparkles } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [needRide, setNeedRide] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-200/80 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-amber-800" />
            <span>{lang === 'zh' ? '教會位置與聯絡方式' : 'Visit & Contact Us'}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            {lang === 'zh' ? '加南新生基督教會 歡迎您' : 'We Warmly Welcome You'}
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            {lang === 'zh' 
              ? '加南新生基督教會位於加州 Harbor City Western Ave。歡迎隨時電話、電郵與我們聯繫，或預約主日接送車輛。'
              : 'Located on Western Ave in Harbor City, CA. Reach out via phone, email, or request a ride for Sunday worship.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info Cards & Embedded Map Simulation */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                {lang === 'zh' ? '教會聯絡資訊' : 'Church Contact Info'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/80 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">{lang === 'zh' ? '教會會址 (Address)' : 'Church Address'}</div>
                    <div className="text-slate-600 leading-relaxed">{CHURCH_INFO.address}</div>
                    <a 
                      href={CHURCH_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-amber-800 hover:text-amber-900 mt-1"
                    >
                      <span>{lang === 'zh' ? '開啟 Google 地圖導航' : 'Open in Google Maps'}</span>
                      <Navigation className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/80 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">{lang === 'zh' ? '電話號碼 (Telephone)' : 'Phone Numbers'}</div>
                    <div className="space-y-0.5">
                      <a href={`tel:${CHURCH_INFO.phone1}`} className="block text-slate-700 hover:text-amber-800 font-mono font-medium">
                        {CHURCH_INFO.phone1} ({lang === 'zh' ? '主要專線' : 'Main'})
                      </a>
                      <a href={`tel:${CHURCH_INFO.phone2}`} className="block text-slate-700 hover:text-amber-800 font-mono font-medium">
                        {CHURCH_INFO.phone2} ({lang === 'zh' ? '辦公室' : 'Office'})
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/80 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">{lang === 'zh' ? '電子郵件 (Email)' : 'Email Contact'}</div>
                    <a href={`mailto:${CHURCH_INFO.email}`} className="text-amber-800 hover:underline font-mono">
                      {CHURCH_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/80 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">{lang === 'zh' ? '崇拜時間' : 'Service Schedule'}</div>
                    <div className="text-slate-600">
                      {lang === 'zh' ? '每週日上午 11:00 主日崇拜' : 'Sundays at 11:00 AM PST'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Frame Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-5 border border-slate-800 shadow-md space-y-3">
              <div className="flex items-center justify-between text-xs text-amber-300 font-semibold">
                <span className="flex items-center">
                  <Car className="w-4 h-4 mr-1 text-amber-400" />
                  {lang === 'zh' ? '專屬停車場與無障礙設施' : 'Free On-Site Parking'}
                </span>
                <span>Harbor City, CA</span>
              </div>
              
              <div className="aspect-video w-full rounded-2xl bg-slate-800 overflow-hidden relative border border-slate-700">
                <iframe
                  title="Church Location Map"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=25226+Western+Ave,+Harbor+City,+CA+90710&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Ride Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
                {lang === 'zh' ? '在線留言與主日車輛接送預約' : 'Send Message or Request Ride'}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                {lang === 'zh' 
                  ? '如需了解教會、聯繫同工或主日需要車輛接送服務，請填寫下表：'
                  : 'Get in touch with our church team or let us know if you need transportation for Sunday worship.'}
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-bold text-emerald-900 text-lg">
                  {lang === 'zh' ? '訊息已順利送出！' : 'Message Received!'}
                </h4>
                <p className="text-xs text-emerald-800">
                  {lang === 'zh' 
                    ? '加南新生基督教會同工會儘快回覆您，祝您平安喜樂！'
                    : 'Thank you for contacting Canaan New Life Christian Church. We will reply shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      {lang === 'zh' ? '姓名 (Name)' : 'Your Name'}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={lang === 'zh' ? '請輸入姓名' : 'Full Name'}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      {lang === 'zh' ? '電話 (Phone)' : 'Phone Number'}
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="(310) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    {lang === 'zh' ? '電子郵件 (Email)' : 'Email Address'}
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600"
                  />
                </div>

                {/* Ride request toggle */}
                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200/80 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Car className="w-5 h-5 text-amber-800" />
                    <div>
                      <div className="font-bold text-slate-900 text-xs">
                        {lang === 'zh' ? '需要主日接送服務 (Sunday Ride Assistance)' : 'Need Sunday Worship Transportation'}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {lang === 'zh' ? '同工將於主日早晨前往 Harbor City / 南灣接送' : 'Available for South Bay & Harbor City residents'}
                      </div>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    checked={needRide}
                    onChange={(e) => setNeedRide(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-300 text-amber-700 focus:ring-amber-600 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    {lang === 'zh' ? '留言或需求內容 (Message)' : 'Message / Details'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={lang === 'zh' ? '請寫下您的問題、信仰查詢或接送地址...' : 'Write your message or pickup address...'}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-slate-900 hover:bg-amber-800 text-white font-bold py-3.5 rounded-xl shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'zh' ? '送出訊息' : 'Send Message'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
