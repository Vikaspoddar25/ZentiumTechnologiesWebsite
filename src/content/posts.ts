export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "code"; lang: string; code: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  author: string;
  readingMinutes: number;
  featured?: boolean;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "agentforce-production-checklist",
    title: "What it actually takes to put Agentforce into production",
    description:
      "Most Agentforce pilots stall between the demo and the production queue. Here is the grounding, guardrail and measurement work that closes that gap.",
    category: "Agentforce & AI",
    publishedAt: "2026-08-12",
    author: "Vikas Poddar",
    readingMinutes: 9,
    featured: true,
    body: [
      {
        type: "p",
        text: "Agentforce demos extremely well. You point it at a clean org, ask it a question it has good data for, and it produces a fluent, accurate answer. Then it meets your actual service queue — forwarded email threads, three order numbers in one message, a customer who describes the product by colour rather than SKU — and the gap between demo and production becomes obvious.",
      },
      {
        type: "p",
        text: "The gap is almost never the model. It is grounding, guardrails and measurement. Here is what each one requires before an agent should touch a real customer.",
      },
      { type: "h2", text: "1. Grounding is a data project, not a prompt project" },
      {
        type: "p",
        text: "An agent can only be as accurate as what it can retrieve. Before writing a single instruction, answer three questions about every fact the agent will need to state.",
      },
      {
        type: "ol",
        items: [
          "Where does this fact live — a Salesforce record, a Knowledge article, or an external system behind an API?",
          "Is it current, or is it a snapshot that goes stale between syncs?",
          "Is the agent user permitted to see it, at object, record and field level?",
        ],
      },
      {
        type: "p",
        text: "That third question is the one teams skip. The agent runs as a user, and it inherits that user's sharing and field-level security. If the retrieval works in your sandbox because you tested as a system administrator, it will fail differently in production — usually by returning nothing and inventing a plausible answer instead.",
      },
      {
        type: "h3",
        text: "Knowledge articles need curation before they need indexing",
      },
      {
        type: "p",
        text: "Most knowledge bases contain contradictions accumulated over years — two articles describing the same return policy differently, one of them four versions out of date. Retrieval will surface both. Deduplicate and date-stamp your articles before you point an agent at them, and retire anything you would not want quoted verbatim to a customer.",
      },
      { type: "h2", text: "2. Guardrails are configuration, not instructions" },
      {
        type: "p",
        text: "Telling an agent in natural language not to do something is a preference. Preventing it at the platform level is a control. Serious deployments use both, and only the second is defensible in a security review.",
      },
      {
        type: "ul",
        items: [
          "Run the agent as a dedicated user with a permission set scoped to exactly the objects and fields it needs — nothing inherited from a broader profile.",
          "Expose actions through invocable Apex and Flow rather than giving the agent generic record access, so every write path is explicit and testable.",
          "Mask or exclude sensitive fields at the Trust Layer so they never enter a prompt in the first place.",
          "Define escalation as a first-class outcome: low retrieval confidence, an unresolvable reference, or a sentiment signal should route to a human queue, not generate a best guess.",
          "Keep a human in the loop for outbound communication until deflection quality is proven. Draft-and-review costs a few seconds per case and buys you an audit trail.",
        ],
      },
      {
        type: "quote",
        text: "An agent that escalates cleanly is worth more than an agent that answers everything. The failure mode you cannot tolerate is a confident wrong answer sent to a customer.",
      },
      { type: "h2", text: "3. Measure before you launch, or you cannot prove anything" },
      {
        type: "p",
        text: "If you do not capture a baseline before go-live, you will spend the next quarter arguing about whether the programme worked. Capture these numbers for at least two weeks before the agent handles a single case.",
      },
      {
        type: "ul",
        items: [
          "Volume by case reason — you need to know how big the target category actually is.",
          "Median and 90th-percentile handle time for the target category.",
          "First-response time and full resolution time.",
          "Reopen rate, which is your quality signal after deflection.",
          "CSAT for the target category, segmented from your overall score.",
        ],
      },
      {
        type: "p",
        text: "After launch, track deflection rate alongside escalation reasons. The escalation breakdown is more useful than the deflection number: it tells you exactly which retrieval gap or missing action to build next.",
      },
      { type: "h2", text: "4. Pick a first use case that can actually succeed" },
      {
        type: "p",
        text: "Score candidate use cases on three axes: volume, data readiness and action complexity. You want high volume, high data readiness and low action complexity for the first build. Order status, appointment changes, account lookups and policy questions usually qualify. Anything requiring negotiation, judgement or a commercial decision does not.",
      },
      {
        type: "p",
        text: "Our first production Agentforce build followed exactly that shape: inbound order-status email, parsed for order references, resolved against live order data, with a drafted reply for agent review. Unambiguous inputs, deterministic lookups, human approval on the way out.",
      },
      { type: "h2", text: "The short version" },
      {
        type: "p",
        text: "Ground it in data the agent is genuinely permitted to see. Enforce guardrails in configuration rather than in prose. Baseline your metrics before launch. Start with the boring, high-volume use case. Everything interesting becomes possible once that one is running reliably.",
      },
    ],
  },
  {
    slug: "salesforce-integration-patterns",
    title: "Choosing the right Salesforce integration pattern",
    description:
      "Request-reply, fire-and-forget, batch sync, remote call-in or event-driven — a practical guide to picking the pattern before you write the callout.",
    category: "Architecture",
    publishedAt: "2026-07-03",
    author: "Vikas Poddar",
    readingMinutes: 11,
    body: [
      {
        type: "p",
        text: "Most integration problems in Salesforce are not coding problems. They are pattern-selection problems that surfaced eighteen months later, under production volume, on the day a downstream service had an outage.",
      },
      {
        type: "p",
        text: "The decision is usually made implicitly — someone needs data in another system, writes a callout in a trigger, and the pattern is chosen by accident. Here is how to choose it deliberately.",
      },
      { type: "h2", text: "Start with four questions" },
      {
        type: "ol",
        items: [
          "Does the user need the result before their save completes? If not, nothing should be synchronous.",
          "What happens if the downstream system is unavailable for an hour? If the answer is 'we lose data', you need a queue.",
          "What volume will this carry at peak, not at demo?",
          "Who owns the failure when it happens, and how do they find out?",
        ],
      },
      {
        type: "p",
        text: "The fourth question eliminates more bad designs than the other three combined. An integration with no owner and no alerting is an outage you will discover from a customer.",
      },
      { type: "h2", text: "Request and reply" },
      {
        type: "p",
        text: "Salesforce calls out and waits for a response, which is used immediately. Appropriate when the user genuinely cannot proceed without the answer — a credit check during application, an address validation, a real-time price lookup.",
      },
      {
        type: "ul",
        items: [
          "Never place this in a trigger. Callouts in the save path couple your user experience to someone else's uptime.",
          "Use a screen flow or an LWC calling imperative Apex, so the wait is visible and cancellable.",
          "Set an explicit timeout and design the UI for the timeout case, because it will happen.",
        ],
      },
      { type: "h2", text: "Fire and forget" },
      {
        type: "p",
        text: "Salesforce sends data and does not wait. This is the most common pattern and the most commonly broken one, because 'do not wait' is frequently implemented as 'do not check'.",
      },
      {
        type: "p",
        text: "Done properly, fire-and-forget means publishing a platform event and letting a subscriber handle delivery, retry and failure logging. Done improperly, it means an @future method with an empty catch block.",
      },
      {
        type: "code",
        lang: "apex",
        code: `// Publish from a single trigger handler — the callout never blocks the save.
List<Order_Sync__e> events = new List<Order_Sync__e>();
for (Order o : changedOrders) {
    events.add(new Order_Sync__e(
        Order_Id__c       = o.Id,
        Idempotency_Key__c = o.Id + '-' + String.valueOf(o.SystemModstamp.getTime())
    ));
}
List<Database.SaveResult> results = EventBus.publish(events);
IntegrationLogger.logPublishFailures(results);`,
      },
      {
        type: "p",
        text: "The idempotency key matters. Retries are inevitable, and without a key the downstream system cannot tell a retry from a genuine second event.",
      },
      { type: "h2", text: "Batch data synchronisation" },
      {
        type: "p",
        text: "Scheduled, bulk movement of records in either direction. Right for high-volume, latency-tolerant data — nightly product catalogue refreshes, financial postings, historical loads.",
      },
      {
        type: "ul",
        items: [
          "Use Bulk API 2.0 for inbound volume rather than row-by-row REST calls.",
          "Track a high-water mark so each run only processes what changed since the last successful run.",
          "Make the job resumable. A batch that must be rerun from the beginning after a mid-run failure will eventually exceed its window.",
          "Emit a reconciliation summary on every run — counts in, counts out, counts failed.",
        ],
      },
      { type: "h2", text: "Remote call-in" },
      {
        type: "p",
        text: "An external system calls Salesforce. Use standard REST or SOAP APIs where they fit, and custom Apex REST services where you need to encapsulate business logic or shield callers from your schema.",
      },
      {
        type: "ul",
        items: [
          "Authenticate with a Connected App and OAuth 2.0 client credentials or JWT bearer flow — never a shared username and password.",
          "Give the integration user a dedicated profile with least-privilege access.",
          "Bulkify your custom endpoints. Callers will batch requests whether or not you designed for it.",
          "Version the endpoint from day one. Changing an unversioned endpoint breaks every caller simultaneously.",
        ],
      },
      { type: "h2", text: "Event-driven" },
      {
        type: "p",
        text: "Platform events and Change Data Capture decouple producers from consumers entirely. This is usually the right answer when more than two systems care about the same change, or when you want the publisher to be unaware of who is listening.",
      },
      {
        type: "p",
        text: "The trade-off is delivery semantics. Platform events are at-least-once, not exactly-once, and the event bus has a retention window. Consumers must be idempotent and must handle replay after downtime. Design for both before you go live, not after your first outage.",
      },
      { type: "h2", text: "The non-negotiables, whichever pattern you pick" },
      {
        type: "ul",
        items: [
          "An integration log object with the payload reference, attempt count, status and error — queryable by someone who is not a developer.",
          "A dead-letter destination for messages that exhaust their retry budget, so nothing disappears.",
          "Alerting routed to a person, not to a debug log nobody reads.",
          "A reconciliation job that periodically proves both systems still agree.",
          "Documented API limit consumption, modelled at peak volume rather than average.",
        ],
      },
      {
        type: "p",
        text: "Pick the pattern deliberately, write down why, and build the observability at the same time as the happy path. The integrations that survive are the ones that fail loudly.",
      },
    ],
  },
  {
    slug: "experience-cloud-security-mistakes",
    title: "Five Experience Cloud mistakes that fail a security review",
    description:
      "Guest user access, over-broad sharing sets and unenforced field-level security — the portal configuration issues that surface at exactly the wrong moment.",
    category: "Experience Cloud",
    publishedAt: "2026-05-20",
    author: "Rishiraj Rathore",
    readingMinutes: 8,
    body: [
      {
        type: "p",
        text: "Experience Cloud makes it easy to publish a portal and difficult to publish a secure one. The defaults that get a proof of concept working are frequently the same settings that fail a security assessment months later, once the portal has real users and real data behind it.",
      },
      {
        type: "p",
        text: "These five issues account for most of the findings we see when auditing an existing portal.",
      },
      { type: "h2", text: "1. Guest user access that was never tightened" },
      {
        type: "p",
        text: "The guest user profile is the single highest-risk object in an Experience Cloud site. During build, someone grants read access to an object so a public page renders. That access is rarely revisited, and it applies to anyone on the internet who can reach the site.",
      },
      {
        type: "ul",
        items: [
          "Audit the guest user profile object by object and field by field. Assume anything readable is public.",
          "Keep 'Secure guest user record access' enabled. Disabling it to fix a rendering problem is trading a security control for a convenience.",
          "Never grant the guest user access through sharing rules that target broad record sets.",
          "Test the public site while fully logged out, in a private window, including direct record URLs — not just the navigation paths you designed.",
        ],
      },
      { type: "h2", text: "2. Sharing sets scoped wider than the use case" },
      {
        type: "p",
        text: "Sharing sets grant portal users access to records related to their account or contact. They are the correct mechanism, but the access-mapping criteria are easy to draw too broadly — particularly when a mapping is added to fix one user's missing record and inadvertently widens visibility for every user of that profile.",
      },
      {
        type: "p",
        text: "Review every sharing set against a single question: can a user of this profile see a record belonging to a different customer? Test it with two real accounts rather than reasoning about it, because the interaction between sharing sets, the account role hierarchy and implicit sharing is not intuitive.",
      },
      { type: "h2", text: "3. Apex that does not enforce CRUD and FLS" },
      {
        type: "p",
        text: "Apex runs in system context by default. A controller backing a portal component will happily return fields the running user has no permission to see, and write to objects they cannot edit. The sharing model you designed is bypassed entirely unless the code respects it.",
      },
      {
        type: "code",
        lang: "apex",
        code: `// Enforce sharing at the class level, and field-level security in the query.
public with sharing class PortalCaseController {

    @AuraEnabled(cacheable=true)
    public static List<Case> getMyCases() {
        return [
            SELECT Id, CaseNumber, Subject, Status, CreatedDate
            FROM Case
            WHERE ContactId = :getRunningContactId()
            WITH USER_MODE
            ORDER BY CreatedDate DESC
            LIMIT 200
        ];
    }
}`,
      },
      {
        type: "p",
        text: "Use 'with sharing' on every controller reachable from a portal, and 'WITH USER_MODE' on queries and DML so field-level security is enforced by the platform rather than by the developer remembering to check.",
      },
      { type: "h2", text: "4. Sensitive data in URL parameters and component attributes" },
      {
        type: "p",
        text: "Record identifiers and filter values passed through URL parameters are trivially editable. If a component renders whatever record id it finds in the query string, a user will eventually try someone else's id — and if the sharing model has a gap, they will find it.",
      },
      {
        type: "p",
        text: "Resolve the record server-side from the running user's context wherever possible. Where an id genuinely must be passed, validate ownership in Apex before returning anything.",
      },
      { type: "h2", text: "5. No re-test after a template or release change" },
      {
        type: "p",
        text: "Salesforce ships three releases a year, and Experience Cloud templates change with them. Access behaviour that was correct at launch can shift after an upgrade, particularly around guest access and caching.",
      },
      {
        type: "ul",
        items: [
          "Re-run your logged-out and cross-account access tests in the sandbox preview before every seasonal release.",
          "Keep the tests written down as a checklist rather than in one person's memory.",
          "Re-run the Security Health Check and review portal-relevant findings each quarter.",
        ],
      },
      { type: "h2", text: "Design the access model before the pages" },
      {
        type: "p",
        text: "Every one of these issues stems from the same root cause: the portal was built first and the access model was adjusted afterwards to make it work. Reverse that order. Decide licence types, profiles, sharing sets and guest access on paper, validate them with test users, and only then start building pages on top.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
