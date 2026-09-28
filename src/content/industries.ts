export type Industry = {
  slug: string;
  title: string;
  icon: IndustryIconKey;
  summary: string;
  heroHeadline: string;
  heroBody: string;
  challenges: string[];
  solutions: { title: string; body: string }[];
  clouds: string[];
  metrics: { label: string; value: string }[];
  relatedServices: string[];
};

export type IndustryIconKey =
  | "shopping-bag"
  | "heart-pulse"
  | "building"
  | "landmark"
  | "graduation-cap"
  | "plane"
  | "megaphone"
  | "cpu";

export const industries: Industry[] = [
  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    icon: "cpu",
    summary:
      "Subscription lifecycle, product-led signals and support scale — connected from trial signup to renewal.",
    heroHeadline: "From trial signup to renewal, in one connected revenue system.",
    heroBody:
      "SaaS teams run on fragmented signals: product usage in one warehouse, billing in another, support in a third. We unify them in Salesforce so expansion, churn risk and support load are visible in the same place your team already works.",
    challenges: [
      "Product usage data trapped outside the CRM, invisible to sales and CS",
      "Renewal and expansion motions tracked in spreadsheets",
      "Support volume scaling linearly with customer count",
      "No reliable view of health score, churn risk or net revenue retention",
    ],
    solutions: [
      {
        title: "Usage-to-CRM pipeline",
        body: "Product events streamed into Salesforce through platform events or scheduled sync, surfaced as health scores and expansion triggers on the account.",
      },
      {
        title: "Subscription lifecycle",
        body: "Contracts, renewal opportunities, amendment flows and automated renewal task generation tied to term dates.",
      },
      {
        title: "Support that scales sub-linearly",
        body: "Knowledge-first deflection, in-product case creation, and Agentforce handling repetitive tier-one volume.",
      },
      {
        title: "Revenue reporting",
        body: "NRR, churn cohorts and expansion attribution built on a data model that supports board-grade reporting.",
      },
    ],
    clouds: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Agentforce", "Platform Events"],
    metrics: [
      { label: "Typical first release", value: "6–8 weeks" },
      { label: "Focus", value: "NRR & support efficiency" },
    ],
    relatedServices: ["sales-cloud", "integration-architecture", "agentforce-ai"],
  },
  {
    slug: "finance-fintech",
    title: "Finance & Fintech",
    icon: "landmark",
    summary:
      "Regulated workflows, auditable automation and a sharing model that stands up to a compliance review.",
    heroHeadline: "Automation your compliance team can audit line by line.",
    heroBody:
      "In financial services the constraint is rarely the feature — it is the audit trail, the access model and the evidence that controls actually work. We design Salesforce so that visibility, approvals and record history are defensible under examination.",
    challenges: [
      "Manual KYC and onboarding steps with no auditable record of who approved what",
      "Over-broad record access that fails a permissions review",
      "Client data spread across core banking, spreadsheets and email",
      "Regulatory reporting assembled by hand each quarter",
    ],
    solutions: [
      {
        title: "Auditable onboarding",
        body: "KYC and AML checkpoints as tracked stages with approval processes, field history and document capture on the record.",
      },
      {
        title: "Least-privilege access",
        body: "Role hierarchy, restriction rules, field-level security and permission-set groups designed against the principle of least privilege.",
      },
      {
        title: "Core system integration",
        body: "Resilient interfaces into core banking and payment platforms with idempotency, retry and reconciliation reporting.",
      },
      {
        title: "Reporting & evidence",
        body: "Regulatory and management reporting generated from the system of record, with the lineage to prove where numbers came from.",
      },
    ],
    clouds: ["Sales Cloud", "Service Cloud", "Shield-ready config", "Integration", "Experience Cloud"],
    metrics: [
      { label: "Design principle", value: "Least privilege" },
      { label: "Every change", value: "Audit-traceable" },
    ],
    relatedServices: ["salesforce-consulting", "integration-architecture", "custom-development"],
  },
  {
    slug: "ecommerce-retail",
    title: "Ecommerce & Retail",
    icon: "shopping-bag",
    summary:
      "Order, inventory and support data unified so service agents answer 'where is my order' in seconds — or not at all.",
    heroHeadline: "Answer 'where is my order' before an agent ever opens the case.",
    heroBody:
      "Retail support volume is dominated by a handful of predictable questions tied to order state. Connect commerce data to Service Cloud and most of that volume can be resolved automatically, with agents freed for the cases that need judgement.",
    challenges: [
      "Order data living in the commerce platform, invisible to support agents",
      "Order-status enquiries consuming the majority of tier-one capacity",
      "Returns and exchanges tracked outside any system of record",
      "No single customer view across web, marketplace and in-store",
    ],
    solutions: [
      {
        title: "Order data in the console",
        body: "Commerce and ERP order data surfaced on the case and contact so agents answer without leaving Salesforce.",
      },
      {
        title: "Automated order-status handling",
        body: "Inbound email parsed for order references, live order data retrieved, and a drafted response prepared for agent review — our first production Agentforce build.",
      },
      {
        title: "Returns & exchanges",
        body: "RMA workflow with approval rules, refund coordination and full history against the customer record.",
      },
      {
        title: "Unified customer profile",
        body: "Identity resolution across web, marketplace and store channels so loyalty and lifetime value are accurate.",
      },
    ],
    clouds: ["Service Cloud", "Agentforce", "Experience Cloud", "Integration", "Data Cloud"],
    metrics: [
      { label: "Highest-volume case type", value: "Order status" },
      { label: "Best automation candidate", value: "Tier-one email" },
    ],
    relatedServices: ["service-cloud", "agentforce-ai", "integration-architecture"],
  },
  {
    slug: "healthcare-wellness",
    title: "Healthcare & Wellness",
    icon: "heart-pulse",
    summary:
      "Patient and member journeys with privacy-first design, consent tracking and careful handling of sensitive data.",
    heroHeadline: "Patient experience improved without compromising privacy.",
    heroBody:
      "Healthcare workloads demand explicit consent tracking, minimised data exposure and encryption of sensitive fields. We design the access model and data-retention approach first, then build the coordination and communication layer on top.",
    challenges: [
      "Sensitive data visible to staff who have no clinical need for it",
      "Consent and communication preferences tracked inconsistently",
      "Appointment scheduling and reminders handled manually",
      "Referral and care-coordination handoffs lost between teams",
    ],
    solutions: [
      {
        title: "Privacy-first data model",
        body: "Field-level security, encryption of sensitive fields, restriction rules and retention policies designed before any build begins.",
      },
      {
        title: "Consent management",
        body: "Channel-level consent, preference centres and communication suppression enforced at the automation layer, not by convention.",
      },
      {
        title: "Scheduling & reminders",
        body: "Appointment workflows with automated reminders, rescheduling self-service and no-show follow-up.",
      },
      {
        title: "Care coordination",
        body: "Referral workflows, task routing and a timeline view so every handoff between teams is recorded.",
      },
    ],
    clouds: ["Service Cloud", "Experience Cloud", "Shield-ready config", "Flow", "Integration"],
    metrics: [
      { label: "Starting point", value: "Access & consent model" },
      { label: "Data principle", value: "Minimum necessary" },
    ],
    relatedServices: ["salesforce-consulting", "experience-cloud", "service-cloud"],
  },
  {
    slug: "real-estate",
    title: "Real Estate & Property",
    icon: "building",
    summary:
      "Listings, enquiries, viewings and tenancy workflows in one pipeline — with documents and approvals attached to the record.",
    heroHeadline: "Every enquiry, viewing and tenancy on one timeline.",
    heroBody:
      "Property businesses lose deals in the gaps between portals, WhatsApp threads and inboxes. We model listings, enquiries, viewings and tenancies as first-class records so nothing depends on an agent remembering to follow up.",
    challenges: [
      "Portal enquiries arriving by email with no routing or SLA",
      "Viewing schedules managed in personal calendars",
      "Contracts and documents scattered across drives and inboxes",
      "No visibility of agent performance or pipeline by property",
    ],
    solutions: [
      {
        title: "Enquiry capture & routing",
        body: "Portal, website and phone enquiries captured into a single queue with assignment rules and response SLAs.",
      },
      {
        title: "Listing & viewing management",
        body: "Property records with media, availability, viewing scheduling and automated follow-up sequences.",
      },
      {
        title: "Document workflow",
        body: "DocuSign-integrated agreements with approval routing and executed documents stored against the record.",
      },
      {
        title: "Client & tenant portal",
        body: "An Experience Cloud portal for applications, maintenance requests, documents and payment status.",
      },
    ],
    clouds: ["Sales Cloud", "Service Cloud", "Experience Cloud", "DocuSign", "Flow"],
    metrics: [
      { label: "Biggest leak", value: "Unrouted enquiries" },
      { label: "Quick win", value: "SLA-backed routing" },
    ],
    relatedServices: ["sales-cloud", "experience-cloud", "integration-architecture"],
  },
  {
    slug: "education-edtech",
    title: "Education & EdTech",
    icon: "graduation-cap",
    summary:
      "Recruitment, admissions and student engagement joined up from first enquiry through to alumni.",
    heroHeadline: "One record per student, from first enquiry to alumni.",
    heroBody:
      "Education institutions typically run recruitment, admissions and student support on separate systems, so nobody sees the full journey. We model the lifecycle end to end and automate the nurture and support that drives conversion and retention.",
    challenges: [
      "Enquiry, applicant and student records duplicated across systems",
      "Admissions review tracked in spreadsheets with no audit trail",
      "Manual, untargeted communication at every stage",
      "No early-warning signal for at-risk students",
    ],
    solutions: [
      {
        title: "Recruitment & enquiry management",
        body: "Multi-channel enquiry capture, source attribution, nurture journeys and conversion reporting by programme and cohort.",
      },
      {
        title: "Admissions workflow",
        body: "Application stages, document collection, reviewer assignment, scoring and decision approvals with a complete audit trail.",
      },
      {
        title: "Student portal",
        body: "Experience Cloud self-service for applications, documents, support cases and status tracking.",
      },
      {
        title: "Engagement & retention",
        body: "Engagement scoring, at-risk alerts and structured intervention workflows for student success teams.",
      },
    ],
    clouds: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Flow", "Integration"],
    metrics: [
      { label: "Lifecycle covered", value: "Enquiry → alumni" },
      { label: "Key metric", value: "Enquiry-to-enrolment" },
    ],
    relatedServices: ["salesforce-consulting", "experience-cloud", "sales-cloud"],
  },
  {
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    icon: "plane",
    summary:
      "Booking, guest service and loyalty connected so every interaction knows the guest's full history.",
    heroHeadline: "Service that remembers the guest, not just the booking.",
    heroBody:
      "Guest experience depends on context that usually sits in the booking engine, the PMS and three inboxes. We consolidate the guest profile in Salesforce and automate the pre-arrival, in-stay and post-stay touchpoints that drive repeat business.",
    challenges: [
      "Booking data in the reservation system, service history in email",
      "Peak-season enquiry spikes overwhelming a fixed support team",
      "Loyalty and preference data not available at the point of service",
      "Post-stay feedback collected but never actioned",
    ],
    solutions: [
      {
        title: "Unified guest profile",
        body: "Reservation, preference and service history consolidated on the contact so every channel has the same context.",
      },
      {
        title: "Automated guest journeys",
        body: "Pre-arrival, in-stay and post-stay communication triggered by booking state rather than manual lists.",
      },
      {
        title: "Peak-season deflection",
        body: "Self-service booking management and AI agents handling booking status and amendment requests during demand spikes.",
      },
      {
        title: "Feedback loop",
        body: "Post-stay surveys routed to owners with escalation rules for detractor responses.",
      },
    ],
    clouds: ["Service Cloud", "Experience Cloud", "Agentforce", "Integration", "Flow"],
    metrics: [
      { label: "Pressure point", value: "Seasonal volume spikes" },
      { label: "Lever", value: "Deflection + automation" },
    ],
    relatedServices: ["service-cloud", "agentforce-ai", "integration-architecture"],
  },
  {
    slug: "media-creators",
    title: "Media & Creators",
    icon: "megaphone",
    summary:
      "Sponsorship pipeline, campaign delivery and partner relationships managed like the revenue operation they are.",
    heroHeadline: "Run sponsorships like a revenue operation, not an inbox.",
    heroBody:
      "Media businesses and creator teams manage brand deals across DMs, email and spreadsheets until the volume breaks them. We build the pipeline, deliverable tracking and invoicing workflow that turns ad-hoc deals into predictable revenue.",
    challenges: [
      "Brand deals negotiated across DMs with no central record",
      "Campaign deliverables and deadlines tracked manually",
      "Invoicing and payment chasing done by hand",
      "No reporting on partner performance or repeat rate",
    ],
    solutions: [
      {
        title: "Sponsorship pipeline",
        body: "Inbound partnership enquiries captured and qualified through defined stages with rate cards and inventory availability.",
      },
      {
        title: "Deliverable tracking",
        body: "Campaign records with deliverables, deadlines, approval steps and automated reminders for every party.",
      },
      {
        title: "Contract & invoicing",
        body: "E-signature workflows and finance integration so contracted revenue and payment status are visible in one place.",
      },
      {
        title: "Partner reporting",
        body: "Performance reporting by partner, campaign and channel to support renewal and rate conversations.",
      },
    ],
    clouds: ["Sales Cloud", "Flow", "DocuSign", "Integration", "Experience Cloud"],
    metrics: [
      { label: "Replaces", value: "Spreadsheets & DMs" },
      { label: "Outcome", value: "Predictable revenue" },
    ],
    relatedServices: ["sales-cloud", "integration-architecture", "web-development"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
