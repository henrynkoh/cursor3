import type { DayPlan } from "./types";

export const days: DayPlan[] = [
  {
    day: 1,
    title: "Onboarding & Cursor 3 fundamentals",
    focus:
      "Install Cursor 3, master the redesigned UI (agent panels, terminal, visibility), and feel the “vibe” vs. terminal-only tools — grounded in rental/property product examples (listings, inbox, reminders) and responsible data handling.",
    keyTakeaway:
      "The environment you code in shapes throughput—Cursor 3 is optimized for visible multi-agent work and flow state. Pair that with explicit rules for what tenant data may appear in prompts (usually: none; use synthetic fixtures).",
    sessions: [
      {
        label: "Morning (in-person) — Welcome & context",
        items: [
          "Welcome and intros: each startup pitches their product in ~2 minutes — include one sentence on who receives comms (tenants, owners, vendors) if relevant.",
          "Framing: this week blends general vibe-coding craft with a rental communication lens — listings, screening, leases, rent/reminders, maintenance — without providing legal advice; counsel reviews anything binding.",
          "Watch party + guided discussion: key takeaways from the Tech Bridge video—Cursor 3 UI vs. terminal-heavy Claude Code workflows; when Forge-style libraries complement either.",
          "Live demo: installing Cursor 3, redesigned terminal, agent panels, multi-agent visibility.",
          "Demo path A (generic): open a small React route and rename a component with Composer.",
          "Demo path B (rental): show a fake “listing detail” page or “tenant inbox” stub — emphasize redacted placeholders (Tenant A, Unit 101) never real names from production.",
          "Discussion: where do Claude Code slash commands or Forge prompt packs live in your org today? Capture gaps on a shared whiteboard.",
          "Icebreaker: name one comms failure mode you want to fix (e.g. duplicate maintenance threads, unclear rent due copy, screening emails that sound robotic).",
          "Set cohort norms: screenshots must be blurred; paste JSON/logs only if synthetic; escalate fair-housing and credit-reporting questions to qualified humans.",
          "Tooling check: Node LTS, Git identity, GitHub SSO — unblock before lunch.",
        ],
      },
      {
        label: "Hands-on — Warm-up",
        items: [
          "Each participant completes Cursor 3 setup on their machine.",
          "Exercise: open an existing small repo or scaffold Next.js/React and use Composer/Chat for basic edits.",
          "Rental-flavored micro-task (choose one): add a “Message tenant” button that opens a modal with stubbed copy; add a “Rent due” badge with three states (current, due soon, overdue) using fake amounts.",
          "Optional: side-by-side with VS Code + Claude/Codex if available—note friction and wins in a shared matrix (latency, context retention, diff quality).",
          "Create a personal “redaction checklist” note: what fields are forbidden in prompts (SSN, full account numbers, government IDs).",
          "If your product has email templates in code, locate one file and bookmark it for Day 2 browser work.",
          "Pair and verify: each person runs one successful save → local preview with no PII on screen.",
        ],
      },
      {
        label: "Afternoon — Group share",
        items: [
          "What feels immediately better about the new UI? Where did you get stuck?",
          "Rapid round: which rental surface would you modernize first if you had one afternoon — listings, screening, leases, rent/reminders, or maintenance?",
          "Align on success metrics for the week (pick 2 per team): e.g. time-to-PR, clarity score for comms, number of a11y issues fixed.",
          "Facilitator synthesizes themes and previews Day 2 browser tool on a listing or dashboard mock.",
        ],
      },
    ],
    homework: [
      "30–60 minute vibe session: refactor one screen or component (preferably a comms-adjacent surface).",
      "Log token usage and subjective speed (simple spreadsheet row per person).",
      "Write 3 bullet “comms principles” your team will follow (tone, brevity, escalation).",
      "If applicable: import or sketch a synthetic tenant record for later exercises — no production exports.",
      "Skim your internal glossary (pets, deposits, utilities) to align terminology before copy-heavy days.",
      "Post one question in Slack about PII or permissions you are unsure of — facilitators triage (non-legal).",
    ],
  },
  {
    day: 2,
    title: "Browser tool — design-to-code in one flow",
    focus:
      "Use Cursor’s embedded browser to select DOM nodes (logo, header, CTA, listing cards, reminder banners) and iterate UI with the agent in a tight loop — with accessibility and mobile-first defaults for tenant-facing pages.",
    keyTakeaway:
      "Selection + prompt closes the gap between what you see and what ships—fewer round-trips than screenshot-only workflows. For rental teams, that means faster iteration on high-visibility copy and layout without pasting sensitive data into chat.",
    sessions: [
      {
        label: "Morning — Demo & pairs",
        items: [
          "Review Day 1 outcomes and metrics; celebrate quick wins.",
          "Live demo (video-style): select HTML elements in the embedded browser; prompt to simplify, modernize, or restyle.",
          "Rental scenario 1 — Listings: select hero image/title/amenity list; generate 3 variants (concise, premium, budget-friendly) using synthetic property data only.",
          "Rental scenario 2 — Screening: select an application status banner; iterate tone for clarity and calm (no discriminatory criteria in copy — facilitator flags).",
          "Rental scenario 3 — Rent/reminders: select a “Rent due in 3 days” module; test color contrast for stress states; ensure text is not the only indicator.",
          "Rental scenario 4 — Maintenance: select a work-order summary; add hierarchy for urgency without alarmist language.",
          "Pair across startups: Task 1 — landing or dashboard: select header/logo; generate 3–5 variations (cleaner, mobile-first, subtle motion).",
          "Task 2 — turn accepted changes into real components in your codebase; keep tokens in CSS variables where possible.",
          "Accessibility pass: run keyboard tab order on the edited region; fix focus rings if missing.",
          "Performance sanity: avoid loading huge images in listing galleries — discuss lazy loading patterns.",
        ],
      },
      {
        label: "Afternoon — Gallery walk",
        items: [
          "Each team: before/after screenshots + summary of code changes — blur any quasi-identifying pixels.",
          "Discuss friction: routing, CSS layers, design tokens, agent misunderstandings.",
          "Cross-critique: does the comms copy match your brand voice? Does it avoid promises you cannot keep (e.g. instant approval)?",
          "Capture a “prompt that worked” and a “prompt that failed” for the shared playbook.",
          "Optional: compare with a Claude Forge starter for listings if your team uses one — note differences in structure, not quality judgments.",
        ],
      },
    ],
    homework: [
      "Apply the browser tool to one real feature in your product (e.g. onboarding UI polish, rent reminder strip, maintenance composer).",
      "Capture one lesson learned in the cohort channel with tag #browser-tool.",
      "Record one mobile screenshot and one desktop screenshot for regression comparison.",
      "If you have internationalization: note which strings moved to messages files — prep for Day 4 PR.",
    ],
  },
  {
    day: 3,
    title: "Subagent orchestration — parallel AI workforces",
    focus:
      "Launch and monitor multiple sub-agents for audits, refactors, and parallelized improvements — including PII leakage checks and rental-specific risks (exposing internal notes to tenants, wrong merge fields).",
    keyTakeaway:
      "Orchestration beats a single long thread when tasks decompose—security, readability, and tests can advance in parallel. For comms-heavy apps, dedicate an agent to tone/consistency and another to data plumbing.",
    sessions: [
      {
        label: "Morning — Deep dive",
        items: [
          "Subagent management in Cursor 3: launching several agents, monitoring progress, merging outputs responsibly.",
          "Compare to Claude Code’s terminal-centric multi-step flows—when each shines (batch refactors vs. UI-heavy iteration).",
          "Pattern: Agent A — scan for hardcoded email addresses and phone numbers in templates (should be config or removed).",
          "Pattern: Agent B — scan for TODO/FIXME in comms paths; prioritize user-visible strings.",
          "Pattern: Agent C — accessibility sweep on message composer (labels, aria-live for send errors).",
          "Rental add-on: Agent D — consistency pass across “rent due” and “late fee” strings for conflicting terminology.",
          "Discuss merge strategy: serial vs. parallel PRs; avoid two agents editing the same file without coordination.",
          "Introduce lightweight threat modeling for comms: spoofing, wrong recipient, duplicate sends — what tests prove mitigation?",
        ],
      },
      {
        label: "Hands-on — Security & refactor sprint",
        items: [
          "Security/code review: multiple agents scan for vulnerabilities, perf hotspots, and accessibility issues.",
          "Refactor challenge: pick a messy module — agent A readability, agent B tests, agent C performance.",
          "Rental challenge: pick a “notifications” or “templates” package — agent D drafts a map of all outbound channels (email, SMS, in-app, push) with owners.",
          "PII hunt: search for fields logged to console in staging — propose redaction helpers.",
          "Secrets: ensure API keys for Twilio/SendGrid/Postmark are not in client bundles.",
          "Document a “stop line” list: changes that require counsel or compliance (lease generation, adverse action letters).",
        ],
      },
      {
        label: "Afternoon — Debrief",
        items: [
          "What did agents surface? Where did orchestration help or hurt?",
          "Which rental comms area needs the most human review going forward?",
          "Prioritize top 5 findings into a backlog with severity and owner.",
        ],
      },
    ],
    homework: [
      "Run a full subagent pass on another area of your codebase (e.g. owner-facing vs. tenant-facing split).",
      "Document findings in a shared Notion/Google Doc with severity tags.",
      "Add one automated test that would have caught a real bug you found (even a small one).",
      "Optional: draft a Forge-style slash command name list for your org (e.g. /lease-summary, /maintenance-reply) — no implementation required yet.",
    ],
  },
  {
    day: 4,
    title: "GitHub integration & shipping",
    focus:
      "Branch → review agent diffs → commit → push → PR without leaving the Cursor loop — with review discipline for rental comms (feature flags, copy approval, staged rollout).",
    keyTakeaway:
      "Shipping is the metric—tight Git integration turns experiments into durable team artifacts. For regulated-adjacent flows, the PR description is your audit trail.",
    sessions: [
      {
        label: "Morning — Demo",
        items: [
          "End-to-end: branch creation, reviewing agent-generated diffs, conventional commits, push, open PR in GitHub from Cursor 3.",
          "Show how to attach screenshots and test plans in PR templates.",
          "Discuss CODEOWNERS for comms-critical paths (e.g. /templates/**, /legal/**).",
          "Demo revert and hotfix branch naming for production incidents.",
        ],
      },
      {
        label: "Hands-on — Ship something real",
        items: [
          "Each team implements one small but meaningful improvement using browser tool + subagents + codegen.",
          "Rental idea bank (pick one): improved empty state for maintenance inbox; clearer rent schedule explainer; safer error when payment portal is down; owner notification when tenant sends urgent maintenance photo (with consent copy).",
          "Branch naming convention e.g. cursor-vibe-feature; open a real PR (internal is fine).",
          "PR must include: risk note, test steps, and whether copy was reviewed by designated approver.",
          "If touching emails: show plain-text + HTML preview paths; note unsubscribe handling if applicable (product-specific).",
        ],
      },
      {
        label: "Afternoon — PR review",
        items: [
          "Cross-startup peer review: clarity, risk, tests, rollout.",
          "Rental-specific review prompts: could any string be misread as discriminatory? Could any field leak across tenants?",
          "Merge or request changes with kindness; practice constructive tone for async review.",
        ],
      },
    ],
    homework: [
      "Merge or iterate on the PR based on feedback.",
      "Update README or internal doc with how your team ran the loop.",
      "Add a short “rollback plan” section to your PR template if missing.",
      "Optional: set up a feature flag stub for your change — document default state.",
    ],
  },
  {
    day: 5,
    title: "Cost, usage & productivity reality check",
    focus:
      "Compare Cursor 3 (including higher-tier plans) vs. raw token play in Claude Code/Codex — and how Forge-style prompt libraries change amortization. Build a team policy that includes rental comms safeguards.",
    keyTakeaway:
      "Budget and workflow fit beat hype—document when UI-heavy Cursor wins vs. when terminal-first tools are cheaper or clearer. Total cost includes rework from bad comms and compliance incidents—not just tokens.",
    sessions: [
      {
        label: "Morning — Data share",
        items: [
          "Each startup presents usage from Days 1–4: tokens, wall-clock time, subjective quality.",
          "Break down tasks: UI iteration vs. backend vs. template refactors vs. tests.",
          "Facilitated discussion: when does Cursor’s UI justify cost? When is volume pricing elsewhere better?",
          "Discuss “library economics”: maintaining a shared prompt pack (Forge-like) vs. ad-hoc chats — when does centralization pay off?",
          "Rental angle: quantify cost of a comms bug (support tickets, churn risk) as a counterweight to token price.",
        ],
      },
      {
        label: "Hands-on — Hybrid experiment",
        items: [
          "Rebuild the same small task in Cursor 3 and in one alternative tool; record time-to-done and satisfaction.",
          "Draft a decision framework (e.g. Cursor for UI-heavy vibe sessions; Claude Code for batch refactors of templates across folders).",
          "Fill a matrix: Tool × Task type × Data sensitivity × Reviewer required.",
          "Add a row for “tenant-facing copy change” — default to human approval?",
          "Discuss model retention policies for your vendor stack — what may not be stored where.",
        ],
      },
      {
        label: "Afternoon — Optional guest / Q&A",
        items: [
          "Optional: Seattle AI founder or Cursor power user—open Q&A on stack and runway.",
          "Optional: product/legal guest on fair housing and screening (high level; not legal advice).",
          "Synthesize: your team’s 90-day policy draft — due tonight.",
        ],
      },
    ],
    homework: [
      "Draft your team’s “AI coding stack” policy for the next 90 days (tools, budgets, review gates).",
      "Include a subsection on rental comms: approvals, forbidden auto-send conditions, logging requirements.",
      "Share one paragraph with your executive sponsor if needed for budget approval.",
    ],
  },
  {
    day: 6,
    title: "Full vibe coding sprint — molten-state build day",
    focus:
      "All-day immersive build: one scoped, high-impact project per startup using Cursor 3 end-to-end — many teams choose a rental comms milestone (e.g. maintenance SLA messaging, owner digest emails, listing SEO blocks).",
    keyTakeaway:
      "Deep focus plus multi-agent leverage is where compounding speed shows up—document the workflow as you go. Ship something demoable, not a science project.",
    sessions: [
      {
        label: "All day — Co-working sprint",
        items: [
          "Kickoff (30 min): each team states scope, risks, and demo criteria — facilitator enforces cuts.",
          "Choose one scoped initiative: new feature, major UI pass, migration/refactor, or prototype.",
          "Rules: Cursor 3 as primary environment; use browser tool + subagents + Git integration.",
          "Document prompts, agent splits, and screenshots in real time (for retrospective).",
          "Check-ins every ~2 hours: blockers, wins, scope trims.",
          "Rental build ideas: unified inbox for SMS + email; template variables lint; “explain this charge” helper for rent ledgers; vendor SLA reminders; multilingual stub for top 2 languages.",
          "Midday: optional lightning talks (5 min) on a subagent trick that saved time.",
          "Afternoon: hard stop scope freeze — only bugfixes allowed after 3pm local.",
          "End of day: PR open or draft with clear next steps — no surprise Friday deploys unless you have runbooks.",
        ],
      },
      {
        label: "Evening — Optional social",
        items: [
          "Light Seattle networking dinner or drinks (optional, not graded).",
          "Share one “surprise” from AI-assisted comms work — funny or scary, anonymized.",
        ],
      },
    ],
    homework: [
      "Open PR(s) with Day 6 work; prep demo narrative for Day 7.",
      "Record a 60-second Loom-style clip if allowed (internal) — great for stakeholders.",
      "List known limitations and follow-up tickets for post-cohort.",
    ],
  },
  {
    day: 7,
    title: "Showcase, reflection & next steps",
    focus:
      "Demo day, merge polish, cohort reflection, and sustainment plan (budget, community, follow-ups) — with explicit reflection on rental communication responsibilities.",
    keyTakeaway:
      "Adoption is a product decision—leave with merged work, shared playbooks, and a one-month check-in commitment. Comms products earn trust slowly and lose it quickly—operate accordingly.",
    sessions: [
      {
        label: "Morning — Final polish",
        items: [
          "Final PR merges from Day 6; quick bugfix window.",
          "Dry-run demos: test projectors, font sizes, and blur sensitive UI.",
          "Backup plan: if demo env fails, show screen recording.",
        ],
      },
      {
        label: "Afternoon — Demo day (~10–15 min per startup)",
        items: [
          "Show what shipped; walk through the Cursor 3 workflow used.",
          "Share metrics: time saved, quality, surprises, failures.",
          "Lessons on vibe coding in a real startup context.",
          "Rental teams: highlight one comms outcome (e.g. fewer confused tenants, faster listing publish) — with evidence or proxy metrics.",
          "Q&A: peers ask constructive questions; no pitching investors unless invited.",
        ],
      },
      {
        label: "Group reflection & closing",
        items: [
          "What will you adopt permanently? Budget impact on runway?",
          "Ideas for ongoing Seattle AI-coder meetups?",
          "Rental ethics check-out: what guardrails did we strengthen this week?",
          "Certificates; shared resources folder (prompts, frameworks, recordings); schedule 1-month check-in call.",
          "Thank sponsors, TAs, and the cohort — maintain Slack with kindness.",
        ],
      },
    ],
    homework: [
      "Optional: publish an internal blog post or Notion recap for your company.",
      "Optional: contribute one anonymized prompt starter back to the cohort library.",
      "Rest.",
    ],
  },
];
