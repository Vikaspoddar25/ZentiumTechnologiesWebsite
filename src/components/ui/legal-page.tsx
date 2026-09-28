import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";

export type LegalSection = { heading: string; paragraphs?: string[]; bullets?: string[] };

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  breadcrumbName,
  breadcrumbPath,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  breadcrumbName: string;
  breadcrumbPath: string;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={intro}
        breadcrumbs={[{ name: breadcrumbName, path: breadcrumbPath }]}
      >
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
          Last updated {updated}
        </p>
      </PageHero>

      <Section size="narrow">
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-medium text-ink-50">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-[0.98rem] leading-relaxed text-ink-300">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 flex flex-col gap-2.5">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-[0.98rem] leading-relaxed text-ink-300"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-400"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <p className="border-t border-white/8 pt-8 text-sm text-ink-400">
            Questions about this page? Email{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent-300 hover:text-accent-400">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
