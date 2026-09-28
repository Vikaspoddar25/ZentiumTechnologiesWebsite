export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  /** Short label used in the nav mega-menu. */
  blurb: string;
  icon: IconKey;
  summary: string;
  heroHeadline: string;
  heroBody: string;
  outcomes: string[];
  challenges: { title: string; body: string }[];
  deliverables: { title: string; body: string }[];
  stack: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export type IconKey =
  | "compass"
  | "sparkles"
  | "plug"
  | "users"
  | "headset"
  | "trending-up"
  | "code"
  | "database"
  | "globe";

export const services: Service[] = [
  {
    slug: "salesforce-consulting",
    title: "Salesforce Consulting & Implementation",
    navTitle: "Salesforce Consulting",
    blurb: "Discovery, org design, build and migration",
    icon: "compass",
    summary:
      "End-to-end Salesforce delivery — from discovery and org design through configuration, data migration and go-live.",
    heroHeadline: "Salesforce, architected once — so you are not rebuilding it in eighteen months.",
    heroBody:
      "Most Salesforce orgs do not fail at launch. They fail two years later, when automation collides, technical debt compounds and nobody can safely change anything. We architect for that second year from day one: a clean object model, documented automation, and a release process your team can actually run.",
    outcomes: [
      "A documented org architecture your team can extend without a consultant",
      "Automation consolidated into Flow with a clear order of execution",
      "Data migrated with validated mappings, dedupe rules and rollback plans",
      "Admins and end users trained on the org they actually have",
    ],
    challenges: [
      {
        title: "Automation nobody can untangle",
        body: "Workflow rules, process builders, triggers and flows all firing on the same object, in an order nobody has documented. Every change becomes a gamble.",
      },
      {
        title: "A data model that fights the business",
        body: "Objects added reactively over the years, custom fields duplicating standard ones, and reporting that needs a spreadsheet to make sense.",
      },
      {
        title: "Licences paid for, value not realised",
        body: "Teams working around Salesforce in email and spreadsheets because the platform was configured for a process that no longer exists.",
      },
    ],
    deliverables: [
      {
        title: "Discovery & org assessment",
        body: "Stakeholder interviews, process mapping and a technical audit of your existing org — automation inventory, field usage, permission model and technical debt register.",
      },
      {
        title: "Solution architecture",
        body: "Object model, sharing and visibility design, automation strategy, integration boundaries and an environment/release plan documented before a single field is built.",
      },
      {
        title: "Build & configuration",
        body: "Declarative-first configuration, Apex and Lightning Web Components only where the platform genuinely needs code, all delivered in reviewable increments.",
      },
      {
        title: "Data migration",
        body: "Field mapping, cleansing, deduplication, staged loads into a full sandbox, reconciliation reports and a tested rollback path before production cutover.",
      },
      {
        title: "Enablement & handover",
        body: "Role-based training, admin runbooks, and architecture documentation so your team owns the org after we hand over the keys.",
      },
    ],
    stack: [
      "Sales Cloud",
      "Service Cloud",
      "Flow",
      "Apex",
      "Lightning Web Components",
      "Data Loader",
      "Salesforce DX",
      "Scratch orgs",
    ],
    faqs: [
      {
        question: "Do you work on new implementations or existing orgs?",
        answer:
          "Both. Roughly half of our work is rescuing orgs that have accumulated years of unmanaged change. We start with an assessment so you know exactly what you are paying to fix before committing to a build.",
      },
      {
        question: "How do you scope and price a project?",
        answer:
          "We run a paid discovery, then quote a fixed scope with a fixed price and a defined change process. You approve the architecture and the number before build starts — no open-ended hourly drift.",
      },
      {
        question: "Can you work alongside our internal admin?",
        answer:
          "Yes, and we prefer it. Your admin sits in design reviews and inherits the documentation, which is the difference between a solution you own and one you rent.",
      },
    ],
    related: ["agentforce-ai", "integration-architecture", "managed-services"],
  },
  {
    slug: "agentforce-ai",
    title: "Agentforce & Salesforce AI",
    navTitle: "Agentforce & AI",
    blurb: "Grounded agents, guardrails and real deflection",
    icon: "sparkles",
    summary:
      "Autonomous agents, Einstein and Prompt Builder — grounded in your data, governed properly, and measured on real deflection.",
    heroHeadline: "AI agents that close cases, not demos that impress in a boardroom.",
    heroBody:
      "Agentforce only works when it is grounded in trustworthy data and constrained by explicit guardrails. We build agents that retrieve real records, take real actions through Apex and Flow, escalate cleanly to humans, and report on what they actually resolved.",
    outcomes: [
      "Agents grounded in live Salesforce records, not generic model output",
      "Explicit topics, instructions and guardrails with human-in-the-loop escalation",
      "Measurable case deflection and handle-time reduction from day one",
      "An AI governance model covering data access, PII, logging and review",
    ],
    challenges: [
      {
        title: "Pilots that never reach production",
        body: "An agent that demos well on clean data and collapses on the messy reality of your service queue — because nobody defined what it is allowed to do.",
      },
      {
        title: "Ungoverned AI access to customer data",
        body: "Agents inheriting broad permissions, no audit trail and no policy on what leaves the org. That is a compliance incident waiting to happen.",
      },
      {
        title: "No way to prove value",
        body: "Without deflection metrics, response-time baselines and escalation tracking, AI spend is indistinguishable from a science project.",
      },
    ],
    deliverables: [
      {
        title: "Use-case qualification",
        body: "We score candidate use cases on data readiness, action complexity and measurable value, then build the one that pays for the programme.",
      },
      {
        title: "Agent design & build",
        body: "Topics, instructions, and actions built on Flow, Apex and Prompt Builder — with retrieval grounded in your objects, knowledge and external systems.",
      },
      {
        title: "Data grounding",
        body: "Knowledge article curation, Data Cloud or record-based retrieval, and the field-level access model that determines what the agent can see.",
      },
      {
        title: "Guardrails & governance",
        body: "Permission sets scoped to the agent user, escalation rules, response review workflows, logging, and an AI usage policy your compliance team can sign off.",
      },
      {
        title: "Measurement",
        body: "Baselines captured before launch, then dashboards tracking deflection rate, agent-assisted handle time, escalation reasons and answer quality.",
      },
    ],
    stack: [
      "Agentforce",
      "Prompt Builder",
      "Einstein Trust Layer",
      "Data Cloud",
      "Apex invocable actions",
      "Flow",
      "Knowledge",
      "Einstein Bots",
    ],
    faqs: [
      {
        question: "Is our data used to train external models?",
        answer:
          "No. Salesforce's Einstein Trust Layer applies zero-retention prompts and dynamic grounding, and we configure masking for sensitive fields. We document exactly what is sent, where it goes and what is logged.",
      },
      {
        question: "What is a realistic first Agentforce use case?",
        answer:
          "Something high-volume, low-ambiguity and data-backed — order status, appointment changes, account lookups, knowledge answers. Our first production agent handled inbound order-status email end to end.",
      },
      {
        question: "Do we need Data Cloud?",
        answer:
          "Not always. If the answers live in Salesforce records and Knowledge, standard grounding is enough. Data Cloud earns its cost when you need to unify data across systems.",
      },
    ],
    related: ["service-cloud", "salesforce-consulting", "integration-architecture"],
  },
  {
    slug: "integration-architecture",
    title: "Integration & Architecture",
    navTitle: "Integration & Architecture",
    blurb: "The right pattern, with retry and observability",
    icon: "plug",
    summary:
      "Salesforce connected to the rest of your stack with the right pattern, proper error handling and integrations that survive volume.",
    heroHeadline: "Integrations that fail loudly, retry safely and never silently lose a record.",
    heroBody:
      "Led by a Salesforce Certified Integration Architecture Designer. We choose the pattern deliberately — request-reply, fire-and-forget, batch sync, remote call-in, platform events — then build it with idempotency, retry, and observability so a downstream outage never becomes a data-integrity incident.",
    outcomes: [
      "The right integration pattern chosen for each interface, and documented",
      "Idempotent, retry-safe interfaces that tolerate downstream outages",
      "Callout volumes engineered inside governor and API limits",
      "Monitoring and alerting so failures surface before customers notice",
    ],
    challenges: [
      {
        title: "Silent data loss",
        body: "Synchronous callouts with no retry queue. The downstream system has a bad afternoon, records vanish, and nobody finds out until month-end reconciliation.",
      },
      {
        title: "Governor limits hit in production",
        body: "Integrations built against test volumes that break the moment real traffic arrives — callouts in loops, uncommitted work pending, row locks under concurrency.",
      },
      {
        title: "Point-to-point spaghetti",
        body: "Every new system wired directly to every other one, until nobody can change an API without breaking three unrelated processes.",
      },
    ],
    deliverables: [
      {
        title: "Integration architecture",
        body: "Interface catalogue, pattern selection per interface, canonical data model, error-handling strategy and security model — documented and reviewed before build.",
      },
      {
        title: "API & middleware build",
        body: "REST and SOAP services, named credentials, external services, platform events, Change Data Capture, and middleware orchestration where it belongs.",
      },
      {
        title: "Resilience engineering",
        body: "Idempotency keys, dead-letter queues, exponential backoff, bulkified processing and circuit breakers so a partner outage degrades gracefully.",
      },
      {
        title: "Observability",
        body: "Structured integration logging, failure dashboards, and alerting routed to the people who can act — not buried in debug logs.",
      },
    ],
    stack: [
      "REST & SOAP APIs",
      "Platform Events",
      "Change Data Capture",
      "Named Credentials",
      "External Services",
      "Bulk API 2.0",
      "AWS",
      "Stripe",
      "DocuSign",
      "QuickBooks",
      "Outlook",
    ],
    faqs: [
      {
        question: "Do we need middleware like MuleSoft?",
        answer:
          "Only when the interface count and transformation complexity justify it. For a handful of interfaces, native Salesforce integration with proper error handling is cheaper and easier to own.",
      },
      {
        question: "Can you integrate with a legacy system that has no API?",
        answer:
          "Usually. Options include database-level replication, scheduled file exchange over SFTP, or a thin service layer in front of the legacy system. We will tell you the trade-offs honestly.",
      },
      {
        question: "How do you handle API limit consumption?",
        answer:
          "We model expected call volumes during design, prefer bulk and event-driven patterns over per-record callouts, and instrument consumption so you see headroom before you run out of it.",
      },
    ],
    related: ["salesforce-consulting", "agentforce-ai", "managed-services"],
  },
  {
    slug: "sales-cloud",
    title: "Sales Cloud",
    navTitle: "Sales Cloud",
    blurb: "Pipeline, forecasting and rep productivity",
    icon: "trending-up",
    summary:
      "Pipeline your reps actually update — clean stages, useful forecasting and automation that removes admin instead of adding it.",
    heroHeadline: "A pipeline your reps update because it helps them, not because you chase them.",
    heroBody:
      "Sales Cloud adoption is a design problem long before it is a training problem. We build lean stage definitions with exit criteria, automate the data entry that reps resent, and give leadership forecasting they can defend in a board meeting.",
    outcomes: [
      "Stage definitions with objective exit criteria the whole team applies consistently",
      "Forecast categories and roll-ups leadership trusts",
      "Admin work automated out of the rep's day",
      "Territory, sharing and approval models that scale with headcount",
    ],
    challenges: [
      {
        title: "Pipeline hygiene nobody enforces",
        body: "Opportunities parked in stage two for six months, close dates rolled forward indefinitely, and a forecast that is a work of fiction.",
      },
      {
        title: "Reps working outside the CRM",
        body: "Deals tracked in spreadsheets and inboxes because logging them in Salesforce takes eleven clicks.",
      },
      {
        title: "Reporting that raises more questions than it answers",
        body: "Three dashboards showing three different revenue numbers, because nobody agreed what 'committed' means.",
      },
    ],
    deliverables: [
      {
        title: "Sales process design",
        body: "Stage model, exit criteria, qualification framework, products and price books, quote-to-cash boundaries, and the automation that supports them.",
      },
      {
        title: "Forecasting & reporting",
        body: "Forecast categories, roll-up logic, pipeline-health dashboards and cohort reporting built on a data model that supports it.",
      },
      {
        title: "Rep productivity",
        body: "Path guidance, screen flows, Einstein Activity Capture, email and calendar integration, and mobile layouts tuned for field use.",
      },
      {
        title: "Territory & access",
        body: "Role hierarchy, territory management, sharing rules and approval processes designed for how your team actually sells.",
      },
    ],
    stack: [
      "Sales Cloud",
      "Forecasting",
      "CPQ foundations",
      "Flow",
      "Einstein Activity Capture",
      "Reports & Dashboards",
      "Territory Management",
    ],
    faqs: [
      {
        question: "How long does a Sales Cloud implementation take?",
        answer:
          "A focused implementation for a single sales team typically runs six to ten weeks from discovery to go-live. Multi-region rollouts with territory management and CPQ take longer.",
      },
      {
        question: "Can you migrate us from HubSpot, Pipedrive or Zoho?",
        answer:
          "Yes. We map the source schema, cleanse and dedupe during migration, and preserve activity history so reps do not lose context on open deals.",
      },
    ],
    related: ["salesforce-consulting", "service-cloud", "integration-architecture"],
  },
  {
    slug: "service-cloud",
    title: "Service Cloud",
    navTitle: "Service Cloud",
    blurb: "Omni-channel cases, knowledge and deflection",
    icon: "headset",
    summary:
      "Omni-channel support with routing, knowledge and automation that reduce handle time and resolve more cases without more headcount.",
    heroHeadline: "Resolve more cases without hiring more agents.",
    heroBody:
      "We design the service console around how your agents actually work — the right data on one screen, omni-channel routing that respects skills and capacity, knowledge surfaced in context, and automation handling the repetitive tier-one volume.",
    outcomes: [
      "Email, web, chat and messaging consolidated into one case model",
      "Omni-channel routing by skill, capacity and priority",
      "Knowledge surfaced in the console where agents need it",
      "Tier-one volume deflected through self-service and Agentforce",
    ],
    challenges: [
      {
        title: "Channels that do not share a queue",
        body: "Email in a shared inbox, chat in another tool, social somewhere else. No single view of the customer and no reliable SLA reporting.",
      },
      {
        title: "Agents drowning in repetitive questions",
        body: "The same order-status and password questions consuming half of tier-one capacity, while genuinely complex cases wait.",
      },
      {
        title: "Knowledge nobody uses",
        body: "A knowledge base that exists, is out of date, and sits three clicks away from the console — so agents answer from memory instead.",
      },
    ],
    deliverables: [
      {
        title: "Case management design",
        body: "Case model, record types, assignment and escalation rules, milestones, entitlements and SLA reporting built to your support contracts.",
      },
      {
        title: "Omni-channel setup",
        body: "Email-to-Case, Web-to-Case, chat and messaging channels routed through Omni-Channel with skills-based routing and presence configuration.",
      },
      {
        title: "Agent console",
        body: "Lightning console apps, macros, quick text, guided flows and a layout that puts the next action in front of the agent instead of buried in a related list.",
      },
      {
        title: "Deflection",
        body: "Knowledge lifecycle, self-service portal search, Einstein Bots and Agentforce agents handling repetitive volume end to end.",
      },
    ],
    stack: [
      "Service Cloud",
      "Omni-Channel",
      "Email-to-Case",
      "Knowledge",
      "Entitlements & Milestones",
      "Einstein Bots",
      "Agentforce",
      "Experience Cloud",
    ],
    faqs: [
      {
        question: "Can automation handle inbound support email?",
        answer:
          "Yes — that is exactly what we built for an order-status use case: inbound email creates a case, order numbers are extracted, live order data is retrieved, and a pre-populated reply is drafted for agent review before sending.",
      },
      {
        question: "Do you configure CSAT and SLA reporting?",
        answer:
          "Yes. Entitlements and milestones drive SLA tracking, and we wire survey responses back to the case so CSAT can be reported by agent, channel, queue and case reason.",
      },
    ],
    related: ["agentforce-ai", "experience-cloud", "salesforce-consulting"],
  },
  {
    slug: "experience-cloud",
    title: "Experience Cloud",
    navTitle: "Experience Cloud",
    blurb: "Secure portals with a branded front end",
    icon: "users",
    summary:
      "Customer, partner and member portals with a sharing model that is secure by design and a front end that does not feel like 2015.",
    heroHeadline: "Portals that look like your brand and share data like your security team demands.",
    heroBody:
      "Experience Cloud lives or dies on its sharing model. We design guest and authenticated access from first principles — sharing sets, sharing rules, audience targeting and object permissions — then build a front end with custom Lightning Web Components that does not look like a template.",
    outcomes: [
      "A sharing model reviewed against guest-user and record-access best practice",
      "Fully branded portals built with custom Lightning Web Components",
      "Self-service that measurably reduces inbound case volume",
      "Partner and member journeys with role-appropriate visibility",
    ],
    challenges: [
      {
        title: "Over-permissive guest access",
        body: "The fastest way to get a portal working is also the fastest way to expose records you never intended to publish. Guest-user hardening is not optional.",
      },
      {
        title: "Templates that fight your brand",
        body: "Out-of-the-box themes that cannot express your design system, leaving you with a portal that looks bolted on.",
      },
      {
        title: "Portals nobody logs into",
        body: "Self-service that does not answer the questions customers actually ask, so they email support anyway.",
      },
    ],
    deliverables: [
      {
        title: "Access & sharing architecture",
        body: "Licence-type selection, profile and permission-set design, sharing sets, account-role hierarchies, and a hardened guest-user configuration.",
      },
      {
        title: "Portal build",
        body: "Custom theme layouts, branded LWC components, audience-targeted pages, and navigation designed around the top five user tasks.",
      },
      {
        title: "Self-service",
        body: "Knowledge search, case deflection, case creation and tracking, chat handoff and account self-management.",
      },
      {
        title: "Partner enablement",
        body: "Lead and deal registration, PRM-style dashboards, co-selling visibility and partner onboarding journeys.",
      },
    ],
    stack: [
      "Experience Cloud",
      "Lightning Web Components",
      "Sharing Sets",
      "Audience Targeting",
      "Knowledge",
      "SSO / SAML",
      "CMS",
    ],
    faqs: [
      {
        question: "Can the portal match our marketing site exactly?",
        answer:
          "Yes. We build custom theme layouts and LWC components against your design tokens rather than restyling a stock template, so typography, spacing and components carry across.",
      },
      {
        question: "How do you handle single sign-on?",
        answer:
          "We configure SAML or OpenID Connect against your identity provider, with just-in-time provisioning where you do not want to pre-create every user.",
      },
    ],
    related: ["service-cloud", "custom-development", "web-development"],
  },
  {
    slug: "custom-development",
    title: "Custom Development — Apex & LWC",
    navTitle: "Custom Development",
    blurb: "Apex, LWC and source-driven delivery",
    icon: "code",
    summary:
      "Apex, Lightning Web Components and DX-based delivery for the requirements configuration genuinely cannot reach.",
    heroHeadline: "Code only where the platform needs it — written to survive the next developer.",
    heroBody:
      "We reach for code last and write it properly when we do: bulkified, tested beyond the coverage minimum, separated into service and selector layers, and delivered through source-driven development with a real branching model.",
    outcomes: [
      "Bulk-safe Apex that holds under production volume",
      "Test classes that assert behaviour, not just hit a coverage number",
      "Reusable LWC components built on your design system",
      "Source-driven delivery with CI validation on every pull request",
    ],
    challenges: [
      {
        title: "Code written against the coverage minimum",
        body: "Test classes that create a record, run the trigger and assert nothing. Coverage passes, regressions ship.",
      },
      {
        title: "Logic scattered across triggers",
        body: "Multiple triggers per object with business logic inline, so execution order is undefined and reuse is impossible.",
      },
      {
        title: "Change-set deployments",
        body: "Manual component picking, no version history, no rollback, and no way to know what is actually in production.",
      },
    ],
    deliverables: [
      {
        title: "Apex engineering",
        body: "Single trigger per object with a handler pattern, service and selector layers, bulkified DML, async processing through Queueable and Batch, and explicit CRUD/FLS enforcement.",
      },
      {
        title: "Lightning Web Components",
        body: "Accessible, reusable components with wire adapters, Lightning Data Service, imperative Apex where needed, and Jest tests.",
      },
      {
        title: "Legacy modernisation",
        body: "Visualforce and Aura migrated to LWC, Workflow Rules and Process Builder consolidated into Flow, and technical debt retired in prioritised order.",
      },
      {
        title: "DevOps",
        body: "Salesforce DX project structure, scratch-org development, CI validation on pull requests, and repeatable deployments with rollback.",
      },
    ],
    stack: [
      "Apex",
      "Lightning Web Components",
      "SOQL / SOSL",
      "Flow",
      "Salesforce DX",
      "Jest",
      "GitHub Actions",
      "Scratch orgs",
    ],
    faqs: [
      {
        question: "What test coverage do you deliver?",
        answer:
          "We target meaningful assertions on positive, negative and bulk paths rather than a percentage. Coverage typically lands well above the 75% deployment requirement as a side effect.",
      },
      {
        question: "Can you take over an existing codebase?",
        answer:
          "Yes. We start with a static analysis and architecture review, then agree a remediation order so the highest-risk code is addressed before new features land on top of it.",
      },
    ],
    related: ["salesforce-consulting", "integration-architecture", "experience-cloud"],
  },
  {
    slug: "managed-services",
    title: "Managed Services & Support",
    navTitle: "Managed Services",
    blurb: "Retained admin, enhancements and releases",
    icon: "database",
    summary:
      "Ongoing Salesforce administration, enhancement and release management — a certified team on retainer instead of a hiring problem.",
    heroHeadline: "A certified Salesforce team on call, for less than one admin salary.",
    heroBody:
      "Hiring a senior Salesforce engineer is slow and expensive; hiring three specialisms is impossible. A managed-services retainer gives you administration, development and architecture from the same team that knows your org, with transparent hours and no ticket-desk anonymity.",
    outcomes: [
      "Guaranteed response times with 24/7 coverage",
      "Three Salesforce release upgrades a year handled proactively",
      "A prioritised enhancement backlog delivered every sprint",
      "Transparent monthly reporting on hours, work delivered and org health",
    ],
    challenges: [
      {
        title: "No internal Salesforce owner",
        body: "The org drifts between whoever has capacity, permissions sprawl, and small problems compound into expensive ones.",
      },
      {
        title: "Seasonal releases catching you out",
        body: "Three Salesforce releases a year, each with retirements and behaviour changes that break something nobody tested.",
      },
      {
        title: "Enhancement requests that never ship",
        body: "A backlog of small, high-value changes nobody has the bandwidth or confidence to make.",
      },
    ],
    deliverables: [
      {
        title: "Administration",
        body: "User and licence management, permissions, data quality, deduplication, reporting and dashboard maintenance.",
      },
      {
        title: "Enhancements",
        body: "A prioritised backlog delivered in regular increments, with each change tested in a sandbox before it reaches production.",
      },
      {
        title: "Release management",
        body: "Seasonal release impact assessment, sandbox preview testing, and remediation before the release reaches your production org.",
      },
      {
        title: "Health & governance",
        body: "Quarterly org health checks, security and permission reviews, technical debt tracking and a roadmap review with your stakeholders.",
      },
    ],
    stack: [
      "Salesforce Optimizer",
      "Security Health Check",
      "Sandbox preview",
      "Salesforce DX",
      "Change management",
      "Jira / Azure DevOps",
    ],
    faqs: [
      {
        question: "How are retainers structured?",
        answer:
          "A monthly block of hours with a defined response SLA, a named lead engineer, and full visibility of how hours are consumed. Unused hours roll within the quarter.",
      },
      {
        question: "Can you support an org you did not build?",
        answer:
          "Yes. We begin with an onboarding assessment to document the org, identify risks and agree priorities before taking operational responsibility.",
      },
      {
        question: "What does 24/7 support cover?",
        answer:
          "Critical production incidents are covered around the clock. Standard enhancement work runs in business hours with overlap into US and European mornings.",
      },
    ],
    related: ["salesforce-consulting", "custom-development", "integration-architecture"],
  },
  {
    slug: "web-development",
    title: "Custom Web Development",
    navTitle: "Web Development",
    blurb: "Next.js sites wired into Salesforce",
    icon: "globe",
    summary:
      "Fast, accessible marketing sites and web applications — built on Next.js and wired into Salesforce where it matters.",
    heroHeadline: "A web presence as fast and as credible as the platform behind it.",
    heroBody:
      "The website is usually the first system a customer touches and the last one anybody optimises. We build on Next.js and TypeScript, target Core Web Vitals and WCAG compliance as requirements rather than aspirations, and connect forms and portals directly to Salesforce.",
    outcomes: [
      "Core Web Vitals in the green on real devices, not just in the lab",
      "WCAG 2.1 AA accessibility built in from the first component",
      "Web-to-Lead and Web-to-Case capture flowing into Salesforce",
      "Technical SEO, structured data and analytics configured at launch",
    ],
    challenges: [
      {
        title: "Plugin-heavy sites that crawl on mobile",
        body: "Page builders stacking megabytes of unused JavaScript, tanking Core Web Vitals and search visibility with it.",
      },
      {
        title: "Forms disconnected from the CRM",
        body: "Enquiries landing in an inbox, retyped by hand, with no attribution and no SLA.",
      },
      {
        title: "Accessibility discovered during procurement",
        body: "Enterprise buyers asking for a VPAT after the site is already built, when remediation costs multiples of doing it right.",
      },
    ],
    deliverables: [
      {
        title: "Design & build",
        body: "Design system, component library and a Next.js build with server rendering, image optimisation and a considered motion layer.",
      },
      {
        title: "Salesforce connectivity",
        body: "Web-to-Lead and Web-to-Case, custom API capture with server-side validation, and campaign attribution passed through to the CRM.",
      },
      {
        title: "Performance & accessibility",
        body: "Lighthouse budgets enforced in CI, semantic markup, keyboard and screen-reader testing, and reduced-motion support throughout.",
      },
      {
        title: "SEO foundations",
        body: "Metadata, canonical URLs, sitemaps, JSON-LD structured data, Open Graph images and analytics wired up before launch.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Vercel",
      "Web-to-Lead",
      "JSON-LD",
      "Core Web Vitals",
    ],
    faqs: [
      {
        question: "Do you redesign existing sites or only build new ones?",
        answer:
          "Both. If the content and positioning are sound, a rebuild on modern foundations is often faster than patching a page-builder site.",
      },
      {
        question: "Who manages content after launch?",
        answer:
          "You can edit structured content directly in the repository, or we can wire in a headless CMS if non-technical editors need to publish independently.",
      },
    ],
    related: ["experience-cloud", "custom-development", "integration-architecture"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
