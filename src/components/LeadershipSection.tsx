import React from 'react';
import { UserCheck, Award, Briefcase, HardHat, Mail, ShieldCheck, PhoneCall } from 'lucide-react';
import { MANAGEMENT_TEAM, ManagementProfile, COMPANY_DETAILS } from '../data/companyData';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="bg-white py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <span>Corporate Governance</span>
            <span aria-hidden="true">·</span>
            <span>The Management</span>
            <span aria-hidden="true">·</span>
            <span>Leadership</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Competent Leadership Driving Operational Rigor
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Gloziyo Services is managed by a seasoned team of professionals hailing from varied fields of specialization. Under the able leadership of our Director, Mr. Ashraf Belal, our executives champion customer-centricity, technical precision, and statutory compliance.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {MANAGEMENT_TEAM.map((member, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Header Lockup */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                      {member.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {member.credentials}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-sky-700 shadow-sm shrink-0">
                    {idx === 0 ? (
                      <Award className="h-6 w-6" />
                    ) : idx === 3 ? (
                      <HardHat className="h-6 w-6" />
                    ) : (
                      <UserCheck className="h-6 w-6" />
                    )}
                  </div>
                </div>

                {/* Bio Prose */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {member.bio}
                </p>

                {/* Direct Quote if present */}
                {member.quote && (
                  <div className="mt-4 rounded-xl bg-sky-50 border border-sky-100 p-4">
                    <p className="text-xs italic text-sky-900 font-medium leading-relaxed">
                      "{member.quote}"
                    </p>
                  </div>
                )}

                {/* Specialization Areas */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Specialized Domains
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialization.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Trust Marker */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="h-4 w-4 text-sky-600" />
                  <span>Gloziyo Core Executive</span>
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  Since Inception (2024)
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Culture & Open Work Environment Box */}
        <div className="mt-12 rounded-2xl bg-slate-900 text-white p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Work Culture @ Gloziyo Services Pvt. Ltd.
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                An Open, Professional & Collegiate Environment
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Gloziyo Services demands an ethical and participative style of functioning from its consultants. Our team members act as brand ambassadors for high-profile enterprise clients and as friendly advisors for candidates, ensuring effective delivery both ways.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-xs">
                <p className="font-bold text-white">Direct Executive Escalation</p>
                <p className="text-slate-400 mt-1">Our management team reviews site logs and client satisfaction scores weekly.</p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+918433639356"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-500 transition-colors"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Call: +91-84336 39356</span>
                </a>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{COMPANY_DETAILS.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
