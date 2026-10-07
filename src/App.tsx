/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DirectorMessage } from './components/DirectorMessage';
import { ServicesBento } from './components/ServicesBento';
import { SectorsSection } from './components/SectorsSection';
import { StaffingDirectory } from './components/StaffingDirectory';
import { NetworkBranches } from './components/NetworkBranches';
import { LeadershipSection } from './components/LeadershipSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { QuoteEstimator } from './components/QuoteEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SecurityServicesPage } from './pages/SecurityServicesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'security'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPresetService, setModalPresetService] = useState<string | undefined>(undefined);

  // States to pass down to Contact section
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);
  const [inquiryRole, setInquiryRole] = useState<string | undefined>(undefined);
  const [inquiryEstimate, setInquiryEstimate] = useState<{
    service: string;
    sector: string;
    headcount: number;
    shift: string;
    location: string;
  } | null>(null);

  // Scroll to top on page navigation
  const handleNavigate = (page: 'home' | 'security') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    setModalPresetService(serviceName || 'General Staffing / Facility Proposal');
    setIsModalOpen(true);
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setInquiryService(serviceTitle);
    setModalPresetService(serviceTitle);
    setIsModalOpen(true);
  };

  const handleHireRole = (roleTitle: string) => {
    setInquiryRole(roleTitle);
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    setTimeout(() => {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectSector = (sectorName: string) => {
    setInquiryService(`Integrated FM & Security for ${sectorName}`);
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    setTimeout(() => {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleApplyEstimate = (details: {
    service: string;
    sector: string;
    headcount: number;
    shift: string;
    location: string;
  }) => {
    setInquiryEstimate(details);
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    setTimeout(() => {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleExploreServices = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    setTimeout(() => {
      const servicesElem = document.getElementById('services');
      if (servicesElem) {
        servicesElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSecurityQuote = (serviceDetail?: string) => {
    setModalPresetService(serviceDetail || 'PSARA Security Services & Guard Force');
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-slate-800 flex flex-col font-sans">
      {/* Top Bar with Strict 3-Zone Contract & Page Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Main Content: Conditional Page Rendering */}
      <main className="flex-1">
        {currentPage === 'security' ? (
          /* DEDICATED SECURITY SERVICES PAGE (Requested by user) */
          <SecurityServicesPage
            onRequestSecurityQuote={handleSecurityQuote}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : (
          /* HOME PAGE: Comprehensive Discreet India & Gloziyo Services Portal */
          <>
            {/* Hero Section */}
            <Hero
              onRequestQuote={() => handleOpenQuoteModal()}
              onExploreServices={handleExploreServices}
            />

            {/* Message from Director — Mr. Ashraf Belal */}
            <DirectorMessage />

            {/* Core Services Bento Grid (Security, Spick & Span, Manpower, FM, Civil Engineering) */}
            <ServicesBento
              onSelectServiceForQuote={handleSelectServiceForQuote}
              onNavigateToSecurity={() => handleNavigate('security')}
            />

            {/* Sectors We Serve */}
            <SectorsSection onSelectSector={handleSelectSector} />

            {/* Interactive Specialized Staffing & Roles Directory */}
            <StaffingDirectory onHireRole={handleHireRole} />

            {/* Nationwide Footprint & Branches (Discreet India Network) */}
            <NetworkBranches />

            {/* The Management Team (Director, HR, Admin, Operations/Civil) */}
            <LeadershipSection />

            {/* Sustainability, Safety & Quality Assurance (ISO/OHSAS, PSARA, KPI Audits) */}
            <SustainabilitySection />

            {/* Interactive Cost & Headcount Estimator */}
            <QuoteEstimator onApplyEstimate={handleApplyEstimate} />

            {/* Direct Contact, RFP Submission & Vendor Empanelment */}
            <ContactSection
              initialService={inquiryService}
              initialRole={inquiryRole}
              initialDetails={inquiryEstimate}
            />
          </>
        )}
      </main>

      {/* Quiet Footer with Cross-Navigation to Security & Home */}
      <Footer
        onNavigateToSecurity={() => handleNavigate('security')}
        onNavigateToHome={() => handleNavigate('home')}
      />

      {/* Quick Requisition / Proposal Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        presetService={modalPresetService}
      />
    </div>
  );
}
