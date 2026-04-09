# Seattle Cursor Vibe Week

A **Next.js 16** curriculum site for a **7-day, hands-on program** for early-stage tech startups in the greater Seattle area. The program teaches **vibe coding** with **Cursor 3**: new UI, embedded browser, subagent orchestration, and GitHub-native shipping—aligned with the Tech Bridge video on Cursor 3 (see [Source video](https://www.youtube.com/watch?v=Uffw_SKXmz0)).

## What’s in this repo

| Area | Description |
|------|-------------|
| **Landing (`/`)** | Single-page hub: **scrollable left sidebar** (desktop) with jump links to every section; animated hero; bento-style goals & features; 7-day accordions; playbook highlight; **floating “View on GitHub”** bottom-right. Mobile: **Navigate** opens the same rail. |
| **Day pages** | `/day/1` … `/day/7` — print-friendly session plans |
| **Playbook** | Copy-paste prompts for browser tool, subagents, PRs, 90-day stack policy |
| **Resources / Logistics** | Prerequisites, links, venue, success metrics |

## Documentation

| Doc | Purpose |
|-----|---------|
| [docs/README.md](docs/README.md) | Index of all docs |
| [docs/QUICKSTART.md](docs/QUICKSTART.md) | Run the app locally in a few commands |
| [docs/TUTORIAL.md](docs/TUTORIAL.md) | Step-by-step for developers editing or deploying the site |
| [docs/MANUAL.md](docs/MANUAL.md) | Facilitator manual—how to run the cohort week |
| [docs/marketing/](docs/marketing/) | Facebook, Instagram, Threads, Blogger, Naver, Tistory, WordPress, newsletter, email |

## Requirements

- **Node.js** 20+ recommended  
- **npm** (or pnpm/yarn with equivalent scripts)

## Scripts

```bash
npm install    # install dependencies
npm run dev    # development server → http://localhost:3000
npm run build  # production build
npm run start  # run production server (after build)
npm run lint   # ESLint
```

## Environment (optional)

Create `.env.local`:

```bash
# Optional: repo URL for GitHub links in the UI (header + floating button)
NEXT_PUBLIC_GITHUB_REPO_URL=https://github.com/your-org/seattle-cursor-vibe-week
```

## Project structure

```
seattle-cursor-vibe-week/
├── src/
│   ├── app/              # App Router pages
│   ├── components/       # UI (landing, header, playbook copy blocks)
│   └── data/
│       ├── curriculum.ts # Re-exports program, days, goals, logistics
│       ├── domain.ts     # Program metadata, goals, prerequisites, resources
│       ├── days.ts       # Full 7-day curriculum (expanded; rental comms track)
│       ├── types.ts      # DayPlan / SessionBlock types
│       └── promptPack.ts # Playbook: browser, rental (5 tracks), Claude/Forge, PII
├── docs/                 # Manual, tutorial, quickstart, marketing
├── package.json
└── README.md
```

## License

Private / program use unless you add an explicit license.

## Disclaimer

Not affiliated with Cursor, YouTube, or Tech Bridge. Curriculum is for educational and cohort facilitation purposes.
