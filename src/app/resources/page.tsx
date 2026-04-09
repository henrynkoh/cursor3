import type { Metadata } from "next";
import Link from "next/link";
import { prerequisites, resources } from "@/data/curriculum";

export const metadata: Metadata = {
  title: "Resources & prerequisites",
  description:
    "Cursor 3, GitHub, and cohort logistics for Seattle Cursor Vibe Week.",
};

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Prerequisites & resources
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        What teams install and line up before Day 1 so exercises run on real
        repositories—not toy sandboxes.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Prerequisites
        </h2>
        <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
          {prerequisites.map((p) => (
            <li key={p} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                aria-hidden
              />
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Target participants
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Founders, technical leads, and early engineers who ship product code or
          directly supervise AI-assisted development. Each startup should bring at
          least one repo they are allowed to modify and a shared channel for async
          updates.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Links
        </h2>
        <ul className="mt-6 space-y-4">
          {resources.map((r) => {
            const external = r.href.startsWith("http");
            return (
              <li
                key={r.href}
                className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
              >
                {external ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sky-700 hover:underline dark:text-sky-400"
                  >
                    {r.title}
                  </a>
                ) : (
                  <Link
                    href={r.href}
                    className="font-medium text-sky-700 hover:underline dark:text-sky-400"
                  >
                    {r.title}
                  </Link>
                )}
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {r.description}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-100/80 p-6 dark:border-slate-800 dark:bg-slate-900/50">
        <h2 className="font-semibold text-slate-900 dark:text-white">
          Facilitator note
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Reserve a room with reliable power, guest Wi-Fi, and a large display for
          Day 2 gallery walks and Day 7 demos. Encourage teams to use the{" "}
          <Link href="/playbook" className="text-sky-700 hover:underline dark:text-sky-400">
            prompt playbook
          </Link>{" "}
          as a living document—paste cohort-specific variants into Notion or
          Slack.
        </p>
      </section>
    </main>
  );
}
