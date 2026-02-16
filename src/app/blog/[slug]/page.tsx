"use client";

import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="pt-32 pb-20">
            <div className="container max-w-3xl mx-auto px-6">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                {/* Header */}
                <div className="mb-10">
                    <div className="flex flex-wrap gap-4 items-center text-sm text-white/50 mb-4">
                        <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full text-primary border border-primary/20">
                            <Tag className="size-3" /> {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="size-3" /> {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="size-3" /> {post.date}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-white/70 leading-relaxed border-l-4 border-primary/50 pl-6 italic">
                        {post.excerpt}
                    </p>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                    {/* Fallback pattern if image is just placeholder path */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                        <span className="text-white/10 text-9xl font-bold">BLOG</span>
                    </div>
                    {/* If you had real images, you'd use Next Image here: */}
                    {/* <Image src={post.image} alt={post.title} fill className="object-cover" /> */}
                </div>

                {/* Content */}
                <article className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-white prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary
            prose-p:text-gray-300 prose-p:leading-8 prose-p:mb-6
            prose-strong:text-white prose-li:text-gray-300
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        ">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                <hr className="border-white/10 my-16" />

                {/* Footer / CTA */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h3>
                    <p className="text-white/60 mb-6">Connect with me to discuss more about AI, Engineering, and Design.</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all"
                    >
                        Let's Chat
                    </Link>
                </div>
            </div>
        </div>
    );
}
