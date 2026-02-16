'use client'
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

//**Third Party Imports */
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

export const AppHome = () => {
  const roles = ["Web Developer", "App Developer", "Native Developer", "Next Developer", "Web Designer"];
  const [index, setIndex] = useState(0);

  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % roles.length);
    }, 2000); // change every 2 sec

    return () => clearInterval(timer);
  }, [roles.length]);
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
        <div className="relative z-10 max-w-5xl mx-auto animate-fade-in ">

          {/*  */}
          <h1 className="text-3xl md:text-4xl  font-bold mb-6 animate-slide-up flex justify-center gap-3 flex-wrap">
            Hi, I&apos;m a

            <span className="relative inline-block min-w-[350px] text-left text-ellipsis">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={
                    isFirstRender.current
                      ? false
                      : { opacity: 0, y: 20 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="gradient-text absolute left-0 right-0"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm a 


            <span className="gradient-text">React Developer</span>
          </h1> */}
          <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up ">
            Building modern, responsive web applications with React.js and
            Next.js. Passionate about clean code and exceptional user
            experiences.
          </p>
          <div className="flex flex-col  md:flex-row  gap-4 justify-center items-center animate-slide-up">
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
