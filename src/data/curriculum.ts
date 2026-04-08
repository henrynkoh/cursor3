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
    "A 7-day, hands-on curriculum for a small cohort of early-stage tech startups in the greater Seattle area",
  description:
    "Turns the core ideas from the Tech Bridge video on Cursor 3 into an executable week: vibe coding (immersive, multi-agent AI development) with Cursor’s updated UI, built-in browser, subagent orchestration, and GitHub-native shipping—plus honest comparisons to Claude Code, Codex, and other stacks.",
  cohort:
    "8–12 startups · 1–2 technical leads per team (pre-seed to Series A; SaaS, AI tools, web apps, developer products)",
  region:
    "Greater Seattle area — hybrid in-person (e.g. WeWork, Pioneer Square, Madrona, AI2, or sponsor space) + async Discord/Slack",
  duration:
    "One week · 4–6 hours structured daily (morning deep work + afternoon review) + evening async tasks",
};

export type SessionBlock = {
  label: string;
  items: string[];
};

export type DayPlan = {
  day: number;
  title: string;
  focus: string;
  keyTakeaway: string;
  sessions: SessionBlock[];
  homework?: string[];
};

export const days: DayPlan[] = [
  {
    day: 1,
    title: "Onboarding & Cursor 3 fundamentals",
    focus:
      "Install Cursor 3, master the redesigned UI (agent panels, terminal, visibility), and feel the “vibe” vs. terminal-only tools.",
    keyTakeaway:
      "The environment you code in shapes throughput—Cursor 3 is optimized for visible multi-agent work and flow state.",
    sessions: [
      {
        label: "Morning (in-person) — Welcome & context",
        items: [
          "Welcome and intros: each startup pitches their product in ~2 minutes.",
          "Watch party + guided discussion: key takeaways from the Tech Bridge video—Cursor 3 UI vs. terminal-heavy Claude Code workflows.",
          "Live demo: installing Cursor 3, redesigned terminal, agent panels, multi-agent visibility.",
        ],
      },
      {
        label: "Hands-on — Warm-up",
        items: [
          "Each participant completes Cursor 3 setup on their machine.",
          "Exercise: open an existing small repo or scaffold Next.js/React and use Composer/Chat for basic edits.",
          "Optional: side-by-side with VS Code + Claude/Codex if available—note friction and wins.",
        ],
      },
      {
        label: "Afternoon — Group share",
        items: [
          "What feels immediately better about the new UI? Where did you get stuck?",
        ],
      },
    ],
    homework: [
      "30–60 minute vibe session: refactor one screen or component.",
      "Log token usage and subjective speed (simple spreadsheet row per person).",
    ],
  },
  {
    day: 2,
    title: "Browser tool — design-to-code in one flow",
    focus:
      "Use Cursor’s embedded browser to select DOM nodes (logo, header, CTA) and iterate UI with the agent in a tight loop.",
    keyTakeaway:
      "Selection + prompt closes the gap between what you see and what ships—fewer round-trips than screenshot-only workflows.",
    sessions: [
      {
        label: "Morning — Demo & pairs",
        items: [
          "Review Day 1 outcomes and metrics.",
          "Live demo (video-style): select HTML elements in the embedded browser; prompt to simplify, modernize, or restyle.",
          "Pair across startups: Task 1 — landing or dashboard: select header/logo; generate 3–5 variations (cleaner, mobile-first, subtle motion).",
          "Task 2 — turn accepted changes into real components in your codebase.",
        ],
      },
      {
        label: "Afternoon — Gallery walk",
        items: [
          "Each team: before/after screenshots + summary of code changes.",
          "Discuss friction: routing, CSS layers, design tokens, agent misunderstandings.",
        ],
      },
    ],
    homework: [
      "Apply the browser tool to one real feature (e.g. onboarding UI polish).",
      "Capture one lesson learned in the cohort channel.",
    ],
  },
  {
    day: 3,
    title: "Subagent orchestration — parallel AI workforces",
    focus:
      "Launch and monitor multiple sub-agents for audits, refactors, and parallelized improvements.",
    keyTakeaway:
      "Orchestration beats a single long thread when tasks decompose—security, readability, and tests can advance in parallel.",
    sessions: [
      {
        label: "Morning — Deep dive",
        items: [
          "Subagent management in Cursor 3: launching several agents, monitoring progress, merging outputs responsibly.",
          "Compare to Claude Code’s terminal-centric multi-step flows—when each shines.",
        ],
      },
      {
        label: "Hands-on — Security & refactor sprint",
        items: [
          "Security/code review: multiple agents scan for vulnerabilities, perf hotspots, and accessibility issues.",
          "Refactor challenge: pick a messy module—agent A readability, agent B tests, agent C performance.",
        ],
      },
      {
        label: "Afternoon — Debrief",
        items: [
          "What did agents surface? Where did orchestration help or hurt?",
        ],
      },
    ],
    homework: [
      "Run a full subagent pass on another area of your codebase.",
      "Document findings in a shared Notion/Google Doc with severity tags.",
    ],
  },
  {
    day: 4,
    title: "GitHub integration & shipping",
    focus:
      "Branch → review agent diffs → commit → push → PR without leaving the Cursor loop.",
    keyTakeaway:
      "Shipping is the metric—tight Git integration turns experiments into durable team artifacts.",
    sessions: [
      {
        label: "Morning — Demo",
        items: [
          "End-to-end: branch creation, reviewing agent-generated diffs, conventional commits, push, open PR in GitHub from Cursor 3.",
        ],
      },
      {
        label: "Hands-on — Ship something real",
        items: [
          "Each team implements one small but meaningful improvement using browser tool + subagents + codegen.",
          "Branch naming convention e.g. cursor-vibe-feature; open a real PR (internal is fine).",
        ],
      },
      {
        label: "Afternoon — PR review",
        items: [
          "Cross-startup peer review: clarity, risk, tests, rollout.",
        ],
      },
    ],
    homework: [
      "Merge or iterate on the PR based on feedback.",
      "Update README or internal doc with how your team ran the loop.",
    ],
  },
  {
    day: 5,
    title: "Cost, usage & productivity reality check",
    focus:
      "Compare Cursor 3 (including higher-tier plans) vs. raw token play in Claude Code/Codex—build a team policy.",
    keyTakeaway:
      "Budget and workflow fit beat hype—document when UI-heavy Cursor wins vs. when terminal-first tools are cheaper or clearer.",
    sessions: [
      {
        label: "Morning — Data share",
        items: [
          "Each startup presents usage from Days 1–4: tokens, wall-clock time, subjective quality.",
          "Facilitated discussion: when does Cursor’s UI justify cost? When is volume pricing elsewhere better?",
        ],
      },
      {
        label: "Hands-on — Hybrid experiment",
        items: [
          "Rebuild the same small task in Cursor 3 and in one alternative tool; record time-to-done and satisfaction.",
          "Draft a decision framework (e.g. Cursor for UI-heavy vibe sessions; Claude for batch backend refactors).",
        ],
      },
      {
        label: "Afternoon — Optional guest / Q&A",
        items: [
          "Optional: Seattle AI founder or Cursor power user—open Q&A on stack and runway.",
        ],
      },
    ],
    homework: [
      "Draft your team’s “AI coding stack” policy for the next 90 days (tools, budgets, review gates).",
    ],
  },
  {
    day: 6,
    title: "Full vibe coding sprint — molten-state build day",
    focus:
      "All-day immersive build: one scoped, high-impact project per startup using Cursor 3 end-to-end.",
    keyTakeaway:
      "Deep focus plus multi-agent leverage is where compounding speed shows up—document the workflow as you go.",
    sessions: [
      {
        label: "All day — Co-working sprint",
        items: [
          "Choose one scoped initiative: new feature, major UI pass, migration/refactor, or prototype.",
          "Rules: Cursor 3 as primary environment; use browser tool + subagents + Git integration.",
          "Document prompts, agent splits, and screenshots in real time (for retrospective).",
          "Check-ins every ~2 hours: blockers, wins, scope trims.",
        ],
      },
      {
        label: "Evening — Optional social",
        items: [
          "Light Seattle networking dinner or drinks (optional, not graded).",
        ],
      },
    ],
    homework: [
      "Open PR(s) with Day 6 work; prep demo narrative for Day 7.",
    ],
  },
  {
    day: 7,
    title: "Showcase, reflection & next steps",
    focus:
      "Demo day, merge polish, cohort reflection, and sustainment plan (budget, community, follow-ups).",
    keyTakeaway:
      "Adoption is a product decision—leave with merged work, shared playbooks, and a one-month check-in commitment.",
    sessions: [
      {
        label: "Morning — Final polish",
        items: [
          "Final PR merges from Day 6; quick bugfix window.",
        ],
      },
      {
        label: "Afternoon — Demo day (~10–15 min per startup)",
        items: [
          "Show what shipped; walk through the Cursor 3 workflow used.",
          "Share metrics: time saved, quality, surprises, failures.",
          "Lessons on vibe coding in a real startup context.",
        ],
      },
      {
        label: "Group reflection & closing",
        items: [
          "What will you adopt permanently? Budget impact on runway?",
          "Ideas for ongoing Seattle AI-coder meetups?",
          "Certificates; shared resources folder (prompts, frameworks, recordings); schedule 1-month check-in call.",
        ],
      },
    ],
  },
];

export const programFeatures = [
  {
    title: "Cursor 3 UI & flow",
    description:
      "Agent panels, terminal, and visibility tuned for long sessions—less context switching than stitching terminal + editor by hand.",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    title: "Built-in browser",
    description:
      "Select DOM, prompt for variants, and land changes in components—tight design-to-code iteration.",
    accent: "from-teal-500 to-emerald-500",
  },
  {
    title: "Subagent orchestration",
    description:
      "Parallel audits and refactors: security, a11y, perf, tests—managed like a small team.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "GitHub-native shipping",
    description:
      "Branches, commits, PRs—treat agent output like any other teammate’s diff.",
    accent: "from-amber-500 to-orange-500",
  },
] as const;

export const goals = [
  "Make Cursor 3 a credible primary AI coding environment for your team.",
  "Shift from solo threads to orchestrated multi-agent workflows (vibe coding).",
  "Ship real increments: UI refactors, analysis, features, GitHub PRs.",
  "Compare Cursor 3 vs. alternatives to fit stack and budget.",
  "Build peer relationships across Seattle startups (shared practices, possible partnerships).",
];

export const prerequisites = [
  "Cursor 3 installed (Pro or Team plan recommended for the cohort).",
  "GitHub accounts and a real repo or approved starter project.",
  "Basic familiarity with your stack (React/Next.js, Python, etc.) and Git.",
  "Shared Discord or Slack channel for async updates and resource drops.",
];

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
];

export const logistics = {
  dailyStructure:
    "4–6 hours structured time daily: morning instruction and deep work, afternoon review, share, or gallery walk; evening async tasks (30–90 minutes typical).",
  venue:
    "Hybrid: in-person co-working in Seattle (WeWork, Pioneer Square, Impact Hub, VC or sponsor space) with AV for demos; remote async via shared Slack/Discord.",
  assessment:
    "Participation portfolio: PRs opened, prompt logs, before/after artifacts, and team policy draft from Day 5.",
  successMetrics: [
    "Every participant completes at least one shipped PR using the full Cursor 3 workflow.",
    "Teams report 2–4× perceived productivity on UI/design-heavy tasks (self-reported, with evidence).",
    "Clear decision on whether to standardize on Cursor 3 for the next quarter.",
    "Networking: 2–3 organic cross-startup follow-ups from the cohort.",
  ],
  costNotes:
    "Inquire about Cursor Team plans for cohort pricing; budget coffee/snacks; optional sponsor for venue or guest speaker.",
  postProgram:
    "Shared drive with prompt libraries and decision frameworks; optional 1-month check-in video call; lightweight alumni channel.",
};
