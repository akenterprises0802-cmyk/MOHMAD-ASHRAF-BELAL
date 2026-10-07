import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, ShieldCheck, Clock, Building } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface ContactSectionProps {
  initialService?: string;
  initialRole?: string;
  initialDetails?: {
    service: string;
    sector: string;
    headcount: number;
    shift: string;
    location: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialRole,
  initialDetails,
}) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceCategory, setServiceCategory] = useState(
    initialService || 'Spick & Span Housekeeping Services'
  );
  const [headcount, setHeadcount] = useState(
    initialDetails ? String(initialDetails.headcount) : '10-25 Staff'
  );
  const [location, setLocation] = useState(
    initialDetails ? initialDetails.location : 'Mumbai / MMR'
  );
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Update whenever initial values change from other components
  useEffect(() => {
    if (initialService) {
      setServiceCategory(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialRole) {
      setMessage((prev) =>
        prev
          ? `${prev}\nInterested in hiring: ${initialRole}`
          : `We are looking to deploy: ${initialRole} through Gloziyo Services.`
      );
    }
  }, [initialRole]);

  useEffect(() => {
    if (initialDetails) {
      setServiceCategory(initialDetails.service);
      setHeadcount(`${initialDetails.headcount} Personnel`);
      setLocation(initialDetails.location);
      setMessage(
        `Pre-configured Requisition:\n- Service: ${initialDetails.service}\n- Sector: ${initialDetails.sector}\n- Headcount: ${initialDetails.headcount}\n- Shift: ${initialDetails.shift}\n- Location: ${initialDetails.location}`
      );
    }
  }, [initialDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim() || !organization.trim() || !email.trim() || !phone.trim()) {
      setFormError('Please fill in all required fields (Name, Organization, Email, and Phone).');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid business email address.');
      return;
    }

    if (phone.replace(/\D/g, '').length < 8) {
      setFormError('Please enter a valid telephone number with area code.');
      return;
    }

    // Success state
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setMessage('');
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Vendor Notice */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              <span>Corporate Empanelment & RFP</span>
              <span aria-hidden="true">·</span>
              <span>Mumbai & Pan-India</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-balance">
              Partner With Gloziyo Services Pvt. Ltd.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              We look forward to working as an exclusive resource vendor and facility management partner for your organization. Contact our leadership team directly or submit your RFP details below.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-4">
              {/* Official Address */}
              <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-4 border border-slate-200">
                <div className="p-2.5 rounded-lg bg-sky-100 text-sky-800 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Corporate Registered Office</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                    {COMPANY_DETAILS.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Thane 400 612, Maharashtra (Mumbai MMR Region)
                  </p>
                </div>
              </div>

              {/* Contact Phone */}
              <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-4 border border-slate-200">
                <div className="p-2.5 rounded-lg bg-sky-100 text-sky-800 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Direct Line / WhatsApp</p>
                  <a
                    href="tel:+918433639356"
                    className="text-base font-extrabold text-slate-900 hover:text-sky-700 transition-colors inline-block mt-0.5"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">24/7 Operations & Escalation Desk</p>
                </div>
              </div>

              {/* Official Emails */}
              <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-4 border border-slate-200">
                <div className="p-2.5 rounded-lg bg-sky-100 text-sky-800 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Inquiries & RFP</p>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <a
                      href="mailto:gloziyo007@gmail.com"
                      className="text-sm font-bold text-slate-900 hover:text-sky-700 transition-colors"
                    >
                      gloziyo007@gmail.com
                    </a>
                    <a
                      href="mailto:info@gloziyo.com"
                      className="text-sm font-bold text-sky-700 hover:text-sky-900 transition-colors"
                    >
                      info@gloziyo.com
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Monitored directly by Executive Management</p>
                </div>
              </div>

              {/* Service Hours */}
              <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-4 border border-slate-200">
                <div className="p-2.5 rounded-lg bg-sky-100 text-sky-800 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Service Hours & Control Room</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">24/7 Un-interrupted Operations</p>
                  <p className="text-xs text-slate-500 mt-0.5">Emergency response, guard relief & replacement round the clock</p>
                </div>
              </div>
            </div>

            {/* Statutory Assurance Badge */}
            <div className="mt-8 rounded-xl bg-sky-50 border border-sky-100 p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-900 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4 text-sky-700" />
                <span>Vendor Empanelment Guarantee</span>
              </div>
              <p className="mt-1 text-xs text-sky-800 leading-relaxed">
                Registered under CLRA, EPF, ESIC, and GST. All manpower assignments carry zero vicarious liability and ISO/OHSAS safety standards.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-50/70 p-6 sm:p-10 border border-slate-200 shadow-sm">
            {isSubmitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Proposal Request Transmitted
                </h3>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-800">{name}</strong>. Your requirement for{' '}
                  <strong className="text-slate-800">{organization}</strong> has been logged. Our HR and Operations management team will contact you shortly.
                </p>

                <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-left text-xs max-w-md mx-auto space-y-1.5">
                  <p className="font-bold text-slate-800 border-b pb-1">Submission Summary:</p>
                  <p><span className="text-slate-500">Service:</span> {serviceCategory}</p>
                  <p><span className="text-slate-500">Headcount:</span> {headcount}</p>
                  <p><span className="text-slate-500">Location:</span> {location}</p>
                  <p><span className="text-slate-500">Official Email:</span> {COMPANY_DETAILS.email}</p>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}?subject=RFP from ${encodeURIComponent(organization)} - ${encodeURIComponent(name)}&body=${encodeURIComponent(
                      `Name: ${name}\nOrganization: ${organization}\nPhone: ${phone}\nEmail: ${email}\nService: ${serviceCategory}\nHeadcount: ${headcount}\nLocation: ${location}\nNotes: ${message}`
                    )}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send via Email Client</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Request Formal Quotation / RFP
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Please provide your project parameters. We will review and provide a customized staffing proposal.
                  </p>
                </div>

                {formError && (
                  <div className="rounded-lg bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700 font-medium">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Mr. Rajesh Sharma"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Reliance / HDFC / MNC Campus"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Primary Vertical
                    </label>
                    <select
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                    >
                      <option value="Spick & Span Housekeeping Services">Spick & Span Housekeeping</option>
                      <option value="Manpower Outsourcing">Manpower Outsourcing</option>
                      <option value="Integrated Facility Management">Integrated Facility Mgmt</option>
                      <option value="Civil Site Execution">Civil Site Execution</option>
                      <option value="Resource Vendor Empanelment">Vendor Empanelment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Headcount Scope
                    </label>
                    <select
                      value={headcount}
                      onChange={(e) => setHeadcount(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                    >
                      <option value="1-5 Staff">1-5 Staff</option>
                      <option value="6-15 Staff">6-15 Staff</option>
                      <option value="16-30 Staff">16-30 Staff</option>
                      <option value="31-50 Staff">31-50 Staff</option>
                      <option value="50+ Enterprise Scale">50+ Enterprise Scale</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Location
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. BKC Mumbai / Pune"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Requirement Details & Site Notes
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specific shift times, facility area in sq ft, roles required, or vendor empanelment requirements..."
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 shadow-md transition-all cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Proposal Request to Management</span>
                  </button>
                  <p className="mt-2 text-center text-[11px] text-slate-400">
                    Directly sent to Director Mr. Ashraf Belal · Response within 24 working hours
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
