import React from 'react';
import { ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { GloziyoLogo } from './GloziyoLogo';

interface HeroProps {
  onRequestQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onExploreServices }) => {
  return (
    <section id="overview" className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo and Editorial Sub-kicker */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-5">
          <div className="p-1 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
            <GloziyoLogo size="sm" showText={false} />
          </div>
          <span className="text-sky-800 font-extrabold">{COMPANY_DETAILS.name}</span>
          <span aria-hidden="true">·</span>
          <span>Spick & Span Housekeeping</span>
          <span aria-hidden="true">·</span>
          <span>PSARA Certified Security</span>
          <span aria-hidden="true">·</span>
          <span>Kausa Thane, Maharashtra</span>
        </div>

        {/* Primary Headline and Paragraph - Full Page and Justified */}
        <div className="w-full">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.14] w-full text-justify">
            24-Hour Un-interrupted Manpower Outsourcing & Facility Management
          </h1>
          <p className="mt-6 text-base sm:text-xl lg:text-2xl text-slate-700 leading-relaxed sm:leading-loose w-full text-justify font-normal">
            From the corporate corridors of Mumbai to nationwide industrial sites,{' '}
            <strong className="text-slate-900 font-bold">Gloziyo Services</strong> and{' '}
            <strong className="text-slate-900 font-bold">Spick & Span</strong> provide statutory-compliant staffing, immaculate housekeeping, integrated property maintenance, and precision civil site execution.
          </p>
        </div>

        {/* Action Row */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-700 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-sky-800 transition-all cursor-pointer"
          >
            <span>Request Staffing / Facility Proposal</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={onExploreServices}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all cursor-pointer"
          >
            Explore Services & Profiles
          </button>
        </div>

        {/* Claim-to-Proof Adjacency Bar */}
        <div className="mt-10 grid grid-cols-2 gap-4 border-y border-slate-200 py-4 sm:grid-cols-4">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-900 sm:text-3xl tabular-nums">24 / 7</span>
            <span className="text-xs font-medium text-slate-500 mt-1">Un-interrupted Operations</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-900 sm:text-3xl tabular-nums">100%</span>
            <span className="text-xs font-medium text-slate-500 mt-1">Statutory & Labour Law Compliance</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-900 sm:text-3xl tabular-nums">ISO / OHSAS</span>
            <span className="text-xs font-medium text-slate-500 mt-1">Safe Contractor Standards</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-900 sm:text-3xl tabular-nums">Pan-India</span>
            <span className="text-xs font-medium text-slate-500 mt-1">Mumbai HQ & State Centers</span>
          </div>
        </div>

        {/* Dominant Hero Image Anchor */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl">
          <img
            src="/src/assets/images/hero_facility_corporate_1791373172418.jpg"
            alt="Corporate facility management and executive manpower operations by Gloziyo Services"
            referrerPolicy="no-referrer"
            className="h-[360px] w-full object-cover sm:h-[480px] lg:h-[560px] opacity-90 transition-transform duration-700 hover:scale-[1.01]"
          />
          {/* Measured Scrim Overlay for contrast accessibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent pointer-events-none" />

          {/* Contextual Card at base of visual anchor */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300">
                <ShieldCheck className="h-4 w-4" />
                <span>Statutory Compliance & Near-Perfection Delivery</span>
              </div>
              <h2 className="mt-1 text-lg sm:text-2xl font-bold text-white leading-snug">
                Customized Service Delivery Strategy for Corporate, Govt & Banking Sectors
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-200 line-clamp-2">
                We manage facilities and premises India-wide with personalized care, robust supervisor audits, and state-of-the-art tools and machinery.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 text-xs">
              <div className="flex flex-col">
                <span className="font-bold text-white">Director's Guarantee</span>
                <span className="text-slate-300">Mr. Ashraf Belal</span>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                <span>Verified Safe Vendor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick statutory verification ticker */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-sky-600" />
            <span>24 Hours Continuous Shift Mobilization Across Mumbai & Pan-India</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-medium text-slate-600">
            <span>EPF & ESIC Compliant</span>
            <span aria-hidden="true">·</span>
            <span>CLRA Act Registered</span>
            <span aria-hidden="true">·</span>
            <span>Direct Vendor Empanelment</span>
          </div>
        </div>
      </div>
    </section>
  );
};
