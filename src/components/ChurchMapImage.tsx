import React from 'react';

export default function ChurchMapImage({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl border border-stone-300 shadow-xs bg-[#f4f3ee] select-none ${className}`}>
      <svg
        viewBox="0 0 740 430"
        className="w-full h-auto block"
        style={{ fontFamily: 'sans-serif' }}
      >
        {/* Map Background */}
        <rect width="740" height="430" fill="#f2f0e8" />

        {/* Parcels / Buildings */}
        {/* Top left building block */}
        <rect x="25" y="20" width="135" height="120" fill="#e8e6dc" rx="2" />
        <rect x="25" y="160" width="135" height="120" fill="#e8e6dc" rx="2" />
        <rect x="25" y="300" width="135" height="120" fill="#e8e6dc" rx="2" />

        {/* School Parcel Top Center */}
        <rect x="250" y="20" width="220" height="140" fill="#eae8de" rx="2" />
        
        {/* School Icon & Label */}
        <g transform="translate(260, 60)">
          <circle cx="12" cy="12" r="11" fill="#c4a572" />
          {/* Grad cap icon */}
          <path d="M12 6 L19 10 L12 14 L5 10 Z" fill="#ffffff" />
          <path d="M8 12.5 V16 C8 17.5 16 17.5 16 16 V12.5" fill="none" stroke="#ffffff" strokeWidth="1.5" />
          <text x="30" y="10" fontSize="13" fontWeight="bold" fill="#555555">The Pines</text>
          <text x="30" y="24" fontSize="13" fontWeight="bold" fill="#555555">Christian School</text>
        </g>

        {/* Surrounding Residential Parcels */}
        <rect x="490" y="20" width="70" height="100" fill="#ebe9e0" rx="2" />
        <rect x="580" y="20" width="60" height="110" fill="#ebe9e0" rx="2" />
        <rect x="660" y="20" width="65" height="100" fill="#ebe9e0" rx="2" />

        <rect x="510" y="180" width="100" height="140" fill="#ebe9e0" rx="2" />
        <rect x="630" y="180" width="95" height="140" fill="#ebe9e0" rx="2" />

        {/* Roads */}
        {/* S Western Ave (Vertical) */}
        <rect x="180" y="0" width="55" height="430" fill="#ffffff" />
        <line x1="180" y1="0" x2="180" y2="430" stroke="#d5d3c8" strokeWidth="1.5" />
        <line x1="235" y1="0" x2="235" y2="430" stroke="#d5d3c8" strokeWidth="1.5" />

        {/* S Western Ave Arrows & Labels */}
        <text x="200" y="200" fontSize="16" fontWeight="bold" fill="#666666" transform="rotate(-90, 200, 200)">
          S Western Ave
        </text>
        
        {/* Northbound Lane Arrows on S Western Ave */}
        <g stroke="#999999" strokeWidth="2" fill="none">
          <path d="M 218 140 L 218 125 M 215 130 L 218 125 L 221 130" />
          <path d="M 218 270 L 218 255 M 215 260 L 218 255 L 221 260" />
          <path d="M 192 390 L 192 405 M 189 400 L 192 405 L 195 400" />
          <path d="M 192 160 L 192 145 M 189 150 L 192 145 L 195 150" />
        </g>

        {/* Hwy 213 Shield */}
        <g transform="translate(192, 300)">
          <rect x="0" y="0" width="28" height="18" rx="4" fill="#ffffff" stroke="#666666" strokeWidth="1.5" />
          <text x="14" y="13" fontSize="10" fontWeight="bold" fill="#333333" textAnchor="middle">213</text>
        </g>

        {/* 253rd St (Horizontal Road) */}
        <rect x="0" y="380" width="740" height="50" fill="#ffffff" />
        <line x1="0" y1="380" x2="740" y2="380" stroke="#d5d3c8" strokeWidth="1.5" />

        {/* 253rd St Labels */}
        <text x="75" y="410" fontSize="15" fontWeight="bold" fill="#555555">253rd St</text>
        <text x="280" y="410" fontSize="15" fontWeight="bold" fill="#555555">253rd St</text>
        <text x="510" y="410" fontSize="15" fontWeight="bold" fill="#555555">253rd St</text>
        <text x="670" y="410" fontSize="15" fontWeight="bold" fill="#555555">253rd St</text>

        {/* Compass Rose (Top Right) */}
        <g transform="translate(630, 75)">
          <line x1="0" y1="-30" x2="0" y2="30" stroke="#111111" strokeWidth="2" />
          <line x1="-30" y1="0" x2="30" y2="0" stroke="#111111" strokeWidth="2" />
          {/* Compass Star Pointer */}
          <polygon points="0,-30 -5,0 0,0" fill="#111111" />
          <polygon points="0,-30 5,0 0,0" fill="#888888" />
          <polygon points="0,30 -5,0 0,0" fill="#888888" />
          <polygon points="0,30 5,0 0,0" fill="#111111" />
          <polygon points="30,0 0,-5 0,0" fill="#111111" />
          <polygon points="30,0 0,5 0,0" fill="#888888" />
          <polygon points="-30,0 0,-5 0,0" fill="#888888" />
          <polygon points="-30,0 0,5 0,0" fill="#111111" />

          <text x="0" y="-36" fontSize="16" fontWeight="900" fill="#000000" textAnchor="middle">N</text>
          <text x="0" y="48" fontSize="16" fontWeight="900" fill="#000000" textAnchor="middle">S</text>
          <text x="42" y="5" fontSize="16" fontWeight="900" fill="#000000" textAnchor="middle">E</text>
          <text x="-42" y="5" fontSize="16" fontWeight="900" fill="#000000" textAnchor="middle">W</text>
        </g>

        {/* RED PARKING LOT BOX */}
        <rect x="255" y="195" width="280" height="95" fill="none" stroke="#d31010" strokeWidth="5" />

        {/* Parking Lot Text */}
        <text x="300" y="222" fontSize="22" fontFamily="serif" fontWeight="900" fill="#000000">
          Parking lot
        </text>

        {/* Red Map Location Pin */}
        <g transform="translate(390, 248)">
          <path
            d="M 0 -24 C -8 -24 -14 -18 -14 -10 C -14 2 0 16 0 16 C 0 16 14 2 14 -10 C 14 -18 8 -24 0 -24 Z"
            fill="#d31010"
            stroke="#b00c0c"
            strokeWidth="1"
          />
          <circle cx="0" cy="-10" r="5" fill="#ffffff" />
          {/* Shadow dot */}
          <ellipse cx="0" cy="18" rx="3" ry="1.5" fill="#a0a0a0" />
        </g>

        {/* Address next to pin */}
        <text x="410" y="260" fontSize="13" fontWeight="bold" fill="#8b0000">
          25226 S Western Ave
        </text>

        {/* Red Arrow Inside Parking Lot (pointing left) */}
        <g fill="#d31010" stroke="#d31010">
          <line x1="495" y1="230" x2="435" y2="230" strokeWidth="5" />
          <polygon points="435,222 415,230 435,238" />
        </g>

        {/* RED ROUTE ARROWS FROM 253RD ST */}
        {/* Horizontal arrow on 253rd St */}
        <g fill="#d31010" stroke="#d31010">
          <line x1="255" y1="416" x2="505" y2="416" strokeWidth="5" />
          <polygon points="495,408 515,416 495,424" />
        </g>

        {/* Vertical arrow turning north into Parking Lot */}
        <g fill="#d31010" stroke="#d31010">
          <line x1="505" y1="416" x2="505" y2="300" strokeWidth="5" />
          <polygon points="497,305 505,285 513,305" />
        </g>

        {/* Church Name Label directly below box */}
        <text x="255" y="325" fontSize="20" fontFamily="serif" fontWeight="bold" fill="#000000">
          加南新生基督教會
        </text>
        <text x="255" y="348" fontSize="15" fontFamily="sans-serif" fontWeight="bold" fill="#111111">
          Canaan New Life Christian Church
        </text>
      </svg>
    </div>
  );
}
