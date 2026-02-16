"use client";

import { AboutSection } from "@/sections/About/About";
import { EducationSection } from "@/sections/Education/Education";
import { ExperienceSection } from "@/sections/Experience/Experience";
import { PageHero } from "@/components/PageHero/PageHero";

export default function AboutPage() {
  return (
    <div className="-z-100">
      {/* <PageHero
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me"
      /> */}

      {/* Remove padding-top from components since PageHero handles it */}
      <div className="-mt-20">
        <AboutSection />
      </div>
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}