"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Sparkles, Terminal } from "lucide-react";
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
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-32 md:py-0"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gray-950"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none opacity-60"></div>

                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
            </div>

            <div className="container relative z-10 px-4">
                <motion.div
                    style={{ opacity, scale, y }}
                    className="flex flex-col items-center text-center max-w-5xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-mono mb-8 hover:bg-white/10 transition-colors cursor-default backdrop-blur-md shadow-lg shadow-primary/5"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="font-semibold tracking-wide">Available for Freelance & Remote Work</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-8 leading-[1.1]"
                    >
                        Building the <br />
                        <span className="gradient-text relative inline-block">
                            Future
                            <Sparkles className="absolute -top-6 -right-10 size-10 text-accent animate-pulse hidden md:block" />
                        </span>{" "}
                        with AI
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl leading-relaxed font-light"
                    >
                        I'm a <span className="text-white font-medium">Full Stack Architect</span> & <span className="text-white font-medium">AI Engineer</span>.
                        I transform complex requirements into scalable, high-performance digital experiences.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                    >
                        <Link
                            href="/projects"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-glow transition-all hover:scale-[1.02]"
                        >
                            <Code className="size-5 group-hover:rotate-12 transition-transform" />
                            View Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 text-white font-bold text-lg border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] backdrop-blur-sm"
                        >
                            <Terminal className="size-5 group-hover:scale-110 transition-transform" />
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-xs text-white/30 uppercase tracking-[0.2em] font-mono">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white/50 animate-drop blur-[1px]"></div>
                </div>
            </motion.div>
        </div>
    );
};
