import type { Metadata } from "next";
import Link from "next/link";
import { PromptCopyBlock } from "@/components/PromptCopyBlock";
import { promptSections } from "@/data/promptPack";

export const metadata: Metadata = {
  title: "AI coding playbook",
  description:
    "Copy-paste prompts for browser tool work, subagents, PRs, and stack policy.",
};

export default function PlaybookPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-sky-700 dark:text-sky-400">
        Facilitator & team resource
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Prompt playbook
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Practical templates aligned to Days 2–5: browser selections, parallel
        agent briefs, shipping hygiene, and a 90-day policy skeleton. Duplicate
        into Notion or Slack and localize paths and component names.
      </p>

      <div className="mt-10 space-y-14">
        {promptSections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {section.description}
            </p>
            <div className="mt-6 space-y-6">
              {section.prompts.map((p) => (
                <PromptCopyBlock key={p.label} label={p.label} body={p.body} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-slate-500">
        <Link href="/" className="text-sky-700 hover:underline dark:text-sky-400">
          ← Program overview
        </Link>
      </p>
    </main>
  );
}
