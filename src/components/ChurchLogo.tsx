import React from 'react';

const churchIconImg = '/src/assets/images/church_big_icon_1786250351622.jpg';

interface ChurchLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'banner';
  showText?: boolean;
  className?: string;
}

export default function ChurchLogo({
  size = 'md',
  showText = true,
  className = '',
}: ChurchLogoProps) {
  // Dimension mappings based on size
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-32 sm:h-32',
    banner: 'w-20 h-20 sm:w-28 sm:h-28',
  };

  const textSizes = {
    sm: { title: 'text-sm', sub: 'text-[9px]' },
    md: { title: 'text-base sm:text-lg', sub: 'text-[10px]' },
    lg: { title: 'text-xl sm:text-2xl', sub: 'text-xs' },
    xl: { title: 'text-2xl sm:text-3xl', sub: 'text-sm' },
    banner: { title: 'text-2xl sm:text-3xl', sub: 'text-xs sm:text-sm' },
  };

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Church Big Icon Avatar / Emblem Badge */}
      <div
        className={`relative shrink-0 rounded-2xl overflow-hidden bg-white border border-stone-200/80 shadow-xs p-1 group transition-all hover:scale-105 ${iconDimensions[size]}`}
      >
        <img
          src={churchIconImg}
          alt="Canaan New Life Christian Church Emblem Logo"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-serif font-extrabold text-stone-900 tracking-tight leading-tight ${textSizes[size].title}`}
          >
            加南新生基督教會
          </span>
          <span
            className={`font-sans tracking-wider text-teal-700 font-bold uppercase ${textSizes[size].sub}`}
          >
            Canaan New Life Christian Church
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * Church Header Banner reproducing the authentic layout with Left Red Chapel logo,
 * Middle bilingual Church Name & Address & Phone, and Right Green EFC Seal Logo.
 */
export function ChurchHeaderBanner({ className = '' }: { className?: string }) {
  return (
    <div
      className={`w-full bg-gradient-to-r from-stone-50 via-white to-stone-50 border border-stone-200/80 rounded-3xl p-5 sm:p-8 shadow-sm ${className}`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
        {/* Left: Big Church Icon Emblem */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border-2 border-teal-100 p-2 shadow-sm flex items-center justify-center">
            <img
              src={churchIconImg}
              alt="Canaan New Life Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left hidden sm:block">
            <span className="block text-xs font-mono font-bold text-teal-700 uppercase tracking-widest">
              Established 1984
            </span>
            <span className="block text-sm font-serif font-bold text-stone-800">
              加南新生基督教會
            </span>
            <span className="block text-[11px] text-stone-500 font-medium">
              Harbor City, California
            </span>
          </div>
        </div>

        {/* Middle: Church Title & Contact Line */}
        <div className="space-y-1.5 flex-1 max-w-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            加南新生基督教會
          </h2>
          <p className="font-sans text-xs sm:text-sm font-extrabold tracking-widest text-teal-800 uppercase">
            CANAAN NEW LIFE CHRISTIAN CHURCH
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-xs text-stone-600 font-sans pt-1">
            <span className="font-medium">📍 25226 Western Ave. Harbor City, CA 90710</span>
            <span className="font-semibold text-stone-900">📞 Tel: 310-626-6103</span>
          </div>
        </div>

        {/* Right: Independent Church Badge */}
        <div className="shrink-0 flex items-center gap-3 bg-teal-50/80 px-4 py-3 rounded-2xl border border-teal-100">
          <div className="w-10 h-10 rounded-full bg-white border border-teal-300 flex items-center justify-center shadow-2xs">
            {/* Cross Emblem */}
            <svg viewBox="0 0 40 40" className="w-6 h-6">
              <line x1="20" y1="6" x2="20" y2="34" stroke="#0d9488" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="10" y1="16" x2="30" y2="16" stroke="#0d9488" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="text-left">
            <span className="block text-[10px] font-bold uppercase text-teal-900">
              Independent Church
            </span>
            <span className="block text-xs font-serif font-bold text-stone-900">
              獨立基督教會
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
