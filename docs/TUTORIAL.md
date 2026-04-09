# Tutorial — Developers & operators

This tutorial walks through **editing the curriculum**, **local development**, and **deploying** the Seattle Cursor Vibe Week site.

## 1. Architecture (mental model)

- **Framework:** Next.js 16 App Router, React 19, TypeScript.
- **Styling:** Tailwind CSS v4 (`src/app/globals.css` + utility classes).
- **Content:** Most program text lives in **`src/data/curriculum.ts`** (days, goals, logistics). Playbook prompts are in **`src/data/promptPack.ts`**.
- **Pages:** `src/app/page.tsx` renders the landing (`HomeLanding`). Dynamic days use `src/app/day/[day]/page.tsx` with `generateStaticParams` for `/day/1` … `/day/7`.

## 2. Change program copy

1. **`src/data/domain.ts`** — `program`, `goals`, `prerequisites`, `resources`, `logistics`, `programFeatures`, `VIDEO_ID`.
2. **`src/data/days.ts`** — the seven `DayPlan` entries (sessions, homework, key takeaways). This file is long on purpose (expanded rental-communication track).
3. **`src/data/curriculum.ts`** — re-exports the above for a stable import path (`@/data/curriculum`).
4. If you add/remove days, update `days` and any hard-coded “7” references in the app.

**Video:** `VIDEO_ID` must match the YouTube ID (e.g. `Uffw_SKXmz0`).

## 3. Change playbook prompts

1. Open `src/data/promptPack.ts` (browser, rental tracks: listings, screening, leases, rent/reminders, maintenance, Claude Code/Forge alignment, PII).
2. Add or edit `promptSections` entries (`title`, `description`, `prompts[]` with `label` + `body`).
3. The `/playbook` page renders these with copy buttons (`PromptCopyBlock`). Rental prompts are illustrative — not legal advice; align with counsel for binding copy.

## 4. Styling and branding

- Global fonts and layout: `src/app/layout.tsx`.
- Landing gradients and sections: `src/components/landing/HomeLanding.tsx`.
- Header/footer: `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`.

Keep contrast accessible (sky/cyan palette is tuned for light and dark system preference).

## 5. Build and quality gates

```bash
npm run lint
npm run build
```

Fix any TypeScript or ESLint errors before merging.

## 6. Deploy (example: Vercel)

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com) (framework: Next.js).
3. Add `NEXT_PUBLIC_GITHUB_REPO_URL` in Project → Settings → Environment Variables if needed.
4. Deploy; verify `/`, `/day/1`, `/playbook`, `/logistics`.

Other hosts (Netlify, Railway, self-hosted Node) work as long as they support Next.js 16 and run `npm run build` + `npm run start` (or the platform’s Next adapter).

## 7. Static export (optional)

This project is built for a standard Node Next server. If you need full static export, you would add `output: 'export'` in `next.config.ts` and avoid features that require a server—**not** configured by default here.

## 8. Where to get help

- [Next.js docs](https://nextjs.org/docs)
- Facilitator-facing runbook: [MANUAL.md](MANUAL.md)
