import React, { useState } from 'react';
import { Building, Home, Utensils, Landmark, HeartPulse, HardHat, Check, ArrowUpRight } from 'lucide-react';
import { SECTORS, SectorItem } from '../data/companyData';

interface SectorsSectionProps {
  onSelectSector: (sectorName: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onSelectSector }) => {
  const [selectedSectorId, setSelectedSectorId] = useState<string>(SECTORS[0].id);

  const activeSector = SECTORS.find((s) => s.id === selectedSectorId) || SECTORS[0];

  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'commercial':
        return <Building className="h-5 w-5" />;
      case 'residential':
        return <Home className="h-5 w-5" />;
      case 'hospitality':
        return <Utensils className="h-5 w-5" />;
      case 'banking':
        return <Landmark className="h-5 w-5" />;
      case 'healthcare':
        return <HeartPulse className="h-5 w-5" />;
      case 'construction':
        return <HardHat className="h-5 w-5" />;
      default:
        return <Building className="h-5 w-5" />;
    }
  };

  return (
    <section id="sectors" className="bg-white py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <span>Industry Specialization</span>
            <span aria-hidden="true">·</span>
            <span>Tailor-Made SLAs</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Sectors We Serve Across Maharashtra & India
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Every environment has unique hygiene, footfall, and security requirements. Gloziyo Services customizes teams, equipment, and audit frequencies for each vertical.
          </p>
        </div>

        {/* Sectors Tab Bar */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {SECTORS.map((sector) => {
            const isSelected = sector.id === selectedSectorId;
            return (
              <button
                key={sector.id}
                onClick={() => setSelectedSectorId(sector.id)}
                className={`flex flex-col items-start p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-sky-600 bg-sky-50/50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`p-2 rounded-lg mb-3 ${
                    isSelected ? 'bg-sky-700 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {getSectorIcon(sector.id)}
                </div>
                <span
                  className={`text-xs sm:text-sm font-bold leading-snug ${
                    isSelected ? 'text-sky-950' : 'text-slate-800'
                  }`}
                >
                  {sector.name}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                  {sector.clientTypes[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Detailed Panel */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
                <span>Sector Focus</span>
                <span aria-hidden="true">·</span>
                <span>{activeSector.name}</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                {activeSector.summary}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeSector.description}
              </p>

              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Delivered Operations & SLAs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSector.deliveredServices.map((srv, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-lg bg-white p-3 border border-slate-200 text-xs sm:text-sm font-medium text-slate-800"
                    >
                      <Check className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Target Facilities
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeSector.clientTypes.map((client, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md"
                    >
                      {client}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Why Gloziyo in this Sector?
                  </h5>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Customized shift rotations, supervisor presence, statutory peace of mind, and 100% adherence to health and safety audits.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={() => onSelectSector(activeSector.name)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-sky-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 transition-colors cursor-pointer"
                >
                  <span>Inquire for {activeSector.name}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
