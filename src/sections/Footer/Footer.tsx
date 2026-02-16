"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

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
    <footer className="relative z-10 overflow-hidden bg-gray-950 border-t border-white/5 pt-20 pb-10 mt-auto">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">

          {/* Brand Column */}
          <div className="max-w-lg">
            <Link href="/" className="inline-block mb-8 group">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-white flex items-center justify-center text-gray-950 font-black text-sm group-hover:scale-110 transition-transform duration-300">
                  AT
                </div>
                <span className="text-3xl font-sans font-black text-white tracking-tighter">
                  Akshay<span className="text-white/30">.dev</span>
                </span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed text-lg mb-8 max-w-sm">
              Architecting scalable digital ecosystems with a focus on performance, accessibility, and pixel-perfect engineering.
            </p>

            {/* Status Beacon */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono font-bold text-white/80 uppercase tracking-widest">All Systems Operational</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">
            <div>
              <h4 className="font-sans font-bold text-white mb-6 text-lg">Navigation</h4>
              <ul className="space-y-4">
                {["Home", "About", "Projects", "Blog"].map((item) => (
                  <li key={item}>
                    <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-white/50 hover:text-white transition-colors font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-bold text-white mb-6 text-lg">Socials</h4>
              <ul className="space-y-4">
                {FooterLinks[1].items.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" className="text-white/50 hover:text-white transition-colors font-medium flex items-center gap-2">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-sans font-bold text-white mb-6 text-lg">Contact</h4>
              <ul className="space-y-4">
                <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors font-medium">Get in Touch</Link></li>
                <li><a href="mailto:takshay766@gmail.com" className="text-white/50 hover:text-white transition-colors font-medium break-all">takshay766@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-mono uppercase tracking-widest">
          <div>
            &copy; {new Date().getFullYear()} Akshay Thakur.
          </div>
          <div className="flex gap-8">
            <span>Next.js 14 &bull; Tailwind &bull; Framer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
