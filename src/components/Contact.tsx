import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { Mail, Phone, MapPin, Clock, Compass, Send, Check, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import ChurchMapImage from './ChurchMapImage';

interface ContactProps {
  currentLang: Language;
}

export default function Contact({ currentLang }: ContactProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccess(false);

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg(currentLang === 'en' ? 'Please fill in all required fields.' : '請填寫所有必要欄位。');
      return;
    }

    setIsLoading(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {TRANSLATIONS.contactHeader[currentLang]}
          </h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto my-4 rounded"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            {TRANSLATIONS.contactSub[currentLang]}
          </p>
        </div>

        {/* Form and Contact Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact info and Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest">
                {TRANSLATIONS.contactInfo[currentLang]}
              </span>

              {/* Physical Address */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl shrink-0">
                  <MapPin className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-stone-900 mb-0.5">
                    {currentLang === 'en' ? 'Sanctuary & Main Office' : '大堂與辦公地址'}
                  </h4>
                  <p className="text-sm text-stone-600 font-sans leading-relaxed">
                    25226 Western Ave. Harbor City, CA 90710
                  </p>
                  <span className="text-[10px] text-stone-400 font-medium font-sans">
                    {currentLang === 'en' ? '(Western Ave & Pacific Coast Hwy, spacious free parking)' : '（位於 Western Ave 與 PCH 附近，備有免費停車場）'}
                  </span>
                </div>
              </div>

              {/* Contact Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl shrink-0">
                  <Mail className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-stone-900 mb-0.5">
                    {currentLang === 'en' ? 'General Inquiry Email' : '電子郵件'}
                  </h4>
                  <p className="text-sm text-stone-600 font-sans">
                    info@canaannewlife.org
                  </p>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl shrink-0">
                  <Phone className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-stone-900 mb-0.5">
                    {currentLang === 'en' ? 'Administrative Phone' : '行政聯絡電話'}
                  </h4>
                  <p className="text-sm text-stone-600 font-mono">
                    (310) 626-6103
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl shrink-0">
                  <Clock className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-stone-900 mb-0.5">
                    {TRANSLATIONS.officeHours[currentLang]}
                  </h4>
                  <p className="text-sm text-stone-600 font-sans">
                    {TRANSLATIONS.officeHoursText[currentLang]}
                  </p>
                </div>
              </div>
            </div>

            {/* Map & Parking Directions Block */}
            <div className="bg-stone-50 border border-stone-200/80 p-5 sm:p-6 rounded-3xl space-y-4 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200/70 pb-3">
                <span className="flex items-center gap-2 text-teal-950 font-serif font-extrabold text-sm sm:text-base">
                  <Compass className="h-5 w-5 text-teal-700" />
                  {currentLang === 'en' ? 'Church Location & Parking Lot Map' : '聚會地點與停車場地圖'}
                </span>
                <a
                  href="https://maps.google.com/?q=25226+S+Western+Ave,+Harbor+City,+CA+90710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-teal-800 hover:text-teal-950 font-bold bg-white px-2.5 py-1 rounded-lg border border-stone-200 shadow-2xs transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 text-teal-600" />
                  {currentLang === 'en' ? 'Open in Google Maps' : '在 Google 地圖中開啟'} ↗
                </a>
              </div>

              {/* Real Google Map Embed */}
              <div className="space-y-3">
                <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-stone-200 shadow-2xs relative bg-stone-100">
                  <iframe
                    title="Canaan New Life Christian Church Location Map"
                    src="https://maps.google.com/maps?q=25226+S+Western+Ave,+Harbor+City,+CA+90710&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                {/* Parking Lot Directions Card matching the uploaded picture */}
                <div className="bg-white p-4.5 rounded-2xl border border-stone-200/80 space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-teal-950 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-600 animate-pulse"></span>
                      {currentLang === 'en' ? 'Main Entrance & Parking Lot (253rd St)' : '主要入口與停車場（位在 253rd St）'}
                    </span>
                    <span className="text-[10px] bg-teal-100/80 text-teal-900 px-2.5 py-0.5 rounded-md border border-teal-200 font-extrabold">
                      {currentLang === 'en' ? 'Entrance on 253rd St' : '正門與停車場入口由 253rd St 進入'}
                    </span>
                  </div>

                  {/* Exact Parking Map Diagram Matching User Image */}
                  <div className="rounded-xl overflow-hidden border border-stone-200 bg-stone-100 shadow-2xs">
                    <ChurchMapImage />
                  </div>

                  {/* Important Entrance Banner */}
                  <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-xl text-amber-950 text-xs font-medium flex items-start gap-2.5">
                    <span className="text-base shrink-0">🚪</span>
                    <div>
                      <span className="font-bold block text-amber-900 mb-0.5">
                        {currentLang === 'en' ? 'Main Entrance Notice' : '正門入口重要提示'}
                      </span>
                      {currentLang === 'en'
                        ? 'Please note: The main entrance and parking lot access are located on 253rd St (turn east off S Western Ave).'
                        : '特別提醒：教會正門入口與免費停車場均位於 253rd St 上（自 S Western Ave 轉入 253rd St 即達）。'}
                    </div>
                  </div>

                  {/* Step by step text guide */}
                  <div className="text-xs text-stone-700 space-y-1.5 font-sans bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <p className="font-semibold text-stone-900">
                      📍 {currentLang === 'en' ? 'Address:' : '聚會地點：'} 25226 S Western Ave. Harbor City, CA 90710
                    </p>
                    <p className="text-stone-600 leading-relaxed">
                      🚗 {currentLang === 'en'
                        ? 'Driving & Entrance: Drive along S Western Ave (Hwy 213) → Turn east onto 253rd St → Main entrance and parking lot entrance are directly on 253rd St.'
                        : '開車與入場說明：沿 S Western Ave (213號公路) 行駛 → 東轉進入 253rd St → 教會正門與停車場入口即在 253rd St 側邊（隔壁為 The Pines Christian School）。'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7 bg-stone-50/60 border border-stone-100 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-6">
              {currentLang === 'en' ? 'Send an Email Message' : '發送電子郵件訊息'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
                    {TRANSLATIONS.formName[currentLang]} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    id="contact-name"
                    className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    placeholder="e.g., Sarah Smith"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
                    {TRANSLATIONS.formEmail[currentLang]} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="contact-email"
                    className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    placeholder="e.g., sarah@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
                  {TRANSLATIONS.formSubject[currentLang]}
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  id="contact-subject"
                  className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  placeholder={currentLang === 'en' ? 'e.g. Question about fellowship groups' : '例如：關於小組團契的詢問'}
                />
              </div>

              {/* Message Content */}
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
                  {TRANSLATIONS.formMessage[currentLang]} <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contact-message"
                  className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  placeholder={currentLang === 'en' ? 'Type your detailed message here...' : '請在此輸入您的訊息內容...'}
                />
              </div>

              {/* Status Alerts */}
              {errorMsg && (
                <div className="text-red-600 text-xs font-semibold flex items-center gap-1.5 bg-red-50 p-2.5 rounded-xl border border-red-100">
                  <ShieldAlert className="h-4 w-4" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {success && (
                <div className="text-emerald-700 text-xs font-semibold flex items-center gap-1.5 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                  <Check className="h-4 w-4" />
                  <span>{TRANSLATIONS.messageSent[currentLang]}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-400 text-white font-semibold transition-all shadow-md cursor-pointer flex justify-center items-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>{TRANSLATIONS.sendMessage[currentLang]}</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
