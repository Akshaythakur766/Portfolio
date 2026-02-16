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
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* 
        Desktop Top Floating Pill 
        Center aligned, glassmorphism, contains Brand + Links + CTA 
      */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
        <nav className="flex items-center gap-2 p-2 rounded-full bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-primary/5">

          {/* Brand (Left) */}
          <Link href="/" className="px-4 py-2 flex items-center gap-2 rounded-full hover:bg-white/5 transition-colors group">
            <div className="size-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-white text-xs">
              AT
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white leading-none group-hover:text-primary transition-colors">Akshay</span>
              <span className="text-[10px] text-white/50 font-mono leading-none">dev</span>
            </div>
          </Link>

          <div className="w-px h-8 bg-white/10 mx-1" />

          {/* Links (Center) */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active ? "text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="w-px h-8 bg-white/10 mx-1" />

          {/* CTA (Right) */}
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-white text-gray-900 text-sm font-bold hover:bg-gray-200 transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </nav>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="font-bold text-lg text-white flex items-center gap-2">
          <div className="size-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-xs">AT</div>
          <span className="font-black tracking-tight">Akshay</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-white/5 text-white border border-white/10"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-gray-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-lg font-bold transition-colors ${isActive(link.path)
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:text-white"
                    }`}
                >
                  <link.icon className="size-5" />
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10 my-2" />
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white text-gray-950 text-lg font-black"
              >
                <Mail className="size-5" />
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;