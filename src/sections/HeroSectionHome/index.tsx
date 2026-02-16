"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Sparkles, Terminal } from "lucide-react";
import memojiImage from "@/assets/images/memoji-computer.png"; // Ensure this path is correct or use a placeholder
import React, { useRef } from "react";

export const HeroSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    return (
        <div
            ref={targetRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-0"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-dark"></div>
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 size-[500px] bg-accent/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

                {/* Animated Grid/Particles (CSS based for performance) */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
            </div>

            <div className="container relative z-10">
                <motion.div
                    style={{ opacity, scale, y }}
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8 hover:bg-white/10 transition-colors cursor-default"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for Freelance & remote work
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-tight"
                    >
                        Building the <br />
                        <span className="gradient-text relative inline-block">
                            Future
                            <Sparkles className="absolute -top-4 -right-8 size-8 text-accent animate-pulse" />
                        </span>{" "}
                        with AI
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
                    >
                        I'm a Full Stack Developer & AI Engineer specializing in building exceptional digital experiences.
                        I transform complex requirements into scalable, high-performance web applications.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            <Code className="size-5" />
                            View Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            <Terminal className="size-5" />
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Elements / Decoration */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 md:left-20 hidden lg:block"
            >
                <div className="p-4 rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-white/10 shadow-xl">
                    <Code className="size-8 text-blue-400" />
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-10 md:right-20 hidden lg:block"
            >
                <div className="p-4 rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-white/10 shadow-xl">
                    <Terminal className="size-8 text-green-400" />
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white/50 animate-drop"></div>
                </div>
            </motion.div>
        </div>
    );
};
