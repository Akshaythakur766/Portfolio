"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
    eyebrow: string;
    title: string;
    description: string;
}

export const PageHero = ({ eyebrow, title, description }: PageHeroProps) => {
    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

            <div className="container px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-mono mb-6">
                        <span>{eyebrow}</span>
                    </div>

                    <h1 className="font-sans text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        {title}
                    </h1>

                    <p className="text-xl md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
