/** Sample HQ calendar data — synthetic dates for demo; wire to your API in production. */

export type ActivityType =
  | "rent_cycle"
  | "rent_reminder"
  | "lease_renewal"
  | "inspection"
  | "maintenance"
  | "delinquency"
  | "move_in"
  | "move_out"
  | "compliance_audit"
  | "owner_report";

export type DashboardEvent = {
  id: string;
  date: string; // YYYY-MM-DD
  type: ActivityType;
  title: string;
  detail: string;
  priority: "normal" | "high" | "critical";
};

export const activityMeta: Record<
  ActivityType,
  { label: string; mark: string; color: string; ring: string }
> = {
  rent_cycle: {
    label: "Rent cycle / due",
    mark: "★",
    color: "text-amber-300",
    ring: "ring-amber-400/60",
  },
  rent_reminder: {
    label: "Rent reminder",
    mark: "☆",
    color: "text-amber-200/80",
    ring: "ring-amber-300/40",
  },
  lease_renewal: {
    label: "Lease / renewal",
    mark: "◆",
    color: "text-violet-300",
    ring: "ring-violet-400/60",
  },
  inspection: {
    label: "Inspection",
    mark: "●",
    color: "text-sky-300",
    ring: "ring-sky-400/60",
  },
  maintenance: {
    label: "Maintenance",
    mark: "▲",
    color: "text-orange-300",
    ring: "ring-orange-400/60",
  },
  delinquency: {
    label: "Collections / delinquency",
    mark: "!",
    color: "text-rose-300",
    ring: "ring-rose-500/70",
  },
  move_in: {
    label: "Move-in",
    mark: "→",
    color: "text-emerald-300",
    ring: "ring-emerald-400/50",
  },
  move_out: {
    label: "Move-out",
    mark: "←",
    color: "text-slate-300",
    ring: "ring-slate-500/50",
  },
  compliance_audit: {
    label: "Compliance",
    mark: "◎",
    color: "text-cyan-300",
    ring: "ring-cyan-400/60",
  },
  owner_report: {
    label: "Owner / reporting",
    mark: "■",
    color: "text-indigo-300",
    ring: "ring-indigo-400/50",
  },
};

/** Strategic HQ function tiles — map to filters on the calendar. */
export const hqFunctions = [
  {
    id: "collections",
    title: "Rent & collections",
    subtitle: "Due dates, reminders, delinquency",
    types: ["rent_cycle", "rent_reminder", "delinquency"] as ActivityType[],
  },
  {
    id: "leasing",
    title: "Leasing & renewals",
    subtitle: "Pipeline, expirations, move flow",
    types: ["lease_renewal", "move_in", "move_out"] as ActivityType[],
  },
  {
    id: "operations",
    title: "Maintenance & turns",
    subtitle: "Work orders, inspections, vendors",
    types: ["maintenance", "inspection"] as ActivityType[],
  },
  {
    id: "compliance",
    title: "Compliance & notices",
    subtitle: "Audits, statutory windows",
    types: ["compliance_audit"] as ActivityType[],
  },
  {
    id: "reporting",
    title: "Owner & HQ reporting",
    subtitle: "Rollups, distributions",
    types: ["owner_report"] as ActivityType[],
  },
] as const;

/** Demo events — replace with API. Mixed with generated anchor dates per month in getEventsForMonth. */
export const sampleEvents: DashboardEvent[] = [
  { id: "2", date: "2026-04-02", type: "maintenance", title: "HVAC vendor batch", detail: "Buildings A–C", priority: "normal" },
  { id: "3", date: "2026-04-03", type: "rent_reminder", title: "T-3 reminders", detail: "Automated SMS/email", priority: "normal" },
  { id: "4", date: "2026-04-05", type: "inspection", title: "Annual safety", detail: "Unit blocks 101–120", priority: "high" },
  { id: "5", date: "2026-04-07", type: "lease_renewal", title: "Renewal window opens", detail: "90-day cohort", priority: "normal" },
  { id: "6", date: "2026-04-08", type: "delinquency", title: "Collections stand-up", detail: "A/R > 10d", priority: "critical" },
  { id: "7", date: "2026-04-10", type: "compliance_audit", title: "Notice template audit", detail: "Jurisdiction pack v3", priority: "high" },
  { id: "8", date: "2026-04-12", type: "move_in", title: "Move-in weekend", detail: "12 units staged", priority: "normal" },
  { id: "9", date: "2026-04-14", type: "owner_report", title: "Owner statements", detail: "Q1 distribution", priority: "normal" },
  { id: "10", date: "2026-04-15", type: "rent_reminder", title: "Mid-month ACH nudge", detail: "Optional payment plan cohort", priority: "normal" },
  { id: "11", date: "2026-04-18", type: "maintenance", title: "Emergency drill", detail: "After-hours routing test", priority: "high" },
  { id: "12", date: "2026-04-20", type: "move_out", title: "Move-out block", detail: "Turn scheduling", priority: "normal" },
  { id: "13", date: "2026-04-22", type: "rent_reminder", title: "Late notices prep", detail: "Counsel review slot", priority: "critical" },
  { id: "14", date: "2026-04-25", type: "inspection", title: "Exterior walk", detail: "HOA coordination", priority: "normal" },
  { id: "15", date: "2026-04-28", type: "lease_renewal", title: "Offer deadline", detail: "Tier-1 incentives", priority: "high" },
];

export function getEventsForMonth(year: number, monthIndex: number): DashboardEvent[] {
  const pad = (n: number) => String(n).padStart(2, "0");
  const ym = `${year}-${pad(monthIndex + 1)}`;
  const lastDay = new Date(year, monthIndex + 1, 0).getDate();
  const sample = sampleEvents.filter((e) => e.date.startsWith(ym));
  const has = (day: number) =>
    sample.some((e) => e.date === `${ym}-${pad(day)}`);
  const extra: DashboardEvent[] = [];
  if (!has(1)) {
    extra.push({
      id: `gen-${ym}-01`,
      date: `${ym}-01`,
      type: "rent_cycle",
      title: "Portfolio rent due",
      detail: "Primary cycle — all units",
      priority: "high",
    });
  }
  if (lastDay >= 15 && !has(15)) {
    extra.push({
      id: `gen-${ym}-15`,
      date: `${ym}-15`,
      type: "rent_cycle",
      title: "Mid-month ACH / second cycle",
      detail: "Per portfolio rules",
      priority: "normal",
    });
  }
  if (!has(lastDay)) {
    extra.push({
      id: `gen-${ym}-end`,
      date: `${ym}-${pad(lastDay)}`,
      type: "rent_cycle",
      title: "Month-end close",
      detail: "Ledger lock + reports",
      priority: "high",
    });
  }
  return [...sample, ...extra].sort((a, b) => a.date.localeCompare(b.date));
}

export const kpiSnapshot = {
  units: 842,
  occupancyPct: 96.4,
  rentCollectedPct: 98.1,
  openWorkOrders: 37,
  criticalTickets: 4,
  renewalsDue90d: 61,
};

