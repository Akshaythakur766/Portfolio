"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, FileText, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Blog", path: "/blog", icon: FileText },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Fixed Top Brand Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 py-6 px-6 md:px-12 flex justify-between items-center pointer-events-none">
        <Link href="/" className="pointer-events-auto">
          <div className="text-xl font-serif font-bold tracking-tight text-white/90 hover:text-white transition-colors">
            Akshay Thakur
          </div>
          <p className="text-[10px] text-white/40 font-mono tracking-widest uppercase">Frontend Architect</p>
        </Link>

        <a href="https://github.com/Akshaythakur766" target="_blank" className="pointer-events-auto hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-xs font-medium text-white/70">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for work
        </a>
      </div>

      {/* Desktop Floating Dock */}
      <div className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/10 shadow-lg shadow-primary/5">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                className="relative group"
              >
                <div
                  className={`relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${active
                    ? "bg-white/10 text-white scale-110"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <link.icon className={`size-5 transition-transform duration-300 ${active ? "scale-110" : "group-hover:scale-110"}`} />

                  {/* Tooltip */}
                  <span className="absolute top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 border border-white/10 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {link.name}
                  </span>

                  {/* Active Dot */}
                  {active && (
                    <motion.div
                      layoutId="active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary"
                    />
                  )}
                </div>
              </Link>
            );
          })}

          <div className="w-px h-8 bg-white/10 mx-2" />

          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-glow"
          >
            Let's Talk
          </Link>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="font-bold text-lg gradient-text">
          Portfolio
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-white/5 text-white"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-lg font-medium transition-colors ${isActive(link.path)
                    ? "bg-primary/20 text-primary border border-primary/20"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  <link.icon className="size-6" />
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 p-4 rounded-xl bg-primary text-white text-lg font-bold shadow-glow"
              >
                <Mail className="size-6" />
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;