"use client";

import { Footer } from "@/sections/Footer/Footer";
import { Header } from "@/sections/Header/Header"
import { HeroSection } from "@/sections/Hero/Hero";
import { TapeSection } from "@/sections/Tape/Tape";
import { TestimonialsSection } from "@/sections/Testimonials/Testimonials";
import { ProjectsSection } from "@/sections/Feature Projects/Projects";
import { ArrowRight, Zap, Palette, Globe, Server } from "lucide-react";
import Link from "next/link";
import Card from "@/components/Card/Card";

// Simple Services/Skills Teaser
const ServicesTeaser = () => (
  <section className="py-20 lg:py-28">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">What I Do</h2>
          <p className="text-white/60 max-w-lg">I solve complex problems with clean code and intuitive design.</p>
        </div>
        <Link href="/about" className="hidden md:inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
          View Full Skillset <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Frontend Dev", icon: Zap, desc: "React, Next.js, Tailwind, Framer Motion" },
          { title: "Backend & API", icon: Server, desc: "Node.js, Express, Postgres, Firebase" },
          { title: "UI/UX Design", icon: Palette, desc: "Figma, Responsive Design, Accessibility" }
        ].map((s, i) => (
          <Card key={i} className="p-8 hover:border-primary/50 transition-colors">
            <s.icon className="size-8 text-primary mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
            <p className="text-white/60">{s.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold">
          View Full Skillset <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="-z-100" >
      <HeroSection />
      <TapeSection />
      <ServicesTeaser />
      <ProjectsSection />
      <TestimonialsSection />
      {/* Contact Section removed from Home, available via Nav/Button */}
    </div>
  );
}