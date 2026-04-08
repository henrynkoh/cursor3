"use client";

import { useState } from "react";

type Props = {
  label: string;
  body: string;
};

export function PromptCopyBlock({ label, body }: Props) {
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

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/50">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 px-4 py-2 dark:border-slate-700">
        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
          {label}
        </span>
        <button
          type="button"
          onClick={copy}
          className="rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-700"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-[min(70vh,28rem)] overflow-auto whitespace-pre-wrap break-words p-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
        {body}
      </pre>
    </div>
  );
}
