# Zentium Technologies — Website

Marketing site for **Zentium Technologies**, a Salesforce consultancy.

Live: https://zentiumtechnologies.com
Tagline: _Seamless Tech. Smarter Solutions._

---

## Tech stack

| Thing      | What we use                                    |
| ---------- | ---------------------------------------------- |
| Framework  | Next.js 16 (App Router)                        |
| Language   | TypeScript (strict)                            |
| Styling    | Tailwind CSS v4 (tokens in `src/app/globals.css`) |
| Animation  | `motion` (Framer Motion)                       |
| Forms      | react-hook-form + Zod                          |
| Email      | Resend                                         |
| Icons      | lucide-react                                   |
| Hosting    | Vercel                                         |

No CMS. All content lives in typed TypeScript files under `src/content/`.

---

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000

> **Note:** if `npm install` fails with an `EACCES` cache error, run
> `sudo chown -R 501:20 ~/.npm` once to fix your global npm cache.

---

## Commands

```bash
npm run dev        # start the dev server
npm run build      # production build
npm run start      # run the production build locally
npm run lint       # ESLint
npm run typecheck  # TypeScript, no emit
```

Run `lint`, `typecheck` and `build` before every push.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill it in. The same values must also be
added in **Vercel → Project → Settings → Environment Variables**.

| Variable                  | Required | What it does                                        |
| ------------------------- | -------- | --------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`    | Yes      | Canonical URL used for SEO, sitemap and OG tags      |
| `RESEND_API_KEY`          | Yes      | Sends contact form enquiries                         |
| `CONTACT_FROM_EMAIL`      | Yes      | Verified Resend sender, e.g. `website@yourdomain.com`|
| `CONTACT_TO_EMAIL`        | No       | Inbox that receives enquiries (defaults to our Gmail)|
| `NEXT_PUBLIC_CALENDLY_URL`| No       | Shows the booking widget on `/contact` when set      |
| `NEXT_PUBLIC_GA_ID`       | No       | Google Analytics 4 measurement ID                    |

Never commit real values. `.env.local` is gitignored.

---

## Folder structure

```
src/
├── app/                  # routes (App Router)
│   ├── page.tsx              # home
│   ├── about/ careers/ contact/
│   ├── services/[slug]/      # 9 service pages
│   ├── industries/[slug]/    # 8 industry pages
│   ├── case-studies/[slug]/
│   ├── blog/[slug]/
│   ├── privacy-policy/ terms/
│   ├── api/contact/route.ts  # contact form handler
│   ├── sitemap.ts robots.ts  # SEO
│   ├── icon.tsx              # generated favicon
│   └── opengraph-image.tsx   # generated social preview
│
├── components/
│   ├── ui/               # Button, Card, Section, Accordion, Prose…
│   ├── layout/           # Header, Footer, CtaBand, Logo
│   ├── motion/           # Reveal, Stagger, CountUp, NodeField (hero canvas)
│   ├── sections/         # composed page sections
│   └── contact/          # ContactForm, Calendly
│
├── content/              # ← edit the website text here
│   ├── site.ts               # contact details, stats, nav
│   ├── company.ts            # process, values, differentiators, FAQs
│   ├── services.ts           # 9 services
│   ├── industries.ts         # 8 industries
│   ├── team.ts               # team bios + certifications
│   ├── case-studies.ts       # case studies
│   └── posts.ts              # blog articles
│
└── lib/                  # utils, SEO helpers, JSON-LD schema, form schema
```

---

## Editing content

You almost never need to touch components. To change the website text:

| I want to change…              | Edit this file                  |
| ------------------------------ | ------------------------------- |
| Phone, email, address, stats   | `src/content/site.ts`           |
| A service page                 | `src/content/services.ts`       |
| An industry page               | `src/content/industries.ts`     |
| Team bios or certifications    | `src/content/team.ts`           |
| Case studies                   | `src/content/case-studies.ts`   |
| Blog articles                  | `src/content/posts.ts`          |
| Homepage FAQs, process, values | `src/content/company.ts`        |
| Brand colours and fonts        | `src/app/globals.css`           |

Adding an item to any of those arrays automatically creates the page, adds it to
the navigation and includes it in `sitemap.xml`.

---

## Design system

- **Dark theme only.** Brand blue `#0077BE` is sampled from the logo.
- Colour, font, radius and easing tokens are Tailwind v4 `@theme` variables in
  `src/app/globals.css`. There is no `tailwind.config.js`.
- Use the `cn()` helper from `src/lib/utils.ts` to merge classes.
- All text meets WCAG AA contrast. Don't introduce greys dimmer than `ink-400`.
- Motion is deliberately restrained: one animated hero canvas, everything else is
  fade/slide reveals. Every animation respects `prefers-reduced-motion`.

---

## Deployment

Hosted on Vercel under the **Zentium Technologies** team.

| | |
| ------------------ | ------------------------------------------------------------ |
| Project            | `zentium-technologies-website`                                |
| Repository         | `Vikaspoddar25/ZentiumTechnologiesWebsite`                    |
| Production branch  | `main`                                                        |
| Preview URL        | https://zentium-technologies-website.vercel.app               |

Pushing to `main` deploys to production. Pull requests get their own preview URL.

Build settings are pinned in `vercel.json` (`framework: nextjs`) rather than in the
dashboard, so the config is version controlled. Don't change the framework preset in
the Vercel UI — edit `vercel.json` instead.

### Adding the custom domain

1. **Vercel → Project → Settings → Domains → Add.**
   Enter `zentiumtechnologies.com` and add it. Then add `www.zentiumtechnologies.com`
   as well and set it to redirect to the apex domain (Vercel offers this as a toggle).
2. **Copy the DNS records Vercel shows you.** They will be either:
   - **A record** — `@` → `76.76.21.21`, and **CNAME** — `www` → `cname.vercel-dns.com`
   - or **nameservers**, if you prefer to let Vercel manage DNS entirely.
3. **Add those records at your domain registrar** (wherever
   `zentiumtechnologies.com` is registered — GoDaddy, Namecheap, Hostinger etc.).
   Delete any old A/CNAME records pointing at the previous WordPress host first,
   otherwise the domain will keep resolving there.
4. **Wait for propagation** — usually 5–30 minutes, up to 48 hours worst case.
   Vercel issues the SSL certificate automatically once DNS resolves. The domain shows
   "Valid Configuration" when it's done.
5. **Set the apex domain as the production domain** in Vercel so `www` redirects to it
   and canonical URLs stay consistent.
6. **Update `NEXT_PUBLIC_SITE_URL`** to `https://zentiumtechnologies.com` and redeploy
   so sitemap, canonical URLs and Open Graph tags use the real domain.
7. **Verify:** `https://zentiumtechnologies.com`, `/sitemap.xml`, `/robots.txt`, and
   confirm `www` redirects to the apex.

> Email is unaffected — adding these records does not touch your MX records.

---

## Conventions

- Prefer editing existing components over adding new ones.
- Never invent business facts — clients, testimonials, certifications or statistics
  that aren't already in `src/content/`.
- Commit messages should describe what changed and why.
- Never force-push or commit secrets.

---

© Zentium Technologies. Salesforce, Agentforce, Sales Cloud, Service Cloud and
Experience Cloud are trademarks of Salesforce, Inc. Zentium Technologies is an
independent consultancy and is not affiliated with Salesforce, Inc.
