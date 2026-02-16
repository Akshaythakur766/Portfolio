"use client";

import { Card } from "@/components/ui/card";
import { Github, Code, GitCommit, Star, Cpu, Layers } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Link from "next/link";

export const GithubStatsSection = () => {
    return (
        <section className="py-20 lg:py-28 bg-white/5 border-y border-white/5">
            <div className="container">
                <SectionHeader
                    eyebrow="Open Source"
                    title="Code & Contributions"
                    description="I don't just write code; I ship it. Check out my activity on GitHub."
                />

                <div className="grid md:grid-cols-2 gap-8 mt-16 items-center">
                    {/* Left: Interactive Stats Card */}
                    <Card className="p-8 bg-gray-900/50 border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Github className="size-48 rotate-12" />
                        </div>

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="size-16 rounded-full bg-white/10 flex items-center justify-center">
                                    <Github className="size-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Akshaythakur766</h3>
                                    <p className="text-white/50">Full Stack Developer</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-2 text-primary mb-1">
                                        <GitCommit className="size-4" />
                                        <span className="text-xs font-bold uppercase tracking-wider">Commits</span>
                                    </div>
                                    <p className="text-2xl font-mono text-white">1,200+</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-2 text-accent mb-1">
                                        <Star className="size-4" />
                                        <span className="text-xs font-bold uppercase tracking-wider">Stars</span>
                                    </div>
                                    <p className="text-2xl font-mono text-white">50+</p>
                                </div>
                            </div>

                            <Link
                                href="https://github.com/Akshaythakur766"
                                target="_blank"
                                className="w-full py-3 rounded-xl bg-white text-gray-900 font-bold text-center hover:bg-gray-200 transition-colors"
                            >
                                View Profile
                            </Link>
                        </div>
                    </Card>

                    {/* Right: Tech Stack Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: Code, label: "Languages", value: "TypeScript, Python, Rust" },
                            { icon: Layers, label: "Frontend", value: "React, Next.js, Framer" },
                            { icon: Cpu, label: "Backend", value: "Node, Go, Postgres" },
                            { icon: Star, label: "Tools", value: "Docker, AWS, Figma" },
                        ].map((item, i) => (
                            <Card key={i} className="p-6 bg-transparent border-white/10 hover:bg-white/5 transition-colors">
                                <item.icon className="size-8 text-primary mb-4" />
                                <h4 className="text-white font-bold mb-1">{item.label}</h4>
                                <p className="text-white/50 text-sm">{item.value}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
