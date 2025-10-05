//**Native Imports */
import Link from "next/link";

//**Icons Imports */
import { ArrowRight, Download } from "lucide-react";

//**Component Imports */
import { Button } from "@/components/ui/button";

//**Assets Imports */
import heroBg from "@/assets/images/hero-bg.jpg";

//**Section Imports */
import { Features } from "@/sections/Features";

export const AppHome = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm a <span className="gradient-text">React Developer</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:200ms]">
            Building modern, responsive web applications with React.js and
            Next.js. Passionate about clean code and exceptional user
            experiences.
          </p>
          <div className="flex flex-col  md:flex-row  gap-4 justify-center items-center animate-slide-up [animation-delay:400ms]">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-primary border-0 shadow-glow animate-pulse-glow"
              >
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />
    </div>
  );
};

export default AppHome;
