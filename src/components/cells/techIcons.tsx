import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiAuth0,
  SiJsonwebtokens,
  SiGithub,
  SiGit,
  SiFigma,
  SiVercel,
  SiSupabase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";

export const VscodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74l3.87 3.26-3.87 3.26a1 1 0 0 0 .001 1.479l1.322 1.202a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
  </svg>
);

export const AndroidStudioIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>

    <g transform="translate(13.2, 7.2) rotate(22)">

      <line x1="1.5" y1="1" x2="0.2" y2="-1.5" stroke="#3DDC84" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="6.5" y1="1" x2="7.8" y2="-1.5" stroke="#3DDC84" strokeWidth="1.2" strokeLinecap="round" />

      <path d="M 0 5 A 4 4 0 0 1 8 5 Z" fill="#3DDC84" />

      <circle cx="2.2" cy="3.5" r="0.6" fill="#000000" />
      <circle cx="5.8" cy="3.5" r="0.6" fill="#000000" />
    </g>

    <path
      d="M 5.5 13.5 C 8.5 16.5 15.5 16.5 18.5 13.5"
      stroke="#2563EB"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    <path
      d="M 12 4.5 L 6.5 19.5"
      stroke="#3B82F6"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path d="M 6.5 19.5 L 5.8 21.5" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" />

    <path
      d="M 12 4.5 L 17.5 19.5"
      stroke="#3B82F6"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path d="M 17.5 19.5 L 18.2 21.5" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" />

    <circle cx="12" cy="4.5" r="2.4" fill="#1E293B" />
    <circle cx="12" cy="4.5" r="1.2" fill="#FFFFFF" />
  </svg>
);

export const AntigravityIdeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="antigravity-gradient-exact" x1="2" y1="22" x2="20" y2="4" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="35%" stopColor="#06B6D4" />
        <stop offset="55%" stopColor="#10B981" />
        <stop offset="75%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    <path
      d="M 4 19.5 C 3.2 19.5 2.8 18.6 3.3 17.8 C 5.2 14.2 7.8 5 12 5 C 16.2 5 18.8 14.2 20.7 17.8 C 21.2 18.6 20.8 19.5 20 19.5 C 18.9 19.5 18 18.5 17.1 17 C 15.6 14.5 14 12.8 12 12.8 C 10 12.8 8.4 14.5 6.9 17 C 6 18.5 5.1 19.5 4 19.5 Z"
      fill="url(#antigravity-gradient-exact)"
    />
  </svg>
);

export interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export const TECH_STACK_DATA: Record<string, TechItem[]> = {
  frontend: [
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-neutral-900 dark:text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "BootStrap CSS", icon: <SiBootstrap className="text-[#7952B3]" /> },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
  ],
  backend: [
    { name: "Node.js", icon: <SiNodedotjs className="text-[#5FA04E]" /> },
    { name: "Java", icon: <FaJava className="text-[#ED8B00]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "REST", icon: <TbApi className="text-[#FF6C37] text-sm" /> },
    { name: "0Auth", icon: <SiAuth0 className="text-[#EB5424]" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-[#D63AF9]" /> },
  ],
  tools: [
    { name: "Github", icon: <SiGithub className="text-neutral-900 dark:text-white" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "VS Code", icon: <VscodeIcon className="text-[#007ACC]" /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
    { name: "Android Studio", icon: <AndroidStudioIcon /> },
    { name: "Antigravity IDE", icon: <AntigravityIdeIcon /> },
    { name: "Vercel", icon: <SiVercel className="text-neutral-900 dark:text-white" /> },
    { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
  ],
};
