export interface ProjectScreenshot {
  url: string;
  caption: string;
  alt: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  techTags: string[];
  githubUrl?: string;
  demoUrl?: string;
  screenshots: ProjectScreenshot[];
}

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "techniserve",
    title: "TechniServe: IT Managed Services & SLA Portal",
    tagline: "Comprehensive B2B IT Service & Operations Management Platform",
    description:
      "A B2B platform for IT firms to deliver managed maintenance services to corporate client offices under a formal Service Level Agreement (SLA).",
    longDescription:
      "TechniServe simplifies corporate IT operations by structuring SLA compliance, maintenance scheduling, and real-time equipment diagnostics into an easy-to-use cloud dashboard. IT teams can respond quickly to incidents, track response & resolution guarantees, and generate performance audits seamlessly.",
    features: [
      "Real-time Service Level Agreement (SLA) status tracking and threshold alerts",
      "Automated preventative maintenance scheduler for enterprise hardware",
      "Role-based Client and Administrator portals with active ticket feeds",
      "Comprehensive diagnostic reporting and client compliance audits",
    ],
    techTags: ["JavaScript", "BootStrap", "PHP", "MySQL"],
    githubUrl: "https://github.com/ravennhuu/TechniServe.git",
    demoUrl: "",
    screenshots: [
      {
        url: "/TechniServe_DashboardAdmin.png",
        caption: "Main Service Portal Dashboard & Analytics",
        alt: "TechniServe Dashboard Interface",
      },
      {
        url: "/TechniServe_TicketsAdmin.png",
        caption: "Active SLA Support Tickets & Ticket Management",
        alt: "TechniServe SLA Ticket System",
      },
    ],
  },
];
