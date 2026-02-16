"use client";

import { ReactNode } from "react";

interface MagicCardProps {
    children: ReactNode;
    className?: string;
}

export const MagicCard = ({ children, className = "" }: MagicCardProps) => {
    return (
        <div className={`relative group/magic rounded-3xl bg-gray-900 border border-white/10 overflow-hidden ${className}`}>

            {/* 1. Animated Border Beam (The "Magic" Part) */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
                <div className="absolute top-[50%] left-[50%] w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_340deg,white_360deg)] opacity-0 group-hover/magic:opacity-20 animate-spin-slow transition-opacity duration-700"
                    style={{ animationDuration: "4s" }}
                />
            </div>

            {/* 2. Inner Content Mask (To create the border look) */}
            <div className="absolute inset-[1px] bg-gray-950 rounded-[23px] z-0" />

            {/* 3. Subtle Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover" />

            {/* 4. Content Container */}
            <div className="relative z-20 h-full">
                {children}
            </div>

            {/* 5. Bottom Glow for Depth */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/20 blur-[60px] opacity-0 group-hover/magic:opacity-40 transition-opacity duration-500 z-10 pointer-events-none" />
        </div>
    );
};
