/** Tech Bridge — “Cursor 3로 바이브 코딩을 해봤습니다” (vibe coding with Cursor 3). */
export const VIDEO_ID = "Uffw_SKXmz0";

export function getGithubRepoUrl(): string {
  const url = process.env.NEXT_PUBLIC_GITHUB_REPO_URL;
  if (url && url.length > 0) return url;
  return "https://github.com";
}

export const program = {
  title: "Seattle Cursor Vibe Week",
  subtitle:
    "A 7-day, hands-on curriculum for a small cohort of early-stage tech startups in the greater Seattle area — with a deep domain track on rental communication, property-management workflows, and responsible AI (PII, redaction, permissions)",
  description:
    "Turns the core ideas from the Tech Bridge video on Cursor 3 into an executable week: vibe coding (immersive, multi-agent AI development) with Cursor’s updated UI, built-in browser, subagent orchestration, and GitHub-native shipping. The cohort practices on realistic product surfaces — especially rental/property teams: listings copy, applicant screening comms, lease-adjacent UI, rent and reminder flows, and maintenance/ticket messaging — while mapping parallel patterns to Claude Code and Claude Forge-style prompt libraries (slash commands, org permissions, audit trails). You will compare Cursor 3 vs. terminal-first Claude Code, Codex, and other stacks; document when UI-heavy sessions win vs. when batch CLI or cloud agents are cheaper; and leave with copy-paste prompt starters aligned to listings, screening, leases, rent/reminders, and maintenance/comms — using redacted or synthetic data only, with explicit PII rules for your organization.",
  cohort:
    "8–12 startups · 1–2 technical leads per team (pre-seed to Series A). Strong fit: proptech, rental ops software, CRM for landlords, maintenance marketplaces, AI comms copilots, or any B2B SaaS that wants the same workflow discipline (healthcare, fintech, HR) with different compliance overlays.",
  region:
    "Greater Seattle area — hybrid in-person (e.g. WeWork, Pioneer Square, Madrona, AI2, or sponsor space) + async Discord/Slack. Optional: dedicated #rental-comms and #forge-patterns channels for prompt sharing.",
  duration:
    "One week · 4–6 hours structured daily (morning deep work + afternoon review) + evening async tasks (often 45–120 minutes when including rental prompt packs and redaction exercises)",
};

export const programFeatures = [
  {
    title: "Cursor 3 UI & flow",
    description:
      "Agent panels, terminal, and visibility tuned for long sessions—less context switching than stitching terminal + editor by hand. Ideal when you are iterating on tenant-facing copy blocks, inbox layouts, or multi-step comms wizards.",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    title: "Built-in browser",
    description:
      "Select DOM, prompt for variants, and land changes in components—tight design-to-code iteration. Practice on listing galleries, application status pages, rent reminder banners, and maintenance thread views.",
    accent: "from-teal-500 to-emerald-500",
  },
  {
    title: "Subagent orchestration",
    description:
      "Parallel audits and refactors: security, a11y, perf, tests, and PII leakage checks—managed like a small team. Split work across “comms tone,” “schema/migrations,” and “policy text” for rental modules.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "GitHub-native shipping",
    description:
      "Branches, commits, PRs—treat agent output like any other teammate’s diff. Required for regulated-adjacent domains: review gates before any template touches money, legal, or identity.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Rental communication stack",
    description:
      "Structured practice across listings, screening, leases, rent/reminders, and maintenance/comms—mirroring how high-performing PM software teams ship. Pair with your internal style guide and escalation paths.",
    accent: "from-rose-500 to-pink-500",
  },
  {
    title: "Claude Code / Forge alignment",
    description:
      "Map Cursor workflows to Claude Code and Forge-style libraries: slash command naming, reusable prompt starters, org-level PII rules, and when to run batch jobs outside the editor. Not vendor training—pattern transfer.",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    title: "PII, redaction & permissions",
    description:
      "Every exercise assumes synthetic or redacted data. Cohort builds a short “data handling” checklist: no real SSNs/bank tokens in prompts, scrub logs in screenshots, and document who may approve tenant-facing AI copy.",
    accent: "from-emerald-600 to-teal-500",
  },
  {
    title: "Metrics that matter",
    description:
      "Time-to-merge, rework rate, defect escape, and qualitative CSAT proxies for comms clarity. Teams pick 2–3 KPIs for Day 7 demos (e.g. fewer back-and-forth emails on maintenance, faster listing publish).",
    accent: "from-cyan-600 to-blue-600",
  },
] as const;

export const goals = [
  "Make Cursor 3 a credible primary AI coding environment for your team — including rental/property surfaces.",
  "Shift from solo threads to orchestrated multi-agent workflows (vibe coding) with clear handoffs.",
  "Ship real increments: UI refactors, analysis, features, GitHub PRs — with domain examples in listings, screening, leases, rent/reminders, and maintenance.",
  "Compare Cursor 3 vs. alternatives (Claude Code, Codex, cloud agents) to fit stack, budget, and compliance.",
  "Build peer relationships across Seattle startups (shared practices, possible partnerships).",
  "Produce a reusable prompt library slice for your org: listings, screening, leases, rent/reminders, maintenance — redacted data only.",
  "Establish PII and permission norms: what may enter an LLM prompt, what must stay in secure services, and how to redact screenshots.",
  "Practice browser-driven iteration on high-churn UI: rent banners, delinquency states, and empty/error states for comms.",
  "Run parallel subagent passes on comms templates for tone, accessibility, and leakage (secrets, tenant IDs in URLs).",
  "Map “Forge-like” patterns: named commands, shared snippets, and review before merge — without binding to a single vendor.",
  "Reduce time from design feedback to merged PR on tenant-facing flows by measuring before/after for one real module.",
  "Document a 90-day AI stack policy that includes forbidden zones (e.g. unreviewed legal clauses, uncapped auto-send).",
  "Align engineering, product, and ops stakeholders on when AI assists drafting vs. when humans must approve sends.",
  "Leave with one shipped artifact that touches a comms surface (email template, in-app message, SMS stub, or portal copy path).",
  "Understand limits: fair housing, FCRA, and local landlord-tenant law are not automated by this cohort — escalate to counsel.",
  "Optional: integrate observability hooks (logging, feature flags) for AI-assisted comms paths so you can audit production behavior.",
] as const;

export const prerequisites = [
  "Cursor 3 installed (Pro or Team plan recommended for the cohort).",
  "GitHub accounts and a real repo or approved starter project.",
  "Basic familiarity with your stack (React/Next.js, Python, etc.) and Git.",
  "Shared Discord or Slack channel for async updates and resource drops.",
  "For rental/property teams: a synthetic or staging dataset — never production PII in shared prompts or screenshots.",
  "Internal style guide or glossary (if any) for tenant-facing tone; bring PDF or link.",
  "Named person for “comms approval” during the week (PM, ops lead, or counsel delegate) for any user-visible copy change.",
  "If using Claude Code or Forge elsewhere: list of slash commands or prompt prefixes your org already uses (for alignment exercises).",
  "Screen reader or axe DevTools optional for a11y passes on comms components.",
  "Webhook or email sandbox (e.g. Mailhog, SES sandbox) if you test outbound reminders — avoid emailing real tenants from class exercises.",
] as const;

export const resources = [
  {
    title: "Source video — Tech Bridge / Cursor 3 vibe coding",
    href: "https://www.youtube.com/watch?v=Uffw_SKXmz0",
    description:
      "Korean-language walkthrough of Cursor 3: new UI, browser tool, multi-agent vibe coding—program discussion aligns to this narrative.",
  },
  {
    title: "Cursor",
    href: "https://cursor.com",
    description: "Product home, pricing, and docs for the Cursor editor and agent features.",
  },
  {
    title: "GitHub",
    href: "https://github.com",
    description: "Branches, PRs, and code review—your week ends with merged, reviewable work.",
  },
  {
    title: "Claude Code documentation",
    href: "https://code.claude.com/docs",
    description:
      "Reference for terminal-first workflows; compare with Cursor when you design your hybrid policy on Day 5.",
  },
  {
    title: "Anthropic — Responsible use",
    href: "https://www.anthropic.com/responsible-disclosure-policy",
    description:
      "Reminder to treat tenant/owner data according to law and company policy; prompts in class use redacted/synthetic data only.",
  },
  {
    title: "HUD — Fair Housing",
    href: "https://www.hud.gov/program_offices/fair_housing_equal_opp",
    description:
      "High-level resource; not legal advice. Product copy must be reviewed for discrimination risk by qualified counsel.",
  },
  {
    title: "FTC — Fair Credit Reporting",
    href: "https://www.ftc.gov/legal-library/browse/rules/fair-credit-reporting-act",
    description:
      "Background for screening features; engineering must not bypass FCRA obligations your product has assumed.",
  },
] as const;

export const logistics = {
  dailyStructure:
    "4–6 hours structured time daily: morning instruction and deep work (often 2–3 hours), afternoon review, gallery walk, or cross-team PR review; evening async tasks frequently include (a) rental prompt pack exercises with redacted data, (b) short reflection posts in Slack, or (c) updating your team’s policy draft. Facilitators may run optional “office hours” for PII questions — not legal advice.",
  venue:
    "Hybrid: in-person co-working in Seattle (WeWork, Pioneer Square, Impact Hub, VC or sponsor space) with AV for demos; remote async via shared Slack/Discord. For rental teams: prefer a quiet corner for role-play reviews of tenant-facing copy (noise and confidentiality).",
  assessment:
    "Participation portfolio: PRs opened, prompt logs (redacted), before/after UI artifacts, team policy draft from Day 5, and optional one-page ‘comms risk’ memo listing what your AI features must never do (auto-garnish, discriminatory filtering, unreviewed legal text, etc.).",
  successMetrics: [
    "Every participant completes at least one shipped PR using the full Cursor 3 workflow.",
    "Teams report 2–4× perceived productivity on UI/design-heavy tasks (self-reported, with evidence).",
    "Clear decision on whether to standardize on Cursor 3 for the next quarter.",
    "Networking: 2–3 organic cross-startup follow-ups from the cohort.",
    "At least one rental-domain artifact: listing copy variant, screening message template, lease-summary UI improvement, rent reminder flow, or maintenance comms thread — merged or demo-ready.",
    "Documented PII/redaction rules adopted by the team for AI-assisted work.",
  ],
  costNotes:
    "Inquire about Cursor Team plans for cohort pricing; budget coffee/snacks; optional sponsor for venue or guest speaker. If you parallel Claude/Anthropic spend, track tokens separately for honest Total Cost of Ownership on Day 5.",
  postProgram:
    "Shared drive with prompt libraries (listings, screening, leases, rent/reminders, maintenance), decision frameworks, and anonymized demo recordings; optional 1-month check-in video call; lightweight alumni channel; optional quarterly ‘comms safety’ retro for teams shipping AI-generated tenant messages.",
};
