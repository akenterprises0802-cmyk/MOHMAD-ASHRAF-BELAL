import React from 'react';
import { ShieldAlert, Award, Droplets, Zap, CheckCircle2, FileCheck2, BarChart3, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US, STATUTORY_CHECKLIST } from '../data/companyData';

export const SustainabilitySection: React.FC = () => {
  return (
    <section className="bg-neutral-50 py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <span>Safety, Quality & Governance</span>
            <span aria-hidden="true">·</span>
            <span>ISO & OHSAS Certified</span>
            <span aria-hidden="true">·</span>
            <span>Zero Slop</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Safety & Quality Assurance That Protects Your Enterprise
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Our strength is in our people and their skills. Gloziyo Services conducts recurring skill and safety audits while setting challenging KPI scoring systems to guarantee high-grade technical output in every facility.
          </p>
        </div>

        {/* 3 Core Pillars: Training, Low Accidents, Eco Efficiency */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-sky-50 text-sky-700 w-fit mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Continuous Skills & Safety Audits
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Management audits staff skills, equipment handling, and safety knowledge regularly. Reasonable yet challenging KPIs with transparent scoring ensure exceptional technical quality.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-sky-700">
              Scored KPI Performance Benchmarks
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 w-fit mb-4">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Industry-Leading Low Accident Rates
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                We operate state-of-the-art machinery, personal protective equipment (PPE), and formal OHSAS risk management policies to eliminate workplace hazards and keep crews healthy.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-700">
              Safe Contractors Certified Standards
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-teal-50 text-teal-700 w-fit mb-4">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Water & Energy Conservation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                We care for our clients and the environment. Our facility teams proactively identify opportunities to reduce energy consumption and conserve water across all managed properties.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-teal-700">
              Eco-Friendly Cleaning Reagents
            </div>
          </div>
        </div>

        {/* Why Gloziyo Services - Grid */}
        <div className="mt-16">
          <div className="border-b border-slate-200 pb-4 mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Why Enterprise Clients Partner With Gloziyo Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Measurable advantages delivered across commercial complexes, banking branches, and industrial hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white p-6 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
                  <span>Advantage 0{idx + 1}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Compliance Matrix */}
        <div className="mt-16 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Statutory Compliance Record
              </span>
              <h4 className="mt-1 text-xl font-bold text-slate-900">
                100% Legal Protection for Principal Employers
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              <CheckCircle2 className="h-4 w-4" />
              <span>Full Labor Code Compliance</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STATUTORY_CHECKLIST.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between rounded-xl bg-slate-50 p-3.5 border border-slate-200/80"
              >
                <div>
                  <p className="text-xs font-bold text-slate-900">{stat.label}</p>
                  <p className="text-[11px] font-mono text-slate-500 mt-0.5">{stat.code}</p>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-100 whitespace-nowrap">
                  {stat.status}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500 leading-relaxed">
            * As a registered company complying with all statutory obligations, Gloziyo Services provides monthly verified challans for EPF and ESIC along with wage registers to ensure zero vicarious liability for our client organizations.
          </p>
        </div>
      </div>
    </section>
  );
};
