"use client";

import { ProjectsSection } from "@/sections/Feature Projects/Projects";
import { PageHero } from "@/components/PageHero/PageHero";

export default function ProjectsPage() {
  return (
    <div className="-z-100">
      <PageHero
        eyebrow="Portfolio"
        title="Featured Work"
        description="A curation of projects that demonstrate my ability to solve real-world problems with code."
      />
      <div className="-mt-20">
        <ProjectsSection />
      </div>
    </div>
  );
}