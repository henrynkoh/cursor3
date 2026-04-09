"use client";

import { useState } from "react";

type Props = {
  label: string;
  body: string;
  variant: "email" | "sms";
};

export function RentTemplateCopy({ label, body, variant }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const accent =
    variant === "email"
      ? "border-violet-200/80 bg-violet-50/50 dark:border-violet-900/50 dark:bg-violet-950/30"
      : "border-emerald-200/80 bg-emerald-50/50 dark:border-emerald-900/50 dark:bg-emerald-950/30";

  return (
    <div className={`rounded-xl border ${accent}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 px-3 py-2 dark:border-slate-700">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">
          {label}
        </span>
        <button
          type="button"
          onClick={copy}
          className="rounded-lg bg-slate-800 px-3 py-1 text-xs font-semibold text-white hover:bg-slate-700 dark:bg-slate-600"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-80 overflow-auto whitespace-pre-wrap break-words p-3 text-xs leading-relaxed text-slate-800 dark:text-slate-200">
        {body}
      </pre>
    </div>
  );
}
