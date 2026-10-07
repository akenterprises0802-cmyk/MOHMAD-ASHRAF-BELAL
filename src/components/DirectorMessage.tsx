import React from 'react';
import { Quote, Award, Sparkles, Building2, Users2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const DirectorMessage: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Editorial context & Director identity */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
              <span>Director's Communiqué</span>
              <span aria-hidden="true">·</span>
              <span>Leadership Vision</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              "Every business must be focused on what benefits the customer."
            </h2>
            <div className="mt-8 border-l-2 border-sky-500 pl-4 py-1">
              <p className="text-lg font-bold text-white tracking-wide">Mr. ASHRAF BELAL</p>
              <p className="text-sm font-medium text-sky-300">Director – Gloziyo Services Private Limited</p>
              <p className="text-xs text-slate-400 mt-1">IDSPL & Spick & Span Facility Management</p>
            </div>

            {/* Core Values Pillars */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700/60">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Award className="h-4 w-4" />
                  <span>Integrity</span>
                </div>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Transparent contracts and complete statutory compliance without shortcuts.
                </p>
              </div>

              <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700/60">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Sparkles className="h-4 w-4" />
                  <span>Excellence</span>
                </div>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Near-perfection standards through continuous staff audits and KPI scoring.
                </p>
              </div>

              <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700/60">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Building2 className="h-4 w-4" />
                  <span>Versatility</span>
                </div>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Serving small, medium, and large-scale projects across India.
                </p>
              </div>

              <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700/60">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Users2 className="h-4 w-4" />
                  <span>Mutual Respect</span>
                </div>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Valuing our workforce dignity, safety, and long-term patron trust.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Full Director Statement Letter */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-slate-800/90 p-6 sm:p-10 border border-slate-700 shadow-2xl">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-slate-700/60 -scale-x-100" />
              
              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-white">
                  "The idea for Gloziyo Services Pvt. Ltd. came about in {COMPANY_DETAILS.foundedYear}. I truly believe that every business should be focused on what will benefit the customer, and this is why I am personally committed to perfecting our services and encouraging innovation within our team and our clients."
                </p>

                <p>
                  "It's that attention to a personalized service that has grown Gloziyo from a small organisation to a national corporation. We manage facilities and premises India-wide, yet I still make it my personal mission to provide unparalleled customer service to our supporting patrons."
                </p>

                <p>
                  "Gloziyo stands firm in its values. <strong className="text-white font-semibold">Integrity, honesty, excellence, and mutual respect</strong> drive us forward and will continue to define our organization. Through our rapid success, we've been able to continually increase our team in number and expertise and serve more customers since our humble beginnings."
                </p>

                <p>
                  "It makes me proud how versatile our capabilities are; our team can serve small, medium, and large-sized projects throughout India. Finally, I'd like to personally thank you for taking the time to explore IDSPL's services and all that we stand for. We're proud of our achievements, but what keeps us going is our overwhelmingly positive client feedback."
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-white text-base">Mr. ASHRAF BELAL</p>
                  <p className="text-xs text-sky-400">Director — Gloziyo Services Private Limited</p>
                </div>

                <div className="text-xs text-slate-400 text-right">
                  <span>Safe Contractors · ISO & OHSAS Standards</span>
                  <p className="text-slate-500 font-mono text-[11px] mt-0.5">IDSPL / Gloziyo Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
