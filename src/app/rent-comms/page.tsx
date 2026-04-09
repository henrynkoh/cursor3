import type { Metadata } from "next";
import Link from "next/link";
import { RentTemplateCopy } from "@/components/RentTemplateCopy";
import {
  placeholderLegend,
  rentCommsSteps,
  rentJourneyIntro,
} from "@/data/rentCommsTemplates";

export const metadata: Metadata = {
  title: "Rent email & SMS templates",
  description:
    "Draft email and text message templates per rent journey step — schedules, due day, late notices, partial pay, holidays. Not legal advice.",
};

export default function RentCommsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
        {rentJourneyIntro.eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        {rentJourneyIntro.title}
      </h1>
      <p className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/90 p-4 text-sm text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-100">
        {rentJourneyIntro.disclaimer}
      </p>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Each step below includes an <strong>email</strong> version and a{" "}
        <strong>text message (SMS)</strong> version. Replace placeholders in your
        mail/SMS system — never send live bank or card numbers in body text.
      </p>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-800 dark:bg-slate-900/50">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Placeholder keys
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
          {placeholderLegend.map((p) => (
            <li
              key={p}
              className="rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-800"
            >
              {p}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 space-y-16">
        {rentCommsSteps.map((step) => (
          <section
            key={step.id}
            id={step.id}
            className="scroll-mt-28 border-t border-slate-200 pt-12 dark:border-slate-800"
          >
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-cyan-600 text-sm font-bold text-white">
                {step.order}
              </span>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {step.subtitle}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase text-violet-700 dark:text-violet-300">
                  Email
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Subject line (use as template):
                </p>
                <RentTemplateCopy
                  label="Subject"
                  body={step.emailSubject}
                  variant="email"
                />
                <RentTemplateCopy
                  label="Body"
                  body={step.emailBody}
                  variant="email"
                />
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-300">
                  Text message (SMS)
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Keep segments in mind for carrier limits; shorten if needed.
                </p>
                <RentTemplateCopy
                  label="SMS body"
                  body={step.smsBody}
                  variant="sms"
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-900/40">
        <h2 className="font-semibold text-slate-900 dark:text-white">
          Forge-style handoffs (product/engineering)
        </h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>
            <strong>Architect</strong> — lock schemas for rent schedules, ledger
            events (invoice, attempt, partial, reversal, adjustment), and notice
            templates with version ids.
          </li>
          <li>
            <strong>Tester</strong> — table-top cases: partial payments, weekend
            due dates, holidays, failed ACH, duplicate payments.
          </li>
          <li>
            <strong>Security</strong> — exports and webhooks must not leak tenant
            contact lists or payment instrument details.
          </li>
        </ul>
      </section>

      <p className="mt-10 text-center text-sm text-slate-500">
        <Link href="/playbook" className="text-sky-700 hover:underline dark:text-sky-400">
          ← Prompt playbook
        </Link>
        {" · "}
        <Link href="/" className="text-sky-700 hover:underline dark:text-sky-400">
          Overview
        </Link>
      </p>
    </main>
  );
}
