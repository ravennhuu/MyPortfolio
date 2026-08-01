import React from "react";
import ProfileHeaderCell from "@/components/cells/ProfileHeaderCell";
import AboutCell from "@/components/cells/AboutCell";
import LinksDeckCell from "@/components/cells/LinksDeckCell";
import TechStackCell from "@/components/cells/TechStackCell";
import ProjectsFeedCell from "@/components/cells/ProjectsFeedCell";
import TimelineCell from "@/components/cells/TimelineCell";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between px-3 py-4 sm:p-6 md:p-8 lg:p-10 max-w-5xl mx-auto w-full">

      {/* Responsive Bento Grid Layout */}
      <main className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-min w-full">

          {/* Header Row: Full width */}
          <div className="col-span-1 md:col-span-12">
            <ProfileHeaderCell />
          </div>

          {/* About & Social Links Row */}
          <div className="col-span-1 md:col-span-7 lg:col-span-7 flex flex-col">
            <AboutCell />
          </div>

          <div className="col-span-1 md:col-span-5 lg:col-span-5 flex flex-col">
            <LinksDeckCell />
          </div>

          {/* Tech Stack: Full width */}
          <div className="col-span-1 md:col-span-12 flex flex-col">
            <TechStackCell />
          </div>

          {/* Projects Feed: Full width */}
          <div className="col-span-1 md:col-span-12 flex flex-col">
            <ProjectsFeedCell />
          </div>

          {/* Timeline Row: Full width */}
          <div className="col-span-1 md:col-span-12">
            <TimelineCell />
          </div>

        </div>
      </main>

      {/* Minimalist Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-neutral-100 dark:border-neutral-900 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 gap-3 text-center sm:text-left">
        <div>
          &copy; {new Date().getFullYear()} ALAMO. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-1">
          <span>BUILT WITH</span>
          <span className="text-neutral-800 dark:text-neutral-200">NEXT.JS</span>
          <span>&amp;</span>
          <span className="text-neutral-800 dark:text-neutral-200">TAILWIND CSS</span>
        </div>
      </footer>
    </div>
  );
}
