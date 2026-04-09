"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import {
  days,
  getGithubRepoUrl,
  goals,
  logistics,
  prerequisites,
  program,
  programFeatures,
  resources,
  VIDEO_ID,
} from "@/data/curriculum";
import { promptSections } from "@/data/promptPack";
import { GitHubFab } from "./GitHubFab";

const HEAD_IDS = [
  "hero",
  "overview",
  "video",
  "goals",
  "features",
  "curriculum",
] as const;

const TAIL_IDS = ["playbook", "resources", "logistics", "cta"] as const;

function buildSectionIds(): string[] {
  return [
    ...HEAD_IDS,
    ...days.map((d) => `day-${d.day}`),
    ...TAIL_IDS,
  ];
}

const SECTION_IDS = buildSectionIds();

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type NavGroup = { heading: string; items: { id: string; label: string }[] };

function buildNavGroups(): NavGroup[] {
  return [
    {
      heading: "Start",
      items: [{ id: "hero", label: "Intro" }],
    },
    {
      heading: "Program",
      items: [
        { id: "overview", label: "Overview" },
        { id: "video", label: "Source video" },
        { id: "goals", label: "Goals" },
        { id: "features", label: "Features" },
      ],
    },
    {
      heading: "Curriculum",
      items: [{ id: "curriculum", label: "7-day overview" }],
    },
    {
      heading: "Daily",
      items: days.map((d) => ({
        id: `day-${d.day}`,
        label: `Day ${d.day}`,
      })),
    },
    {
      heading: "Resources",
      items: [
        { id: "playbook", label: "Playbook" },
        { id: "resources", label: "Links & prereqs" },
        { id: "logistics", label: "Logistics" },
        { id: "cta", label: "Get started" },
      ],
    },
  ];
}

function SidebarNav({
  activeId,
  onNavigate,
  githubHint,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
  githubHint: boolean;
}) {
  const groups = useMemo(() => buildNavGroups(), []);

  return (
    <>
      <div className="shrink-0 px-1 pb-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600/90 dark:text-sky-400">
          On this page
        </p>
        <p className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">
          Scroll or tap a section — the page highlights as you read.
        </p>
      </div>
      <nav
        className="landing-sidebar-scroll min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-y-contain pr-1 pb-4"
        aria-label="Page sections"
      >
        {groups.map((group) => (
          <div key={group.heading}>
            <p className="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {group.heading}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onNavigate(item.id)}
                      className={`flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-sm transition ${
                        active
                          ? "bg-gradient-to-r from-sky-600 to-cyan-600 font-semibold text-white shadow-md shadow-sky-500/25"
                          : "text-slate-700 hover:bg-sky-50/90 hover:shadow-sm dark:text-slate-200 dark:hover:bg-slate-800/90"
                      }`}
                    >
                      <span
                        className={`h-7 w-1 shrink-0 rounded-full ${
                          active ? "bg-white/90" : "bg-sky-300/50 dark:bg-slate-600"
                        }`}
                        aria-hidden
                      />
                      <span className="min-w-0 flex-1 truncate">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="shrink-0 border-t border-slate-200/80 bg-gradient-to-t from-white/90 to-transparent pt-3 dark:border-slate-800 dark:from-slate-950/90">
        <a
          href={getGithubRepoUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/90 px-3 py-2.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50/80 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-sky-500/50 dark:hover:bg-slate-800"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="min-w-0 flex-1 truncate">Repo shortcut</span>
        </a>
        {githubHint && (
          <p className="mt-2 px-1 text-[10px] leading-snug text-amber-800/90 dark:text-amber-400/90">
            Set{" "}
            <code className="rounded bg-amber-100/90 px-0.5 font-mono text-[10px] dark:bg-amber-950">
              NEXT_PUBLIC_GITHUB_REPO_URL
            </code>{" "}
            in{" "}
            <code className="rounded bg-amber-100/90 px-0.5 font-mono text-[10px] dark:bg-amber-950">
              .env.local
            </code>
          </p>
        )}
      </div>
    </>
  );
}

export function HomeLanding() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const onIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible[0]?.target?.id) {
      setActiveId(visible[0].target.id);
    }
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "-18% 0px -52% 0px",
      threshold: [0, 0.08, 0.2, 0.35, 0.5, 0.75, 1],
    });
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [onIntersect]);

  const handleNavClick = (id: string) => {
    scrollToId(id);
    setMobileNavOpen(false);
  };

  const githubConfigured =
    typeof process.env.NEXT_PUBLIC_GITHUB_REPO_URL === "string" &&
    process.env.NEXT_PUBLIC_GITHUB_REPO_URL.length > 0;

  const promptCount = promptSections.reduce((n, s) => n + s.prompts.length, 0);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-sky-50/60 to-fuchsia-50/30 dark:from-slate-950 dark:via-sky-950/25 dark:to-slate-950">
      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={() => setMobileNavOpen((o) => !o)}
        className="fixed left-4 top-[4.5rem] z-40 flex h-11 items-center gap-2 rounded-full border border-slate-200/80 bg-white/95 px-3 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur-md lg:hidden dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-100"
        aria-expanded={mobileNavOpen}
        aria-controls="landing-sidebar-mobile"
      >
        <span className="text-lg text-sky-600 dark:text-sky-400" aria-hidden>
          ☰
        </span>
        Navigate
      </button>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[min(100%,18rem)] flex-col border-r border-white/40 bg-white/75 pt-[4.25rem] shadow-xl shadow-sky-500/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/75 xl:w-80">
        <div className="flex h-full min-h-0 flex-col px-3 pb-6 pt-3">
          <SidebarNav
            activeId={activeId}
            onNavigate={handleNavClick}
            githubHint={!githubConfigured}
          />
        </div>
      </aside>

      {mobileNavOpen && (
        <button
          type="button"
          className="fixed inset-0 z-20 bg-slate-900/50 backdrop-blur-[2px] lg:hidden"
          aria-label="Close menu"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        id="landing-sidebar-mobile"
        className={`fixed left-0 top-0 z-30 flex h-screen w-[min(92vw,20rem)] flex-col border-r border-white/40 bg-white/95 pt-[4.25rem] shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out dark:border-slate-800 dark:bg-slate-950/95 lg:hidden ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!mobileNavOpen}
      >
        <div className="flex h-full min-h-0 flex-col px-3 pb-8 pt-3">
          <SidebarNav
            activeId={activeId}
            onNavigate={handleNavClick}
            githubHint={!githubConfigured}
          />
        </div>
      </aside>

      <main className="relative pb-36 lg:pl-[min(100%,18rem)] xl:pl-80">
        {/* Hero */}
        <section
          id="hero"
          className="relative scroll-mt-24 overflow-hidden border-b border-white/10"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="hero-mesh-blob absolute -left-20 top-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl dark:bg-fuchsia-600/20" />
            <div
              className="hero-mesh-blob absolute -right-16 top-32 h-80 w-80 rounded-full bg-cyan-400/35 blur-3xl dark:bg-cyan-500/20"
              style={{ animationDelay: "-6s" }}
            />
            <div className="hero-mesh-blob absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky-500/30 blur-3xl dark:bg-sky-600/20" />
          </div>
          <div className="hero-shimmer relative bg-gradient-to-br from-sky-600 via-cyan-600 to-violet-600 bg-[length:200%_200%] px-4 py-20 text-white sm:px-8 sm:py-28">
            <div className="mx-auto max-w-5xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/95 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Greater Seattle · One week · Hands-on
              </div>
              <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {program.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/95 sm:text-xl">
                {program.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToId("overview")}
                  className="rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-sky-700 shadow-lg shadow-sky-900/20 transition hover:scale-[1.02] hover:bg-slate-50"
                >
                  Explore curriculum
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId("curriculum")}
                  className="rounded-2xl border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-bold backdrop-blur-md transition hover:bg-white/20"
                >
                  Jump to 7-day plan
                </button>
                <Link
                  href="/playbook"
                  className="rounded-2xl border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-bold backdrop-blur-md transition hover:bg-white/20"
                >
                  Prompt playbook
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-0 px-4 py-14 sm:px-8">
          {/* Overview + stat chips */}
          <section id="overview" className="scroll-mt-28 py-4">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Program overview
                </h2>
                <p className="mt-3 max-w-3xl text-pretty text-lg text-slate-600 dark:text-slate-300">
                  {program.description}
                </p>
              </div>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group relative overflow-hidden rounded-2xl border border-sky-200/80 bg-white/90 p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg dark:border-sky-900/50 dark:bg-slate-900/80">
                <dt className="text-xs font-bold uppercase tracking-wide text-sky-600 dark:text-sky-400">
                  Cohort
                </dt>
                <dd className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-100">
                  8–12 startups
                </dd>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-cyan-200/80 bg-white/90 p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg dark:border-cyan-900/50 dark:bg-slate-900/80">
                <dt className="text-xs font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
                  Format
                </dt>
                <dd className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-100">
                  Hybrid · 4–6 hrs/day
                </dd>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-violet-200/80 bg-white/90 p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg dark:border-violet-900/50 dark:bg-slate-900/80">
                <dt className="text-xs font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400">
                  Stack focus
                </dt>
                <dd className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-100">
                  Cursor 3 + GitHub
                </dd>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-teal-200/80 bg-white/90 p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg dark:border-teal-900/50 dark:bg-slate-900/80">
                <dt className="text-xs font-bold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                  Outcome
                </dt>
                <dd className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-100">
                  Shipped PRs + policy
                </dd>
              </div>
            </dl>
            <div className="mt-8 rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-inner dark:border-slate-800 dark:bg-slate-900/50">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Full detail
              </h3>
              <p className="mt-2 text-slate-700 dark:text-slate-200">{program.cohort}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{program.region}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{program.duration}</p>
            </div>
          </section>

          {/* Video */}
          <section id="video" className="scroll-mt-28 border-t border-slate-200/80 py-14 dark:border-slate-800">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Source video
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
              Tech Bridge (Korean) — Cursor 3 vibe coding: new UI, embedded browser,
              multi-agent workflows. The cohort discusses takeaways on Day 1 and maps
              them to daily exercises.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200/80 dark:ring-slate-700">
              <YouTubeEmbed
                videoId={VIDEO_ID}
                title="Tech Bridge — Cursor 3 vibe coding (context for the program)"
              />
            </div>
            <p className="mt-4 text-center text-sm">
              <a
                href="https://www.youtube.com/watch?v=Uffw_SKXmz0"
                className="font-semibold text-sky-600 hover:underline dark:text-sky-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open on YouTube →
              </a>
            </p>
          </section>

          {/* Goals — bento-ish */}
          <section id="goals" className="scroll-mt-28 border-t border-slate-200/80 py-14 dark:border-slate-800">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Program goals
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {goals.map((g, i) => (
                <li
                  key={g}
                  className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-sky-50/50 p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:from-slate-900/80 dark:to-sky-950/30"
                >
                  <span className="absolute right-4 top-4 text-4xl font-black text-sky-200/80 dark:text-sky-900/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative block pr-14 text-slate-800 dark:text-slate-100">
                    {g}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Features — bento grid */}
          <section id="features" className="scroll-mt-28 border-t border-slate-200/80 py-14 dark:border-slate-800">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              What you practice
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Cursor 3 capabilities the week is built around — tap a day in the sidebar
              to jump into the detailed plan.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {programFeatures.map((f) => (
                <div
                  key={f.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${f.accent}`}
                  />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {f.description}
                  </p>
                  <span className="mt-4 inline-flex text-xs font-bold uppercase tracking-wide text-sky-600 opacity-0 transition group-hover:opacity-100 dark:text-sky-400">
                    In curriculum →
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Curriculum */}
          <div
            id="curriculum"
            className="scroll-mt-28 border-t border-slate-200/80 py-14 dark:border-slate-800"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Seven-day curriculum
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
              Expand each day for sessions, homework, and takeaways. Dedicated pages:
              use header links D1–D7 or the sidebar.
            </p>
            <div className="mt-10 space-y-4">
              {days.map((d) => (
                <section
                  key={d.day}
                  id={`day-${d.day}`}
                  className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-white/80 shadow-md backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <details className="group" open={d.day <= 2}>
                    <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-3 rounded-2xl px-5 py-4 font-semibold text-slate-900 marker:content-none dark:text-white [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-600 text-sm font-bold text-white shadow-lg">
                          {d.day}
                        </span>
                        <span>
                          Day {d.day}: {d.title}
                        </span>
                      </span>
                      <span className="text-sm font-normal text-sky-600 transition group-open:rotate-180 dark:text-sky-400">
                        ▼
                      </span>
                    </summary>
                    <div className="border-t border-slate-100 px-5 pb-5 pt-3 dark:border-slate-800">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white">Focus:</strong>{" "}
                        {d.focus}
                      </p>
                      <div className="mt-4 space-y-6">
                        {d.sessions.map((s) => (
                          <div key={s.label}>
                            <h4 className="text-sm font-bold text-sky-700 dark:text-sky-300">
                              {s.label}
                            </h4>
                            <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                              {s.items.map((item) => (
                                <li key={item} className="flex gap-2">
                                  <span className="text-sky-400">·</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {d.homework && d.homework.length > 0 && (
                        <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/90 p-4 dark:border-amber-900/50 dark:bg-amber-950/40">
                          <p className="text-xs font-bold uppercase text-amber-900 dark:text-amber-200">
                            Evening async
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-amber-950/90 dark:text-amber-100/90">
                            {d.homework.map((h) => (
                              <li key={h}>→ {h}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="mt-4 rounded-xl border border-emerald-200/80 bg-emerald-50/80 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                        <p className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-300">
                          Key takeaway
                        </p>
                        <p className="mt-1 text-sm text-emerald-950 dark:text-emerald-100">
                          {d.keyTakeaway}
                        </p>
                      </div>
                      <Link
                        href={`/day/${d.day}`}
                        className="mt-4 inline-flex text-sm font-bold text-sky-600 hover:underline dark:text-sky-400"
                      >
                        Open full page for Day {d.day} →
                      </Link>
                    </div>
                  </details>
                </section>
              ))}
            </div>
          </div>

          {/* Playbook highlight */}
          <section
            id="playbook"
            className="scroll-mt-28 border-t border-slate-200/80 py-14 dark:border-slate-800"
          >
            <div className="relative overflow-hidden rounded-3xl border border-fuchsia-300/40 bg-gradient-to-br from-fuchsia-500/15 via-violet-500/10 to-cyan-500/15 p-8 shadow-xl dark:border-fuchsia-900/40">
              <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-700 dark:text-fuchsia-300">
                  Interactive resource
                </p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  Prompt playbook
                </h2>
                <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
                  {promptSections.length} sections · {promptCount} copy-paste prompts for
                  browser selections, parallel subagents, PR hygiene, and a 90-day stack
                  policy template.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/playbook"
                    className="inline-flex rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-95"
                  >
                    Open playbook →
                  </Link>
                  <button
                    type="button"
                    onClick={() => scrollToId("resources")}
                    className="inline-flex rounded-2xl border border-slate-300/80 bg-white/80 px-6 py-3 text-sm font-bold text-slate-800 shadow-sm hover:bg-white dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-100"
                  >
                    Prerequisites next
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section id="resources" className="scroll-mt-28 border-t border-slate-200/80 py-14 dark:border-slate-800">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Prerequisites & links
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {prerequisites.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200"
                >
                  <span className="text-lg text-emerald-500">✓</span>
                  <span className="text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {resources.map((r) => {
                const external = r.href.startsWith("http");
                const cardClass =
                  "group block rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-cyan-50/60 p-6 shadow-md transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-cyan-950/30";
                const inner = (
                  <>
                    <span className="font-bold text-slate-900 dark:text-white">{r.title}</span>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{r.description}</p>
                    <span className="mt-3 inline-flex text-sm font-bold text-cyan-600 group-hover:underline dark:text-cyan-400">
                      {external ? "Visit →" : "Open →"}
                    </span>
                  </>
                );
                return external ? (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link key={r.href} href={r.href} className={cardClass}>
                    {inner}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/resources"
              className="mt-8 inline-flex rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Full resources page
            </Link>
          </section>

          {/* Logistics */}
          <section id="logistics" className="scroll-mt-28 border-t border-slate-200/80 py-14 dark:border-slate-800">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Schedule & logistics
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 dark:border-slate-800 dark:bg-slate-900/50">
                <h3 className="text-sm font-bold uppercase tracking-wide text-sky-600 dark:text-sky-400">
                  Daily structure
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{logistics.dailyStructure}</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 dark:border-slate-800 dark:bg-slate-900/50">
                <h3 className="text-sm font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
                  Venue & format
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{logistics.venue}</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 dark:border-slate-800 dark:bg-slate-900/50">
                <h3 className="text-sm font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400">
                  Assessment
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{logistics.assessment}</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 dark:border-slate-800 dark:bg-slate-900/50">
                <h3 className="text-sm font-bold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                  Cost notes
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{logistics.costNotes}</p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-900/40">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Success metrics</h3>
              <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
                {logistics.successMetrics.map((m) => (
                  <li key={m} className="flex gap-2">
                    <span className="text-teal-500">◆</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-slate-600 dark:text-slate-300">{logistics.postProgram}</p>
            <Link
              href="/logistics"
              className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:opacity-95"
            >
              Full logistics page
            </Link>
          </section>

          {/* CTA footer */}
          <section
            id="cta"
            className="scroll-mt-28 border-t border-slate-200/80 py-16 dark:border-slate-800"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-600 via-cyan-600 to-violet-600 p-10 text-center text-white shadow-2xl sm:p-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
              <h2 className="relative text-3xl font-extrabold sm:text-4xl">
                Everything in one scroll — sidebar keeps you oriented
              </h2>
              <p className="relative mx-auto mt-4 max-w-2xl text-lg text-white/90">
                Use the left rail on desktop; on mobile, tap <strong>Navigate</strong>. Star
                the repo anytime from the floating GitHub card.
              </p>
              <div className="relative mt-10 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollToId("hero")}
                  className="rounded-2xl bg-white px-8 py-3.5 text-sm font-bold text-sky-700 shadow-lg"
                >
                  Back to top
                </button>
                <Link
                  href="/playbook"
                  className="rounded-2xl border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold backdrop-blur-md hover:bg-white/20"
                >
                  Open playbook
                </Link>
                <a
                  href={getGithubRepoUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold backdrop-blur-md hover:bg-white/20"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <GitHubFab />
    </div>
  );
}
