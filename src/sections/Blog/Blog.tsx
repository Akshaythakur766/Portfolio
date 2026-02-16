"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight, Search, Terminal, Hash, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const BlogSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

    const filteredPosts = blogPosts.filter((post) => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategory === "All" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="py-20 lg:py-28 relative" id="blog">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Header Section - Minimalist & Technical */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-primary font-mono text-sm mb-4"
                        >
                            <Terminal className="size-4" />
                            <span>~/engineering-journal</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                            Insights
                        </h2>
                        <p className="text-white/60 max-w-xl leading-relaxed">
                            Thoughts on distributed systems, frontend architecture, and artificial intelligence.
                        </p>
                    </div>

                    {/* Terminal-style Filter */}
                    <div className="flex flex-col gap-4 mt-8 md:mt-0 w-full md:w-auto">
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1.5 self-start md:self-end">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${selectedCategory === cat
                                            ? "bg-white/10 text-white shadow-sm"
                                            : "text-white/40 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Blog Index (List Layout) */}
                <div className="flex flex-col gap-4">
                    <AnimatePresence>
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={post.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <Link href={`/blog/${post.slug}`} className="block group">
                                    <article className="relative p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group-hover:border-white/10">
                                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">

                                            {/* Date & Meta Column */}
                                            <div className="flex flex-row md:flex-col gap-4 md:gap-2 min-w-[140px] border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 md:pr-8 text-xs font-mono text-white/40">
                                                <span className="flex items-center gap-2">
                                                    <CalendarDays className="size-3.5" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <Clock className="size-3.5" />
                                                    {post.readTime}
                                                </span>
                                            </div>

                                            {/* Content Column */}
                                            <div className="flex-1 space-y-3">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-xs font-bold font-mono text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                                                        {post.category}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                                                    {post.title}
                                                </h3>
                                                <p className="text-white/60 leading-relaxed line-clamp-2 md:line-clamp-none max-w-3xl">
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            {/* Action Icon */}
                                            <div className="hidden md:flex items-center justify-center size-12 rounded-full border border-white/10 text-white/20 group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                                                <ChevronRight className="size-6" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredPosts.length === 0 && (
                    <div className="py-20 text-center border-t border-white/10">
                        <p className="text-white/40 font-mono">Process terminated: No matching records found.</p>
                        <button onClick={() => { setSearchTerm(""); setSelectedCategory("All") }} className="mt-4 text-primary text-sm hover:underline font-mono">
                            Reset Query
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
