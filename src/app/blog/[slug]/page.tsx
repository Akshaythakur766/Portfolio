"use client";

import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock, Share2, Tag, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-[#0B0C10] min-h-screen pb-32">
            {/* Navigation Bar */}
            <nav className="fixed top-0 inset-x-0 h-16 bg-[#0B0C10]/80 backdrop-blur-md border-b border-white/5 z-50 flex items-center">
                <div className="container max-w-4xl mx-auto px-6 flex justify-between items-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-mono text-white/50 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        <span>Back</span>
                    </Link>
                    <Link href="/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <Home className="size-4 text-white/70" />
                    </Link>
                </div>
            </nav>

            <article className="pt-32 container max-w-3xl mx-auto px-6">

                {/* Meta Header */}
                <div className="flex flex-col gap-6 mb-12 border-b border-white/10 pb-12">
                    <div className="flex items-center gap-3 text-xs font-mono text-primary">
                        <span className="px-2 py-1 rounded border border-primary/20 bg-primary/5 uppercase tracking-wider">
                            {post.category}
                        </span>
                        <span className="text-white/20">|</span>
                        <span className="text-white/50 flex items-center gap-1">
                            <Calendar className="size-3" /> {post.date}
                        </span>
                        <span className="text-white/20">|</span>
                        <span className="text-white/50 flex items-center gap-1">
                            <Clock className="size-3" /> {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
                        {post.excerpt}
                    </p>
                </div>

                {/* Content Body */}
                <div className="prose prose-invert prose-lg max-w-none 
                prose-headings:font-serif prose-headings:font-bold prose-headings:text-white
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-6
                prose-h3:text-xl prose-h3:text-white/90 prose-h3:mt-12
                prose-p:text-gray-300 prose-p:leading-8 prose-p:font-sans prose-p:mb-8
                prose-strong:text-white prose-strong:font-semibold
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                prose-li:text-gray-300 prose-li:marker:text-primary
                prose-blockquote:border-l-primary prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:my-8 prose-blockquote:rounded-r-lg
            ">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Post-read Actions */}
                <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-white/40 text-sm font-mono mb-2">Written by</p>
                        <h4 className="text-xl font-bold text-white">Akshay Thakur</h4>
                        <p className="text-white/60 text-sm">Frontend Architect & AI Enthusiast</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all text-sm font-medium">
                            <Share2 className="size-4" />
                            Share Article
                        </button>
                        <Link href="/contact" className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all text-sm font-bold shadow-glow">
                            Discuss this topic <ChevronRight className="size-4" />
                        </Link>
                    </div>
                </div>

            </article>
        </div>
    );
}
