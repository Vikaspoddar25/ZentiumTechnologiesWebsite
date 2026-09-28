export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  industrySlug?: string;
  services: string[];
  summary: string;
  /** Set false for studies still awaiting client sign-off on details. */
  verified: boolean;
  featured?: boolean;
  publishedAt: string;
  challenge: string[];
  approach: { title: string; body: string }[];
  architecture: string[];
  results: { value: string; label: string }[];
  stack: string[];
  quote?: { text: string; attribution: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "agentforce-order-status-automation",
    title: "Automating order-status support with Agentforce and Service Cloud",
    client: "Confidential — retail & ecommerce",
    industry: "Ecommerce & Retail",
    industrySlug: "ecommerce-retail",
    services: ["agentforce-ai", "service-cloud", "integration-architecture"],
    summary:
      "Inbound order-status email now creates a case, extracts the order references, retrieves live order data and drafts a complete reply for the agent to review and send.",
    verified: true,
    featured: true,
    publishedAt: "2026-06-18",
    challenge: [
      "Order-status enquiries arrived as free-text email into a shared service address and dominated the tier-one queue. Every one of them followed the same pattern: find the order number, look it up in another system, copy the status back into a reply.",
      "Agents were switching between the Salesforce console and the order system for questions that required no judgement at all, while genuinely complex cases waited behind them in the queue.",
      "The business wanted automation, but not an autonomous agent emailing customers unsupervised. Any solution had to keep a human in the loop before anything left the org.",
    ],
    approach: [
      {
        title: "Email-to-Case as the entry point",
        body: "Inbound mail to the service address creates a case automatically through Email-to-Case, so every enquiry lands in the same model with the same SLA regardless of how it was phrased.",
      },
      {
        title: "Order reference extraction",
        body: "The email body and subject are parsed for order references, handling the variations customers actually send — multiple orders in one message, references with and without prefixes, and order numbers buried in forwarded threads.",
      },
      {
        title: "Live order retrieval",
        body: "Each extracted reference is resolved against the order system through an integration layer built with retry and error handling, so an upstream timeout produces a flagged case rather than a wrong answer.",
      },
      {
        title: "Case enrichment",
        body: "Retrieved order status, line items and fulfilment detail are written back onto the case, giving the agent the full picture on one screen without leaving the console.",
      },
      {
        title: "Drafted response, human approval",
        body: "A pre-populated email template is generated from the retrieved data. The agent reviews, edits if needed, and sends — keeping a person accountable for every outbound message.",
      },
    ],
    architecture: [
      "Email-to-Case ingests the enquiry and creates the case record",
      "An invocable Apex action extracts and normalises order references from the email body",
      "A callout layer with named credentials retrieves order detail, with retry and structured error logging",
      "Flow writes the retrieved status back to the case and related records",
      "A pre-populated email template is drafted against the case for agent review",
      "Unresolvable references escalate to a dedicated queue rather than failing silently",
    ],
    results: [
      { value: "Zero", label: "Manual lookups for matched orders" },
      { value: "1 screen", label: "Everything the agent needs, in the console" },
      { value: "100%", label: "Outbound replies reviewed by a human" },
      { value: "Tier-one", label: "Capacity released for complex cases" },
    ],
    stack: [
      "Agentforce",
      "Service Cloud",
      "Email-to-Case",
      "Apex invocable actions",
      "Flow",
      "Named Credentials",
      "Email templates",
    ],
  },
  {
    slug: "experience-cloud-partner-portal",
    title: "A partner portal with a sharing model that passed security review",
    client: "Confidential — B2B technology",
    industry: "Technology & SaaS",
    industrySlug: "technology-saas",
    services: ["experience-cloud", "custom-development"],
    summary:
      "Replacing an email-and-spreadsheet partner process with a branded Experience Cloud portal — deal registration, pipeline visibility and document access, on a least-privilege sharing model.",
    verified: false,
    publishedAt: "2026-04-22",
    challenge: [
      "Partner deal registration ran on a shared inbox and a spreadsheet. Conflicts over deal ownership were resolved by whoever could find the earliest email.",
      "Partners had no visibility of registered deal status, so the channel team fielded a steady stream of status-check requests.",
      "An earlier portal attempt had been halted when a security review found guest-user access exposing records beyond the partner's own account.",
    ],
    approach: [
      {
        title: "Access model first",
        body: "Licence types, account-role hierarchy, sharing sets and permission-set groups were designed and reviewed before any page was built, with guest-user access hardened to the minimum required.",
      },
      {
        title: "Deal registration workflow",
        body: "Registration with automated conflict detection against existing opportunities, approval routing to the channel team, and expiry rules on protected deals.",
      },
      {
        title: "Branded front end",
        body: "Custom theme layouts and Lightning Web Components built against the client's design system, so the portal reads as part of the product rather than a bolt-on.",
      },
      {
        title: "Self-service visibility",
        body: "Partners see their own registered deals, pipeline status, enablement documents and support cases — scoped strictly to their account.",
      },
    ],
    architecture: [
      "Partner Community licences with account-role hierarchy driving record visibility",
      "Sharing sets scoping records to the partner's own account",
      "Guest user profile stripped to the minimum object and field access",
      "Deal registration built in Flow with duplicate detection and approval routing",
      "Custom LWC components consuming Apex with enforced CRUD and field-level security",
    ],
    results: [
      { value: "Single", label: "System of record for deal registration" },
      { value: "Self-serve", label: "Partner pipeline visibility" },
      { value: "Least privilege", label: "Sharing model by design" },
    ],
    stack: [
      "Experience Cloud",
      "Partner Community",
      "Sharing Sets",
      "Lightning Web Components",
      "Flow",
      "Apex with USER_MODE",
    ],
  },
  {
    slug: "salesforce-integration-remediation",
    title: "Rebuilding integrations that were silently losing records",
    client: "Confidential — financial services",
    industry: "Finance & Fintech",
    industrySlug: "finance-fintech",
    services: ["integration-architecture", "custom-development", "managed-services"],
    summary:
      "A set of synchronous, fire-and-forget callouts rebuilt as resilient, observable interfaces with retry, idempotency and reconciliation reporting.",
    verified: false,
    publishedAt: "2026-02-10",
    challenge: [
      "Salesforce pushed records to a downstream platform through synchronous callouts inside triggers. When the downstream service was slow or unavailable, the callout failed and the record was never retried.",
      "Nobody knew how many records had been lost, because there was no integration log and no reconciliation process. The gap only surfaced during a quarterly review.",
      "Callouts inside loops were also pushing the org close to governor limits during bulk operations.",
    ],
    approach: [
      {
        title: "Measure the damage first",
        body: "A reconciliation job compared both systems to quantify the divergence before anything was changed, so remediation could be prioritised against actual impact.",
      },
      {
        title: "Move to asynchronous, event-driven delivery",
        body: "Synchronous trigger callouts were replaced with platform events consumed by a queueable dispatcher, removing integration failure from the user's save path.",
      },
      {
        title: "Retry and idempotency",
        body: "Every outbound message carries an idempotency key. Failures are retried with exponential backoff and land in a dead-letter object after the retry budget is exhausted.",
      },
      {
        title: "Observability",
        body: "Structured integration logging with a failure dashboard and alerting, so an outage is visible within minutes instead of at quarter end.",
      },
    ],
    architecture: [
      "Platform events published from a single trigger handler per object",
      "Queueable dispatcher performing bulkified callouts via named credentials",
      "Idempotency keys preventing duplicate downstream writes on retry",
      "Exponential backoff with a dead-letter object for exhausted retries",
      "Scheduled reconciliation job comparing record counts and checksums across systems",
      "Integration log object driving a failure dashboard and alert rules",
    ],
    results: [
      { value: "0", label: "Records lost after remediation" },
      { value: "Minutes", label: "Time to detect an integration failure" },
      { value: "Bulk-safe", label: "Callouts removed from the save path" },
    ],
    stack: [
      "Platform Events",
      "Queueable Apex",
      "Named Credentials",
      "Dead-letter object",
      "Scheduled reconciliation",
      "Integration logging",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export const featuredCaseStudy = caseStudies.find((study) => study.featured) ?? caseStudies[0];
