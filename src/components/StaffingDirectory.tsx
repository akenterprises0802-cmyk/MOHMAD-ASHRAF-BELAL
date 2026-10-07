import React, { useState, useMemo } from 'react';
import { Search, UserCheck, Briefcase, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { STAFFING_ROLES, StaffRole } from '../data/companyData';

interface StaffingDirectoryProps {
  onHireRole: (roleTitle: string) => void;
}

const CATEGORIES = [
  'All Profiles',
  'Front Office & Admin',
  'Support & Floor Operations',
  'Healthcare & Hospitality',
  'Technical & Civil',
  'Executive & Advisory',
] as const;

const EXPERIENCED_DOMAINS = [
  'Construction & Civil Site', 'Accounting & Direct Tax', 'Company Secretary (CS)', 'Internal Audit',
  'Graphic & Web Design', 'Multimedia', 'Corporate Planning & Strategy', 'Industrial & International Marketing',
  'Merchandising & Fashion', 'Export Documentation', 'Front Office & Secretarial', 'Computer Operators',
  'Hotels & Restaurant Mgmt', 'Hospital & Healthcare Attendants', 'Customer Service & Telecalling', 'BPO Voice & Non-Voice',
  'HR, Admin & Industrial Relations (IR)', 'Time Office Executives', 'Legal & Compliance', 'Technicians & Maintenance',
  'Media Planning & PR', 'Corporate Communications', 'Packaging Development', 'Manufacturing & Production',
  'Site Engineers & Project Mgmt', 'Purchase & SCM', 'R&D & Engineering Design', 'Data Entry & Data Conversion',
  'Sweepers & Housekeeping Crew', 'Sales & Business Development', 'Language Specialists', 'Top Management Search'
];

export const StaffingDirectory: React.FC<StaffingDirectoryProps> = ({ onHireRole }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Profiles');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAllDomains, setShowAllDomains] = useState<boolean>(false);

  const filteredRoles = useMemo(() => {
    return STAFFING_ROLES.filter((role) => {
      const matchesCategory =
        selectedCategory === 'All Profiles' || role.category === selectedCategory;
      const matchesQuery =
        role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="talent" className="bg-slate-50 py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <span>Manpower Outsourcing</span>
            <span aria-hidden="true">·</span>
            <span>Contractual Staffing</span>
            <span aria-hidden="true">·</span>
            <span>Resource Vendor</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Specialized Manpower & Talent Directory
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Gloziyo Services is a pioneer of organized recruitment and contract staffing in Mumbai. We act as exclusive resource vendors for domestic and Pan-India requirements across junior, middle, and senior talent pools.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-200/80 rounded-xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role or skill..."
              className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600 shadow-sm"
            />
          </div>
        </div>

        {/* Roles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-sky-700">{role.category}</span>
                  <span className="text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    {role.availability}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {role.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {role.description}
                </p>

                {/* Skills Unboxed */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Competencies
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {role.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Full PF / ESIC compliant</span>
                <button
                  onClick={() => onHireRole(role.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 transition-colors cursor-pointer"
                >
                  <span>Hire Profile</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRoles.length === 0 && (
          <div className="text-center py-12 rounded-xl bg-white border border-slate-200 mt-6">
            <UserCheck className="h-10 w-10 text-slate-400 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-800">No matching role found</p>
            <p className="text-xs text-slate-500 mt-1">Try another search term or explore our full experienced domains below.</p>
          </div>
        )}

        {/* Specialized Domain Breadth from User Brief */}
        <div className="mt-14 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
                <Layers className="h-4 w-4" />
                <span>Our Experienced Recruitment Domains</span>
              </div>
              <h4 className="mt-1 text-xl font-bold text-slate-900">
                Exclusive Resource Vendor for Mumbai & Pan-India
              </h4>
            </div>
            <button
              onClick={() => setShowAllDomains(!showAllDomains)}
              className="text-xs font-bold text-sky-700 hover:underline cursor-pointer"
            >
              {showAllDomains ? 'Show Less Domains' : `View All ${EXPERIENCED_DOMAINS.length} Domains`}
            </button>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Gloziyo Services offers premier talent placement in diverse segments of technology, finance, sales, marketing, engineering, and manufacturing. We partner as your dedicated staffing consultant to conduct brand awareness and candidate screening throughout Mumbai and nationwide.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {(showAllDomains ? EXPERIENCED_DOMAINS : EXPERIENCED_DOMAINS.slice(0, 16)).map((domain, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-slate-700 bg-slate-100/90 hover:bg-sky-50 hover:text-sky-800 transition-colors px-3 py-1.5 rounded-lg border border-slate-200/60"
              >
                {domain}
              </span>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <span>Specialist recruitment focusing on junior, middle & senior management talent</span>
            <button
              onClick={() => onHireRole('Resource Vendor Empanelment')}
              className="text-sky-700 font-bold hover:underline cursor-pointer"
            >
              Request Placement Consultancy Partnership →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
