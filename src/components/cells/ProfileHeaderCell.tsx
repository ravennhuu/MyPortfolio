import React from "react";
import Image from "next/image";
import Card from "../ui/Card";
import ThemeToggle from "../ui/ThemeToggle";

export const ProfileHeaderCell = () => {
  return (
    <Card colSpan="w-full" className="flex flex-col justify-between">
      <div className="flex items-start justify-between gap-2 sm:gap-6">
        <div className="flex flex-row items-center gap-3 sm:gap-6 w-full">

          <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xs">
            <Image
              src="/Alamo_ProfileImg.jpg"
              alt="Profile photo"
              fill
              sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, 128px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 break-words">
              Avryl Raven Alamo
            </h1>
            <p className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-1">
              Full-Stack Web Developer
            </p>

            <div className="flex items-center gap-1.5 mt-2.5 text-neutral-600 dark:text-neutral-400">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[11px] sm:text-xs font-mono break-words hyphens-auto">City of Dasmariñas, Cavite, Philippines</span>
            </div>
          </div>
        </div>
        <div className="shrink-0 pt-1">
          <ThemeToggle />
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeaderCell;
