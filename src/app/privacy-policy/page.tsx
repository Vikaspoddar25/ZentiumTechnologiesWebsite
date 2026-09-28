import { LegalPage } from "@/components/ui/legal-page";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Zentium Technologies collects, uses and protects personal data submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 September 2026"
      intro="This policy explains what personal data we collect through this website, why we collect it, and what we do with it."
      breadcrumbName="Privacy Policy"
      breadcrumbPath="/privacy-policy"
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            `${siteConfig.name} is a Salesforce consultancy operating from ${siteConfig.location.city}, ${siteConfig.location.region}, ${siteConfig.location.country}. For any privacy question, contact us at ${siteConfig.email}.`,
          ],
        },
        {
          heading: "What we collect",
          paragraphs: [
            "We only collect what you choose to send us. We do not buy contact data, and we do not use tracking that attempts to identify you across other websites.",
          ],
          bullets: [
            "Contact form submissions: your name, email address and — if you provide them — company, phone number, service interest, budget range and the content of your message.",
            "Email and phone correspondence: whatever you include when you contact us directly.",
            "Analytics: aggregated, non-identifying usage data such as page views, referrer, approximate country and device type.",
            "Server logs: IP address and request metadata, retained briefly for security and rate limiting.",
          ],
        },
        {
          heading: "Why we process it",
          bullets: [
            "To respond to your enquiry and, where relevant, to prepare a proposal.",
            "To deliver services under a contract with you or your organisation.",
            "To protect the website from abuse, spam and automated attacks.",
            "To understand, in aggregate, which content is useful so we can improve the site.",
          ],
        },
        {
          heading: "Legal basis",
          paragraphs: [
            "Where the UK or EU GDPR applies, we rely on your consent when you submit a form, on the performance of a contract when we deliver services, and on our legitimate interest in operating a secure website and understanding aggregate usage.",
          ],
        },
        {
          heading: "Who we share it with",
          paragraphs: [
            "We do not sell personal data and we do not share it for advertising. We use a small number of processors strictly to operate the site:",
          ],
          bullets: [
            "Vercel — website hosting and content delivery.",
            "Resend — transactional delivery of contact form submissions to our inbox.",
            "Google — email hosting for our business inbox.",
            "An analytics provider — aggregated, non-identifying usage measurement.",
          ],
        },
        {
          heading: "International transfers",
          paragraphs: [
            "We operate from India and our processors operate globally, so your data may be processed outside your country of residence. Where required, transfers rely on appropriate safeguards such as standard contractual clauses offered by those providers.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "Enquiries that do not lead to an engagement are retained for up to 24 months so we have context if you contact us again. Records relating to an active or completed engagement are retained for as long as required by the contract and by applicable tax and legal obligations. Server logs are retained for a short period only.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            `Depending on where you live, you may have the right to access, correct, delete, restrict or port your personal data, and to object to certain processing. To exercise any of these, email ${siteConfig.email} and we will respond within 30 days.`,
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "This site does not use advertising or cross-site tracking cookies. Any analytics we run is configured to be privacy-preserving and aggregated. If you book a call through an embedded scheduling widget, that third party may set its own cookies — the widget loads only when you scroll to it.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "The site is served over HTTPS with strict transport security, content-type and framing protections. Form submissions are validated server-side and rate limited. No system is perfectly secure, but we design to reduce both the likelihood and the impact of a breach.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "If we change this policy materially we will update the date at the top of this page. Continued use of the site after an update constitutes acceptance of the revised policy.",
          ],
        },
      ]}
    />
  );
}
