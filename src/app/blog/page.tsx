import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { LinkCard, CardArrow, Badge } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBand } from "@/components/layout/cta-band";
import { posts } from "@/content/posts";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Practical writing on Agentforce, Salesforce integration patterns and Experience Cloud security — from engineers who ship this work.",
  path: "/blog",
});

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from the build, not the brochure"
        description="Things we learned shipping Salesforce work — written for the person who has to implement it on Monday."
        breadcrumbs={[{ name: "Insights", path: "/blog" }]}
      />

      <Section>
        <Stagger as="ul" className="grid gap-5 lg:grid-cols-3">
          {sorted.map((post) => (
            <StaggerItem as="li" key={post.slug} className="flex">
              <LinkCard href={`/blog/${post.slug}`} className="flex-1">
                <Badge tone="brand">{post.category}</Badge>
                <h2 className="mt-6 text-lg font-medium leading-snug text-ink-50">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">
                  {post.description}
                </p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  {formatDate(post.publishedAt)} · {post.readingMinutes} min read
                </p>
                <CardArrow>Read article</CardArrow>
              </LinkCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand
        eyebrow="Work with us"
        title="Reading about it is cheaper than rebuilding it."
        body="If any of this sounds uncomfortably familiar, an org assessment will tell you how bad it actually is — and what to fix first."
      />
      <JsonLd data={breadcrumbSchema([{ name: "Insights", path: "/blog" }])} />
    </>
  );
}
