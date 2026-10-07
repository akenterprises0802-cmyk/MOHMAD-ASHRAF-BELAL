import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { ShieldCheck, Mail, ArrowUp, Shield } from 'lucide-react';
import { GloziyoLogo } from './GloziyoLogo';

interface FooterProps {
  onNavigateToSecurity?: () => void;
  onNavigateToHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToSecurity,
  onNavigateToHome,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={onNavigateToHome}
              className="text-left cursor-pointer transition-opacity hover:opacity-90 inline-block"
            >
              <GloziyoLogo size="lg" variant="light" />
            </button>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Established in {COMPANY_DETAILS.foundedYear}, Gloziyo Services delivers 24-hour un-interrupted manpower outsourcing, PSARA-certified security guarding, Spick & Span housekeeping, integrated facility management, and civil execution across Thane, Mumbai, Maharashtra, and nationwide.
            </p>
            <div className="space-y-1.5 pt-1 text-xs">
              <div className="flex items-center gap-2 text-sky-400 font-semibold">
                <ShieldCheck className="h-4 w-4" />
                <span>PSARA Certified & Safe Contractors Standards</span>
              </div>
              <p className="text-slate-500 font-mono text-[11px]">
                ISO 9001:2015 · OHSAS 18001 / ISO 45001 · CLRA Licensed
              </p>
            </div>
          </div>

          {/* Core Verticals */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Core Verticals
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={onNavigateToSecurity}
                  className="hover:text-white transition-colors text-sky-400 font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Shield className="h-3 w-3" />
                  <span>Security Services (PSARA)</span>
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Spick & Span Housekeeping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Manpower & Workforce Outsourcing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Integrated Facility Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Civil Site Execution Contractor
                </a>
              </li>
              <li>
                <a href="#talent" className="hover:text-white transition-colors">
                  Payroll Management Services
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Sectors Served
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Corporate Offices & IT Parks
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Commercial Complexes & Malls
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Banking & Financial Vaults
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Hospitals & Healthcare Clinics
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Residential Gated Townships
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Industrial Plants & Warehouses
                </a>
              </li>
            </ul>
          </div>

          {/* Registered Office & Contacts */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Registered Office & Contacts
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="text-slate-300 font-semibold leading-snug">
                01A, Tasmiya Tower, Millenium Hospital Compound, Near Mumbai chat, Kausa, Thane - 400 612
              </p>
              <div className="pt-1">
                <a
                  href="tel:+918433639356"
                  className="text-white hover:text-sky-400 font-bold text-sm block"
                >
                  +91-84336 39356
                </a>
              </div>
              <div className="space-y-1 pt-1">
                <a
                  href="mailto:gloziyo007@gmail.com"
                  className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>gloziyo007@gmail.com</span>
                </a>
                <a
                  href="mailto:info@gloziyo.com"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-sky-300 font-medium"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>info@gloziyo.com</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Director: {COMPANY_DETAILS.director}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {COMPANY_DETAILS.foundedYear}–2026 {COMPANY_DETAILS.name}. Compliant with PSARA, CLRA & Statutory Labor Laws.
          </div>
          <div className="flex items-center gap-6">
            <span>EPF & ESIC Compliant</span>
            <span>CLRA Registered</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
