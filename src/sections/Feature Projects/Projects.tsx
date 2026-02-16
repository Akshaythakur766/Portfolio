"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { projects, ProjectCategory } from "@/data/projects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagicCard } from "@/components/ui/MagicCard";

const filters: ProjectCategory[] = ["All", "Full Stack", "Frontend", "Tools"];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section className="py-10 pb-20 lg:pb-28" id="projects">
      <div className="container">

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeFilter === filter
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                  }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-white/10 rounded-lg shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 
            Fixed Layout: 
            Using a simple Flex col for stability. 
            Removed AnimatePresence 'popLayout' to prevent layout thrashing.
        */}
        <div className="flex flex-col gap-8 md:gap-12">
          {filteredProjects.map((project, projectIndex) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: projectIndex * 0.05 }}
            >
              <MagicCard className="h-full">
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 h-full p-6 md:p-10 lg:p-12">

                  {/* Text Content */}
                  <div className="flex flex-col justify-center lg:order-1 order-2 mt-8 lg:mt-0">
                    {/* Header info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-r from-primary to-accent inline-flex font-bold gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                      <Badge variant="outline" className="text-xs text-white/40 border-white/10">
                        {project.category}
                      </Badge>
                    </div>

                    <h3 className="font-serif text-3xl mt-2 md:text-4xl leading-tight text-white group-hover/magic:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-white/60 mt-4 leading-relaxed line-clamp-3 group-hover/magic:text-white/80 transition-colors">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.techStack.map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <hr className="border-t border-white/5 mt-6 md:mt-8" />

                    <ul className="flex flex-col gap-3 mt-6 md:mt-8 mb-8">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-3 text-sm text-white/50 items-start group-hover/magic:text-white/70 transition-colors"
                        >
                          <CheckCircleIcon className="size-5 text-primary/40 group-hover/magic:text-primary flex-shrink-0 mt-0.5 transition-colors" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={project.link} target="_blank" className="mt-auto">
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-bold inline-flex items-center justify-center gap-2 md:w-auto md:px-8 hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 group-hover/magic:-translate-y-1 duration-300">
                        <span>{project.viewText}</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </Link>
                  </div>

                  {/* Image Section */}
                  <div className="lg:order-2 order-1 relative h-[300px] lg:h-auto w-full overflow-hidden rounded-2xl border border-white/10 group-hover/magic:border-white/20 transition-colors">
                    <div className="absolute inset-0 bg-gray-900 animate-pulse" /> {/* Placeholder/Loading state */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover/magic:scale-105"
                    />
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
