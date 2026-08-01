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

      <div className="relative ml-0.5 sm:ml-1 mt-4 sm:mt-6 flex flex-col flex-grow">

        <div className="relative flex gap-2 sm:gap-4">
          <div className="relative flex flex-col items-center w-3 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-white dark:border-neutral-950 bg-neutral-900 dark:bg-neutral-100 z-10 mt-1" />

            <div className="absolute left-1/2 -translate-x-1/2 top-3.5 bottom-[-16px] w-[1px] bg-neutral-200 dark:bg-neutral-800" />
          </div>
          <div className="flex-grow pb-6">
            <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-semibold uppercase tracking-wider">
              2026 March — 2026 June
            </div>
            <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-1 leading-snug">
              Project Manager & Full Stack Developer
            </h3>
            <h4 className="text-[11px] sm:text-xs font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
              TechniServe — IT Managed Services & SLA Portal (Academic Project)
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
              Led a team of 7 developers to create an IT Support & SLA Portal that streamlines incident management and improves response times for clients.
            </p>
          </div>
        </div>

        <div className="relative flex gap-2 sm:gap-4">
          <div className="relative flex flex-col items-center w-3 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-white dark:border-neutral-950 bg-neutral-900 dark:bg-neutral-100 z-10 mt-1" />
          </div>
          <div className="flex-grow pb-2">
            <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-semibold uppercase tracking-wider">
              2024 — Present
            </div>
            <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-1 leading-snug">
              BS in Information Technology with Specializations in Mobile and Web Applications — National University - Dasmariñas
            </h3>
          </div>
        </div>

      </div>
    </Card>
  );
};

export default TimelineCell;
