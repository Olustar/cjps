export type ServiceSlug =
  | "service-of-process"
  | "subpoena-domestication"
  | "skip-tracing"
  | "mobile-notary"
  | "stakeout-services"
  | "court-filing";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  heroSubheading: string;
  featured?: boolean;
  whatIs: { heading: string; body: string };
  whyChoose: { heading: string; body: string };
  offeringsHeading: string;
  offerings: { heading: string; body?: string; bullets?: string[] }[];
  benefitsHeading: string;
  benefits: { title: string; body: string }[];
  howItWorks: { title: string; body: string }[];
  testimonials?: { quote: string; author: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "service-of-process",
    title: "Service of Process",
    shortDescription:
      "We provide service on a routine, rush, and same-day basis. No notary fees.",
    heroSubheading:
      "We provide service on a routine, rush, and same-day basis. No notary fees.",
    featured: true,
    whatIs: {
      heading: "What is Service of Process?",
      body: "Service of process is the formal delivery of legal documents that gives parties notice of a lawsuit or court action. Proper service protects due process and ensures that every person involved is legally notified.",
    },
    whyChoose: {
      heading: "Why Choose Central Jersey Process Service?",
      body: "Our experienced, certified process servers know New Jersey procedure inside and out. We handle routine, rush, and same-day jobs with clear communication and notarized affidavits of service — with no notary fees.",
    },
    offeringsHeading: "Our Services",
    offerings: [
      {
        heading: "Comprehensive Coverage",
        body: "We cover courts and addresses across New Jersey, with partner networks available for nationwide service when your documents need to travel.",
      },
      {
        heading: "Expertise in Various Documents",
        bullets: [
          "Summons",
          "Subpoenas",
          "Writs",
          "Orders to Show Cause",
          "Divorce Papers",
          "Eviction Notices",
        ],
      },
      {
        heading: "Timely and Reliable",
        bullets: [
          "Routine Service — 7-day turnaround",
          "Rush Service — 3 business days",
          "Same-day rush service",
        ],
      },
      {
        heading: "Professional and Discreet",
        body: "Every attempt is handled with professionalism and confidentiality so your matter stays protected.",
      },
    ],
    benefitsHeading: "Benefits of Our Service",
    benefits: [
      {
        title: "Legal Compliance",
        body: "Service attempts follow applicable New Jersey rules and court requirements.",
      },
      {
        title: "Affidavit of Service",
        body: "You receive notarized proof of service suitable for filing.",
      },
      {
        title: "Client Communication",
        body: "Clear updates on attempts, status, and next steps.",
      },
      {
        title: "Flexible Scheduling",
        body: "Routine, rush, and same-day options to match your deadline.",
      },
    ],
    howItWorks: [
      {
        title: "Document Submission",
        body: "Send documents by email or through our Order Service form.",
      },
      {
        title: "Service of Process",
        body: "A server attempts service according to your selected timeline.",
      },
      {
        title: "Confirmation and Affidavit",
        body: "You receive confirmation and a notarized affidavit of service.",
      },
    ],
  },
  {
    slug: "subpoena-domestication",
    title: "Subpoena Domestication",
    shortDescription:
      "Our well-versed staff assists with submission of subpoenas for domestication so they can be enforced in New Jersey.",
    heroSubheading:
      "Our well-versed staff assists with submission of subpoenas for domestication so they can be enforced in New Jersey.",
    featured: true,
    whatIs: {
      heading: "What is Subpoena Domestication?",
      body: "Subpoena domestication is the process of validating an out-of-state subpoena so it can be legally enforced in New Jersey. Without proper domestication, the subpoena may not carry local authority.",
    },
    whyChoose: {
      heading: "Why Choose Central Jersey Process Service?",
      body: "We have extensive knowledge of New Jersey Superior Court Clerk’s Office procedures and electronic filing pathways, so domestication moves quickly and correctly.",
    },
    offeringsHeading: "Domestication Services",
    offerings: [
      {
        heading: "Electronic Domestication",
        body: "We prepare and submit domestication materials through the appropriate electronic channels for efficient processing.",
      },
      {
        heading: "Instant Review",
        body: "Experienced staff review your packet for completeness before submission.",
      },
      {
        heading: "New Jersey Court Rules",
        body: "Filings align with New Jersey court rules and JEDS system requirements.",
      },
    ],
    benefitsHeading: "Benefits of Our Subpoena Domestication Service",
    benefits: [
      {
        title: "Speed and Efficiency",
        body: "Streamlined preparation and submission cut unnecessary wait time.",
      },
      {
        title: "Legal Compliance",
        body: "Packets are prepared to meet New Jersey domestication standards.",
      },
      {
        title: "Expert Handling",
        body: "Staff familiar with Superior Court Clerk procedures manage your file.",
      },
      {
        title: "Reduced Delays",
        body: "Fewer rejected filings means your subpoena reaches enforceable status faster.",
      },
    ],
    howItWorks: [
      {
        title: "Submit Your Subpoena",
        body: "Provide the out-of-state subpoena and supporting documentation.",
      },
      {
        title: "Staff Review",
        body: "We prepare the materials and confirm everything is in order.",
      },
      {
        title: "Signature Application",
        body: "Materials are submitted to the Superior Court Clerk’s Office.",
      },
      {
        title: "Final Domestication",
        body: "Once domesticated, the subpoena is ready for enforcement in New Jersey.",
      },
    ],
  },
  {
    slug: "skip-tracing",
    title: "Skip Tracing",
    shortDescription:
      "Evading service just became a lot harder with our impressive skip tracing capabilities.",
    heroSubheading:
      "Evading service just became a lot harder with our impressive skip tracing capabilities.",
    featured: true,
    whatIs: {
      heading: "What is Skip Tracing?",
      body: "Skip tracing is the investigative process of locating individuals who are missing, relocated, or intentionally avoiding detection so service can be completed.",
    },
    whyChoose: {
      heading: "Why Choose Central Jersey Process Service for Skip Tracing?",
      body: "We deliver comprehensive, reliable skip tracing using advanced investigative resources and experienced investigators who know how to turn leads into addresses.",
    },
    offeringsHeading: "Our Skip Tracing Services",
    offerings: [
      {
        heading: "Comprehensive Search Techniques",
        bullets: [
          "Public Records — access to extensive databases",
          "Motor Vehicle Records — real-time owner information via license plates",
          "Social Media — leveraging platforms for actionable leads",
          "Professional Networks — industry databases and contacts",
        ],
      },
      {
        heading: "Experienced Investigators",
        bullets: [
          "Identifying current addresses",
          "Gathering contact information",
        ],
      },
      {
        heading: "Fast and Accurate Results",
        body: "Findings are delivered promptly so service attempts can resume without delay.",
      },
    ],
    benefitsHeading: "Benefits of Our Skip Tracing Service",
    benefits: [
      {
        title: "Accuracy",
        body: "Current, precise location and contact information.",
      },
      {
        title: "Confidentiality",
        body: "Investigations are handled with the highest standards of discretion.",
      },
      {
        title: "Efficiency",
        body: "Diligent work that saves client time and resources.",
      },
      {
        title: "Customized Solutions",
        body: "Approaches tailored to the specifics of each case.",
      },
    ],
    howItWorks: [
      {
        title: "Case Submission",
        body: "Share any known information about the subject.",
      },
      {
        title: "Initial Assessment",
        body: "Investigators determine the best tactical approach.",
      },
      {
        title: "Investigation",
        body: "We employ comprehensive search techniques across available sources.",
      },
      {
        title: "Report Delivery",
        body: "You receive a detailed report outlining findings, location, and contacts.",
      },
    ],
  },
  {
    slug: "mobile-notary",
    title: "Mobile Notary",
    shortDescription:
      "Our team of notaries can notarize any document anywhere within New Jersey.",
    heroSubheading:
      "Our team of notaries can notarize any document anywhere within New Jersey.",
    whatIs: {
      heading: "What is a Mobile Notary?",
      body: "A mobile notary travels to your home, office, hospital, or other location to notarize documents on the spot — convenient, on-the-go notarization without a trip to an office.",
    },
    whyChoose: {
      heading: "Why Choose Central Jersey Mobile Notary?",
      body: "Licensed, bonded, and certified professionals deliver notary services to your door across New Jersey on a schedule that works for you.",
    },
    offeringsHeading: "Our Mobile Notary Services",
    offerings: [
      {
        heading: "Notarization of Legal Documents",
        bullets: [
          "Power of Attorney (POA)",
          "Wills and Trusts",
          "Affidavits and Oaths",
          "Contracts and Agreements",
        ],
      },
      {
        heading: "Real Estate Transactions",
        bullets: [
          "Mortgage Loan Signings",
          "Deeds of Trust",
          "Title Transfers",
          "Closing Documents",
        ],
      },
      {
        heading: "Business and Financial Documents",
        bullets: [
          "Loan Agreements",
          "Business Contracts",
          "Partnership Agreements",
          "Corporate Documents",
        ],
      },
    ],
    benefitsHeading: "Why Mobile Notary Services Matter",
    benefits: [
      {
        title: "Convenience",
        body: "We meet you where it is most convenient.",
      },
      {
        title: "Flexible Scheduling",
        body: "Evenings and weekends available when needed.",
      },
      {
        title: "Professionalism and Accuracy",
        body: "Strict adherence to New Jersey notary laws.",
      },
      {
        title: "Confidentiality",
        body: "Discretion guaranteed in every transaction.",
      },
    ],
    howItWorks: [
      {
        title: "Request a Notary",
        body: "Contact us by phone, email, or the website.",
      },
      {
        title: "Schedule an Appointment",
        body: "We arrange a convenient time and location.",
      },
      {
        title: "On-Site Notarization",
        body: "Identity verification and notarization on the spot.",
      },
      {
        title: "Receive Your Notarized Documents",
        body: "Documents are legally binding and ready for submission.",
      },
    ],
    testimonials: [
      {
        quote: "The best notary in the State!",
        author: "Alex V.",
      },
      {
        quote: "Wonderful – they look great.",
        author: "Debbie R.",
      },
    ],
  },
  {
    slug: "stakeout-services",
    title: "Stakeout Services",
    shortDescription:
      "For subjects who play hard-to-get, we offer round-the-clock surveillance.",
    heroSubheading:
      "For subjects who play hard-to-get, we offer round-the-clock surveillance.",
    whatIs: {
      heading: "What are Stakeout Services for Service of Process?",
      body: "Stakeout services are strategic monitoring of individuals who intentionally evade traditional service methods, so documents can be served when the subject appears.",
    },
    whyChoose: {
      heading: "Why Choose Central Jersey Process Service for Stakeout Services?",
      body: "We specialize in reaching difficult targets while staying fully compliant with applicable law — discreet, tactical, and effective.",
    },
    offeringsHeading: "Stakeout Services for Individuals Avoiding Service of Process",
    offerings: [
      {
        heading: "Strategic Surveillance for Process Serving",
        bullets: [
          "Defendants avoiding lawsuits",
          "Witnesses refusing to cooperate",
        ],
      },
      {
        heading: "Expertise in Serving Evasive Individuals",
        bullets: [
          "Tracking evasive behavior",
          "Monitoring known locations discreetly",
          "Timing service for optimal appearance windows",
        ],
      },
    ],
    benefitsHeading: "Benefits of Our Stakeout Services",
    benefits: [
      {
        title: "Discreet and Confidential",
        body: "The subject remains unaware until served.",
      },
      {
        title: "Specialized in Difficult Cases",
        body: "Gated communities, secure buildings, and dodging tactics.",
      },
      {
        title: "Legal Compliance",
        body: "Strict adherence to state and federal regulations.",
      },
      {
        title: "Customized Approach",
        body: "Plans tailored to schedules and residency behaviors.",
      },
    ],
    howItWorks: [
      {
        title: "Consultation",
        body: "We understand the challenges and case parameters.",
      },
      {
        title: "Stakeout Planning",
        body: "Plans are designed around subject habits and schedules.",
      },
      {
        title: "Surveillance Execution",
        body: "Discreet field monitoring and tactical delivery.",
      },
      {
        title: "Successful Service",
        body: "Explicit proof and delivery documentation provided.",
      },
    ],
    testimonials: [
      {
        quote: "This has been excellent work.",
        author: "Gordon B.",
      },
      {
        quote: "THANK YOU — appreciate your diligence on this one!",
        author: "Melissa T.",
      },
    ],
  },
  {
    slug: "court-filing",
    title: "Court Filing and Record Retrieval",
    shortDescription:
      "Affordable filing for jobs of all sizes. Expert retrieval from any government entity.",
    heroSubheading:
      "Affordable filing for jobs of all sizes. Expert retrieval from any government entity.",
    whatIs: {
      heading: "What is Court Filing and Record Retrieval?",
      body: "Court filing is the submission of legal documents to courts. Record retrieval is obtaining case files and public records from courts and government entities.",
    },
    whyChoose: {
      heading: "Why Choose Central Jersey Process Service?",
      body: "We know New Jersey court procedures, county clerks, and municipal clerks — so filings land correctly and hard-to-find records get tracked down.",
    },
    offeringsHeading: "Court Filings and Record Retrieval Services",
    offerings: [
      {
        heading: "Comprehensive Court Filings",
        bullets: [
          "Motions and pleadings",
          "Petitions and complaints",
          "Orders and judgments",
          "Discovery materials",
        ],
      },
      {
        heading: "E-Filing Services",
        body: "Familiarity with New Jersey’s electronic filing systems for accurate, timely submissions.",
      },
      {
        heading: "Court Records and Certified Copies",
        bullets: [
          "Case files",
          "Judgments and orders",
          "Divorce decrees",
          "Probate records",
        ],
      },
      {
        heading: "Retrieval from Municipal and County Clerks",
        bullets: [
          "Property deeds and title records",
          "Marriage and birth certificates",
          "Public meeting minutes",
          "Business licenses",
        ],
      },
      {
        heading: "Efficient and Accurate Retrieval",
        body: "We move quickly through the right offices and channels so you get what you need without wasted trips.",
      },
    ],
    benefitsHeading: "Benefits of Our Court Filing and Record Retrieval Services",
    benefits: [
      {
        title: "Broad Coverage",
        body: "Beyond court filings to local municipal levels across New Jersey.",
      },
      {
        title: "Timely Submissions",
        body: "Deadlines are met to avoid legal delays.",
      },
      {
        title: "Access to Difficult Records",
        body: "Expertise in tracking down hard-to-find files.",
      },
      {
        title: "Legal Compliance",
        body: "Adherence to local laws and administrative rules.",
      },
    ],
    howItWorks: [
      {
        title: "Submit Your Request",
        body: "Provide details about the filing or retrieval need.",
      },
      {
        title: "Document Preparation",
        body: "We ensure documents are properly structured.",
      },
      {
        title: "Filing or Retrieval",
        body: "We execute at the specified court or clerk office.",
      },
      {
        title: "Delivery",
        body: "You receive submission confirmations or prompt record delivery.",
      },
    ],
    testimonials: [
      {
        quote: "Max, thank you for your help. You went above and beyond.",
        author: "David L.",
      },
      {
        quote: "Thank you so much!",
        author: "Paula O.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return SERVICES.filter((s) => s.featured);
}
