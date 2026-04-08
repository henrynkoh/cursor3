import type { Metadata } from "next";
import { logistics } from "@/data/curriculum";

export const metadata: Metadata = {
  title: "Logistics & success metrics",
  description:
    "Venue, schedule, assessment, and success criteria for Seattle Cursor Vibe Week.",
};

export default function LogisticsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Schedule & logistics
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        How to run the hybrid week, measure outcomes, and support teams after
        the program.
      </p>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Daily structure
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {logistics.dailyStructure}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Venue & format
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {logistics.venue}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Assessment
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {logistics.assessment}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Cost considerations
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {logistics.costNotes}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Post-program support
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {logistics.postProgram}
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Success metrics
        </h2>
        <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
          {logistics.successMetrics.map((m) => (
            <li key={m} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500"
                aria-hidden
              />
              {m}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-semibold text-slate-900 dark:text-white">
          Customization
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Swap example stacks (e.g. more Python backend teams) by changing Day 2–4
          exercises while keeping the same sequence: UI iteration, parallel
          audits, then PR discipline. A fully remote cohort can mirror the
          schedule with longer async windows and recorded demos for Day 7.
        </p>
      </section>
    </main>
  );
}
