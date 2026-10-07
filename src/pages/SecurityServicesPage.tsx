import React, { useState } from 'react';
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Radio,
  Eye,
  Users,
  Award,
  CheckCircle2,
  PhoneCall,
  Clock,
  ArrowRight,
  FileCheck2,
  Lock,
  ChevronRight,
  AlertTriangle,
} from 'lucide-react';
import {
  SECURITY_SERVICES_DETAILS,
  SECURITY_ROLES,
  COMPANY_DETAILS,
  SecuritySubService,
} from '../data/companyData';

interface SecurityServicesPageProps {
  onRequestSecurityQuote: (serviceName?: string) => void;
  onNavigateHome: () => void;
}

export const SecurityServicesPage: React.FC<SecurityServicesPageProps> = ({
  onRequestSecurityQuote,
  onNavigateHome,
}) => {
  const [selectedSubService, setSelectedSubService] = useState<string>(
    SECURITY_SERVICES_DETAILS[0].id
  );
  const [guardType, setGuardType] = useState('Unarmed Corporate Guard');
  const [guardCount, setGuardCount] = useState(6);
  const [guardShift, setGuardShift] = useState('24/7 Continuous (3 Shifts)');
  const [weaponRequired, setWeaponRequired] = useState(false);

  const activeSubService =
    SECURITY_SERVICES_DETAILS.find((s) => s.id === selectedSubService) ||
    SECURITY_SERVICES_DETAILS[0];

  const handleCalculateQuote = () => {
    onRequestSecurityQuote(
      `Security Deployment: ${guardCount}x ${guardType} (${guardShift})${
        weaponRequired ? ' + Armed Ex-Servicemen' : ''
      }`
    );
  };

  return (
    <div className="bg-neutral-50 text-slate-800 animate-in fade-in">
      {/* Breadcrumb / Section Header */}
      <div className="border-b border-slate-200 bg-white py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button
              onClick={onNavigateHome}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-sky-700 font-semibold">Security Services</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-400">PSARA Compliant Guarding</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>100% PSARA Licensed & Police Verified</span>
          </div>
        </div>
      </div>

      {/* Hero Banner with Security Officers Image */}
      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/service_security_patrol_1791374092090.jpg"
            alt="Corporate security officers on vigilant duty"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
              <span>Discreet Security Wing</span>
              <span aria-hidden="true">·</span>
              <span>PSARA Certified</span>
              <span aria-hidden="true">·</span>
              <span>24/7 Command Center</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-[1.12] text-balance">
              Professional Security Services & Executive Protection
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Delivering disciplined, police-verified security guarding, ex-servicemen armed escorts, discreet VIP protection, and automated CCTV surveillance across Mumbai, Delhi NCR, and nationwide corporate installations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onRequestSecurityQuote('Security Services Requisition')}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-sky-500 transition-all cursor-pointer"
              >
                <Shield className="h-4 w-4" />
                <span>Deploy Security Guards / Request RFP</span>
              </button>
              <a
                href="#security-calculator"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-all cursor-pointer"
              >
                <span>Guard Calculator</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Security Metrics */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800 pt-6">
            <div>
              <p className="text-2xl font-black text-white tabular-nums sm:text-3xl">100%</p>
              <p className="text-xs text-slate-400 mt-1">Police Background Verification</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white tabular-nums sm:text-3xl">&lt; 10 min</p>
              <p className="text-xs text-slate-400 mt-1">Emergency QRT Dispatch</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white tabular-nums sm:text-3xl">PSARA</p>
              <p className="text-xs text-slate-400 mt-1">Statutory State Licenses</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white tabular-nums sm:text-3xl">24 / 7</p>
              <p className="text-xs text-slate-400 mt-1">CCTV Monitoring & Field Rounds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Verticals Tabbed Suite */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <span>Security Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Comprehensive Protection</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Our Core Security Operations
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From gate access security to electronic command rooms and armed transit, our security personnel are trained to handle routine access controls and unexpected crisis emergencies with calm discipline.
          </p>
        </div>

        {/* Vertical Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 p-1.5 bg-slate-200/80 rounded-xl">
          {SECURITY_SERVICES_DETAILS.map((service) => {
            const isActive = service.id === selectedSubService;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedSubService(service.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {service.title.split(' ')[0]} {service.title.split(' ')[1] || ''}
              </button>
            );
          })}
        </div>

        {/* Selected Vertical Detailed Showcase */}
        <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>{activeSubService.tagline}</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                {activeSubService.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeSubService.description}
              </p>

              {/* Key Features */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Operational Standards & Protocols
                </h4>
                <div className="space-y-2.5">
                  {activeSubService.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                    >
                      <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Deployments */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Recommended For
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {activeSubService.idealFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onRequestSecurityQuote(activeSubService.title)}
                  className="rounded-lg bg-sky-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 transition-colors cursor-pointer"
                >
                  Request Proposal for {activeSubService.title.split(' ')[0]}
                </button>
                <span className="text-xs text-slate-500">
                  Direct Response within 24 Hours
                </span>
              </div>
            </div>

            {/* Media Box */}
            <div className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 relative min-h-[300px]">
              <img
                src={
                  activeSubService.image ||
                  '/src/assets/images/service_security_patrol_1791374092090.jpg'
                }
                alt={activeSubService.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover min-h-[320px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold uppercase text-sky-400">
                  Discreet Guarding Standard
                </p>
                <p className="text-sm font-bold text-white mt-0.5">
                  100% Uniformed, Badge-equipped, and Radio-Linked
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* All 6 Verticals Quick Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECURITY_SERVICES_DETAILS.map((sec, idx) => (
            <div
              key={sec.id}
              onClick={() => setSelectedSubService(sec.id)}
              className={`rounded-xl p-6 border cursor-pointer transition-all ${
                selectedSubService === sec.id
                  ? 'border-sky-600 bg-white shadow-md ring-1 ring-sky-600'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-sky-50 text-sky-700">
                  {idx === 0 ? (
                    <Shield className="h-5 w-5" />
                  ) : idx === 1 ? (
                    <ShieldAlert className="h-5 w-5" />
                  ) : idx === 2 ? (
                    <Users className="h-5 w-5" />
                  ) : idx === 3 ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <Radio className="h-5 w-5" />
                  )}
                </div>
                <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">{sec.title}</h4>
              <p className="mt-1.5 text-xs text-slate-500 line-clamp-2">{sec.tagline}</p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700">
                <span>View Full Details</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guard Force Profiles & Roles Matrix */}
      <section className="bg-slate-100/70 py-16 sm:py-24 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              <span>Human Capital</span>
              <span aria-hidden="true">·</span>
              <span>Guard Profiles</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
              Disciplined Guard Force Profiles
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Every guard deployed by Gloziyo Services is thoroughly vetted and trained according to standard security operating procedures (SOPs).
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_ROLES.map((role, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-sky-700">{role.category}</span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {role.experience}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{role.role}</h3>
                  <div className="mt-3 rounded-lg bg-slate-50 p-3 border border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Training Curriculum
                    </p>
                    <p className="text-xs text-slate-700 mt-1">{role.training}</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Core Duties
                    </p>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {role.duties.map((duty, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 font-medium">Police Verified</span>
                  <button
                    onClick={() => onRequestSecurityQuote(`Inquiry for ${role.role}`)}
                    className="text-xs font-bold text-sky-700 hover:text-sky-900 cursor-pointer"
                  >
                    Deploy Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PSARA Statutory Compliance & Training Protocol */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                <FileCheck2 className="h-4 w-4" />
                <span>Statutory Governance</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
                PSARA Certified & Legally Vetted Security Force
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Operating unlicensed security exposes principal employers to severe legal liabilities under the Private Security Agencies Regulation Act, 2005. Gloziyo Services guarantees 100% compliance with every state home department mandate.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 border border-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Mandatory Residential Training (160 Hours)
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fire extinguishing, physical fitness, crowd management, weapon safety, and first-aid response.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 border border-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Character & Criminal Background Verification
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Police verification certificates and biometric records filed with the local police station before deployment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 border border-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Standard Issue Uniforms & Gear
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      High-visibility berets, badges, whistle lanyards, boots, walkie-talkie transceivers, and electronic night sticks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-slate-900 text-white p-6 sm:p-10 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Command & Control Architecture
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Supervisory Network & Night Audits
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                A security force is only as effective as its supervision. Gloziyo Services deploys dedicated Field Officers and Night Mobile Inspectors who carry out unscheduled surprise checks every 48 hours.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">
                  <p className="text-lg font-bold text-sky-400">Electronic Guard Wand</p>
                  <p className="text-xs text-slate-300 mt-1">
                    RFID checkpoint verification guarantees guards patrol all gates and dark corridors on time.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">
                  <p className="text-lg font-bold text-emerald-400">Immediate Replacement</p>
                  <p className="text-xs text-slate-300 mt-1">
                    24-hour backup reserve ensuring zero unmanned posts at client facilities.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400">Direct Security Hotline (24/7)</p>
                  <a href="tel:+918433639356" className="text-base font-extrabold text-white hover:text-sky-400">
                    +91-84336 39356
                  </a>
                  <p className="text-xs text-sky-400 mt-0.5">gloziyo007@gmail.com · info@gloziyo.com</p>
                </div>
                <button
                  onClick={() => onRequestSecurityQuote('Security Audit & Assessment')}
                  className="rounded-lg bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-500 cursor-pointer"
                >
                  Book Free Security Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Guard Deployment Calculator */}
      <section id="security-calculator" className="py-16 sm:py-24 bg-neutral-100 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                <span>Guard Requisition Tool</span>
                <span aria-hidden="true">·</span>
                <span>Immediate Sizing</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Estimate Your Security Guard Deployment
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Configure your required security post parameters below for immediate supervisor ratios and proposal estimation.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    1. Security Force Type
                  </label>
                  <select
                    value={guardType}
                    onChange={(e) => setGuardType(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-sky-600 focus:outline-none"
                  >
                    <option value="Unarmed Corporate Guard">Unarmed Corporate Security Guard (PSARA)</option>
                    <option value="Armed Ex-Serviceman Guard">Armed Security Guard (Ex-Servicemen with Licensed Weapon)</option>
                    <option value="Executive Personal Security Officer (PSO)">Personal Security Officer (PSO / VIP Escort)</option>
                    <option value="CCTV Control Room Operator">CCTV Command Room Operator</option>
                    <option value="Event Security Bouncers">Event Security Bouncer & Crowd Control Unit</option>
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      2. Required Guard Posts / Strength: <span className="text-sky-700 font-black">{guardCount} Guards</span>
                    </label>
                    <span className="text-xs text-slate-400 font-mono">1 to 50+ Guards</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={40}
                    value={guardCount}
                    onChange={(e) => setGuardCount(Number(e.target.value))}
                    className="w-full accent-sky-700 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>1 Guard (Single Post)</span>
                    <span>10 Guards (Facility)</span>
                    <span>25 Guards (Campus)</span>
                    <span>40+ Guards (Large Plant)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    3. Shift Hours & Coverage
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      '8 Hours Day Shift',
                      '12 Hours Day/Night',
                      '24/7 Continuous (3 Shifts)',
                    ].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setGuardShift(s)}
                        className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left cursor-pointer transition-colors ${
                          guardShift === s
                            ? 'border-sky-600 bg-sky-50 text-sky-950 font-bold'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="weapon"
                    checked={weaponRequired}
                    onChange={(e) => setWeaponRequired(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-sky-700 focus:ring-sky-600"
                  />
                  <label htmlFor="weapon" className="text-xs sm:text-sm text-slate-700 cursor-pointer">
                    Include Armed Escort option or Licensed Weapon holding (for Cash/Vault/High Risk)
                  </label>
                </div>
              </div>
            </div>

            {/* Summary blueprint */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Deployment Plan Blueprint
              </span>
              <h3 className="mt-1 text-xl font-bold text-white">
                Security Roster Summary
              </h3>

              <div className="mt-6 space-y-3.5 text-xs sm:text-sm border-y border-slate-800 py-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Guard Force:</span>
                  <span className="font-semibold text-right max-w-[180px] truncate">{guardType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Deployment Strength:</span>
                  <span className="font-bold text-sky-300">{guardCount} Security Personnel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Field Supervisor:</span>
                  <span className="font-bold text-emerald-400">
                    {Math.max(1, Math.ceil(guardCount / 8))} Dedicated Supervisor(s)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Roster Model:</span>
                  <span className="font-semibold">{guardShift}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Arms Compliance:</span>
                  <span className="font-semibold text-sky-400">
                    {weaponRequired ? 'Licensed Ex-Servicemen' : 'Standard Unarmed Force'}
                  </span>
                </div>
              </div>

              <div className="mt-6 text-xs text-slate-300 space-y-1">
                <p>• 100% PSARA verification documentation</p>
                <p>• Free electronic guard-tour RFID baton logging</p>
                <p>• 24-hour backup guard replacement SLA</p>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleCalculateQuote}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-500 shadow-lg cursor-pointer"
                >
                  <span>Submit Security Requisition with this Plan</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-2 text-center text-[11px] text-slate-400">
                  Immediate dispatch inquiry to Director Mr. Ashraf Belal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <div className="py-8 bg-white border-t border-slate-200 text-center">
        <button
          onClick={onNavigateHome}
          className="text-xs font-bold text-sky-700 hover:underline cursor-pointer"
        >
          ← Return to Gloziyo Services Home Overview
        </button>
      </div>
    </div>
  );
};
