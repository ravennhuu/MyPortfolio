import React from "react";
import Card from "../ui/Card";

export const ProjectsFeedCell = () => {
  return (
    <Card colSpan="w-full" className="flex flex-col justify-between">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Featured Projects
        </span>
      </div>

      {/* ── PROJECTS LIST ────────────────────────────────────────
          Each block below is one project card.
          - Replace the title, description, tags, and links.
          - Duplicate the entire <div className="group ..."> block
            to add a new project.
          - Remove the github/link <a> tags if not needed.
          - The featured dot (●) appears next to the title when
            you include it — remove the <span> if not needed.
      ──────────────────────────────────────────────────────── */}
      <div className="mt-6 space-y-4 flex-grow">

        {/* ── PROJECT 1 ── */}
        <div className="group flex flex-col justify-between p-4 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/10 border border-neutral-100 dark:border-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-100/30 dark:hover:bg-neutral-900/30 transition-all duration-300 ease-out">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                Project Title {/* TODO: project name */}
                {/* Remove the span below if this is not a featured project */}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed max-w-[90%]">
                Project description goes here. {/* TODO: short description */}
              </p>
            </div>
            {/* ── LINKS — remove whichever you don't need ── */}
            <div className="flex items-center gap-2">
              {/* GitHub link */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" /></svg>
              </a>
              {/* External / Live link */}
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
          {/* ── TAGS ── */}
          <div className="flex flex-wrap gap-1 mt-3">
            {/* TODO: replace or add tag spans */}
            <span className="text-[10px] font-mono font-medium text-neutral-500 dark:text-neutral-500 bg-neutral-100/50 dark:bg-neutral-900/50 px-2 py-0.5 rounded">Tag 1</span>
            <span className="text-[10px] font-mono font-medium text-neutral-500 dark:text-neutral-500 bg-neutral-100/50 dark:bg-neutral-900/50 px-2 py-0.5 rounded">Tag 2</span>
          </div>
        </div>

        {/* ── PROJECT 2 — duplicate the block above to add more ── */}
        <div className="group flex flex-col justify-between p-4 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/10 border border-neutral-100 dark:border-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-100/30 dark:hover:bg-neutral-900/30 transition-all duration-300 ease-out">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Project Title {/* TODO: project name */}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed max-w-[90%]">
                Project description goes here. {/* TODO: short description */}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" /></svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mt-3">
            <span className="text-[10px] font-mono font-medium text-neutral-500 dark:text-neutral-500 bg-neutral-100/50 dark:bg-neutral-900/50 px-2 py-0.5 rounded">Tag 1</span>
          </div>
        </div>

      </div>
    </Card>
  );
};

export default ProjectsFeedCell;
