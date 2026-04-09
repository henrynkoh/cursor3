"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RentalHQDashboard } from "./RentalHQDashboard";

export function DashboardNavTrigger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md border border-indigo-500/40 bg-gradient-to-r from-indigo-600/90 to-violet-600/90 px-3 py-1.5 text-sm font-bold text-white shadow-md shadow-indigo-500/20 hover:from-indigo-500 hover:to-violet-500"
      >
        HQ Dashboard
      </button>
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Rental management headquarters dashboard"
          >
            <button
              type="button"
              className="absolute inset-0 z-0 bg-slate-950/70 backdrop-blur-md"
              aria-label="Close dashboard"
              onClick={() => setOpen(false)}
            />
            <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain">
              <RentalHQDashboard
                embedded
                onClose={() => setOpen(false)}
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
