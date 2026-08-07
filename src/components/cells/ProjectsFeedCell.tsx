import React from "react";
import Link from "next/link";
import Card from "../ui/Card";
import { TECH_STACK_DATA } from "./techIcons";
import Badge from "../ui/Badge";
import { PROJECTS_DATA } from "../../data/projectsData";

export const ProjectsFeedCell = () => {
  // Flatten all tech items to easily pick specific technologies by name
  const allTechItems = Object.values(TECH_STACK_DATA).flat();

  // Helper to select specific tech items by name preserving specified order
  const getProjectTags = (names: string[]) =>
    names
      .map((name) => allTechItems.find((item) => item.name.toLowerCase().includes(name.toLowerCase())))
      .filter((item): item is NonNullable<typeof item> => item !== undefined);

  return (
    <Card colSpan="w-full" className="flex flex-col justify-between">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Projects (WORK IN PROGRESS)
        </span>
      </div>

      <div className="mt-4 sm:mt-6 space-y-4 flex-grow">
        {PROJECTS_DATA.map((project) => {
          const tags = getProjectTags(project.techTags);

          return (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/10 border border-neutral-100 dark:border-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-100/30 dark:hover:bg-neutral-900/30 active:scale-[0.99] transition-all duration-300 ease-out"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <Link href={`/projects/${project.id}`} className="hover:underline">
                    <h3 className="text-md font-semibold text-neutral-900 dark:text-neutral-100">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                {/* ── LINKS ── */}
                <div className="flex items-center gap-2 shrink-0 pt-0.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                        />
                      </svg>
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.id}`}
                    className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    aria-label="View Project Details & Showcase"
                    title="View Project Details & Showcase"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* ── TAGS ── */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {tags.map((item) => (
                  <Badge key={item.name} variant="outline" className="rounded-md" icon={item.icon}>
                    {item.name}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ProjectsFeedCell;

