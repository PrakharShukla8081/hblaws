export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  slug: string;
};

export type PracticeArea = {
  title: string;
  icon: string;
};

export type Associate = {
  name: string;
  title: string;
  bio: string;
  initials: string;
};

export type Accreditation = {
  label: string;
  icon: string;
};

export type Office = {
  city: string;
  label: string;
  address: string;
  phones: string[];
  mapQuery: string;
};

export const services: ServiceItem[] = [
  {
    slug: 'banking-financial',
    icon: 'Landmark',
    title: 'Banking & Financial Services',
    description:
      'An industry-recognised team offering personalised, effective approaches that align business objectives with the intricacies of the Indian regulatory landscape.',
  },
  {
    slug: 'construction-real-estate',
    icon: 'Building2',
    title: 'Construction & Real Estate',
    description:
      'Assisting stakeholders on all aspects of Indian real estate projects, including financial investments, land sales, leasing, construction management, debt restructuring and litigation.',
  },
  {
    slug: 'insurance',
    icon: 'ShieldCheck',
    title: 'Insurance',
    description:
      'Practical solutions and full compliance, backed by a clear understanding of the legal, transactional, regulatory and commercial issues affecting the Indian insurance industry.',
  },
  {
    slug: 'investment',
    icon: 'TrendingUp',
    title: 'Investment',
    description:
      'Expert guidance on Indian and international investments across jurisdictions and market cycles, with investment solutions tailored to specific needs.',
  },
  {
    slug: 'education',
    icon: 'GraduationCap',
    title: 'Education',
    description:
      'Assisting education stakeholders with complex legal concerns, including investment structure, regulatory compliance, management strategies, litigation management, dispute resolution, due diligence, financial and tax needs, M&A, joint ventures and legal audits.',
  },
  {
    slug: 'power-resources',
    icon: 'Zap',
    title: 'Power and Resources',
    description:
      'Tailored solutions across the power and resources space, including energy coverage, renewable energy technologies and stakeholder engagement.',
  },
  {
    slug: 'information-technology',
    icon: 'Cpu',
    title: 'Information Technology',
    description:
      'Comprehensive advisory from our Cyber Law and Information Technology professionals to help clients safeguard their digital assets.',
  },
  {
    slug: 'media-telecommunication',
    icon: 'Radio',
    title: 'Media & Telecommunication',
    description:
      'Extensive experience and in-depth industry knowledge across both the regulatory and commercial sides of media and telecommunications.',
  },
  {
    slug: 'healthcare-pharmaceuticals',
    icon: 'HeartPulse',
    title: 'Healthcare & Pharmaceuticals',
    description:
      'Advising domestic and foreign clients on market entry, business development, financial investments and regulatory matters.',
  },
  {
    slug: 'ngo-self-help',
    icon: 'Users',
    title: 'NGO & Self Help Groups',
    description:
      'Legal support for NGOs and self-help groups, including legal compliance, contract drafting, governance matters and dispute resolution.',
  },
  {
    slug: 'transportation-logistics',
    icon: 'Truck',
    title: 'Transportation & Logistics',
    description:
      'Market insights and regulatory expertise in transportation and logistics operations, along with drafting and negotiation of transport and logistics contracts.',
  },
  {
    slug: 'travel-hospitality',
    icon: 'Plane',
    title: 'Travel & Hospitality',
    description:
      'Legal services for travel and hospitality, covering management services, property development agreements, compliance with applicable laws and due diligence.',
  },
];

export const practiceAreas: PracticeArea[] = [
  { title: 'Family Law', icon: 'HeartPulse' },
  { title: 'Business Law', icon: 'Briefcase' },
  { title: 'Insurance Law', icon: 'ShieldCheck' },
  { title: 'Criminal Law', icon: 'Gavel' },
  { title: 'Drug Offenses', icon: 'Pill' },
  { title: 'Fire Accident', icon: 'Flame' },
  { title: 'Employment Law', icon: 'Users' },
  { title: 'Property Law', icon: 'Building2' },
  { title: 'Economic Offences', icon: 'Coins' },
  { title: 'Arbitration', icon: 'Handshake' },
  { title: 'Service Matters', icon: 'FileText' },
  { title: 'Taxation', icon: 'Receipt' },
  { title: 'Intellectual Property', icon: 'Copyright' },
  { title: 'Constitutional Matters', icon: 'Scale' },
  { title: 'Debt Recovery', icon: 'Landmark' },
  { title: 'Oppression & Mismanagement', icon: 'ShieldAlert' },
  { title: 'Insolvency & Company Law', icon: 'Building2' },
];

export const associates: Associate[] = [
  {
    name: 'Bhoopesh Panday',
    title: 'Founding Partner',
    bio: 'Core expertise in criminal litigation including serious fraud matters; advises on public policy and government schemes; member of SCBA, DHCBA and other Bar associations.',
    initials: 'BP',
  },
  {
    name: 'Dr. Vinod Kumar Tiwari',
    title: 'Senior Partner',
    bio: '30+ years in legal practice; Advocate-on-Record, Supreme Court of India; appeared in 2000+ Supreme Court cases; regularly appears before Delhi HC and Allahabad HC.',
    initials: 'VT',
  },
  {
    name: 'Savitri Pandey',
    title: 'Senior Partner',
    bio: '20+ years in civil & commercial litigation since 1994; panel counsel for Government of India & UP before the Supreme Court; senior standing counsel for NBCC and Food Corporation of India.',
    initials: 'SP',
  },
  {
    name: 'Harshita Pandey',
    title: 'Partner',
    bio: 'Founding & managing partner; focuses on domestic/international trade, investment transactions, and corporate regulatory compliance.',
    initials: 'HP',
  },
  {
    name: 'Yashveer Sangwan',
    title: 'Associate Partner',
    bio: 'Expertise in international trade and business; has worked with lawmakers/parliamentarians on policy formulation; advises firms on securing funding.',
    initials: 'YS',
  },
  {
    name: 'Abhinav Deshwal',
    title: 'Senior Associate',
    bio: 'Graduate, O.P. Jindal Global University; member, Supreme Court & High Court Bar Association; assisted senior counsels in high-profile matters including the Ayodhya matter.',
    initials: 'AD',
  },
  {
    name: 'Kanishk',
    title: 'Senior Associate',
    bio: 'Graduate, RMNLU Lucknow; expertise in criminal, matrimonial, and consumer disputes; practices before the Supreme Court, High Courts, District Courts, and Tribunals.',
    initials: 'K',
  },
  {
    name: 'Kirti Ranjan',
    title: 'Associate',
    bio: 'Expertise in civil & commercial disputes and IP matters; registered trademark attorney; handles patent, trademark, copyright, and design registrations.',
    initials: 'KR',
  },
  {
    name: 'Priyanka Tomar',
    title: 'Associate',
    bio: 'Graduate, Dr. Ram Manohar Lohiya National Law University, Lucknow (2015); practices criminal, civil, matrimonial, consumer, DRT, electricity court and finance-related matters before the High Court, all District Courts, National Commission, District Forums, NCLT, NCLAT, APMLA and other tribunals.',
    initials: 'PT',
  },
  {
    name: 'Mayank Punia',
    title: 'Associate',
    bio: 'Graduate, Dr. Ram Manohar Lohiya National Law University, Lucknow (2016); practices criminal, civil, matrimonial, consumer and finance-related matters before the Supreme Court of India, High Courts, all District Courts, National Commission, DRT, NCLT, NCLAT, District Forums and other tribunals.',
    initials: 'MP',
  },
  {
    name: 'Abhishek Singh',
    title: 'Associate',
    bio: 'Graduate, Allahabad University (2015); practices criminal and civil matters before the Supreme Court of India, High Courts, all District Courts, NGT and CAT.',
    initials: 'AS',
  },
  {
    name: 'Bhanupriya Singh',
    title: 'Associate',
    bio: 'Graduate, Punjab University (2013); LLM, NUJS Kolkata (2015); practices criminal, civil, matrimonial, consumer, DRT, electricity court and finance-related matters before the High Court, all District Courts, National Commission, District Forums, NCLT, NCLAT, APMLA and other tribunals.',
    initials: 'BS',
  },
];

export const accreditations: Accreditation[] = [
  {
    label: 'Supreme Court Bar Association (SCBA)',
    icon: 'Scale',
  },
  {
    label: 'Delhi High Court Bar Association (DHCBA)',
    icon: 'Gavel',
  },
  {
    label: 'Advocate-on-Record, Supreme Court of India',
    icon: 'ScrollText',
  },
  {
    label: 'Registered Trademark Attorney (IP Office)',
    icon: 'Copyright',
  },
  {
    label: 'Panel Counsel — Government of India & Uttar Pradesh',
    icon: 'Landmark',
  },
  {
    label: 'Senior Standing Counsel — NBCC & Food Corporation of India',
    icon: 'ShieldCheck',
  },
];

export const offices: Office[] = [
  {
    city: 'Delhi',
    label: 'Delhi Office',
    address:
      'Golf Apartments, 29 LGF, Maharshi Raman Marg, Sujan Singh Park, New Delhi, Delhi 110003',
    phones: ['+91 9555549457', '+91 8299360247'],
    mapQuery: 'Sujan Singh Park, New Delhi, Delhi 110003',
  },
  {
    city: 'Noida',
    label: 'Noida Office',
    address: 'B-23/C1, Sector 62, Noida, UP 201309',
    phones: ['0120-4234429'],
    mapQuery: 'B-23, Sector 62, Noida, UP 201309',
  },
  {
    city: 'Mumbai',
    label: 'Mumbai Office',
    address:
      '507, Dheeraj Heritage, 5th Floor, S.V. Road, Santacruz (W), Mumbai 400054',
    phones: ['+91-22-6724 7777'],
    mapQuery: 'Dheeraj Heritage, S.V. Road, Santacruz West, Mumbai 400054',
  },
];

export const contactEmail = 'admin@hblaws.com';

export const businessHours = [
  { day: 'Monday – Friday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 5:00 PM' },
  { day: 'Sunday & Holidays', hours: 'Closed' },
];

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/informations', label: 'Informations' },
  { href: '/services', label: 'Services' },
  { href: '/our-associates', label: 'Our Associates' },
  { href: '/accreditations', label: 'Accreditations' },
  { href: '/contact', label: 'Contact' },
];

export const whySelectUs = [
  {
    icon: 'Briefcase',
    title: 'Civil, Corporate & Commercial Disputes',
    description:
      'Debt recovery, taxation, insolvency law, Negotiable Instruments Act — covering both original and appellate jurisdiction.',
  },
  {
    icon: 'ShieldAlert',
    title: 'Criminal Matters Including White Collar Crimes',
    description:
      'Defense and prosecution in economic offences and organised crime, with experienced trial and appellate advocacy.',
  },
  {
    icon: 'Handshake',
    title: 'Alternate Dispute Resolution',
    description:
      'Pre-empting disputes through meticulous documentation and strategic ADR recourse to resolve conflicts efficiently.',
  },
];

export const stats = [
  { value: '2000+', label: 'Supreme Court Cases' },
  { value: '3', label: 'Offices Across India' },
  { value: '30+', label: 'Years Combined Experience' },
  { value: '12', label: 'Legal Professionals' },
];

export const faqs = [
  {
    question: 'Do I need a lawyer to file a consumer complaint in India?',
    answer:
      'While individuals can file consumer complaints pro se before a Consumer Forum, legal representation is strongly recommended for matters involving complex evidence, valuation of damages, or appeals. A lawyer ensures proper documentation, jurisdictional compliance, and effective argument presentation.',
  },
  {
    question: 'What is the difference between litigation and arbitration?',
    answer:
      'Litigation involves resolving disputes through the public court system with a judge, following formal procedural rules. Arbitration is a private dispute resolution process where an impartial arbitrator renders a binding decision, typically faster and more confidential than court proceedings.',
  },
  {
    question: 'How long does a civil recovery suit typically take?',
    answer:
      'Civil recovery suits in India generally take between 3 to 7 years depending on court backlog, complexity of evidence, and jurisdiction. Debt Recovery Tribunal proceedings may be faster under the SARFAESI Act, but timelines vary significantly by case specifics.',
  },
  {
    question: 'What does an Advocate-on-Record do at the Supreme Court?',
    answer:
      'An Advocate-on-Record (AOR) is the only advocate authorized to file and represent matters directly before the Supreme Court of India. They are responsible for the preparation, filing, and conduct of the case, and must pass a specialized examination conducted by the Supreme Court.',
  },
];