//**Native Imports */
import React from "react";

//**Icons Imports */
import { Code, Palette, Zap } from "lucide-react";

//**Components Imports */
import Card from "@/components/Card/Card";

export const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I specialize in creating digital experiences that are both beautiful
            and functional
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 glass-effect card-hover">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 animate-float">
              <Code className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <p className="text-muted-foreground">
              Expert in React.js, Next.js, TypeScript, and modern frontend
              technologies
            </p>
          </Card>
          <Card className="p-8 glass-effect card-hover [animation-delay:200ms]">
            <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mb-6 animate-float">
              <Palette className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-muted-foreground">
              Creating intuitive and beautiful user interfaces with attention to
              detail
            </p>
          </Card>
          <Card className="p-8 glass-effect card-hover [animation-delay:400ms]">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6 animate-float">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Performance</h3>
            <p className="text-muted-foreground">
              Optimizing applications for speed, accessibility, and best
              practices
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
