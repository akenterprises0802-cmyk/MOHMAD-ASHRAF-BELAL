import React, { useState } from 'react';
import { Menu, X, PhoneCall, Shield } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { GloziyoLogo } from './GloziyoLogo';

interface NavbarProps {
  currentPage: 'home' | 'security';
  onNavigate: (page: 'home' | 'security') => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onRequestQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'security', hash?: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sky-400 font-bold">
              <Shield className="h-3 w-3" />
              <span>PSARA Certified & ISO 9001:2015 Compliant Agency</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="font-medium">Kausa Thane (Mumbai MMR), Maharashtra & Pan-India</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+918433639356"
              className="hover:text-white font-extrabold transition-colors text-sky-400"
            >
              Hotline: +91-84336 39356
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:gloziyo007@gmail.com"
              className="hover:text-white transition-colors font-medium"
            >
              gloziyo007@gmail.com
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:info@gloziyo.com"
              className="hover:text-white transition-colors font-medium"
            >
              info@gloziyo.com
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-bold">24/7 Control Room Active</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 gap-2">
        {/* Zone 1: Official Logo (with attached emblem & GLOZIYO SERVICES wordmark) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left cursor-pointer transition-transform hover:scale-[1.02] shrink-0"
          aria-label="Gloziyo Services Home"
        >
          <GloziyoLogo size="md" variant="dark" />
        </button>

        {/* Zone 2: All Menu items BOLD and ON PAD (padded tab button style) */}
        <nav className="hidden xl:flex items-center gap-1.5 text-xs lg:text-[13px] font-bold text-slate-800">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
              currentPage === 'home'
                ? 'bg-sky-700 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200/90 text-slate-800 hover:text-slate-950'
            }`}
          >
            Home
          </button>

          {/* DEDICATED SECURITY SERVICES ON PAD */}
          <button
            onClick={() => handleNavClick('security')}
            className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'security'
                ? 'bg-sky-700 text-white shadow-xs'
                : 'bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200/80'
            }`}
          >
            <Shield className="h-3.5 w-3.5 text-sky-600" />
            <span>Security Services</span>
            <span className="text-[10px] font-black bg-sky-200 text-sky-900 px-1.5 py-0.5 rounded font-mono">
              NEW
            </span>
          </button>

          <button
            onClick={() => handleNavClick('home', 'services')}
            className="px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer bg-slate-100 hover:bg-slate-200/90 text-slate-800 hover:text-slate-950"
          >
            Services & Spick & Span
          </button>

          <button
            onClick={() => handleNavClick('home', 'sectors')}
            className="px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer bg-slate-100 hover:bg-slate-200/90 text-slate-800 hover:text-slate-950"
          >
            Sectors
          </button>

          <button
            onClick={() => handleNavClick('home', 'talent')}
            className="px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer bg-slate-100 hover:bg-slate-200/90 text-slate-800 hover:text-slate-950"
          >
            Talent Directory
          </button>

          <button
            onClick={() => handleNavClick('home', 'branches')}
            className="px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer bg-slate-100 hover:bg-slate-200/90 text-slate-800 hover:text-slate-950"
          >
            Network
          </button>

          <button
            onClick={() => handleNavClick('home', 'leadership')}
            className="px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer bg-slate-100 hover:bg-slate-200/90 text-slate-800 hover:text-slate-950"
          >
            Leadership
          </button>

          <button
            onClick={() => handleNavClick('home', 'contact')}
            className="px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer bg-slate-100 hover:bg-slate-200/90 text-slate-800 hover:text-slate-950"
          >
            Contact
          </button>
        </nav>

        {/* Medium / Tablet / Pad View Navigation (768px - 1279px) */}
        <nav className="hidden md:flex xl:hidden items-center gap-1.5 text-xs font-bold text-slate-800 overflow-x-auto py-1">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-2.5 py-1.5 rounded-lg font-bold whitespace-nowrap ${
              currentPage === 'home'
                ? 'bg-sky-700 text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('security')}
            className={`px-2.5 py-1.5 rounded-lg font-bold whitespace-nowrap flex items-center gap-1 ${
              currentPage === 'security'
                ? 'bg-sky-700 text-white'
                : 'bg-sky-50 text-sky-900 border border-sky-200'
            }`}
          >
            <Shield className="h-3 w-3" />
            <span>Security</span>
          </button>
          <button
            onClick={() => handleNavClick('home', 'services')}
            className="px-2.5 py-1.5 rounded-lg font-bold whitespace-nowrap bg-slate-100 text-slate-800"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('home', 'sectors')}
            className="px-2.5 py-1.5 rounded-lg font-bold whitespace-nowrap bg-slate-100 text-slate-800"
          >
            Sectors
          </button>
          <button
            onClick={() => handleNavClick('home', 'talent')}
            className="px-2.5 py-1.5 rounded-lg font-bold whitespace-nowrap bg-slate-100 text-slate-800"
          >
            Talent
          </button>
          <button
            onClick={() => handleNavClick('home', 'contact')}
            className="px-2.5 py-1.5 rounded-lg font-bold whitespace-nowrap bg-slate-100 text-slate-800"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-2 lg:gap-3 shrink-0">
          <a
            href="tel:+918433639356"
            className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-900 flex items-center gap-1.5 transition-colors"
          >
            <PhoneCall className="h-3.5 w-3.5 text-sky-600" />
            <span className="hidden lg:inline">{COMPANY_DETAILS.phone}</span>
            <span className="lg:hidden">Call</span>
          </a>
          <button
            onClick={onRequestQuote}
            className="whitespace-nowrap rounded-xl bg-sky-700 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-sky-800 active:scale-[0.98] transition-all cursor-pointer"
          >
            Request Proposal
          </button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onRequestQuote}
            className="whitespace-nowrap rounded-lg bg-sky-700 px-3 py-1.5 text-xs font-bold text-white shadow-xs"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Every menu item bold and on pad) */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 md:hidden animate-in slide-in-from-top">
          <nav className="flex flex-col gap-2 text-sm font-bold text-slate-800">
            <button
              onClick={() => handleNavClick('home')}
              className={`py-3 px-4 rounded-xl text-left font-bold transition-all cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              Home Overview
            </button>

            {/* SECURITY SERVICES IN MOBILE ON PAD */}
            <button
              onClick={() => handleNavClick('security')}
              className={`py-3 px-4 rounded-xl text-left flex items-center justify-between font-bold transition-all cursor-pointer ${
                currentPage === 'security'
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'bg-sky-50 text-sky-950 border border-sky-200 hover:bg-sky-100'
              }`}
            >
              <span className="flex items-center gap-2 font-bold">
                <Shield className="h-4 w-4 text-sky-600" />
                <span>Security Services (PSARA Guarding)</span>
              </span>
              <span className="text-[10px] bg-sky-200 text-sky-950 font-black px-1.5 py-0.5 rounded font-mono">
                NEW
              </span>
            </button>

            <button
              onClick={() => handleNavClick('home', 'services')}
              className="py-3 px-4 rounded-xl text-left font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 cursor-pointer"
            >
              Services & Spick & Span
            </button>

            <button
              onClick={() => handleNavClick('home', 'sectors')}
              className="py-3 px-4 rounded-xl text-left font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 cursor-pointer"
            >
              Sectors We Serve
            </button>

            <button
              onClick={() => handleNavClick('home', 'talent')}
              className="py-3 px-4 rounded-xl text-left font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 cursor-pointer"
            >
              Talent Directory
            </button>

            <button
              onClick={() => handleNavClick('home', 'branches')}
              className="py-3 px-4 rounded-xl text-left font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 cursor-pointer"
            >
              Nationwide Network & Branches
            </button>

            <button
              onClick={() => handleNavClick('home', 'leadership')}
              className="py-3 px-4 rounded-xl text-left font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 cursor-pointer"
            >
              Management Team
            </button>

            <button
              onClick={() => handleNavClick('home', 'contact')}
              className="py-3 px-4 rounded-xl text-left font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 cursor-pointer"
            >
              Contact & Empanelment
            </button>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+918433639356"
                className="py-2.5 px-4 rounded-xl bg-sky-50 text-sky-900 font-bold text-xs flex items-center justify-between"
              >
                <span>Direct Hotline:</span>
                <span className="font-extrabold">+91-84336 39356</span>
              </a>
              <div className="flex flex-col px-1 text-xs text-slate-600 gap-0.5">
                <span>gloziyo007@gmail.com</span>
                <span>info@gloziyo.com</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full text-center py-3 rounded-xl bg-sky-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm mt-1"
              >
                Request Proposal
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
