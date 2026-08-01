import React from "react";
import Card from "../ui/Card";

export const LinksDeckCell = () => {
  return (
    <Card colSpan="w-full" className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Connect
        </span>
      </div>

      <div className="flex-1 flex items-center">

      {/* ── SOCIAL LINKS ─────────────────────────────────────────
          Each <a> block below is one social link tile.
          - Replace href="..." with your actual URL.
          - Replace the SVG with any other inline SVG icon.
          - Replace the label text (e.g. "GitHub").
          - Duplicate the <a> block to add more links.
          - The grid is 2-column — pairs fill each row naturally.
      ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-4 gap-2">

        {/* ── LINK 1: GitHub ── */}
        {/* TODO: replace href below with your GitHub URL */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center min-h-[64px] p-3 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/60 active:scale-95 transition-all duration-200 ease-out"
        >
          <svg className="w-5 h-5 text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
          </svg>
          <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-1.5 text-center">
            GitHub
          </span>
        </a>

        {/* ── LINK 2: LinkedIn ── */}
        {/* TODO: replace href below with your LinkedIn URL */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center min-h-[64px] p-3 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/60 active:scale-95 transition-all duration-200 ease-out"
        >
          <svg className="w-5 h-5 text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-1.5 text-center">
            LinkedIn
          </span>
        </a>

        {/* ── LINK 3: Twitter / X ── */}
        {/* TODO: replace href below with your X / Twitter URL */}
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center min-h-[64px] p-3 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/60 active:scale-95 transition-all duration-200 ease-out"
        >
          <svg className="w-5 h-5 text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-1.5 text-center">
            Twitter / X
          </span>
        </a>

        {/* ── LINK 4: Email ── */}
        {/* TODO: replace href below with your email address */}
        <a
          href="mailto:you@example.com"
          className="group flex flex-col items-center justify-center min-h-[64px] p-3 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/60 active:scale-95 transition-all duration-200 ease-out"
        >
          <svg className="w-5 h-5 text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-1.5 text-center">
            Email
          </span>
        </a>

      </div>
      </div>
    </Card>
  );
};

export default LinksDeckCell;
