"use client";

import { AboutSection } from "@/sections/About/About";
import { EducationSection } from "@/sections/Education/Education";
import { ExperienceSection } from "@/sections/Experience/Experience";
import { PageHero } from "@/components/PageHero/PageHero";

export default function AboutPage() {
  return (
    <div className="-z-100">
      <PageHero
        eyebrow="My Story"
        title="More Than Just Code"
        description="I'm a developer who cares about the user experience. Here's a look at my journey, experience, and what drives me."
      />

      {/* Remove padding-top from components since PageHero handles it */}
      <div className="-mt-20">
        <AboutSection />
      </div>
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}