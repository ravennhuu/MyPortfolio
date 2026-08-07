import React from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { TECH_STACK_DATA } from "@/components/cells/techIcons";
import { FiArrowLeft } from "react-icons/fi";

export const metadata = {
  title: "Tech Stack | Avryl Raven Alamo",
  description: "Comprehensive list of frontend, backend, and developer tools used by Avryl Raven Alamo.",
};

export default function TechStackPage() {
  const sections = [
    {
      id: "frontend",
      title: "FRONTEND DEVELOPMENT",
      items: TECH_STACK_DATA.frontend,
    },
    {
      id: "backend",
      title: "BACKEND DEVELOPMENT",
      items: TECH_STACK_DATA.backend,
    },
    {
      id: "tools",
      title: "DEVELOPER TOOLS & INFRASTRUCTURE",
      items: TECH_STACK_DATA.tools,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between px-3 py-4 sm:p-6 md:p-8 lg:p-10 max-w-5xl mx-auto w-full">
      {/* Navigation Header */}
      <header className="flex items-center justify-between mb-8 sm:mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors group px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 bg-white dark:bg-neutral-950"
        >
          <FiArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Portfolio</span>
        </Link>
        <ThemeToggle />
      </header>

      {/* Page Title & Intro */}
      <main className="flex-grow space-y-8 sm:space-y-10">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Tech Stack
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6">
          {sections.map((section) => (
            <Card key={section.id} className="p-5 sm:p-7 flex flex-col space-y-4">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold mb-1">
                  {section.title}
                </h2>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 sm:gap-2.5">
                {section.items.map((item) => (
                  <Badge
                    key={item.name}
                    variant="outline"
                    className="rounded-lg px-3 py-1.5 text-xs sm:text-sm bg-neutral-50/80 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    icon={item.icon}
                  >
                    {item.name}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
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
