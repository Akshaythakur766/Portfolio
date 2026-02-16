"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight, Terminal, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const BlogSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Simulate "10 Years Exp" by showing depth in categories
    const categories = ["All", "Architecture", "DevOps", "Frontend", "AI Engineering"];

    // Mock filtering logic (assuming blogPosts uses these categories or we map them)
    const filteredPosts = blogPosts.filter((post) =>
        selectedCategory === "All" || post.category === selectedCategory
    );

    return (
        <section className="py-24 lg:py-32 relative bg-gray-950" id="blog">
            {/* Background Grid Pattern for Technical Feel */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">

                {/* Header Section - Minimalist & Technical */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-primary font-mono text-sm mb-4"
                        >
                            <Terminal className="size-4" />
                            <span>~/engineering-journal</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tight text-white mb-4">
                            Technical <span className="text-white/40">Insights</span>
                        </h2>
                        <p className="text-white/60 max-w-xl leading-relaxed text-lg">
                            Deep dives into distributed systems, frontend architecture, and the future of AI-driven development.
                        </p>
                    </div>

                    {/* Terminal-style Filter */}
                    <div className="mt-8 md:mt-0">
                        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all uppercase tracking-wider ${selectedCategory === cat
                                        ? "bg-white text-gray-950 shadow-lg shadow-white/10"
                                        : "text-white/40 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Blog Index (List Layout - "Changelog" Style) */}
                <div className="flex flex-col">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={post.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Link href={`/blog/${post.slug}`} className="block group">
                                    <article className="group relative py-10 md:py-12 border-b border-white/5 transition-all duration-500 hover:border-white/20">

                                        {/* Hover Highlight (Subtle) */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -mx-4 md:-mx-8"></div>

                                        <div className="relative px-0 md:px-4 flex flex-col md:flex-row gap-6 md:gap-12 items-start">

                                            {/* Meta Data (Left Column) */}
                                            <div className="flex flex-row md:flex-col gap-6 md:w-32 flex-shrink-0 pt-2">
                                                <div className="text-primary font-mono text-sm font-bold flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(34,197,94,0.5)] transition-all duration-500"></span>
                                                    {post.date}
                                                </div>
                                                <div className="text-white/30 text-xs font-mono uppercase tracking-widest hidden md:block">
                                                    {post.readTime} read
                                                </div>
                                            </div>

                                            {/* Content (Middle) */}
                                            <div className="flex-1 space-y-4">
                                                <h3 className="text-2xl md:text-4xl font-sans font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                                                    {post.title}
                                                </h3>
                                                <p className="text-white/50 leading-relaxed text-base md:text-lg max-w-3xl line-clamp-2 md:line-clamp-none group-hover:text-white/70 transition-colors">
                                                    {post.excerpt}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-white/60 uppercase tracking-widest group-hover:border-primary/30 group-hover:text-primary transition-colors">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Arrow Action (Right) */}
                                            <div className="hidden md:flex flex-col justify-center h-full pt-4">
                                                <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-gray-950 transition-all duration-500 transform group-hover:rotate-[-45deg]">
                                                    <ArrowRight className="size-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredPosts.length === 0 && (
                    <div className="py-32 text-center border-b border-white/10">
                        <div className="inline-block p-4 rounded-full bg-white/5 mb-4">
                            <Terminal className="size-6 text-white/40" />
                        </div>
                        <p className="text-white/40 font-mono text-sm">Query returned 0 results.</p>
                        <button onClick={() => { setSelectedCategory("All") }} className="mt-4 text-primary hover:text-primary/80 font-mono text-sm underline decoration-primary/30 hover:decoration-primary">
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
