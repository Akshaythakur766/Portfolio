import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
export const AboutMe = () => {
  const skills = [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 72 },
    { name: "Node.js", level: 50 },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",

    "Framer Motion",
    // "Three.js",
    "Redux",
    // "Zustand",
    // "React Query",
    "Node.js",
    "Express",
    "MongoDB",
    // "PostgreSQL",
    // "Prisma",
    // "tRPC",
  ];
  return (
    <div className="pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate React.js/Next.js developer with a love for creating
            modern, efficient, and user-friendly web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-8 glass-effect">
              <h2 className="text-2xl font-bold mb-4">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Frontend Developer with over 1.5 years of hands-on
                  experience building high-performance web applications using{" "}
                  <strong>React.js</strong> and
                  <strong> Next.js</strong>. My work blends clean code, seamless
                  UI/UX, and a deep focus on scalability and performance.
                </p>
                <p>
                  I've contributed to a wide range of projects — from sleek
                  landing pages to complex enterprise dashboards — always aiming
                  to turn ideas into smooth, user-focused digital experiences.
                  I'm also experienced with tools like
                  <strong> Nx</strong>, <strong>Storybook</strong>, and
                  <strong> TypeScript</strong>, which help me deliver
                  maintainable and production-ready solutions.
                </p>
                <p>
                  Beyond coding, I love exploring new design trends,
                  experimenting with emerging frontend tools, and sharing my
                  learnings through articles and open source contributions.
                </p>
              </div>
            </Card>

            <Card className="p-8 glass-effect">
              <h2 className="text-2xl font-bold mb-6">
                Technologies I Work With
              </h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-gradient-secondary border-border/50 hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Skills */}
          <div className="animate-slide-up [animation-delay:200ms]">
            <Card className="p-8 glass-effect">
              <h2 className="text-2xl font-bold mb-6">Core Skills</h2>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 glass-effect mt-6">
              <h2 className="text-2xl font-bold mb-4">Quick Facts</h2>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span className="text-foreground font-medium">1+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span>Projects Completed</span>
                  <span className="text-foreground font-medium">10+</span>
                </div>
                <div className="flex justify-between">
                  <span>Happy Clients</span>
                  <span className="text-foreground font-medium">5+</span>
                </div>
                <div className="flex justify-between">
                  <span>Coffee Consumed</span>
                  <span className="text-foreground font-medium">∞</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
