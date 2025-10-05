import React from "react";

export const AboutMe = () => {
      const skills = [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 80 },
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", 
    "Framer Motion", "Three.js", "Redux", "Zustand", "React Query",
    "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "tRPC"
  ];
  return (
    <div className="min-h-screen">
      <div className="container p-20">
        {/* Title Section */}
        <section>
          <div className="flex  flex-col items-center justify-center text-center p-10 space-y-6">
            <h4 className=" text-3xl md:text-5xl font-bold">
              <span>About </span>
              <span className="gradient-text">Me</span>
            </h4>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate React.js/Next.js developer with a love for
              creating modern, efficient, and user-friendly web applications.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutMe;
