"use client";

import Card from "@/components/Card/Card";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { motion } from "framer-motion";
import { Award, BookOpen, Calendar, GraduationCap } from "lucide-react";
import React from "react";

const education = [
    {
        institution: "University Name",
        degree: "Bachelor of Science in Computer Science",
        period: "2015 - 2019",
        description: "Specialized in Software Engineering and Artificial Intelligence.",
        achievements: ["Dean's List 2017-2019", "Best Capstone Project Award"],
        certifications: [],
    },
    {
        institution: "Online Academy",
        degree: "Full Stack Web Development Bootcamp",
        period: "2019",
        description: "Intensive 12-week program covering the MERN stack.",
        achievements: ["Built 3 full-stack apps", "Top of class performance"],
        certifications: ["Full Stack Developer Certificate"],
    },
];

export const EducationSection = () => {
    return (
        <section className="py-20 lg:py-28" id="education">
            <div className="container">
                <SectionHeader
                    eyebrow="Learning Journey"
                    title="Education"
                    description="My academic background and continuous pursuit of knowledge."
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 h-full hover:border-primary/30 transition-colors duration-300 group">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10">
                                            <GraduationCap className="size-8 text-primary" />
                                        </div>
                                        <div className="flex items-center gap-2 text-white/50 text-sm border border-white/5 px-3 py-1 rounded-full">
                                            <Calendar className="size-3.5" />
                                            {edu.period}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-white/70 font-medium text-lg mb-4">
                                        {edu.degree}
                                    </p>

                                    <p className="text-white/60 mb-6 text-sm flex-grow">
                                        {edu.description}
                                    </p>

                                    {/* Reveal on Hover / Always visible on mobile if needed, but styling for hover */}
                                    <div className="space-y-4 pt-6 border-t border-white/10">
                                        {edu.achievements.length > 0 && (
                                            <div>
                                                <h4 className="text-white/90 text-sm font-semibold mb-3 flex items-center gap-2">
                                                    <Award className="size-4 text-accent" />
                                                    Key Achievements
                                                </h4>
                                                <ul className="grid grid-cols-1 gap-2">
                                                    {edu.achievements.map((item, i) => (
                                                        <li key={i} className="text-white/60 text-xs flex items-center gap-2">
                                                            <span className="size-1 rounded-full bg-white/30"></span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {edu.certifications.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {edu.certifications.map((cert, i) => (
                                                    <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                                                        <BookOpen className="size-3" />
                                                        {cert}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
