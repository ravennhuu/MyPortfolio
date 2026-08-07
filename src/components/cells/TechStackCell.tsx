import React from "react";
import Link from "next/link";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { TECH_STACK_DATA } from "./techIcons";
import { FiArrowRight } from "react-icons/fi";

export const TechStackCell = () => {
  const frontendPreview = TECH_STACK_DATA.frontend.slice(0, 3);
  const backendPreview = TECH_STACK_DATA.backend.slice(0, 3);
  const toolsPreview = TECH_STACK_DATA.tools.slice(0, 3);

  return (
    <Card colSpan="w-full" className="flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Tech Stack
        </span>
      </div>

      <div className="flex flex-col mt-4 sm:mt-6 flex-grow">
        <div className="flex flex-col py-3 border-b border-neutral-100 dark:border-neutral-900 space-y-2">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {frontendPreview.map((item) => (
              <Badge key={item.name} variant="outline" className="rounded-md" icon={item.icon}>
                {item.name}
              </Badge>
            ))}
            {backendPreview.map((item) => (
              <Badge key={item.name} variant="outline" className="rounded-md" icon={item.icon}>
                {item.name}
              </Badge>
            ))}
            {toolsPreview.map((item) => (
              <Badge key={item.name} variant="outline" className="rounded-md" icon={item.icon}>
                {item.name}
              </Badge>
            ))}
            <Link
              href="/tech-stack"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors group px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 bg-neutral-50/50 dark:bg-neutral-900/40">
              <span>More</span>
              <FiArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TechStackCell;

