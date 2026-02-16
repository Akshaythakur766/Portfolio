"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight, Search, Terminal, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <section className="py-20 lg:py-28 relative overflow-hidden" id="blog">
            {/* Tech Background Elements */}
            <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 text-primary font-mono text-sm">
                    &lt;System.Initialize /&gt;
                </div>
                <div className="absolute bottom-10 right-10 text-accent font-mono text-sm">
                    while(alive) &#123; learn() &#125;
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4"
                    >
                        <Terminal className="size-3" />
                        <span>~/blog-updates</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">
                        Technical <span className="gradient-text">Journal</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Deep dives into AI, Algorithms, and Software Architecture.
                    </p>

                    {/* Search & Filter */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <div className="relative w-full max-w-md group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search articles (cmd+k)..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900 border border-white/10 focus:border-primary/50 outline-none transition-all shadow-lg"
                            />
                        </div>

                        {/* Categories */}
                        <div className="hidden md:flex gap-2 flex-wrap justify-center">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-lg text-xs font-medium font-mono transition-all border ${selectedCategory === cat
                                        ? "bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                                        : "bg-transparent border-white/5 text-muted-foreground hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={post.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Link href={`/blog/${post.slug}`} className="block h-full group perspective-1000">
                                    <Card className="h-full relative overflow-hidden border-white/10 bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 group-hover:-translate-y-2 flex flex-col">

                                        {/* Image Section */}
                                        <div className="h-48 relative overflow-hidden bg-gray-800">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale-[50%]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80" />

                                            <div className="absolute top-4 right-4">
                                                <Badge variant="secondary" className="bg-black/50 backdrop-blur-md text-white border border-white/10 font-mono text-xs">
                                                    {post.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col relative z-20">
                                            {/* Decoration Line */}
                                            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="flex items-center gap-4 text-xs font-mono text-primary/80 mb-4">
                                                <span className="flex items-center gap-1">
                                                    <CalendarDays className="w-3 h-3" /> {post.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> {post.readTime}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                                {post.title}
                                            </h3>

                                            <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center text-white/50 font-medium text-sm group-hover:text-white transition-colors">
                                                <Code className="size-4 mr-2" />
                                                <span className="group-hover:underline decoration-primary underline-offset-4 decoration-2">Read Article</span>
                                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/5">
                        <p className="text-xl text-white/50">404: No thoughts found.</p>
                        <button onClick={() => { setSearchTerm(""); setSelectedCategory("All") }} className="mt-4 text-primary hover:text-primary/80 font-mono text-sm underline">
                            &gt; ./reset_filters.sh
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
