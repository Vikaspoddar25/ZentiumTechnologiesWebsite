export const process = [
  {
    step: "01",
    title: "Discover",
    body: "Stakeholder interviews, process mapping and a technical audit of your existing org. You get a written assessment with risks, opportunities and a prioritised plan — before anyone talks about a build.",
    deliverable: "Assessment & prioritised roadmap",
  },
  {
    step: "02",
    title: "Architect",
    body: "Data model, automation strategy, integration patterns, sharing and security design, documented and reviewed with your team. Decisions get made on paper, where changing them is free.",
    deliverable: "Solution architecture document",
  },
  {
    step: "03",
    title: "Build",
    body: "Declarative-first configuration with code only where the platform needs it. Delivered in reviewable increments through source-driven development, with a demo at the end of every sprint.",
    deliverable: "Working increments, every sprint",
  },
  {
    step: "04",
    title: "Support",
    body: "Go-live with a tested cutover plan, enablement for your team, and an optional retainer covering administration, enhancements and seasonal release management.",
    deliverable: "Runbooks, training & ongoing support",
  },
] as const;

export const differentiators = [
  {
    title: "17 Salesforce certifications, two senior engineers",
    body: "You work directly with the people who architect and build your solution. No account layer, no junior offshore team you never meet.",
  },
  {
    title: "Agentforce in production, not in a slide deck",
    body: "We have shipped autonomous case handling end to end — inbound email to drafted response — with grounding, guardrails and human review built in.",
  },
  {
    title: "Fixed scope, fixed price",
    body: "Discovery produces a defined scope and a number. Changes go through an explicit change process, so budgets do not drift quietly.",
  },
  {
    title: "Integration specialists, not generalists",
    body: "Led by a Salesforce Certified Integration Architecture Designer. Patterns chosen deliberately, with retry, idempotency and monitoring built in.",
  },
  {
    title: "Experience Cloud done securely",
    body: "Portal sharing models designed from first principles, with guest-user access hardened rather than left at whatever made the demo work.",
  },
  {
    title: "Response measured in hours",
    body: "24/7 coverage for critical production incidents, and a named engineer who already knows your org.",
  },
  {
    title: "Transparent, competitive pricing",
    body: "India-based delivery at senior-engineer quality, with rates that let you fund the roadmap rather than the agency overhead.",
  },
  {
    title: "You own what we build",
    body: "Architecture documentation, admin runbooks and source in your repository. The handover is the deliverable, not an afterthought.",
  },
] as const;

export const values = [
  {
    title: "Say the difficult thing early",
    body: "If a requirement will not survive contact with the platform, you hear it in week one — not after the invoice.",
  },
  {
    title: "Build for year three",
    body: "Anything can be made to work once. We optimise for the org that still makes sense after three release cycles and two team changes.",
  },
  {
    title: "Document as you go",
    body: "Undocumented automation is technical debt with interest. Every decision we make gets written down while the reasoning is still fresh.",
  },
  {
    title: "Small team, senior hands",
    body: "We stay deliberately small so the person who scoped your project is the person who builds it.",
  },
] as const;

export const homeFaqs = [
  {
    question: "What size of client do you work with?",
    answer:
      "Mostly growing businesses and scale-ups running Salesforce as a core operating system — typically between 10 and 500 users. We also take on focused architecture and integration work for larger enterprises alongside their existing partner.",
  },
  {
    question: "Are you a Salesforce Consulting Partner?",
    answer:
      "We are an independent consultancy of certified Salesforce engineers, not a badged AppExchange partner. That means you get senior practitioners directly, without partner-tier overhead priced into the engagement.",
  },
  {
    question: "How do engagements usually start?",
    answer:
      "With a paid discovery — typically one to two weeks — producing an assessment, a solution architecture and a fixed-price proposal. If you then decide not to build with us, the documentation is still yours.",
  },
  {
    question: "What are your rates and engagement models?",
    answer:
      "Three models: fixed-price projects for defined scope, monthly retainers for ongoing managed services, and dedicated-capacity arrangements for longer roadmaps. We publish the rate for each model during discovery rather than after it.",
  },
  {
    question: "Which time zones do you cover?",
    answer:
      "We are based in India and work deliberately overlapping hours with US and European mornings. Critical production incidents are covered 24/7.",
  },
  {
    question: "Do you only do Salesforce?",
    answer:
      "Salesforce is the core of the practice. We also build the web platforms around it — marketing sites, customer portals and applications on Next.js — usually where those need to talk to Salesforce anyway.",
  },
] as const;
