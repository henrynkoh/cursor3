import Link from "next/link";

const nav = [
  { href: "/", label: "Overview" },
  { href: "/playbook", label: "Playbook" },
  { href: "/resources", label: "Resources" },
  { href: "/logistics", label: "Logistics" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Cursor Vibe Week
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-1 hidden text-slate-300 sm:inline dark:text-slate-600">
            |
          </span>
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: 7 }, (_, i) => (
              <Link
                key={i + 1}
                href={`/day/${i + 1}`}
                className="rounded-md px-2 py-1.5 text-slate-600 hover:bg-sky-50 hover:text-sky-900 dark:text-slate-400 dark:hover:bg-sky-950/50 dark:hover:text-sky-100"
              >
                D{i + 1}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
