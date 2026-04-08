"use client";

import { getGithubRepoUrl } from "@/data/curriculum";

export function GitHubFab() {
  const href = getGithubRepoUrl();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex max-w-[min(100vw-2rem,20rem)] items-center gap-3 rounded-2xl border-2 border-sky-400/40 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 px-4 py-3.5 text-left text-white shadow-[0_8px_40px_-8px_rgba(14,165,233,0.55)] ring-2 ring-white/10 transition hover:-translate-y-0.5 hover:border-sky-300/60 hover:shadow-[0_12px_48px_-8px_rgba(14,165,233,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:bottom-6 sm:right-6"
      aria-label="Open this project on GitHub"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 transition group-hover:bg-white/15">
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold tracking-tight">View on GitHub</span>
        <span className="mt-0.5 block text-xs font-medium text-sky-200/90 transition group-hover:text-white">
          Source · stars · fork
        </span>
      </span>
      <span
        className="hidden shrink-0 text-sky-300 transition group-hover:translate-x-0.5 group-hover:text-white sm:inline"
        aria-hidden
      >
        →
      </span>
    </a>
  );
}
