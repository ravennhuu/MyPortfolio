import React from "react";
import ProfileHeaderCell from "@/components/cells/ProfileHeaderCell";
import AboutCell from "@/components/cells/AboutCell";
import LinksDeckCell from "@/components/cells/LinksDeckCell";
import TechStackCell from "@/components/cells/TechStackCell";
import ProjectsFeedCell from "@/components/cells/ProjectsFeedCell";
import TimelineCell from "@/components/cells/TimelineCell";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-4 md:p-8 max-w-5xl mx-auto w-full">

      {/* Bento Grid Layout */}
      <main className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 auto-rows-min w-full">
          {/* Row 1: Header (10 col) */}
          <ProfileHeaderCell />

          <div className="flex flex-col gap-4 md:col-span-7">
            <AboutCell />
          </div>

          {/* Right Column: Timeline & Socials (30% width) */}
          <div className="flex flex-col gap-4 md:col-span-3">
            <LinksDeckCell />
          </div>

          {/* Left Column: About, Tech Stack & Projects stacked in rows (70% width) */}
          <div className="flex flex-col gap-4 md:col-span-10">
            <TechStackCell />
            <ProjectsFeedCell />
            <TimelineCell />
          </div>

        </div>
      </main>

      {/* Minimalist Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-900 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 gap-4">
        <div>
          &copy; {new Date().getFullYear()} ALAMO. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-1">
          <span>BUILT WITH</span>
          <span className="text-neutral-800 dark:text-neutral-200">NEXT.JS</span>
          <span>&amp;</span>
          <span className="text-neutral-800 dark:text-neutral-200">TAILWIND CSS v4</span>
        </div>
      </footer>
    </div>
  );
}
