export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  image: string;
  keyPoints: string[];
  scope: string[];
}

export interface SecuritySubService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image?: string;
  idealFor: string[];
}

export interface SecurityRole {
  role: string;
  category: 'Guarding Force' | 'Supervisory & Armed' | 'Electronic & Command' | 'Executive Protection';
  experience: string;
  training: string;
  duties: string[];
}

export interface ManagementProfile {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  specialization: string[];
  quote?: string;
}

export interface StaffRole {
  title: string;
  category: 'Front Office & Admin' | 'Support & Floor Operations' | 'Technical & Civil' | 'Healthcare & Hospitality' | 'Executive & Advisory' | 'Security Services';
  description: string;
  skills: string[];
  availability: string;
}

export interface SectorItem {
  id: string;
  name: string;
  summary: string;
  description: string;
  deliveredServices: string[];
  clientTypes: string[];
}

export interface BranchLocation {
  city: string;
  state: string;
  address: string;
  type: 'Headquarters' | 'Regional Corporate Office' | 'Operational Branch' | 'Upcoming Center';
  phone: string;
  email: string;
}

export const COMPANY_DETAILS = {
  name: 'Gloziyo Services Pvt. Ltd.',
  brandName: 'Gloziyo Services',
  groupIdentity: 'Gloziyo Services Group',
  housekeepingBrand: 'Spick & Span',
  securityDivision: 'Gloziyo Security & Protection Wing',
  foundedYear: '2024',
  director: 'Mr. Ashraf Belal',
  email: 'gloziyo007@gmail.com',
  secondaryEmail: 'info@gloziyo.com',
  phone: '+91-84336 39356',
  address: '01A, Tasmiya Tower, Millenium Hospital Compound, Near Mumbai chat, Kausa, Thane - 400612',
  location: 'Kausa, Thane, Maharashtra - 400612',
  presence: 'Thane, Mumbai (MMR), Maharashtra, Delhi NCR & Pan-India',
  psaraCompliance: 'PSARA Certified & Home Dept. Compliant',
  compliance: [
    'Private Security Agencies Regulation Act (PSARA) Licensed',
    'Provident Fund (PF) & ESIC Enrolled',
    'Contract Labour Regulation & Abolition Act Compliant',
    'Minimum Wages Act Strict Adherence (State & Central)',
    'ISO 9001:2015 & OHSAS 18001 / ISO 45001 Certified',
    'Registered Entity Compliant with all Statutory Obligations',
  ],
};

export const BRANCH_LOCATIONS: BranchLocation[] = [
  {
    city: 'Thane & Mumbai (HQ)',
    state: 'Maharashtra',
    address: '01A, Tasmiya Tower, Millenium Hospital Compound, Near Mumbai chat, Kausa, Thane - 400612',
    type: 'Headquarters',
    phone: '+91-84336 39356',
    email: 'gloziyo007@gmail.com',
  },
  {
    city: 'New Delhi & NCR',
    state: 'Delhi NCR',
    address: 'Connaught Place & Okhla Industrial Area, New Delhi - 110020',
    type: 'Regional Corporate Office',
    phone: '+91-84336 39356',
    email: 'info@gloziyo.com',
  },
  {
    city: 'Gurgaon',
    state: 'Haryana',
    address: 'Cyber City, Sector 29, Gurugram, Haryana - 122002',
    type: 'Operational Branch',
    phone: '+91-84336 39356',
    email: 'gloziyo007@gmail.com',
  },
  {
    city: 'Bengaluru',
    state: 'Karnataka',
    address: 'Electronic City & Outer Ring Road, Bengaluru, Karnataka - 560100',
    type: 'Operational Branch',
    phone: '+91-84336 39356',
    email: 'info@gloziyo.com',
  },
  {
    city: 'Pune',
    state: 'Maharashtra',
    address: 'Hinjewadi IT Park & Viman Nagar, Pune, Maharashtra - 411057',
    type: 'Operational Branch',
    phone: '+91-84336 39356',
    email: 'gloziyo007@gmail.com',
  },
  {
    city: 'Sonipat',
    state: 'Haryana',
    address: 'Kundli Industrial Belt, Sonipat, Haryana - 131028',
    type: 'Operational Branch',
    phone: '+91-84336 39356',
    email: 'info@gloziyo.com',
  },
  {
    city: 'Kolkata & Bhubaneswar',
    state: 'Eastern Hub',
    address: 'Sector V, Salt Lake, Kolkata & Chandrasekharpur, Bhubaneswar',
    type: 'Upcoming Center',
    phone: '+91-84336 39356',
    email: 'gloziyo007@gmail.com',
  },
];

export const SECURITY_SERVICES_DETAILS: SecuritySubService[] = [
  {
    id: 'commercial-guarding',
    title: 'Static & Commercial Security Guarding',
    tagline: 'Vigilant 24/7 Gate & Perimeter Access Control',
    description:
      'Trained uniformed security officers deployed for corporate headquarters, software parks, manufacturing facilities, financial hubs, and educational institutes. Our guards enforce strict visitor credentialing, access control, material inward/outward documentation, and perimeter vigilance.',
    features: [
      'Police-verified and PSARA-certified personnel',
      'Electronic visitor management & biometric bag scanning',
      'Material inward/outward register reconciliation',
      'Fire hazard observation and swift alert escalation',
    ],
    image: '/src/assets/images/service_security_patrol_1791374092090.jpg',
    idealFor: ['Corporate Towers', 'IT & Tech Parks', 'Warehouses & Factories', 'Hospitals'],
  },
  {
    id: 'armed-guards',
    title: 'Armed Security Personnel & Cash-in-Transit',
    tagline: 'Licensed Tactical Protection for High-Value Assets',
    description:
      'Ex-Servicemen (ESM) and trained armed guards equipped with valid weapon licenses. Specialized in high-risk protection assignments, bank currency logistics, bullion handling, and executive perimeter hardening.',
    features: [
      'Ex-defense / Paramilitary background guards',
      'Valid national firearms license with safe storage drill',
      'Cash-in-Transit (CIT) armored escort protocols',
      'Trained in counter-ambush and defensive positioning',
    ],
    image: '/src/assets/images/service_security_patrol_1791374092090.jpg',
    idealFor: ['Bank Branches & Vaults', 'Jewelry Showrooms', 'Cash Transit Vans', 'Industrial Plants'],
  },
  {
    id: 'executive-protection',
    title: 'Discreet Executive Protection & VIP Bodyguarding (PSO)',
    tagline: 'Close Protection for Dignitaries, CXOs & High-Net-Worth Individuals',
    description:
      'Discreet and courteous Personal Security Officers (PSOs) providing round-the-clock close protection, transit route advance assessment, threat profiling, and unobtrusive security for VIPs, corporate board members, and visiting dignitaries.',
    features: [
      'Discreet presence in tailored corporate suit or tactical civilian attire',
      'Advanced route threat reconnaissance and secure motorcade escort',
      'Martial arts, close-quarter combat, and emergency evacuation expertise',
      'Confidentiality non-disclosure agreements guaranteed',
    ],
    idealFor: ['C-Suite Executives', 'Celebrities & Delegates', 'High-Net-Worth Individuals', 'High-Profile Events'],
  },
  {
    id: 'cctv-surveillance',
    title: 'Electronic Surveillance & 24/7 CCTV Command Center',
    tagline: 'Integrated Video Intelligence & Alarm Monitoring',
    description:
      'Specialized security control room operators stationed at client command centers or monitored remotely. We integrate thermal imaging, automated perimeter tripwires, PTZ camera tracking, and rapid alert dispatch.',
    features: [
      'High-tech video wall monitoring and incident logging',
      'Intrusion detection and real-time remote siren activation',
      'Integration with fire alarm panels and access turnstiles',
      'Daily archived audit trails and footage review for audits',
    ],
    image: '/src/assets/images/service_security_cctv_1791374105205.jpg',
    idealFor: ['Large Commercial Hubs', 'Data Centers', 'Shopping Malls', 'Gated Townships'],
  },
  {
    id: 'event-security',
    title: 'Event Security, Bouncers & Crowd Control',
    tagline: 'Meticulous Access Control for Expos, AGMs & Entertainment',
    description:
      'Scalable security deployments for high-density public and corporate gatherings. Features door frame metal detectors (DFMD), hand-held metal detectors (HHMD), VIP green room security, and emergency evacuation coordinators.',
    features: [
      'Physically imposing, disciplined event bouncers and stewards',
      'Queue management and barcode ticket scanning integration',
      'Anti-sabotage bag screening and contraband checks',
      'Dedicated medical and fire safety evacuation marshals',
    ],
    idealFor: ['Corporate AGMs & Summits', 'Concerts & Exhibitions', 'Sports Arenas', 'VIP Private Galas'],
  },
  {
    id: 'qrt-patrol',
    title: 'Quick Response Teams (QRT) & Night Mobile Patrols',
    tagline: 'Rapid Mobile Intervention & Perimeter Sweep Units',
    description:
      'Motorized security patrol units conducting random surprise night sweeps across corporate clusters, residential sectors, and industrial belts. Equipped with high-beam searchlights, GPS trackers, and emergency communication radios.',
    features: [
      'Rapid response time under 10 minutes in operational zones',
      'Randomized electronic guard-tour wand checkpoints',
      'Direct liaison with local police control rooms (112)',
      'Immediate de-escalation of perimeter breaches or trespassing',
    ],
    idealFor: ['Industrial Estates', 'Residential Societies', 'Educational Campuses', 'Hospitality Hubs'],
  },
];

export const SECURITY_ROLES: SecurityRole[] = [
  {
    role: 'Armed Security Guard (Ex-Servicemen)',
    category: 'Supervisory & Armed',
    experience: 'Min. 5 Years Defense / Paramilitary Service',
    training: 'National Arms Act, Defensive Shooting, Threat Assessment',
    duties: ['Vault protection', 'Armed perimeter defense', 'Emergency response', 'Asset transit security'],
  },
  {
    role: 'Corporate Security Officer (CSO)',
    category: 'Guarding Force',
    experience: '3+ Years Corporate Experience',
    training: 'PSARA Module, Corporate Etiquette, Visitor Software',
    duties: ['Front desk access control', 'Employee badging', 'Emergency evacuation', 'Incident logbook'],
  },
  {
    role: 'Personal Security Officer (PSO / Executive Escort)',
    category: 'Executive Protection',
    experience: '7+ Years Close Protection Experience',
    training: 'VIP Security, Advanced Defensive Driving, Close Combat',
    duties: ['VIP shadowing', 'Route security advance', 'Threat containment', 'Confidential escort'],
  },
  {
    role: 'CCTV Control Room Specialist',
    category: 'Electronic & Command',
    experience: '2+ Years Surveillance Experience',
    training: 'VMS Systems, PTZ Cameras, Alarm Panel Monitoring',
    duties: ['24/7 video monitoring', 'Perimeter breach alarm logging', 'Fire sensor alert escalation'],
  },
  {
    role: 'Security Supervisor / Field Officer',
    category: 'Supervisory & Armed',
    experience: '4+ Years Guard Supervision',
    training: 'Leadership, Shift Rostering, Drill Inspection, PSARA',
    duties: ['Daily guard briefing & turnout check', 'Night surprise patrols', 'Client coordination meetings'],
  },
  {
    role: 'Fire & Safety Security Marshal',
    category: 'Guarding Force',
    experience: '2+ Years Industrial Safety',
    training: 'Firefighting Class A/B/C, CPR & First Aid, Evacuation Drills',
    duties: ['Extinguisher & hydrant audits', 'Hot work permit checks', 'Emergency triage coordination'],
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'security-services',
    title: 'Security Services & Executive Protection',
    subtitle: 'PSARA-Certified Guarding & Electronic Surveillance',
    badge: 'Core Defense Wing',
    description:
      'Gloziyo Security Services provides comprehensive industrial, commercial, and executive protection services. Operating in strict adherence to the Private Security Agencies Regulation Act (PSARA), our vetted security force protects people, premises, and intellectual assets round the clock.',
    image: '/src/assets/images/service_security_patrol_1791374092090.jpg',
    keyPoints: [
      '100% PSARA compliant & police background-verified personnel',
      'Ex-Servicemen armed guards and discreet PSOs for VIP escort',
      'Electronic surveillance, CCTV command center & QRT patrols',
      'Strict fire-safety marshals, access control & crowd management',
    ],
    scope: [
      'Corporate Towers & Tech Parks',
      'Banking Branches & Currency Vaults',
      'Manufacturing Plants & Industrial Zones',
      'Hospitals & Healthcare Facilities',
      'Shopping Malls, Multiplexes & Retail',
      'Gated High-Rise Societies & Townships',
    ],
  },
  {
    id: 'spick-span',
    title: 'Spick & Span Housekeeping & Hygiene',
    subtitle: 'Near-Perfection Cleanliness Standards',
    badge: 'Flagship Vertical',
    description:
      'Established in 2024, Spick & Span is one of Maharashtra\'s most reputed professional housekeeping and cleanliness services providers. Operating 24/7 un-interrupted with dedicated supervisors and a vetted workforce, we deliver pristine hygiene standards to near perfection.',
    image: '/src/assets/images/service_housekeeping_spick_1791373185857.jpg',
    keyPoints: [
      'Round-the-clock 24/7 continuous shift coverage',
      'Advanced mechanized floor buffing and extraction machines',
      'Eco-friendly sanitization & touchpoint disinfection protocols',
      'Dedicated on-site supervisors with regular KPI audits',
    ],
    scope: [
      'MNCs & BPO Campuses',
      'Govt., Private & Banking Sectors',
      'Hospitals & Healthcare Facilities',
      'Commercial Complexes & Theatres',
      'Clubs, Resorts & Guest Houses',
      'Independent Bungalows & High-Rise Apartments',
    ],
  },
  {
    id: 'manpower-outsourcing',
    title: 'Manpower Outsourcing & Contractual Staffing',
    subtitle: 'Vetted, Compliant Talent for Every Department',
    badge: 'Scale Hiring',
    description:
      'A pioneer of organized recruitment and contract staffing across Mumbai, Delhi NCR, and Pan-India. We provide end-to-end personnel outsourcing from front-line support staff to middle and senior management, fully backed by statutory compliance and seamless payroll handling.',
    image: '/src/assets/images/service_manpower_corporate_1791373199590.jpg',
    keyPoints: [
      'Exclusive resource vendor solutions for Mumbai, Delhi & Pan-India',
      '100% statutory payroll handling: PF, ESIC, Professional Tax, Bonus',
      'Continuous workforce skill enhancement and safety training',
      'High-security assignments vetted with police verification',
    ],
    scope: [
      'Payroll Management Services',
      'Front Desk & Reception Executives',
      'Back Office Operations & Data Entry',
      'Hospital & Healthcare Attendants',
      'Floor Support & Office Logistics Crew',
      'Customer Care & Telemarketing Teams',
    ],
  },
  {
    id: 'facility-maintenance',
    title: 'Integrated Facility & Property Maintenance',
    subtitle: 'Prolonging the Lifeline of Real Estate Assets',
    badge: 'Hard & Soft FM',
    description:
      'Comprehensive property and facility management integrating technical maintenance, building systems upkeep, fire & safety systems, and environmental services. We operate in single, multiple, and integrated models to deliver scalable, value-for-money solutions.',
    image: '/src/assets/images/hero_facility_corporate_1791373172418.jpg',
    keyPoints: [
      'Preventive & corrective technical maintenance regimes',
      'Safe Contractors with ISO and OHSAS standards adherence',
      'Energy and water efficiency optimization at premises',
      'Integrated fire safety, lifts, and facade cleaning management',
    ],
    scope: [
      'Fire Safety & Evacuation Systems',
      'Lifts & Vertical Transportation Coordination',
      'Facade & High-Rise External Cleaning',
      'Commercial Pest Control Management',
      'Parking Systems & Traffic Ingress Control',
      'Electrical & Plumbing Routine Maintenance',
    ],
  },
  {
    id: 'civil-engineering',
    title: 'Civil Site Execution & Construction Solutions',
    subtitle: 'Engineering Excellence & Structural Integrity',
    badge: 'Civil Operations',
    description:
      'Led by our Operation Manager & Civil Site Execution Contractor Er. Afzal Ahmad, we deliver high-quality residential, highway, and commercial construction solutions. From strategic planning to on-site execution, we integrate modern techniques, structural safety, and sustainability.',
    image: '/src/assets/images/service_civil_engineering_1791373210973.jpg',
    keyPoints: [
      'Residential, highway, and commercial construction execution',
      'Rigorous structural integrity and modern building techniques',
      'Comprehensive project safety audits and zero-compromise protocols',
      'Turnkey site supervision with timely milestone deliverables',
    ],
    scope: [
      'Highway & Infrastructure Execution',
      'Commercial & Corporate Build-outs',
      'Residential Complex Civil Works',
      'Site Engineering & Structural Retrofits',
      'Material Procurement & SCM Oversight',
      'Sustainable Building Practices & Energy Audits',
    ],
  },
];

export const MANAGEMENT_TEAM: ManagementProfile[] = [
  {
    name: 'Mr. Ashraf Belal',
    role: 'Director',
    credentials: 'Director – Gloziyo Services Private Limited',
    bio: 'Founder and guiding force behind Gloziyo Services Pvt. Ltd. Believes fundamentally that every business must be customer-centric. Committed to personal service perfection and encouraging innovation within our team and clients, growing Gloziyo from a regional provider to an expansive national corporation.',
    specialization: [
      'Corporate Leadership & Strategic Growth',
      'Security Operations & PSARA Governance',
      'Client Relationship Management',
      'Integrated Facility Network Expansion',
      'Statutory & Ethical Corporate Governance',
    ],
    quote:
      'Every business should be focused on what will benefit the customer. It is that attention to personalized service that has grown Gloziyo from a small organisation to a national corporation.',
  },
  {
    name: 'Miss Manisha Vinod Sindhe',
    role: 'HR Manager',
    credentials: 'Post Graduate (PG) HR Specialist',
    bio: 'A qualified Post Graduate professional with the company since its inception. Oversees day-to-day human capital operations, overall company administration, strategic marketing, and client relations with specialized expertise in contract staffing, guard background verification, and high-volume data operations.',
    specialization: [
      'Manpower Outsourcing & Deployment',
      'Guard Background Check & PSARA Documentation',
      'Contractual Staffing & Talent Acquisition',
      'Data Entry & Data Conversion Operations',
      'Employee Welfare & Statutory Labor Compliance',
    ],
  },
  {
    name: 'Mr. Suffiyan Sayyed',
    role: 'Admin Manager',
    credentials: 'Qualified Administrative Specialist',
    bio: 'Key management pillar with Gloziyo since inception. Oversees corporate administration, day-to-day facility logistics, security shift rosters, marketing initiatives, and client servicing. Specializes in large-scale manpower outsourcing mobilization and client relationship continuity.',
    specialization: [
      'Corporate Logistics & Administration',
      'Security Deployment & Field Coordination',
      'Contractual Staff Mobilization',
      'Client Servicing & Account Management',
      'Resource Planning & Shift Allocation',
    ],
  },
  {
    name: 'Mr. Afzal Ahmad',
    role: 'Operation Manager & Civil Site Execution Contractor',
    credentials: 'Civil Engineering Professional & Contractor',
    bio: 'Brings engineering excellence to every project. Specializes in delivering high-quality residential, highway, and commercial construction solutions as well as facility structural integrity. Integrates modern building techniques, safety, sustainability, and structural integrity from planning through execution.',
    specialization: [
      'Civil Site Execution & Supervision',
      'Highway & Commercial Construction',
      'Structural Integrity & Safety Protocols',
      'Facility Hardware & Barrier Systems',
      'Sustainable Modern Construction Methods',
    ],
    quote:
      'Passionate about building the future! As a Civil Engineer Contractor, I integrate innovation, sustainability, and structural integrity into every project.',
  },
];

export const STAFFING_ROLES: StaffRole[] = [
  {
    title: 'Commercial Security Guard (PSARA)',
    category: 'Security Services',
    description: 'Vetted, uniformed security guard for access control, visitor screening, and round-the-clock premise protection.',
    skills: ['Access Control', 'Visitor Logbook', 'Fire Drill Basics', 'Physical Alertness'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Armed Security Guard (Ex-Servicemen)',
    category: 'Security Services',
    description: 'Licensed armed personnel for cash management, bullion transport, bank branches, and high-security installations.',
    skills: ['Arms License', 'Defensive Tactics', 'Perimeter Hardening', 'Escort Protocols'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Personal Security Officer (PSO / Executive Bodyguard)',
    category: 'Security Services',
    description: 'Discreet close protection officer in civil corporate attire for VIPs, corporate directors, and visiting dignitaries.',
    skills: ['VIP Protocol', 'Close Combat Defense', 'Discreet Transit', 'Crisis Management'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'CCTV Control Room Operator',
    category: 'Security Services',
    description: 'Video surveillance monitor for live feed monitoring, PTZ tracking, alarm triage, and incident footage archiving.',
    skills: ['VMS Software', 'Camera Matrix Control', 'Alarm Escalation', 'Logbook Maintenance'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Payroll Management Services',
    category: 'Front Office & Admin',
    description: 'Complete employee lifecycle payroll processing, attendance integration, PF, ESIC, PT, and wage disbursements.',
    skills: ['Statutory Compliance', 'EPF / ESIC Filing', 'Attendance Reconciliation', 'Tax Deductions'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Help Desk Executives',
    category: 'Front Office & Admin',
    description: 'Front-line customer assistance, service ticketing, call resolution, and visitor coordination.',
    skills: ['Ticketing Tools', 'Customer Relations', 'Multi-channel Support', 'Query Resolution'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Mailroom Attendant Services',
    category: 'Support & Floor Operations',
    description: 'Dispatch management, courier logging, internal pouch routing, and secure document segregation.',
    skills: ['Logistics Tracking', 'Consignment Handover', 'Document Security', 'Dispatch Records'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Office Executives',
    category: 'Front Office & Admin',
    description: 'General corporate clerical management, scheduling, inventory tracking, and inter-department coordination.',
    skills: ['Documentation', 'MS Office & G-Suite', 'Vendor Follow-up', 'Petty Cash Mgmt'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Attendant – Hospital & Healthcare',
    category: 'Healthcare & Hospitality',
    description: 'Patient transfer assistance, ward utility support, sanitation assistance, and patient care escorting.',
    skills: ['Sanitation Protocols', 'Patient Mobility Support', 'Biohazard Awareness', '24/7 Shift Flexibility'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Receptionists & Front Desk Executives',
    category: 'Front Office & Admin',
    description: 'First point of client contact, visitor badging, PBX switchboard control, and executive greeting.',
    skills: ['Verbal Communication', 'Visitor Management System', 'Executive Presence', 'Call Routing'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Data Entry Operator & Data Conversion',
    category: 'Front Office & Admin',
    description: 'High-speed verified alphanumeric data entry, digitization of physical records, and document transformation.',
    skills: ['Typing Speed > 45 WPM', '99.5% Accuracy', 'Excel / Spreadsheet Mastery', 'Data Cleansing'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Secretarial Service Schedulers',
    category: 'Front Office & Admin',
    description: 'Calendar management, executive briefing scheduling, board meeting preparation, and travel bookings.',
    skills: ['Calendar Systems', 'Confidential Handling', 'Itinerary Planning', 'Minute Taking'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Computer Operators',
    category: 'Front Office & Admin',
    description: 'System operations, daily report generation, peripheral device coordination, and MIS collation.',
    skills: ['OS Administration Basics', 'MIS Generation', 'ERP Data Feeding', 'Backup Routine'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Floor Support Executives',
    category: 'Support & Floor Operations',
    description: 'Floor inventory replenishments, meeting room readiness, lighting/HVAC issue reporting, and hospitality assistance.',
    skills: ['Facility Patrols', 'Stationery Audits', 'Vendor Coordination', 'Pantry Readiness'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Office Boy, Runners & Messengers',
    category: 'Support & Floor Operations',
    description: 'Desk-to-desk dispatch, pantry support, filing assistance, banking and local office errands.',
    skills: ['Punctuality', 'Filing Assortment', 'Hospitality Etiquette', 'Field Navigation'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Back Office Operations Crew',
    category: 'Front Office & Admin',
    description: 'Backend reconciliation, vendor invoice verification, document archiving, and application processing.',
    skills: ['Process Adherence', 'KYC Verification', 'Reconciliation', 'SLA Adherence'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Telemarketer & Customer Support',
    category: 'Front Office & Admin',
    description: 'Inbound and outbound customer calling, lead qualification, client satisfaction polling, and help lines.',
    skills: ['Multi-lingual Fluency', 'CRM Logging', 'Objection Handling', 'Customer Empathy'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Housekeeping Services Crew & Sweepers',
    category: 'Support & Floor Operations',
    description: 'Deep premises cleaning, washroom hygiene, waste segregation, floor scrubbing, and Spick & Span upkeep.',
    skills: ['Chemical Safety Handling', 'Machine Buffing', 'Restroom Sanitization', 'Disposal Norms'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Site Engineers & Project Execution',
    category: 'Technical & Civil',
    description: 'Civil and structural site engineering, execution supervision, quality check of concrete and steel, safety compliance.',
    skills: ['Blueprint Reading', 'Material Testing', 'Site Safety Enforcement', 'Daily Progress Reports'],
    availability: 'Immediate Deployment',
  },
  {
    title: 'Accounting, Tax & Company Secretary',
    category: 'Executive & Advisory',
    description: 'Direct and indirect taxation, statutory filings, corporate secretarial compliance, and audit assistance.',
    skills: ['GST / TDS Returns', 'RoC Compliance', 'Statutory Audit Prep', 'Tally & ERP'],
    availability: 'Deployment on Request',
  },
];

export const SECTORS: SectorItem[] = [
  {
    id: 'commercial',
    name: 'Commercial & Retail',
    summary: 'Full facilities management, security guarding, technical staffing, fire safety, lifts, facade cleaning, pest control, and parking systems.',
    description:
      'Large-format commercial buildings, tech parks, shopping malls, and retail outlets demand seamless visitor traffic, vigilant security gates, pristine hygiene, and resilient mechanical systems.',
    deliveredServices: [
      'PSARA-Certified Security Guarding & Frisking',
      'Facade & High-Rise Glass Cleaning',
      'Daily Mechanized Floor Scrubbing',
      'Fire Safety & Lift Maintenance Coordination',
      'Car Park Access Control & CCTV Surveillance',
    ],
    clientTypes: ['MNC Head Offices', 'IT / BPO Parks', 'Retail Malls', 'Commercial Towers'],
  },
  {
    id: 'residential',
    name: 'Residential & Communities',
    summary: 'Tailor-made contracts for gated communities, societies, security access barriers, and flexible upkeep solutions.',
    description:
      'We offer complete peace of mind to housing societies and luxury residential enclaves with polite security guards, intercom visitor logging, boom-barrier control, and Spick & Span daily housekeeping.',
    deliveredServices: [
      '24/7 Gate Guarding & Visitor RFID Logging',
      'Common Area Housekeeping & Sanitization',
      'Waste Management & Composting Support',
      'Night Mobile Patrolling & Emergency Response',
      'Pest Eradication & Water Tank Sanitization',
    ],
    clientTypes: ['High-Rise Societies', 'Gated Villa Enclaves', 'Independent Bungalows', 'Township Complexes'],
  },
  {
    id: 'hospitality',
    name: 'Leisure & Hospitality',
    summary: 'Soft services, bouncers, crowd control, round-the-clock housekeeping, and guest-facing staffing for hospitality venues.',
    description:
      'The leisure and hospitality sector demands meticulous visual presentation, discrete crowd management, and courteous interactions for hotels, clubs, resorts, theatres, and restaurants.',
    deliveredServices: [
      'Event Security Bouncers & Guest Escorts',
      'Public Area & Banquet Deep Cleaning',
      'Kitchen Steward & Back-of-House Crew',
      'Guest House Caretaking Services',
      'Theatre Auditorium Cleaning Between Shows',
    ],
    clientTypes: ['Hotels & Resorts', 'Theatres & Multiplexes', 'Clubs & Lounges', 'Fine-Dining Restaurants'],
  },
  {
    id: 'banking',
    name: 'Govt., Private & Banking Sectors',
    summary: 'High-security vetted armed guards, cash escort, mailroom attendants, and statutory-compliant operations.',
    description:
      'Banking institutions and government agencies require vetted personnel, strict attendance accountability, and complete statutory compliance. Gloziyo Services provides armed and unarmed security for high-security environments.',
    deliveredServices: [
      'Armed Guards for Branches & Vaults',
      'Cash Counter & Mailroom Attendants',
      'Back-Office Document Conversion',
      'Branch Premises Sanitization',
      'Queue Coordination & Visitor Screening',
    ],
    clientTypes: ['Public Sector Banks', 'Private Financial Institutions', 'Treasuries', 'Govt Administrative Offices'],
  },
  {
    id: 'healthcare',
    name: 'Hospitals & Healthcare',
    summary: 'Specialized healthcare security guards, patient care attendants, sterile ward cleaning, biomedical waste protocol compliance.',
    description:
      'Healthcare spaces require zero-tolerance hygiene and calm, reassuring security presence. Our staff are trained in infection control, crowd containment in triage areas, patient transfer, and emergency evacuation.',
    deliveredServices: [
      'Emergency Ward & ICU Security Control',
      'Ward Attendants & Patient Escorts',
      'Sterile Operating Theatre Sanitization',
      'Linen & Bed Making Assistance',
      'Biomedical Waste Segregation Support',
    ],
    clientTypes: ['Multi-Specialty Hospitals', 'Diagnostic Centres', 'Nursing Homes', 'Daycare Clinics'],
  },
  {
    id: 'construction',
    name: 'Civil Infrastructure & Construction',
    summary: 'Civil site execution, residential and highway construction works, construction site security guarding.',
    description:
      'Under our Operation Manager Er. Afzal Ahmad, we deliver dependable civil site execution for commercial, highway, and residential projects with strict adherence to safety, structural engineering, and construction material protection.',
    deliveredServices: [
      'Civil Site Execution Contracting',
      'Site Material Watch & Ward Security',
      'Highway & Pavement Infrastructure',
      'Structural Safety Audits & Supervision',
      'Turnkey Commercial Interior Civil Works',
    ],
    clientTypes: ['Highway Authorities', 'Real Estate Developers', 'Industrial Plants', 'Commercial Contractors'],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'PSARA Licensed & Police Verified',
    description: 'Fully compliant with Private Security Agencies Regulation Act (PSARA). Every guard undergoes background checks, physical fitness tests, and biometric records.',
  },
  {
    title: '100% Tailor-Made Strategy',
    description: 'Our innovative service delivery strategy ensures every client gets a personalized plan built specifically for their property parameters, guard posts, and working shifts.',
  },
  {
    title: 'Round the Clock Availability',
    description: '24/7 un-interrupted operations with active supervisor rotations, prompt incident response, and reliable technical backup throughout Maharashtra, Delhi NCR & Pan-India.',
  },
  {
    title: 'ISO & OHSAS Certified Standards',
    description: 'Certified Safe Contractors with formal OHSAS occupational health policies and comprehensive liability coverage for challenging environments.',
  },
  {
    title: 'Statutory Peace of Mind',
    description: 'Full adherence to PF, ESIC, Minimum Wages Act, and Contract Labour regulations. Zero legal exposure for our principal employer clients.',
  },
  {
    title: 'Asset Life Prolongation',
    description: 'We don\'t just clean and guard; our engineering and facility audits actively reduce wear-and-tear and prevent pilferage, preserving the capital valuation of your premises.',
  },
];

export const STATUTORY_CHECKLIST = [
  { label: 'PSARA License (Security)', status: 'Active & Compliant', code: 'PSARA Act, 2005' },
  { label: 'Employees’ Provident Fund (EPF)', status: 'Active & Compliant', code: 'EPF Act, 1952' },
  { label: 'Employees’ State Insurance (ESIC)', status: 'Active & Compliant', code: 'ESI Act, 1948' },
  { label: 'Contract Labour (R&A) Act', status: 'Registered Entity', code: 'CLRA Act, 1970' },
  { label: 'Minimum Wages Act (State & Central)', status: '100% Adherence', code: 'Govt. Wage Notification' },
  { label: 'Occupational Health & Safety', status: 'Audited Regularly', code: 'OHSAS / ISO Standards' },
];
