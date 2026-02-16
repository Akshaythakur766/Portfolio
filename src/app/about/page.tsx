"use client";

import { AboutSection } from "@/sections/About/About";
import { EducationSection } from "@/sections/Education/Education";
import { ExperienceSection } from "@/sections/Experience/Experience";

export default function AboutPage() {
  return (
    <div className="-z-100 pt-20">
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}