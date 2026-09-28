import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { LinkCard, CardArrow, Badge } from "@/components/ui/card";
import { Prose } from "@/components/ui/prose";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/layout/cta-band";
import { posts, getPost } from "@/content/posts";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.description}
        breadcrumbs={[
          { name: "Insights", path: "/blog" },
          { name: post.category, path: `/blog/${post.slug}` },
        ]}
      >
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
          {post.author} · {formatDate(post.publishedAt)} · {post.readingMinutes} min read
        </p>
      </PageHero>

      <Section size="narrow">
        <article>
          <Prose blocks={post.body} />
        </article>

        <Reveal className="mt-16 border-t border-white/8 pt-8">
          <Link href="/blog" className="text-sm text-accent-300 hover:text-accent-400">
            ← All insights
          </Link>
        </Reveal>
      </Section>

      {more.length ? (
        <Section className="border-t border-white/8" spacing="tight">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
            Keep reading
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {more.map((item) => (
              <li key={item.slug} className="flex">
                <LinkCard href={`/blog/${item.slug}`} className="flex-1">
                  <Badge tone="brand">{item.category}</Badge>
                  <h3 className="mt-5 text-base font-medium leading-snug text-ink-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">
                    {item.description}
                  </p>
                  <CardArrow>Read article</CardArrow>
                </LinkCard>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaBand />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Insights", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema({
            title: post.title,
            description: post.description,
            path: `/blog/${post.slug}`,
            publishedAt: post.publishedAt,
            author: post.author,
          }),
        ]}
      />
    </>
  );
}
