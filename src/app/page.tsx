import { AboutSection } from "@/sections/About/About";
import { ContactSection } from "@/sections/Contact/Contact";
import { ProjectsSection } from "@/sections/Feature Projects/Projects";
import { Footer } from "@/sections/Footer/Footer";
import { Header } from "@/sections/Header/Header"
import { HeroSection } from "@/sections/Hero/Hero";
import { TapeSection } from "@/sections/Tape/Tape";
import { TestimonialsSection } from "@/sections/Testimonials/Testimonials";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
``