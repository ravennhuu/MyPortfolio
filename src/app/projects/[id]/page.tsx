import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projectsData";
import { TECH_STACK_DATA } from "@/components/cells/techIcons";
import Badge from "@/components/ui/Badge";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Flatten all tech items to grab matching tech icons
  const allTechItems = Object.values(TECH_STACK_DATA).flat();
  const projectBadges = project.techTags
    .map((tagName) =>
      allTechItems.find((item) => item.name.toLowerCase().includes(tagName.toLowerCase()))
    )
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-50/80 dark:bg-neutral-950/80 border-b border-neutral-200/60 dark:border-neutral-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-neutral-200/60 dark:bg-neutral-800/60 hover:bg-neutral-300/60 dark:hover:bg-neutral-700/60 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                  />
                </svg>
                GitHub Repo
              </a>
            )}
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center justify-center py-12 bg-red-500">
        <h1>
          Page Under Developement
        </h1>
      </div>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
        {/* Hero Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            <span>Project Showcase</span>
            <span>•</span>
            <span className="text-neutral-600 dark:text-neutral-300 font-semibold">{project.id}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {projectBadges.map((badge) => (
              <Badge key={badge.name} variant="outline" className="px-2.5 py-1 text-xs" icon={badge.icon}>
                {badge.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Overview & Description Card */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Overview</h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base">
            {project.longDescription}
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Key Features & Capabilities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/60 text-sm text-neutral-700 dark:text-neutral-300"
                >
                  <svg
                    className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Screenshots Showcase Landing Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Project Screenshots</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Visual previews and workflow interfaces for {project.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {project.screenshots.map((shot, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-neutral-900/5 dark:bg-neutral-950/80 p-2 sm:p-4 md:p-6 flex items-center justify-center">
                  <Image
                    src={shot.url}
                    alt={shot.alt}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.01] p-2"
                    priority={idx === 0}
                  />
                </div>
                <div className="p-4 sm:p-5 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {shot.caption}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    0{idx + 1} / 0{project.screenshots.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
