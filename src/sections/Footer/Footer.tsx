import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const FooterLinks = [
  {
    title: "Start a Conversation",
    items: [
      { label: "Email Me", href: "mailto:takshay766@gmail.com" },
      { label: "Schedule Call", href: "/contact" },
    ]
  },
  {
    title: "Connect",
    items: [
      { label: "GitHub", href: "https://github.com/Akshaythakur766", icon: Github },
      { label: "LinkedIn", href: "https://in.linkedin.com/in/akshay-thakur1766", icon: Linkedin },
      { label: "Instagram", href: "https://www.instagram.com/akshay_thakur_03", icon: Instagram },
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden bg-gray-950 border-t border-white/5 pt-16 pb-8 mt-auto">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">

          {/* Brand Column */}
          <div className="max-w-md">
            <Link href="/" className="text-2xl font-serif font-bold text-white mb-4 block">
              Akshay Thakur
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              Crafting digital experiences with a focus on performance, accessibility, and user-centric design.
              Building the future of the web, one commit at a time.
            </p>
            <div className="flex gap-4">
              {FooterLinks[1].items.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                  aria-label={social.label}
                >
                  {social.icon && <social.icon className="size-5 text-white/50 group-hover:text-white transition-colors" />}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-white mb-6">Navigation</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-white/50 hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-white/50 hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/projects" className="text-white/50 hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="/blog" className="text-white/50 hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-4">
                <li><Link href="/contact" className="text-white/50 hover:text-primary transition-colors">Get in Touch</Link></li>
                <li><a href="mailto:takshay766@gmail.com" className="text-white/50 hover:text-primary transition-colors">takshay766@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Akshay Thakur. All rights reserved.
          </div>
          <div className="flex gap-8">
            <span>Built with Next.js & Tailwind</span>
            <span>Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
