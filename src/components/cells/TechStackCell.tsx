import React from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

export const TechStackCell = () => {
  return (
    <Card colSpan="w-full" className="flex flex-col justify-between">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Tech Stack
        </span>
      </div>

      {/* ── TECH STACK ROWS ───────────────────────────────────
          Each block below is one category row.
          - Change the <h3> text to your category name.
          - Add or remove <Badge> items for your tools.
          - Duplicate the entire <div> block to add a new category.
          - The last row should NOT have border-b (use last:border-b-0).
      ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col mt-6 flex-grow">

        {/* ── CATEGORY ROW 1 ── */}
        <div className="flex flex-col py-3 border-b border-neutral-100 dark:border-neutral-900 space-y-2.5">
          <h3 className="text-sm font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-mono">
            Category 1 {/* TODO: e.g. "Core", "Frontend" */}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {/* TODO: replace these badges with your actual tools */}
            <Badge variant="outline">Tool 1</Badge>
            <Badge variant="outline">Tool 2</Badge>
            <Badge variant="outline">Tool 3</Badge>
          </div>
        </div>

        {/* ── CATEGORY ROW 2 ── */}
        <div className="flex flex-col py-3 border-b border-neutral-100 dark:border-neutral-900 space-y-2.5">
          <h3 className="text-sm font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-mono">
            Category 2 {/* TODO: e.g. "Engineering", "Backend" */}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {/* TODO: replace these badges with your actual tools */}
            <Badge variant="outline">Tool 1</Badge>
            <Badge variant="outline">Tool 2</Badge>
            <Badge variant="outline">Tool 3</Badge>
          </div>
        </div>

        {/* ── CATEGORY ROW 3 ── */}
        <div className="flex flex-col py-3 space-y-2.5">
          <h3 className="text-sm font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-mono">
            Category 3 {/* TODO: e.g. "Architecture", "Tools" */}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {/* TODO: replace these badges with your actual tools */}
            <Badge variant="outline">Tool 1</Badge>
            <Badge variant="outline">Tool 2</Badge>
            <Badge variant="outline">Tool 3</Badge>
          </div>
        </div>

      </div>
    </Card>
  );
};

export default TechStackCell;
