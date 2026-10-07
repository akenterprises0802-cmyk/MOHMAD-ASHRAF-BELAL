import React, { useState } from 'react';
import { Sparkles, Users, Wrench, HardHat, Shield, Check, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/companyData';

interface ServicesBentoProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
  onNavigateToSecurity?: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({
  onSelectServiceForQuote,
  onNavigateToSecurity,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_LIST[0].id);

  const activeService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'security-services':
        return <Shield className="h-5 w-5 text-sky-600" />;
      case 'spick-span':
        return <Sparkles className="h-5 w-5 text-sky-600" />;
      case 'manpower-outsourcing':
        return <Users className="h-5 w-5 text-sky-600" />;
      case 'facility-maintenance':
        return <Wrench className="h-5 w-5 text-sky-600" />;
      case 'civil-engineering':
        return <HardHat className="h-5 w-5 text-sky-600" />;
      default:
        return <Sparkles className="h-5 w-5 text-sky-600" />;
    }
  };

  return (
    <section id="services" className="bg-neutral-50 py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with unboxed metadata */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <span>Core Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Security & Facility Verticals</span>
            <span aria-hidden="true">·</span>
            <span>PSARA & Statutory Compliant</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Comprehensive Security, Manpower & Property Solutions
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Delivering integrated single, multiple, and comprehensive facility and security models designed to safeguard people, uphold hygiene standards, and prolong the lifeline of real estate assets.
          </p>
        </div>

        {/* Interactive Functional Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-slate-200/80 rounded-xl max-w-fit">
          {SERVICES_LIST.map((service) => {
            const isActive = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {getServiceIcon(service.id)}
                <span className="whitespace-nowrap">{service.title.split(' ')[0]} {service.title.split(' ')[1] || ''}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Showcase Card for Active Service */}
        <div className="mt-8 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual media anchor */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[460px] bg-slate-900">
              <img
                src={activeService.image}
                alt={activeService.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  {activeService.badge}
                </span>
                <p className="mt-1 text-lg font-bold sm:text-xl text-white">
                  {activeService.subtitle}
                </p>
              </div>
            </div>

            {/* Service Details & Scope */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-500">
                  <span>Operational Vertical</span>
                  <span aria-hidden="true">·</span>
                  <span>24/7 Coverage</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {activeService.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeService.description}
                </p>

                {/* Key Operational Highlights */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Key Performance Highlights
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {activeService.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sectors & Scope Undertaken */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Scope of Undertaken Facilities
                  </h4>
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-600">
                    {activeService.scope.map((item, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectServiceForQuote(activeService.title)}
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 transition-all cursor-pointer"
                  >
                    <span>Request Proposal for {activeService.title.split(' ')[0]}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Direct link to dedicated security page when Security is selected */}
                  {activeService.id === 'security-services' && onNavigateToSecurity && (
                    <button
                      onClick={onNavigateToSecurity}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-sky-600 bg-sky-50 px-4 py-2.5 text-xs font-bold text-sky-800 hover:bg-sky-100 transition-colors cursor-pointer"
                    >
                      <Shield className="h-3.5 w-3.5 text-sky-700" />
                      <span>Explore Full Security Page →</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Statutory Compliance Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Pillar Grid Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {SERVICES_LIST.map((srv, index) => (
            <div
              key={srv.id}
              onClick={() => setSelectedServiceId(srv.id)}
              className={`group cursor-pointer rounded-xl p-5 transition-all border ${
                selectedServiceId === srv.id
                  ? 'border-sky-600 bg-white shadow-md ring-1 ring-sky-600'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-sky-50 text-sky-700 group-hover:bg-sky-100 transition-colors">
                  {getServiceIcon(srv.id)}
                </div>
                <span className="text-xs font-bold text-slate-400 tabular-nums">
                  0{index + 1}
                </span>
              </div>
              <h4 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                {srv.title}
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {srv.subtitle}
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-sky-700">
                <span>View Details</span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
