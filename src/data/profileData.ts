// ─────────────────────────────────────────────
//  profileData.ts — Manual content goes here
//  Fill in your own values below.
// ─────────────────────────────────────────────

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface TimelineEvent {
  period: string;
  role: string;
  company: string;
  description?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  bio: string;
  avatarUrl?: string;
  socials: SocialLink[];
  techStack: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  timeline: TimelineEvent[];
}

export const profileData: ProfileData = {
  name: "",
  title: "",
  location: "",
  bio: "",
  avatarUrl: "",
  socials: [],
  techStack: [],
  projects: [],
  timeline: [],
};
