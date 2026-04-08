import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DayPager } from "@/components/DayPager";
import { days } from "@/data/curriculum";

type Props = {
  params: Promise<{ day: string }>;
};

export function generateStaticParams() {
  return days.map((d) => ({ day: String(d.day) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { day: dayParam } = await params;
  const n = Number.parseInt(dayParam, 10);
  const plan = days.find((d) => d.day === n);
  if (!plan) return { title: "Day not found" };
  return {
    title: `Day ${plan.day}: ${plan.title}`,
    description: plan.focus,
  };
}

export default async function DayPage({ params }: Props) {
  const { day: dayParam } = await params;
  const n = Number.parseInt(dayParam, 10);
  if (Number.isNaN(n) || n < 1 || n > 7) notFound();

  const plan = days.find((d) => d.day === n);
  if (!plan) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-sky-700 dark:text-sky-400">
        Day {plan.day} of 7
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {plan.title}
      </h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        <strong className="font-semibold text-slate-800 dark:text-slate-200">
          Focus:
        </strong>{" "}
        {plan.focus}
      </p>

      <div className="mt-10 space-y-10">
        {plan.sessions.map((session) => (
          <section key={session.label}>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              {session.label}
            </h2>
            <ul className="mt-3 space-y-3 text-pretty text-slate-600 dark:text-slate-300">
              {session.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {plan.homework && plan.homework.length > 0 && (
        <section className="mt-10 rounded-xl border border-amber-200 bg-amber-50/90 p-6 dark:border-amber-900/60 dark:bg-amber-950/40">
          <h2 className="font-semibold text-amber-950 dark:text-amber-100">
            Evening async / homework
          </h2>
          <ul className="mt-3 space-y-2 text-amber-950/90 dark:text-amber-100/90">
            {plan.homework.map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden>→</span>
                {h}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-10 rounded-xl border border-emerald-200 bg-emerald-50/80 p-6 dark:border-emerald-900 dark:bg-emerald-950/40">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">
          Key takeaway
        </h2>
        <p className="mt-2 text-emerald-950 dark:text-emerald-100">
          {plan.keyTakeaway}
        </p>
      </div>

      <DayPager day={plan.day} />

      <p className="mt-8 text-center text-sm text-slate-500">
        <Link
          href="/"
          className="text-sky-700 hover:underline dark:text-sky-400"
        >
          ← Program overview
        </Link>
      </p>
    </article>
  );
}
