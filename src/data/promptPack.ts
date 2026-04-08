export type PromptSection = {
  id: string;
  title: string;
  description: string;
  prompts: { label: string; body: string }[];
};

export const promptSections: PromptSection[] = [
  {
    id: "browser",
    title: "Browser tool — selection prompts",
    description:
      "Use after selecting a node in the embedded browser. Replace bracketed placeholders.",
    prompts: [
      {
        label: "Clean up header",
        body: `I selected the header region in the embedded browser. Refactor the corresponding React/Next.js components to:
- Reduce visual noise; improve spacing scale and alignment
- Keep brand colors but improve contrast for WCAG AA where possible
- Use existing design tokens/CSS variables if the project has them; otherwise introduce a minimal token set in one file
Output: component diffs only, no unrelated files.`,
      },
      {
        label: "Mobile-first pass",
        body: `Selection: [describe element]. Make this block mobile-first: stack on small screens, restore side-by-side from md breakpoint, touch-friendly tap targets (min 44px). Preserve existing data bindings and tests.`,
      },
      {
        label: "Micro-interaction",
        body: `For the selected button/link: add a subtle hover/focus state (respect prefers-reduced-motion). Use CSS or the project's motion library if already present. No new dependencies unless necessary.`,
      },
    ],
  },
  {
    id: "subagents",
    title: "Subagent briefs — parallel work",
    description:
      "Spawn focused agents with narrow scopes. Adjust paths and stack names.",
    prompts: [
      {
        label: "Security pass",
        body: `Audit the following paths for OWASP-style issues: [paths]. Focus: auth boundaries, injection, secrets in client bundles, unsafe HTML, dependency risks. Return a prioritized table: severity, file, finding, fix suggestion.`,
      },
      {
        label: "Performance pass",
        body: `Profile-readonly review of [paths]: list unnecessary re-renders, large client bundles, N+1 API patterns, missing suspense/streaming opportunities for Next.js if applicable. No rewrites yet—findings only.`,
      },
      {
        label: "Accessibility pass",
        body: `Keyboard, focus order, labels, and ARIA for components under [paths]. Map issues to WCAG criteria. Suggest minimal code changes.`,
      },
      {
        label: "Test gap fill",
        body: `For module [path]: add unit/integration tests for critical branches and error paths. Match existing test runner (Jest/Vitest/Playwright). Keep tests fast and deterministic.`,
      },
    ],
  },
  {
    id: "shipping",
    title: "Git & PR discipline",
    description:
      "Keep agent output reviewable like any teammate’s work.",
    prompts: [
      {
        label: "Pre-PR checklist",
        body: `Before opening the PR: summarize intent, list files touched, note risk areas, list manual test steps, and call out any AI-generated code that needs extra scrutiny (auth, payments, PII).`,
      },
      {
        label: "Commit message",
        body: `feat(scope): short imperative summary

- Bullet of user-visible change
- Bullet of technical approach
- Risk: [low/medium/high] + rollback note`,
      },
    ],
  },
  {
    id: "comparison",
    title: "90-day stack policy — template",
    description:
      "Fill in as a team on Day 5. Keeps tooling decisions explicit.",
    prompts: [
      {
        label: "Decision framework",
        body: `Our default AI coding stack for the next 90 days:
- Primary editor/agent UI: [Cursor 3 / other]
- When we use terminal-first tools: [e.g. batch refactors, CI-only tasks]
- Monthly budget cap per engineer: [$]
- Review policy for AI-generated PRs: [required reviewers, forbidden areas]
- Metrics we track weekly: [PR count, rework rate, token spend]`,
      },
    ],
  },
];
