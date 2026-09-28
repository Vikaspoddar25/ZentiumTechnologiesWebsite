import { LegalPage } from "@/components/ui/legal-page";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms governing use of the Zentium Technologies website and the basis on which we provide consulting services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="1 September 2026"
      intro="These terms govern your use of this website. Consulting engagements are governed separately by a signed statement of work."
      breadcrumbName="Terms of Service"
      breadcrumbPath="/terms"
      sections={[
        {
          heading: "Acceptance",
          paragraphs: [
            `By accessing this website you agree to these terms. If you do not agree, please do not use the site. The site is operated by ${siteConfig.name}.`,
          ],
        },
        {
          heading: "Use of the site",
          bullets: [
            "You may browse, read and share the content of this site for lawful purposes.",
            "You may not attempt to gain unauthorised access to the site, its infrastructure or any connected system.",
            "You may not use automated systems to scrape the site at a rate that degrades service for others.",
            "You may not submit false information, malicious payloads or unsolicited commercial messages through our forms.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "All content on this site — including text, design, code, graphics and the Zentium name and logo — is owned by us or licensed to us. You may quote short extracts with attribution and a link. You may not reproduce substantial portions, or republish the content as your own.",
          ],
        },
        {
          heading: "Third-party trademarks",
          paragraphs: [
            "Salesforce, Agentforce, Sales Cloud, Service Cloud, Experience Cloud, Data Cloud and related marks are trademarks of Salesforce, Inc. Other product names are the trademarks of their respective owners. We are an independent consultancy and are not affiliated with, endorsed by or sponsored by Salesforce, Inc. or any other named vendor.",
          ],
        },
        {
          heading: "No professional advice",
          paragraphs: [
            "Articles, case studies and technical guidance on this site are published for general information. They are not a substitute for an assessment of your specific environment, and we accept no liability for decisions taken solely on the basis of published content.",
          ],
        },
        {
          heading: "Enquiries and proposals",
          paragraphs: [
            "Submitting an enquiry does not create a contract. Any proposal we issue is an invitation to negotiate and is valid for the period stated in it. Services are provided only under a separately agreed statement of work or retainer agreement, which takes precedence over these terms.",
          ],
        },
        {
          heading: "Availability",
          paragraphs: [
            "We aim to keep the site available but do not guarantee uninterrupted access. We may change, suspend or withdraw any part of the site at any time without notice.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, we exclude liability for any indirect, incidental or consequential loss arising from your use of this website, including loss of profit, revenue or data. Nothing in these terms limits liability for fraud or for any liability that cannot lawfully be excluded.",
          ],
        },
        {
          heading: "External links",
          paragraphs: [
            "The site links to third-party websites we do not control. We are not responsible for their content, availability or privacy practices.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of India, and the courts of Rajasthan, India have exclusive jurisdiction over any dispute arising from them.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "We may update these terms. The version published on this page at the time you access the site is the version that applies.",
          ],
        },
      ]}
    />
  );
}
