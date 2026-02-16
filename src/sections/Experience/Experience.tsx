"use client";

import Card from "@/components/Card/Card";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { motion } from "framer-motion";
import { Briefcase, Code, Globe, Laptop } from "lucide-react";
import React from "react";

const experience = [
    {
        company: "Company Name",
        position: "Senior Frontend Developer",
        period: "2023 - Present",
        description:
            "Leading the frontend development team, architecting scalable solutions, and improving application performance.",
        achievement: "Built a real-time chat application with WebSockets.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        icon: Laptop,
    },
    {
        company: "Another Company",
        position: "Frontend Developer",
        period: "2021 - 2023",
        description:
            "Developed responsive web applications, collaborated with UX/UI designers to implement pixel-perfect interfaces.",
        achievement: "Optimized legacy code improving load time by 40%.",
        technologies: ["React", "Redux", "SASS", "Jest"],
        icon: Code,
    },
    {
        company: "Startup Inc",
        position: "Junior Web Developer",
        period: "2019 - 2021",
        description:
            "Assisted in the development of client-facing websites, fixed bugs, and participated in agile development cycles.",
        achievement: "Developed 5+ client websites from scratch.",
        technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
        icon: Globe,
    },
];

export const ExperienceSection = () => {
    return (
        <section className="py-20 lg:py-28" id="experience">
            <div className="container">
                <SectionHeader
                    eyebrow="My Journey"
                    title="Work Experience"
                    description="A timeline of my professional career and the value I've delivered along the way."
                />

                <div className="mt-20 flex flex-col gap-10 relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-white/10 -translate-x-1/2"></div>

                    {experience.map((job, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between ${isEven ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center size-10 rounded-full bg-gradient-to-r from-primary to-accent z-10 shadow-glow">
                                    <Briefcase className="size-5 text-white" />
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    className="w-full md:w-[calc(50%-40px)]"
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <Card className="p-8 hover:scale-[1.02] transition-transform duration-300 border border-white/5 relative group">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 group-hover:border-primary/20 transition-colors">
                                                        <job.icon className="size-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                                            {job.position}
                                                        </h3>
                                                        <p className="text-white/60 font-medium">
                                                            {job.company}
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/5">
                                                    {job.period}
                                                </span>
                                            </div>

                                            <p className="text-white/70 leading-relaxed text-sm">
                                                {job.description}
                                            </p>

                                            <div className="pl-4 border-l-2 border-primary/30">
                                                <p className="text-white/80 text-sm italic">
                                                    <span className="text-primary font-semibold not-italic">Key Achievement: </span>
                                                    {job.achievement}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {job.technologies.slice(0, 4).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-medium text-white/50 border border-white/5"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>

                                {/* Empty Space for the other side */}
                                <div className="hidden md:block w-[calc(50%-40px)]"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
