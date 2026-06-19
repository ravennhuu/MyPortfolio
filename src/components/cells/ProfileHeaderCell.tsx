import React from "react";
import Image from "next/image";
import Card from "../ui/Card";
import ThemeToggle from "../ui/ThemeToggle";

export const ProfileHeaderCell = () => {
  return (
    <Card colSpan="md:col-span-10" className="flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div className="flex flex-row items-center gap-5">

          {/* ── AVATAR ─────────────────────────────────────
              Replace /avatar.png with your own image file
              placed in the /public directory.
          ─────────────────────────────────────────────── */}
          {/* TODO: replace src with your own image path (file in /public) */}
          <div className="relative w-40 h-40 flex-shrink-0 rounded overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <Image
              src="/Alamo_ProfileImg.jpg"
              alt="Profile photo"
              fill
              sizes="150px"
              className="object-cover"
              priority
            />
          </div>

          {/* ── NAME & TITLE ───────────────────────────────
              Replace the text below with your name and role.
          ─────────────────────────────────────────────── */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Your Name {/* TODO: your name */}
            </h1>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50 mt-0.5">
              Your Title {/* TODO: your role / title */}
            </p>
            {/* Added a flex container wrapper here */}
            <div className="flex items-center gap-1 mt-2 text-neutral-900 dark:text-neutral-50">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs font-mono">City, Country {/* TODO: your location */}</span>
            </div>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </Card>
  );
};

export default ProfileHeaderCell;
