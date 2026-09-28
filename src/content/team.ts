export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  location: string;
  headline: string;
  bio: string[];
  focus: string[];
  certifications: string[];
  highlights: { label: string; value: string }[];
  linkedin?: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    slug: "vikas-poddar",
    name: "Vikas Poddar",
    role: "Founder & Salesforce Technical Architect",
    location: "Rajasthan, India",
    headline: "11x certified · Integration Architecture Designer · 14x Superbadge",
    bio: [
      "Vikas has spent more than eight years on the Salesforce Lightning Platform, moving from developer to Lead Salesforce Consultant at Concretio, then Senior Salesforce Developer at Radical One, and Technical Lead at Allshore Technologies.",
      "He holds the Salesforce Certified Integration Architecture Designer credential and leads Zentium's architecture practice — org design, integration patterns, Agentforce implementation and AI governance.",
      "His focus is deliberately unfashionable: build systems that are still maintainable in year three, and leave the client's team able to own them.",
    ],
    focus: [
      "Integration architecture",
      "Agentforce & AI governance",
      "Data Cloud",
      "Lightning Web Components",
      "Org design & technical debt remediation",
    ],
    certifications: [
      "Salesforce Certified Integration Architecture Designer",
      "Salesforce Certified Administrator",
      "Salesforce AI Associate",
      "Salesforce Associate",
      "Salesforce JavaScript Developer I",
    ],
    highlights: [
      { label: "Certifications", value: "11x" },
      { label: "Superbadges", value: "14x" },
      { label: "Trailhead", value: "4x Ranger" },
      { label: "Experience", value: "8+ years" },
    ],
    linkedin: "https://www.linkedin.com/in/vikaspoddar25/",
    initials: "VP",
  },
  {
    slug: "rishiraj-rathore",
    name: "Rishiraj Rathore",
    role: "Co-Founder & Senior Salesforce Developer",
    location: "Rajasthan, India",
    headline: "6x certified · Agentforce Specialist · Sales, Service & Experience Cloud",
    bio: [
      "Rishiraj has built on the Salesforce platform since 2019, leading projects and code reviews across Sales Cloud, Service Cloud and Experience Cloud implementations.",
      "He is a certified Agentforce Specialist and holds Platform Developer I, Platform App Builder and Administrator credentials, with deep hands-on experience in Apex, Lightning Web Components, Aura, Visualforce, Flow and the approval process.",
      "He has integrated Salesforce with AWS, Outlook, QuickBooks, DocuSign and Stripe, and works across Salesforce analytics and generative AI to turn platform data into decisions.",
    ],
    focus: [
      "Agentforce & generative AI",
      "Service Cloud & case automation",
      "Experience Cloud portals",
      "Apex & Lightning Web Components",
      "Third-party integrations",
    ],
    certifications: [
      "Salesforce Certified Agentforce Specialist",
      "Salesforce Certified Platform Developer I",
      "Salesforce Certified Platform App Builder",
      "Salesforce Certified Administrator",
      "Salesforce Certified Associate",
      "Salesforce JavaScript Developer I",
    ],
    highlights: [
      { label: "Certifications", value: "6x" },
      { label: "Experience", value: "7+ years" },
      { label: "Specialism", value: "Agentforce" },
      { label: "Clouds", value: "Sales · Service · Experience" },
    ],
    linkedin: "https://linkedin.com/in/rishi8955",
    initials: "RR",
  },
];

/**
 * Named credentials verified from team profiles. The headline count is 17 across the team —
 * add the remaining credential names here as they are confirmed.
 */
export const certifications = [
  "Integration Architecture Designer",
  "Agentforce Specialist",
  "Platform Developer I",
  "Platform App Builder",
  "Certified Administrator",
  "AI Associate",
  "JavaScript Developer I",
  "Salesforce Associate",
];

export const certificationCount = 17;
