import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Mail, Send } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  presetService,
}) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(
    presetService || SERVICES_LIST[0].title
  );
  const [location, setLocation] = useState('Mumbai / MMR');
  const [headcount, setHeadcount] = useState('10-25 Staff');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (presetService) {
      setSelectedService(presetService);
    }
  }, [presetService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !organization.trim() || !email.trim() || !phone.trim()) {
      setError('Please provide your name, company, email, and phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Proposal Request Logged
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Thank you, <strong className="text-slate-800">{name}</strong>. Your requisition for{' '}
              <strong className="text-slate-800">{organization}</strong> has been forwarded to Director Mr. Ashraf Belal and the operations desk.
            </p>
            <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-1">
              <p><span className="text-slate-500">Service:</span> {selectedService}</p>
              <p><span className="text-slate-500">Headcount:</span> {headcount} · {location}</p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${COMPANY_DETAILS.email}?subject=RFP from ${encodeURIComponent(organization)}&body=${encodeURIComponent(
                  `Name: ${name}\nCompany: ${organization}\nPhone: ${phone}\nEmail: ${email}\nService: ${selectedService}\nHeadcount: ${headcount}\nLocation: ${location}\nNotes: ${notes}`
                )}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-sky-700 px-4 py-2 text-xs font-bold text-white hover:bg-sky-800"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Open in Email</span>
              </a>
              <button
                onClick={handleClose}
                className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
              <ShieldCheck className="h-4 w-4" />
              <span>Official Requisition · Gloziyo Services</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Request Enterprise Proposal
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              24/7 Manpower Outsourcing & Spick & Span Housekeeping
            </p>

            {error && (
              <div className="mt-3 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-4 space-y-3.5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Mr. Rajesh Sharma"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Tata / HDFC / MNC Tower"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rajesh@company.com"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Mobile / Telephone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Placement Consultancy / Empanelment">
                      Resource Vendor Empanelment
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Headcount Needed
                  </label>
                  <select
                    value={headcount}
                    onChange={(e) => setHeadcount(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                  >
                    <option value="1-5 Staff">1-5 Staff</option>
                    <option value="6-15 Staff">6-15 Staff</option>
                    <option value="16-30 Staff">16-30 Staff</option>
                    <option value="31-50 Staff">31-50 Staff</option>
                    <option value="50+ Enterprise Scale">50+ Enterprise Scale</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Scope Notes or Specific Requirements
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Facility location, shift timings, specific roles..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-800 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-700 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Requisition to Director</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
