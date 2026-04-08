import Link from "next/link";

type Props = {
  day: number;
};

export function DayPager({ day }: Props) {
  const prev = day > 1 ? day - 1 : null;
  const next = day < 7 ? day + 1 : null;

  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800">
      {prev ? (
        <Link
          href={`/day/${prev}`}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          ← Day {prev}
        </Link>
      ) : (
        <span />
      )}
      <Link
        href="/"
        className="text-sm text-sky-700 hover:underline dark:text-sky-400"
      >
        All days
      </Link>
      {next ? (
        <Link
          href={`/day/${next}`}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Day {next} →
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
