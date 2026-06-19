import React from "react";
import Card from "../ui/Card";

export const TimelineCell = () => {
  return (
    <Card colSpan="w-full" className="flex flex-col justify-between">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          History / Milestones
        </span>
      </div>

      {/* ── TIMELINE ENTRIES ──────────────────────────────────────
          Each block below is one milestone entry.
          - Replace the period, role, company, and description.
          - Duplicate the entire <div className="relative flex"> block
            to add a new entry.
          - The last entry should NOT include the connector line span.
            The line is only rendered between entries (index < last).
            Since this is static, just don't include it on the last item.
      ──────────────────────────────────────────────────────────── */}
      <div className="relative ml-1 mt-6 flex flex-col flex-grow">

        {/* ── ENTRY 1 ── */}
        <div className="relative flex gap-4">
          <div className="relative flex flex-col items-center w-3 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-white dark:border-neutral-950 bg-neutral-900 dark:bg-neutral-100 z-10 mt-1" />
            {/* Connector line — remove from the last entry */}
            <div className="absolute left-1/2 -translate-x-1/2 top-3.5 bottom-[-16px] w-[1px] bg-neutral-200 dark:bg-neutral-800" />
          </div>
          <div className="flex-grow pb-6">
            <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-semibold uppercase tracking-wider">
              2024 — Present {/* TODO: time period */}
            </div>
            <h3 className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
              Role Title {/* TODO: your role */}
            </h3>
            <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-450">
              Company Name {/* TODO: company */}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
              {/* TODO: brief description of your work */}
              Description of responsibilities and impact.
            </p>
          </div>
        </div>

        {/* ── ENTRY 2 ── */}
        <div className="relative flex gap-4">
          <div className="relative flex flex-col items-center w-3 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-white dark:border-neutral-950 bg-neutral-900 dark:bg-neutral-100 z-10 mt-1" />
            {/* Connector line — remove from the last entry */}
            <div className="absolute left-1/2 -translate-x-1/2 top-3.5 bottom-[-16px] w-[1px] bg-neutral-200 dark:bg-neutral-800" />
          </div>
          <div className="flex-grow pb-6">
            <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-semibold uppercase tracking-wider">
              2022 — 2024 {/* TODO: time period */}
            </div>
            <h3 className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
              Role Title {/* TODO: your role */}
            </h3>
            <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-450">
              Company Name {/* TODO: company */}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
              {/* TODO: brief description */}
              Description of responsibilities and impact.
            </p>
          </div>
        </div>

        {/* ── ENTRY 3 (LAST — no connector line) ── */}
        <div className="relative flex gap-4">
          <div className="relative flex flex-col items-center w-3 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-white dark:border-neutral-950 bg-neutral-900 dark:bg-neutral-100 z-10 mt-1" />
            {/* No connector line on the last entry */}
          </div>
          <div className="flex-grow pb-6">
            <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-semibold uppercase tracking-wider">
              2020 — 2022 {/* TODO: time period */}
            </div>
            <h3 className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
              Role Title {/* TODO: your role */}
            </h3>
            <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-450">
              Company Name {/* TODO: company */}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
              {/* TODO: brief description */}
              Description of responsibilities and impact.
            </p>
          </div>
        </div>

      </div>
    </Card>
  );
};

export default TimelineCell;
