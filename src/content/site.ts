export const siteConfig = {
  name: "Zentium Technologies",
  shortName: "Zentium",
  tagline: "Seamless Tech. Smarter Solutions.",
  description:
    "Zentium Technologies is a Salesforce consultancy led by 17x certified engineers. We design, build and support Agentforce, Sales Cloud, Service Cloud, Experience Cloud and integration solutions — plus the high-performance web platforms around them.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zentiumtechnologies.com",
  founded: 2025,
  email: "info.zentiumtechnologies@gmail.com",
  phones: [
    { label: "+91 80942 82684", href: "tel:+918094282684", whatsapp: "918094282684" },
    { label: "+91 70148 59372", href: "tel:+917014859372", whatsapp: "917014859372" },
  ],
  availability: "24/7 support — response within one business hour",
  location: {
    city: "Jaipur",
    region: "Rajasthan",
    country: "India",
    countryCode: "IN",
    label: "Jaipur, Rajasthan, India — fully remote, serving clients worldwide",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/vikaspoddar25/",
  },
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  stats: [
    { value: 17, suffix: "x", label: "Salesforce certifications" },
    { value: 10, suffix: "+", label: "Projects delivered" },
    { value: 8, suffix: "+", label: "Years of platform experience" },
    { value: 24, suffix: "/7", label: "Support coverage", raw: "24/7" },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: { label: string; href: string; children?: NavItem[] }[] = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
];

export const footerNav = [
  {
    title: "Services",
    links: [
      { label: "Salesforce Consulting", href: "/services/salesforce-consulting" },
      { label: "Agentforce & Salesforce AI", href: "/services/agentforce-ai" },
      { label: "Integration & Architecture", href: "/services/integration-architecture" },
      { label: "Experience Cloud", href: "/services/experience-cloud" },
      { label: "Managed Services", href: "/services/managed-services" },
      { label: "Web Development", href: "/services/web-development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Technology & SaaS", href: "/industries/technology-saas" },
      { label: "Finance & Fintech", href: "/industries/finance-fintech" },
      { label: "Ecommerce & Retail", href: "/industries/ecommerce-retail" },
      { label: "Healthcare & Wellness", href: "/industries/healthcare-wellness" },
      { label: "Real Estate & Property", href: "/industries/real-estate" },
      { label: "Education & EdTech", href: "/industries/education-edtech" },
    ],
  },
] as const;
