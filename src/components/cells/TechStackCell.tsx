import React from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { TECH_STACK_DATA } from "./techIcons";

export const TechStackCell = () => {
  return (
    <Card colSpan="w-full" className="flex flex-col justify-between">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Tech Stack
        </span>
      </div>

      <div className="flex flex-col mt-6 flex-grow">

        <div className="flex flex-col py-3 border-b border-neutral-100 dark:border-neutral-900 space-y-2.5">
          <h3 className="text-sm font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-mono">
            FRONTEND
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {TECH_STACK_DATA.frontend.map((item) => (
              <Badge key={item.name} variant="outline" className="rounded-md" icon={item.icon}>
                {item.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col py-3 border-b border-neutral-100 dark:border-neutral-900 space-y-2.5">
          <h3 className="text-sm font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-mono">
            BACKEND
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {TECH_STACK_DATA.backend.map((item) => (
              <Badge key={item.name} variant="outline" className="rounded-md" icon={item.icon}>
                {item.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col py-3 space-y-2.5">
          <h3 className="text-sm font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-mono">
            DEVELOPER TOOLS
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {TECH_STACK_DATA.tools.map((item) => (
              <Badge key={item.name} variant="outline" className="rounded-md" icon={item.icon}>
                {item.name}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </Card>
  );
};

export default TechStackCell;
