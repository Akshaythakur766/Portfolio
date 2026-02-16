"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CampusLink from "@/assets/images/campus-link.png";
import Todo from "@/assets/images/Todo.png";
import Card from "@/components/Card/Card";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const portfolioProjects = [
  {
    company: "Academic",
    year: "2023",
    title: "Campus Link",
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
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 lg:py-28" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="Transforming complex problems into elegant, scalable digital solutions."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-8 md:gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              // Mobile: Static relative positioning with margin. 
              // Desktop: Sticky positioning for the stacking effect.
              className="px-6 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 relative md:sticky transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20"
              style={{
                // We only want the sticky top offset on larger screens, handled via CSS variable or standard calculation
                // But inline styles apply everywhere. We can use a calc that includes a media query check or just standard spacing.
                // For simplicity in this stack, we'll rely on the 'md:sticky' class and standard top here.
                top: `calc(100px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  {/* Header info */}
                  <div className="bg-gradient-to-r from-primary/80 to-accent inline-flex font-bold gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-3xl mt-2 md:text-5xl md:mt-5 leading-tight">
                    {project.title}
                  </h3>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20 border-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <hr className="border-t-2 border-white/5 mt-6 md:mt-8" />

                  <ul className="flex flex-col gap-4 mt-6 md:mt-8">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-3 text-sm md:text-base text-white/60 items-start"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-8 hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
                      <span>{project.viewText}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>

                {/* Image Section */}
                <div className="relative mt-8 lg:mt-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-t-2xl border-2 border-white/10 shadow-2xl lg:absolute lg:h-full lg:w-auto lg:max-w-none hover:scale-[1.02] transition-transform duration-500 object-cover object-top"
                  />
                  {/* Gradient overlay for fade effect at bottom of card */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent lg:hidden"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
