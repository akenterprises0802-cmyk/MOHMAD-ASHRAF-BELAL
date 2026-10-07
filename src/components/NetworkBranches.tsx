import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  CheckCircle2,
  Navigation,
  Shield,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { BRANCH_LOCATIONS, BranchLocation, COMPANY_DETAILS } from '../data/companyData';

interface CityGeoPoint {
  id: string;
  name: string;
  state: string;
  x: number; // SVG coordinate (0 - 600)
  y: number; // SVG coordinate (0 - 680)
  isHQ?: boolean;
  branchCityMatch: string;
}

const CITY_COORDINATES: CityGeoPoint[] = [
  {
    id: 'thane-mumbai',
    name: 'Thane & Mumbai',
    state: 'Maharashtra',
    x: 172,
    y: 395,
    isHQ: true,
    branchCityMatch: 'Thane & Mumbai (HQ)',
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    x: 194,
    y: 425,
    branchCityMatch: 'Pune',
  },
  {
    id: 'delhi',
    name: 'New Delhi & NCR',
    state: 'Delhi NCR',
    x: 238,
    y: 202,
    branchCityMatch: 'New Delhi & NCR',
  },
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    state: 'Haryana',
    x: 232,
    y: 218,
    branchCityMatch: 'Gurgaon',
  },
  {
    id: 'sonipat',
    name: 'Sonipat',
    state: 'Haryana',
    x: 236,
    y: 188,
    branchCityMatch: 'Sonipat',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    x: 242,
    y: 535,
    branchCityMatch: 'Bengaluru',
  },
  {
    id: 'kolkata',
    name: 'Kolkata & Bhubaneswar',
    state: 'West Bengal & Odisha',
    x: 432,
    y: 312,
    branchCityMatch: 'Kolkata & Bhubaneswar',
  },
];

export const NetworkBranches: React.FC = () => {
  const [selectedBranchCity, setSelectedBranchCity] = useState<string>(BRANCH_LOCATIONS[0].city);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const activeBranch =
    BRANCH_LOCATIONS.find((b) => b.city === selectedBranchCity) || BRANCH_LOCATIONS[0];

  const activeCityPoint =
    CITY_COORDINATES.find((c) => c.branchCityMatch === selectedBranchCity) || CITY_COORDINATES[0];

  const hqPoint = CITY_COORDINATES.find((c) => c.isHQ) || CITY_COORDINATES[0];

  return (
    <section id="branches" className="bg-slate-900 text-white py-16 sm:py-24 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
            <span>Nationwide Reach</span>
            <span aria-hidden="true">·</span>
            <span>Interactive Operational Map</span>
            <span aria-hidden="true">·</span>
            <span>Pan-India Centers</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
            Our Operational Centers Across India
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Gloziyo Services operates with registered headquarters in Thane (Mumbai MMR) and dedicated regional hubs across Delhi NCR, Haryana, Karnataka, and Eastern India. Click on any city pin on the interactive map to explore facility operations.
          </p>
        </div>

        {/* Region & Quick City Switcher on Pad */}
        <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-slate-800/90 rounded-2xl max-w-fit border border-slate-700/80">
          {BRANCH_LOCATIONS.map((branch) => {
            const isSelected = branch.city === selectedBranchCity;
            return (
              <button
                key={branch.city}
                onClick={() => setSelectedBranchCity(branch.city)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${branch.type === 'Headquarters' ? 'bg-amber-400 animate-pulse' : 'bg-sky-400'}`} />
                <span>{branch.city.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Map & Telemetry Dashboard */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Vector SVG India Map */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl p-4 sm:p-8 border border-slate-800 relative shadow-2xl overflow-hidden">
            {/* Map Header Status */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Navigation className="h-3.5 w-3.5 text-sky-400" />
                <span>Click any radar pin to activate local command details</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                Live Network Active
              </span>
            </div>

            {/* SVG Map Container */}
            <div className="relative w-full aspect-[4/4.5] max-h-[560px] mx-auto flex items-center justify-center">
              <svg
                viewBox="0 0 600 680"
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle Grid Pattern */}
                  <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="0.6" strokeDasharray="2,2" />
                  </pattern>

                  {/* HQ Glow Filter */}
                  <filter id="hqGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Arc Gradient */}
                  <linearGradient id="networkLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Background Tech Grid */}
                <rect width="600" height="680" fill="url(#gridPattern)" />

                {/* India Silhouette Vector Path (Stylized Geometric Projection) */}
                <path
                  d="M 235 48 
                     C 245 40, 260 50, 275 62 
                     C 290 75, 305 85, 305 105 
                     C 305 120, 290 135, 275 145 
                     C 270 150, 280 155, 290 155 
                     C 320 155, 350 168, 380 178 
                     C 410 188, 440 185, 465 175 
                     C 485 168, 510 180, 525 200 
                     C 540 220, 550 250, 535 270 
                     C 520 290, 495 295, 480 300 
                     C 460 308, 445 320, 435 340 
                     C 430 350, 440 370, 420 385 
                     C 400 400, 380 415, 360 435 
                     C 345 450, 335 480, 320 515 
                     C 305 550, 280 595, 255 635 
                     C 248 645, 240 645, 235 635 
                     C 215 595, 190 545, 180 500 
                     C 170 455, 160 420, 155 385 
                     C 150 350, 140 330, 130 325 
                     C 115 320, 95 325, 80 340 
                     C 70 350, 60 340, 65 325 
                     C 75 300, 95 285, 115 280 
                     C 135 275, 145 260, 150 240 
                     C 155 220, 170 200, 185 185 
                     C 200 170, 205 150, 210 130 
                     C 215 110, 220 85, 225 65 Z"
                  fill="#0F172A"
                  stroke="#334155"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  className="transition-colors duration-500 hover:fill-slate-900"
                />

                {/* Coastal & Regional Detail Lines */}
                <path
                  d="M 130 325 C 145 315, 160 305, 175 305"
                  stroke="#1E293B"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 172 395 C 220 375, 280 370, 360 435"
                  stroke="#1E293B"
                  strokeWidth="1.2"
                  strokeDasharray="4,4"
                  fill="none"
                />
                <path
                  d="M 238 202 C 280 230, 350 260, 432 312"
                  stroke="#1E293B"
                  strokeWidth="1.2"
                  strokeDasharray="4,4"
                  fill="none"
                />

                {/* Network Radar Connection Arcs (From Thane/Mumbai HQ to other branches) */}
                {CITY_COORDINATES.filter((c) => !c.isHQ).map((city) => {
                  const isCityActive = city.branchCityMatch === selectedBranchCity;
                  return (
                    <path
                      key={`arc-${city.id}`}
                      d={`M ${hqPoint.x} ${hqPoint.y} Q ${(hqPoint.x + city.x) / 2 + 15} ${(hqPoint.y + city.y) / 2 - 20} ${city.x} ${city.y}`}
                      fill="none"
                      stroke={isCityActive ? '#38BDF8' : '#0369A1'}
                      strokeWidth={isCityActive ? '2.5' : '1.2'}
                      strokeDasharray={isCityActive ? 'none' : '3,4'}
                      opacity={isCityActive ? 1 : 0.4}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* City Radar Nodes */}
                {CITY_COORDINATES.map((city) => {
                  const isSelected = city.branchCityMatch === selectedBranchCity;
                  const isHovered = hoveredCity === city.id;

                  return (
                    <g
                      key={city.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedBranchCity(city.branchCityMatch)}
                      onMouseEnter={() => setHoveredCity(city.id)}
                      onMouseLeave={() => setHoveredCity(null)}
                    >
                      {/* Pulsing Target Radar Ring for Active / Hovered City */}
                      {(isSelected || isHovered) && (
                        <>
                          <circle
                            cx={city.x}
                            cy={city.y}
                            r="18"
                            fill="none"
                            stroke={city.isHQ ? '#F59E0B' : '#38BDF8'}
                            strokeWidth="1.5"
                            opacity="0.4"
                            className="animate-ping origin-center"
                          />
                          <circle
                            cx={city.x}
                            cy={city.y}
                            r="12"
                            fill="none"
                            stroke={city.isHQ ? '#FBBF24' : '#0284C7'}
                            strokeWidth="1"
                            opacity="0.7"
                          />
                        </>
                      )}

                      {/* Outer Ring */}
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={city.isHQ ? 7.5 : 5.5}
                        fill={city.isHQ ? '#D97706' : isSelected ? '#0284C7' : '#0F172A'}
                        stroke={city.isHQ ? '#FDE68A' : isSelected ? '#BAE6FD' : '#38BDF8'}
                        strokeWidth={isSelected ? '2.5' : '1.5'}
                        filter={isSelected ? 'url(#hqGlow)' : undefined}
                      />

                      {/* Inner Dot */}
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={city.isHQ ? 3.5 : 2.5}
                        fill={city.isHQ ? '#FFFFFF' : isSelected ? '#FFFFFF' : '#38BDF8'}
                      />

                      {/* City Name Label on Map */}
                      <text
                        x={city.x + (city.id === 'thane-mumbai' ? -12 : city.id === 'kolkata' ? -10 : 12)}
                        y={city.y + (city.id === 'sonipat' ? -10 : 4)}
                        textAnchor={city.id === 'thane-mumbai' ? 'end' : city.id === 'kolkata' ? 'end' : 'start'}
                        fill={isSelected ? '#FFFFFF' : '#94A3B8'}
                        fontSize={city.isHQ ? '12' : '10'}
                        fontWeight={isSelected ? '800' : '600'}
                        className="transition-colors pointer-events-none drop-shadow-md"
                        style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                      >
                        {city.name} {city.isHQ ? '(HQ)' : ''}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Floating Tooltip Pill inside Map */}
              <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/80 text-xs shadow-lg flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${activeCityPoint.isHQ ? 'bg-amber-400 animate-ping' : 'bg-sky-400'}`} />
                <span className="font-bold text-white">Active Node:</span>
                <span className="text-sky-300 font-medium">{activeCityPoint.name}</span>
                <span className="text-slate-500 font-mono">({activeCityPoint.state})</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Operational Telemetry for Selected City */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-800/90 p-6 sm:p-8 border border-slate-700 shadow-2xl flex flex-col justify-between h-full">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                    activeBranch.type === 'Headquarters'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      : 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                  }`}>
                    {activeBranch.type}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24/7 Operations</span>
                </div>
              </div>

              {/* City Title */}
              <h3 className="text-2xl font-black text-white mt-4">
                {activeBranch.city}
              </h3>
              <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider mt-0.5">
                {activeBranch.state} Operational Zone
              </p>

              {/* Verified Address Block */}
              <div className="mt-5 rounded-xl bg-slate-900/80 p-4 border border-slate-700/80 space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Physical Premises
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed mt-0.5">
                      {activeBranch.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Direct Hotlines */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-900/80 p-3.5 border border-slate-700/80">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Phone className="h-3 w-3 text-sky-400" />
                    <span>Direct Phone</span>
                  </p>
                  <a
                    href="tel:+918433639356"
                    className="text-xs sm:text-sm font-extrabold text-white hover:text-sky-300 transition-colors mt-1 block"
                  >
                    {activeBranch.phone}
                  </a>
                </div>

                <div className="rounded-xl bg-slate-900/80 p-3.5 border border-slate-700/80">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Mail className="h-3 w-3 text-sky-400" />
                    <span>Regional Desk</span>
                  </p>
                  <a
                    href={`mailto:${activeBranch.email}`}
                    className="text-xs sm:text-sm font-bold text-sky-300 hover:text-white transition-colors mt-1 block truncate"
                  >
                    {activeBranch.email}
                  </a>
                </div>
              </div>

              {/* Local Command Capabilities */}
              <div className="mt-5 pt-4 border-t border-slate-700">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Local Operational Infrastructure
                </h4>
                <div className="space-y-2 text-xs text-slate-300">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Local Field Officer & Night Patrol Inspection Teams</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>PSARA Police Background Verification Record Depository</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Spick & Span Mechanized Cleaning Equipment Reserve</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Emergency 24-Hour Guard & Housekeeping Relievers</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-8 pt-4 border-t border-slate-700">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-500 shadow-md transition-colors"
              >
                <span>Empanel / Mobilize in {activeBranch.city.split(' ')[0]}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Coordinated with HQ at 01A Tasmiya Tower, Kausa Thane
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
