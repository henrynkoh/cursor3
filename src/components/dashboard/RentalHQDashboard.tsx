"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  activityMeta,
  getEventsForMonth,
  hqFunctions,
  kpiSnapshot,
  type ActivityType,
  type DashboardEvent,
} from "@/data/dashboardEvents";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function buildCalendarGrid(year: number, monthIndex: number): (number | null)[] {
  const first = new Date(year, monthIndex, 1);
  const startPad = first.getDay();
  const dim = new Date(year, monthIndex + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= dim; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  while (cells.length < 42) cells.push(null);
  return cells;
}

type Props = {
  onClose?: () => void;
  /** When true, shown inside modal (extra top bar). */
  embedded?: boolean;
};

export function RentalHQDashboard({ onClose, embedded }: Props) {
  const today = new Date();
  const [view, setView] = useState(() => ({
    y: today.getFullYear(),
    m: today.getMonth(),
  }));
  const [filterFn, setFilterFn] = useState<string | "all">("all");
  const [selected, setSelected] = useState<DashboardEvent | null>(null);

  const events = useMemo(
    () => getEventsForMonth(view.y, view.m),
    [view.y, view.m],
  );

  const filteredEvents = useMemo(() => {
    if (filterFn === "all") return events;
    const fn = hqFunctions.find((f) => f.id === filterFn);
    if (!fn) return events;
    const allow = new Set(fn.types);
    return events.filter((e) => allow.has(e.type));
  }, [events, filterFn]);

  const byDate = useMemo(() => {
    const m = new Map<string, DashboardEvent[]>();
    for (const e of filteredEvents) {
      const list = m.get(e.date) ?? [];
      list.push(e);
      m.set(e.date, list);
    }
    return m;
  }, [filteredEvents]);

  const grid = useMemo(
    () => buildCalendarGrid(view.y, view.m),
    [view.y, view.m],
  );

  const monthLabel = new Date(view.y, view.m, 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  function shiftMonth(delta: number) {
    const d = new Date(view.y, view.m + delta, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  }

  const pad = (n: number) => String(n).padStart(2, "0");
  const iso = (day: number) =>
    `${view.y}-${pad(view.m + 1)}-${pad(day)}`;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 ${
        embedded ? "" : "pb-16"
      }`}
    >
      {/* Top command bar */}
      <div className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-lg font-black tracking-tight text-white">
              Rental HQ
            </span>
            <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              Strategic command
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/dashboard"
              className="hidden rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/5 sm:inline"
            >
              Open as page
            </Link>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
              >
                Close
              </button>
            )}
            {!embedded && (
              <Link
                href="/"
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                ← Site home
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        {/* KPI strip */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-indigo-500/10">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Units
            </p>
            <p className="mt-1 text-2xl font-black text-white">
              {kpiSnapshot.units.toLocaleString()}
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-300/80">
              Occupancy
            </p>
            <p className="mt-1 text-2xl font-black text-emerald-300">
              {kpiSnapshot.occupancyPct}%
            </p>
          </div>
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-200/80">
              Rent collected
            </p>
            <p className="mt-1 text-2xl font-black text-amber-200">
              {kpiSnapshot.rentCollectedPct}%
            </p>
          </div>
          <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-orange-200/80">
              Open work orders
            </p>
            <p className="mt-1 text-2xl font-black text-orange-200">
              {kpiSnapshot.openWorkOrders}
              <span className="ml-2 text-sm font-semibold text-rose-300">
                ({kpiSnapshot.criticalTickets} crit)
              </span>
            </p>
          </div>
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-violet-200/80">
              Renewals 90d
            </p>
            <p className="mt-1 text-2xl font-black text-violet-200">
              {kpiSnapshot.renewalsDue90d}
            </p>
          </div>
        </div>

        {/* Strategic function filters */}
        <div className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Headquarters functions
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilterFn("all")}
              className={`rounded-xl border px-4 py-2 text-left text-sm font-semibold transition ${
                filterFn === "all"
                  ? "border-sky-400 bg-sky-500/20 text-white ring-2 ring-sky-400/40"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20"
              }`}
            >
              All activity
            </button>
            {hqFunctions.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilterFn(f.id)}
                className={`max-w-[14rem] rounded-xl border px-4 py-2 text-left text-sm transition ${
                  filterFn === f.id
                    ? "border-indigo-400 bg-indigo-500/20 text-white ring-2 ring-indigo-400/40"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20"
                }`}
              >
                <span className="font-bold">{f.title}</span>
                <span className="mt-0.5 block text-xs font-normal text-slate-400">
                  {f.subtitle}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Calendar */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-4 shadow-2xl sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-xl font-bold text-white">{monthLabel}</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => shiftMonth(-1)}
                  className="rounded-lg border border-white/15 px-3 py-1.5 text-sm font-semibold hover:bg-white/10"
                  aria-label="Previous month"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setView({ y: today.getFullYear(), m: today.getMonth() })
                  }
                  className="rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-xs font-bold text-sky-200"
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={() => shiftMonth(1)}
                  className="rounded-lg border border-white/15 px-3 py-1.5 text-sm font-semibold hover:bg-white/10"
                  aria-label="Next month"
                >
                  →
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs">
              {WEEKDAYS.map((d) => (
                <div key={d} className="py-2">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {grid.map((cell, idx) => {
                if (cell === null) {
                  return (
                    <div
                      key={`empty-${idx}`}
                      className="min-h-[72px] rounded-lg bg-slate-900/30 sm:min-h-[88px]"
                    />
                  );
                }
                const dateStr = iso(cell);
                const dayEvents = byDate.get(dateStr) ?? [];
                const isToday =
                  today.getFullYear() === view.y &&
                  today.getMonth() === view.m &&
                  today.getDate() === cell;

                return (
                  <button
                    key={dateStr}
                    type="button"
                    onClick={() => {
                      const first = dayEvents[0];
                      if (first) setSelected(first);
                    }}
                    className={`flex min-h-[72px] flex-col rounded-lg border p-1.5 text-left transition hover:border-sky-400/50 hover:bg-white/5 sm:min-h-[88px] sm:p-2 ${
                      isToday
                        ? "border-sky-400/60 bg-sky-500/10 ring-1 ring-sky-400/40"
                        : "border-white/5 bg-slate-800/40"
                    }`}
                  >
                    <span
                      className={`text-sm font-bold ${
                        isToday ? "text-sky-300" : "text-slate-200"
                      }`}
                    >
                      {cell}
                    </span>
                    <div className="mt-1 flex flex-wrap gap-0.5">
                      {dayEvents.slice(0, 5).map((ev) => {
                        const meta = activityMeta[ev.type];
                        return (
                          <span
                            key={ev.id}
                            title={`${meta.label}: ${ev.title}`}
                            className={`inline-flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-bold ring-1 ${meta.color} ${meta.ring} bg-slate-950/80`}
                          >
                            {meta.mark}
                          </span>
                        );
                      })}
                      {dayEvents.length > 5 && (
                        <span className="text-[9px] font-bold text-slate-500">
                          +{dayEvents.length - 5}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-[11px] text-slate-400">
              {(Object.keys(activityMeta) as ActivityType[]).map((t) => {
                const meta = activityMeta[t];
                return (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ring-1 ${meta.color} ${meta.ring}`}
                    >
                      {meta.mark}
                    </span>
                    {meta.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-indigo-950/40 p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-indigo-200">
                Day detail
              </h3>
              {selected ? (
                <div className="mt-3">
                  <p className="text-xs text-slate-500">{selected.date}</p>
                  <p className="mt-1 text-lg font-bold text-white">
                    {selected.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{selected.detail}</p>
                  <span
                    className={`mt-3 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                      selected.priority === "critical"
                        ? "bg-rose-500/20 text-rose-200"
                        : selected.priority === "high"
                          ? "bg-amber-500/20 text-amber-200"
                          : "bg-slate-600/40 text-slate-300"
                    }`}
                  >
                    {selected.priority}
                  </span>
                  <p className="mt-3 text-xs text-slate-500">
                    Type: {activityMeta[selected.type].label}
                  </p>
                </div>
              ) : (
                <p className="mt-3 text-sm text-slate-500">
                  Select a calendar day with markers to inspect HQ activities.
                </p>
              )}
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-xs leading-relaxed text-slate-400">
              <p className="font-semibold text-slate-300">Demo data</p>
              <p className="mt-2">
                Marks (★ ☆ ◆ ● ▲ ! → ← ◎ ■) indicate activity categories. Replace{" "}
                <code className="rounded bg-slate-800 px-1">getEventsForMonth</code>{" "}
                with your API. Not legal or financial advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
