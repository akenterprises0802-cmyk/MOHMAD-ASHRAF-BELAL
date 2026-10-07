import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Clock, Users } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface QuoteEstimatorProps {
  onApplyEstimate: (estimateDetails: {
    service: string;
    sector: string;
    headcount: number;
    shift: string;
    location: string;
  }) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onApplyEstimate }) => {
  const [service, setService] = useState<string>('Spick & Span Housekeeping Services');
  const [sector, setSector] = useState<string>('Commercial / Retail');
  const [headcount, setHeadcount] = useState<number>(12);
  const [shift, setShift] = useState<string>('24/7 Un-interrupted (3 Shifts)');
  const [location, setLocation] = useState<string>('Mumbai / MMR Region');
  const [includeMachinery, setIncludeMachinery] = useState<boolean>(true);

  // Computed projections
  const supervisorCount = Math.max(1, Math.ceil(headcount / 10));
  const shiftMultiplier = shift.includes('24/7') ? 3 : shift.includes('12') ? 2 : 1;

  const handleProceed = () => {
    onApplyEstimate({
      service,
      sector,
      headcount,
      shift,
      location,
    });
  };

  return (
    <section id="calculator" className="bg-white py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              <span>Interactive Requisition Planner</span>
              <span aria-hidden="true">·</span>
              <span>Instant Estimate</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
              Staffing & Facility Requirement Planner
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Plan your manpower outsourcing or Spick & Span housekeeping deployment. Select your parameters below to generate an immediate operational structure.
            </p>

            <div className="mt-8 space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Required Primary Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                >
                  <option value="Spick & Span Housekeeping Services">Spick & Span Housekeeping & Deep Cleaning</option>
                  <option value="Corporate Manpower Outsourcing">Corporate Manpower Outsourcing & Contractual Staff</option>
                  <option value="Integrated Facility & Property Maintenance">Integrated Facility & Property Maintenance</option>
                  <option value="Civil Site Execution & Construction">Civil Site Execution & Construction Solutions</option>
                  <option value="Front Office & Help Desk Executives">Front Office & Help Desk Executives</option>
                  <option value="Back Office & Data Entry Operations">Back Office & Data Entry Operations</option>
                </select>
              </div>

              {/* Sector Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    2. Industry Sector
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                  >
                    <option value="Commercial / Retail">Commercial / Retail & Malls</option>
                    <option value="Residential & Communities">Residential Societies & Bungalows</option>
                    <option value="Govt., Private & Banking Sectors">Govt., Private & Banking Sectors</option>
                    <option value="Hospitals & Healthcare">Hospitals & Healthcare</option>
                    <option value="Leisure, Hospitality & Theatres">Leisure, Hospitality & Theatres</option>
                    <option value="Educational Institutions">Educational Institutions</option>
                    <option value="Industrial & Warehousing">Industrial & Warehousing</option>
                    <option value="Highway & Civil Infrastructure">Highway & Civil Infrastructure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    3. Deployment Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                  >
                    <option value="Mumbai / MMR Region">Mumbai / Thane / Navi Mumbai (MMR)</option>
                    <option value="Pune & Western Maharashtra">Pune & Western Maharashtra</option>
                    <option value="Nagpur & Vidarbha">Nagpur & Vidarbha</option>
                    <option value="Rest of Maharashtra">Rest of Maharashtra</option>
                    <option value="Pan-India Corporate Deployment">Pan-India Corporate Deployment</option>
                  </select>
                </div>
              </div>

              {/* Headcount Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    4. Required Workforce Headcount: <span className="text-sky-700 tabular-nums font-black text-sm">{headcount} Personnel</span>
                  </label>
                  <span className="text-xs text-slate-500 font-mono">Min: 2 · Max: 100+</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={80}
                  step={1}
                  value={headcount}
                  onChange={(e) => setHeadcount(Number(e.target.value))}
                  className="w-full accent-sky-700 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>2 Staff (Boutique)</span>
                  <span>20 Staff (Corporate)</span>
                  <span>50 Staff (Campus)</span>
                  <span>80+ Staff (Mega Facility)</span>
                </div>
              </div>

              {/* Shift Timing */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  5. Shift Frequency & Operational Hours
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    '8 Hours General Shift',
                    '12 Hours Double Shift',
                    '24/7 Un-interrupted (3 Shifts)',
                  ].map((sOption) => (
                    <button
                      type="button"
                      key={sOption}
                      onClick={() => setShift(sOption)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left transition-all cursor-pointer ${
                        shift === sOption
                          ? 'border-sky-600 bg-sky-50 text-sky-950 font-bold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {sOption}
                    </button>
                  ))}
                </div>
              </div>

              {/* Machinery & Consumables Toggle */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="includeMachinery"
                  checked={includeMachinery}
                  onChange={(e) => setIncludeMachinery(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-sky-700 focus:ring-sky-600"
                />
                <label htmlFor="includeMachinery" className="text-xs sm:text-sm text-slate-700 cursor-pointer">
                  Include mechanized machines, PPE kits, and eco-certified cleaning chemicals (Recommended)
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Deployment Summary Card */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Operational Blueprint
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Estimated Deployment Plan
                </h3>
              </div>
              <div className="p-2 rounded-lg bg-sky-950 text-sky-400 border border-sky-800">
                <Calculator className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Service Model</span>
                <span className="font-semibold text-right max-w-[200px] truncate">{service}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Target Sector</span>
                <span className="font-semibold text-right">{sector}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Workforce Headcount</span>
                <span className="font-bold text-sky-300 text-base tabular-nums">{headcount} Deployees</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Recommended Supervisors</span>
                <span className="font-bold text-emerald-400 tabular-nums">{supervisorCount} Dedicated Officer(s)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Shift Coverage</span>
                <span className="font-semibold">{shift}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Territory</span>
                <span className="font-semibold">{location}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Machinery & Consumables</span>
                <span className="font-semibold text-sky-400">
                  {includeMachinery ? 'Full Mechanized Suite' : 'Labor Only Model'}
                </span>
              </div>
            </div>

            {/* Inclusions Guarantee */}
            <div className="mt-6 rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" />
                <span>Statutory Inclusions Guaranteed</span>
              </h4>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>• 100% PF & ESIC statutory wage deposits</li>
                <li>• Uniforms, photo ID badges & biometric logs</li>
                <li>• Police-vetted security clearances</li>
                <li>• Replacement guarantee within 24 hours</li>
              </ul>
            </div>

            {/* CTA to lock in RFP */}
            <div className="mt-8">
              <button
                onClick={handleProceed}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-500 shadow-md transition-all cursor-pointer"
              >
                <span>Request Formal Proposal with this Plan</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-[11px] text-slate-400">
                Direct consultation with Director Mr. Ashraf Belal & Management Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
