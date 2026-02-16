import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CampusLink from "@/assets/images/campus-link.png";
import Todo from "@/assets/images/Todo.png";
import darkSaas from "@/assets/images/dark-saas-landing-page.png";
import lightSaas from "@/assets/images/light-saas-landing-page.png";
import { StaticImageData } from "next/image";

export type ProjectCategory = "All" | "Frontend" | "Full Stack" | "Tools";

export interface Project {
  title: string;
  category: ProjectCategory;
  image: StaticImageData;
  company: string;
  year: string;
  description: string;
  results: { title: string }[];
  link: string;
  viewText: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    company: "Academic",
    year: "2023",
    title: "Campus Link",
    category: "Full Stack",
    description: "A comprehensive digital library and attendance management system for educational institutions.",
    results: [
      { title: "Real-time attendance tracking with OTP verification" },
      { title: "Digital library management & catalog system" },
      { title: "Student analytics dashboard for faculty" },
    ],
    link: "https://github.com/Akshaythakur766/CampusLink",
    image: CampusLink,
    viewText: "View Code",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    company: "Personal",
    year: "2024",
    title: "TaskMaster Pro",
    category: "Frontend",
    description: "A productivity application featuring drag-and-drop task management and real-time synchronization.",
    results: [
      { title: "Secure authentication via Firebase" },
      { title: "Drag-and-drop task organization" },
      { title: "Real-time sync across devices" },
    ],
    link: "https://todo-list-bade9.web.app/",
    image: Todo,
    viewText: "Live Demo",
    techStack: ["React", "Firebase", "TailwindCSS"],
  },
  {
    company: "Open Source",
    year: "2025",
    title: "Create-App-Setup",
    category: "Tools",
    description: "A CLI tool designed to accelerate project scaffolding for modern web frameworks.",
    results: [
      { title: "CLI tool for rapid project scaffolding" },
      { title: "Supports Next.js, React, and Express templates" },
      { title: "50% reduction in initial setup time" },
    ],
    link: "https://www.npmjs.com/package/create-app-setup",
    image: aiStartupLandingPage,
    viewText: "View on NPM",
    techStack: ["Node.js", "CLI", "NPM"],
  },
  {
    company: "Freelance",
    year: "2024",
    title: "AI Startup Landing",
    category: "Frontend",
    description: "High-conversion landing page for an AI SaaS startup with complex scroll animations.",
    results: [
        { title: "Implemented Locomotif scroll for smooth parallax" },
        { title: "Achieved 99/100 Performance Score" },
    ],
    link: "https://github.com/Akshaythakur766",
    image: darkSaas, 
    viewText: "View Code",
    techStack: ["Next.js", "Framer Motion", "Tailwind"],
  },
    {
    company: "Experimental",
    year: "2024",
    title: "SaaS Dashboard",
    category: "Frontend",
    description: "A clean, light-mode dashboard interface for analytics visualization.",
    results: [
        { title: "Responsive data visualization charts" },
        { title: "Dark/Light mode toggle implementation" },
    ],
    link: "https://github.com/Akshaythakur766",
    image: lightSaas,
    viewText: "View Code",
    techStack: ["React", "Recharts", "Tailwind"],
  },
];
