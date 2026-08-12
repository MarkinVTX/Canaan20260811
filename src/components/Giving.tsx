import { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { Heart, Landmark, Mail, PiggyBank, Copy, Check, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface GivingProps {
  currentLang: Language;
}

export default function Giving({ currentLang }: GivingProps) {
  const [copiedZelle, setCopiedZelle] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyZelle = () => {
    navigator.clipboard.writeText('finance@canaanshinsheng.org');
    setCopiedZelle(true);
    setTimeout(() => setCopiedZelle(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('1200 Church Road, Cupertino, CA 95014');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="give" className="py-16 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {TRANSLATIONS.givingHeader[currentLang]}
          </h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto my-4 rounded"></div>
          <p className="text-stone-600 text-base sm:text-lg">
            {TRANSLATIONS.givingSub[currentLang]}
          </p>
        </div>

        {/* Biblical Quote Banner */}
        <div className="max-w-4xl mx-auto bg-emerald-50 border border-emerald-200 p-6 sm:p-8 rounded-3xl mb-12 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-800 shrink-0">
            <Heart className="h-8 w-8 fill-emerald-700 text-emerald-700" />
          </div>
          <div className="space-y-2">
            <p className="font-serif italic text-stone-800 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? '"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7'
                : '「各人要隨本心所酌定的，不要作難，不要勉強，因為捐得樂意的人是神所喜愛的。」—— 哥林多後書 9:7'}
            </p>
            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
              {currentLang === 'en' ? 'Stewardship Devotional' : '奉獻靈修'}
            </p>
          </div>
        </div>

        {/* Ways to Give Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Zelle Option */}
          <div className="bg-white border border-stone-100 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                {TRANSLATIONS.zelleTitle[currentLang]}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {currentLang === 'en' 
                  ? 'The fastest way to support us without processing fees. You can set up recurring giving through your banking app.'
                  : '最便捷、無手續費的奉獻方式。您可以透過您的網路銀行 App 設定定期自動扣款奉獻。'}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-400 mb-2">
                {currentLang === 'en' ? 'Zelle Registered Email' : 'Zelle 註冊郵箱'}
              </span>
              <div className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="text-xs font-mono font-semibold text-stone-800 truncate flex-grow">
                  finance@canaanshinsheng.org
                </span>
                <button
                  onClick={handleCopyZelle}
                  id="copy-zelle-btn"
                  className="p-1.5 rounded-lg bg-white hover:bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 cursor-pointer transition-colors"
                  title={TRANSLATIONS.copiedEmail[currentLang]}
                >
                  {copiedZelle ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
              {copiedZelle && (
                <span className="block text-[10px] text-emerald-600 font-bold mt-1 text-center">
                  {TRANSLATIONS.copiedEmail[currentLang]}
                </span>
              )}
            </div>
          </div>

          {/* Mail Check Option */}
          <div className="bg-white border border-stone-100 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                {TRANSLATIONS.checkTitle[currentLang]}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {currentLang === 'en'
                  ? 'If you prefer mailing paper checks, please write the payable name accurately and mail it to our primary finance office.'
                  : '如果您習慣使用紙本支票，請確認抬頭名稱正確書寫，並郵寄至我們的教會財務辦公室。'}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 space-y-3">
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-400 mb-1">
                  {currentLang === 'en' ? 'Payee (Pay To)' : '支票抬頭 (Pay To)'}
                </span>
                <div className="bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200/80">
                  <span className="text-xs font-serif font-bold text-emerald-950 block">
                    Canaan Shin Sheng Christian Church
                  </span>
                </div>
              </div>

              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-stone-400 mb-1">
                  {currentLang === 'en' ? 'Mailing Address' : '郵寄地址'}
                </span>
                <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                  <span className="text-xs font-sans font-medium text-stone-800 truncate flex-grow">
                    25226 Western Ave. Harbor City, CA 90710
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    id="copy-address-btn"
                    className="p-1.5 rounded-lg bg-white hover:bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 cursor-pointer transition-colors"
                    title={TRANSLATIONS.copiedAddress[currentLang]}
                  >
                    {copiedAddress ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                {copiedAddress && (
                  <span className="block text-[10px] text-emerald-600 font-bold mt-1 text-center">
                    {TRANSLATIONS.copiedAddress[currentLang]}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* In-Person Box */}
          <div className="bg-white border border-stone-100 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <PiggyBank className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                {TRANSLATIONS.offeringTitle[currentLang]}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {currentLang === 'en'
                  ? 'Offerings can be placed in the wooden giving boxes during or after any Sunday Service. Special tithing envelopes are provided in the lobby.'
                  : '您可以在任何主日聚會期間或崇拜後，將奉獻放入大堂後方的奉獻箱。大廳備有奉獻專用信封。'}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center gap-2 bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100/50">
              <Info className="h-4 w-4 text-emerald-700 shrink-0" />
              <p className="text-[10px] font-semibold text-emerald-800 leading-snug">
                {currentLang === 'en'
                  ? 'All donations are tax-deductible in the US. Receipts are mailed annually.'
                  : '所有捐款均可在美國抵稅。奉獻收據將於每年年初寄發。'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
