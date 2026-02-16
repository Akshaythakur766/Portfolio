"use client";

import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock, Share2, ChevronRight, Home, List } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeId, setActiveId] = useState<string>("");

    if (!post) {
        notFound();
    }

    // Simple TOC extraction (assuming usage of h2/h3 in content)
    // In a real app, we might parse this from the content string or use a library
    const tocItems = [
        { id: "introduction", label: "Introduction" },
        { id: "the-problem", label: "The Problem with CSR" },
        { id: "what-are-rscs", label: "What are Server Components?" },
        { id: "server-vs-client", label: "Server vs. Client" },
        { id: "streaming-suspense", label: "Streaming & Suspense" },
        { id: "data-fetching", label: "Data Fetching Patterns" },
        { id: "server-actions", label: "Server Actions" },
        { id: "conclusion", label: "Conclusion" },
    ];

    return (
        <div className="bg-gray-950 min-h-screen pb-32 selection:bg-primary/30 selection:text-white">

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left z-[60]"
                style={{ scaleX }}
            />

            {/* Navigation Bar */}
            <nav className="fixed top-0 inset-x-0 h-16 bg-gray-950/80 backdrop-blur-md border-b border-white/5 z-50 flex items-center">
                <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-mono text-white/50 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Back/index</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-white/30 hidden md:inline-block">Reading: {post.title}</span>
                        <Link href="/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                            <Home className="size-4 text-white/70" />
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="pt-32 container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Sidebar (TOC) - Hidden on mobile, sticky on desktop */}
                <aside className="hidden lg:block lg:col-span-3 relative">
                    <div className="sticky top-32">
                        <div className="flex items-center gap-2 mb-6 text-white/50">
                            <List className="size-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Table of Contents</span>
                        </div>
                        <ul className="space-y-3 border-l-2 border-white/5 pl-4">
                            {tocItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className="text-sm text-white/40 hover:text-primary transition-colors block py-1"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-7 col-span-12">
                    {/* Meta Header */}
                    <div className="flex flex-col gap-8 mb-16 border-b border-white/10 pb-12">
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-primary">
                            <span className="px-3 py-1 rounded bg-primary/10 border border-primary/20 font-bold uppercase tracking-wider">
                                {post.category}
                            </span>
                            <span className="text-white/20">|</span>
                            <span className="text-white/50 flex items-center gap-2">
                                <Calendar className="size-3.5" /> {post.date}
                            </span>
                            <span className="text-white/20">|</span>
                            <span className="text-white/50 flex items-center gap-2">
                                <Clock className="size-3.5" /> {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-sans font-black text-white leading-tight tracking-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light border-l-4 border-primary/30 pl-6">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Blog Body */}
                    <div className="prose prose-invert prose-lg max-w-none 
                        prose-headings:font-sans prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                        prose-h3:text-2xl prose-h3:text-white/90 prose-h3:mt-12 prose-h3:mb-4
                        prose-p:text-gray-300 prose-p:leading-8 prose-p:font-sans prose-p:mb-8 prose-p:text-lg
                        prose-strong:text-white prose-strong:font-bold
                        prose-ul:text-gray-300 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                        prose-code:text-accent prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                        prose-pre:bg-[#111] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-6 prose-pre:shadow-2xl
                    ">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    {/* Author Bio */}
                    <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="size-16 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-2xl font-black text-white shadow-lg">
                            AT
                        </div>
                        <div>
                            <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-1">Written by</p>
                            <h4 className="text-xl font-bold text-white mb-2">Akshay Thakur</h4>
                            <p className="text-white/60 text-sm max-w-md">Frontend Architect & AI Engineer. Obsessed with performance, clean code, and building the future of the web.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
