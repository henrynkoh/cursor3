export type PromptSection = {
  id: string;
  title: string;
  description: string;
  prompts: { label: string; body: string }[];
};

export const promptSections: PromptSection[] = [
  {
    id: "browser",
    title: "Browser tool — selection prompts (general)",
    description:
      "Use after selecting a node in the embedded browser. Replace bracketed placeholders. Never paste real tenant PII — use synthetic fixtures.",
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
      {
        label: "Empty & loading states",
        body: `Selection: [component]. Add skeleton loaders and empty-state copy that explains next steps to the user. Avoid blame-oriented language. Include primary CTA if appropriate.`,
      },
      {
        label: "Error state copy",
        body: `Selection: [error banner]. Rewrite error copy to be specific, actionable, and calm. Include support path. Do not log sensitive payloads to console in production code paths.`,
      },
    ],
  },
  {
    id: "rental_listings",
    title: "Rental — listings & marketing surfaces",
    description:
      "Prompt starters for listing detail, gallery, amenities, and SEO blocks. Use redacted property data only. Not legal advice.",
    prompts: [
      {
        label: "Listing hero variants",
        body: `Context: listing detail page for multifamily. I selected the hero section. Generate 3 copy variants for title + subtitle:
- Family-friendly
- Work-from-home oriented
- Transit-oriented
Constraints: do not claim unavailable amenities; include "verify on tour" language; keep under [N] words. Implement as props-driven React components with i18n keys if the project uses next-intl/react-i18next.`,
      },
      {
        label: "Amenity list consistency",
        body: `Audit selected amenity chips for inconsistent terminology vs. glossary (e.g. "WD hookups" vs "washer/dryer connections"). Normalize strings via a single map object. Add Storybook stories if the repo uses Storybook.`,
      },
      {
        label: "Photo gallery a11y",
        body: `Selected image gallery: ensure each image has alt text pattern "[Community name] — [area name] photo" using synthetic names. Add keyboard navigation and visible focus. Lazy-load images.`,
      },
      {
        label: "Apply / tour CTA hierarchy",
        body: `Selected CTA row: establish primary (Schedule tour) and secondary (Apply now) with clear disabled reasons when unit unavailable. Do not promise instant approval.`,
      },
      {
        label: "SEO meta scaffold",
        body: `For listing route: add generateMetadata (Next.js) or head tags with title/description templates using synthetic address components. No geolocation tricks that expose exact tenant addresses in public HTML without product intent.`,
      },
      {
        label: "Pet policy snippet",
        body: `Draft pet policy summary UI from structured fields (allowed, deposit, restrictions). If fields missing, show "Contact office" rather than inventing rules.`,
      },
    ],
  },
  {
    id: "rental_screening",
    title: "Rental — screening & applications",
    description:
      "Comms around applications, status updates, and screening — align to your counsel on FCRA/adverse action. Engineering must not bypass legal obligations your product assumes.",
    prompts: [
      {
        label: "Application received",
        body: `Draft transactional email + in-app message templates for "application received" with:
- Clear timeline expectations (ranges, not promises)
- What documents are needed
- Privacy reminder
Use placeholders {{applicant_first_name}} {{property_name}} only. No SSN in body.`,
      },
      {
        label: "Status portal strings",
        body: `Implement status steps: Received → In review → Needs info → Decision pending → Approved / Not approved. Each step: short user-facing explanation, what happens next. Avoid discriminatory language; do not include protected-class criteria in UI copy.`,
      },
      {
        label: "Needs more info request",
        body: `Write a request template for missing documents with bullet checklist and secure upload link placeholder. Tone: neutral, helpful. Include support contact.`,
      },
      {
        label: "Adverse action placeholder (legal review)",
        body: `STUB ONLY: scaffold a component for adverse action notice delivery with:
- Clear separation from marketing copy
- "Required by law" banner
- Links to consumer reporting agency info placeholders
Do NOT auto-fill legal text — insert TODO markers for counsel-approved content.`,
      },
      {
        label: "Screening metrics dashboard",
        body: `For internal dashboard (selected): add charts for funnel conversion with synthetic data. Ensure RBAC: tenant PII not visible to unauthorized roles — add role checks in data loaders.`,
      },
    ],
  },
  {
    id: "rental_leases",
    title: "Rental — leases & policy surfaces",
    description:
      "UI for summaries, acknowledgments, and signatures handoff — not a substitute for attorneys. Favor clarity and versioning.",
    prompts: [
      {
        label: "Lease summary card",
        body: `Selected card: show rent amount, due day, grace period, late fee policy references from structured fields. If a field is null, show "See lease" instead of guessing. Add "Last updated" from document version id.`,
      },
      {
        label: "Clause glossary",
        body: `Add expandable definitions for 5 common terms (prorated rent, security deposit, holdover, etc.) with plain language. Flag: content is informational only, not legal advice.`,
      },
      {
        label: "E-sign handoff",
        body: `Add a handoff page that explains steps to e-sign in external provider (DocuSign, HelloSign, etc.) with iframe or redirect — include loading and error states. Do not embed PII in query strings.`,
      },
      {
        label: "Version diff notice",
        body: `When lease template version changes, show a modal summarizing changes at high level with link to full PDF. Engineering: store version ids; do not diff PDFs in-browser without product requirements.`,
      },
    ],
  },
  {
    id: "rental_rent",
    title: "Rental — rent, reminders & payments",
    description:
      "Payment-adjacent copy and UI must avoid shame and comply with your product’s regulatory context. Use synthetic amounts in examples.",
    prompts: [
      {
        label: "Rent reminder schedule",
        body: `Implement reminder copy variants for T-7, T-3, T-1, due day, and late (after grace). Tone: factual, respectful. Include payment portal link placeholder. Add unit tests for date boundary logic using frozen clocks.`,
      },
      {
        label: "Failed payment explanation",
        body: `Selected error state: explain card decline generically: no full PAN, no exact decline codes exposed to tenants unless required. Provide next steps and support.`,
      },
      {
        label: "Partial payment policy",
        body: `If product allows partial payments: add UI rules for when balance is acceptable vs. still in arrears; never mock tenants. Include ledger line item placeholders.`,
      },
      {
        label: "Receipt email",
        body: `Template for payment receipt: amount, date, method last4 if applicable, balance due. Redact in previews in non-prod environments.`,
      },
      {
        label: "Owner remittance summary",
        body: `Owner-facing dashboard: revenue summary with exportable CSV stub — ensure tenant PII columns excluded by default.`,
      },
    ],
  },
  {
    id: "rental_maintenance",
    title: "Rental — maintenance & communications",
    description:
      "Triage, SLAs, vendor updates, and resident messaging — reduce duplicate threads and confusion.",
    prompts: [
      {
        label: "New work order — resident",
        body: `Compose wizard copy: category selection, description, photos, permission to enter, pet notes. Validate max lengths; sanitize text; show expected response time ranges.`,
      },
      {
        label: "Vendor assignment notice",
        body: `Template for "vendor scheduled" with date window placeholder, vendor company name only (no personal phone in email if policy prohibits).`,
      },
      {
        label: "SLA breach warning (internal)",
        body: `Internal banner when ticket exceeds SLA: show age, priority reason, and assignee — no tenant shaming language in internal notes.`,
      },
      {
        label: "Resident follow-up satisfaction",
        body: `Optional micro-survey after completion: 1–5 stars + comment. Ensure opt-out; store responses with access controls.`,
      },
      {
        label: "Emergency vs. urgent definitions",
        body: `Add contextual help defining emergency (flood, sparking outlet) vs. urgent (non-habitable) vs. routine — align with org policy; include emergency hotline placeholder.`,
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
      {
        label: "PII leakage scan",
        body: `Search [paths] for patterns: email regex, phone regex, SSN-like sequences in strings, console.log of request bodies. Flag risky logging. Suggest centralized redaction utility.`,
      },
      {
        label: "Comms tone consistency",
        body: `Review user-visible strings in [paths] against style guide: [link or paste bullets]. Flag harsh or ambiguous phrasing; suggest neutral alternatives.`,
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
      {
        label: "Comms PR template",
        body: `Add a PR template section for comms changes:
- [ ] Copy reviewed by [role]
- [ ] Screenshots from staging (redacted)
- [ ] Feature flag / gradual rollout plan
- [ ] Metrics to watch post-deploy`,
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
      {
        label: "Rental comms addendum",
        body: `AI usage for tenant-facing copy:
- Auto-send disabled for: [list]
- Required human review for: [list]
- Logging: [what we store, retention]
- Vendor models: [allowed/prohibited regions]
- Incident response: [who to page]`,
      },
    ],
  },
  {
    id: "claude_forge",
    title: "Claude Code + Forge prompt library — alignment",
    description:
      "Map organizational prompt libraries to your Cursor workflow. Edit slash command names and permissions for your org. Use redacted data only.",
    prompts: [
      {
        label: "Forge-style slash command stub",
        body: `We want a command naming scheme compatible with our Claude Forge library:
- /listing-hero [unitId]
- /screening-status [applicationId]
- /rent-reminder [leaseId]
Document each command’s inputs, outputs, and PII constraints. Implement as Cursor custom instructions or markdown snippets in /docs/prompts — no live tenant data.`,
      },
      {
        label: "Batch template generation",
        body: `Claude Code excels at multi-file refactors. Task: rename string keys across [paths] for i18n with codemod-style instructions. Cursor: use for interactive confirmation. Outline when to run in CI vs. local.`,
      },
      {
        label: "Org permission matrix",
        body: `Draft a table: Role × Can use AI on tenant data × Can approve copy × Can merge PRs. Engineering implements RBAC in app; this table guides policy.`,
      },
      {
        label: "Audit trail fields",
        body: `For AI-assisted comms sends, propose DB fields: prompt_hash, model, reviewer_id, time_sent, template_version. Pseudocode only — align with your privacy team.`,
      },
    ],
  },
  {
    id: "pii_compliance",
    title: "PII, redaction & safe demos",
    description:
      "Guardrails for prompts, screenshots, and logs. Not legal advice — align with counsel and privacy team.",
    prompts: [
      {
        label: "Synthetic fixtures",
        body: `Generate a fixtures file with synthetic tenants, units, and amounts — clearly marked FAKE. Use in tests and demos. Never copy production dumps.`,
      },
      {
        label: "Screenshot checklist",
        body: `Before sharing screenshots: blur names, unit numbers if sensitive, faces, license plates, keys. Prefer staging data with obvious fake names.`,
      },
      {
        label: "Log redaction",
        body: `Implement a redactor utility that masks email/phone in logs for [service]. Add unit tests with sample payloads.`,
      },
      {
        label: "Prompting rules poster",
        body: `Draft a one-pager for engineers:
- Never paste SSN, bank account, full card numbers
- Use ticket ids instead of names when possible
- If unsure, ask security
Post in Slack and link from README.`,
      },
    ],
  },
];
