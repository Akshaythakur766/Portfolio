"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <div className="py-20 lg:py-28" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-white/10 backdrop-blur-sm py-12 px-10 rounded-3xl text-center relative overflow-hidden z-0 group">

          <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImage.src})` }}></div>

          {/* Animated Background Blob */}
          <div className="absolute -right-20 -top-20 size-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-500"></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between relative z-10">
            <div className="text-left max-w-xl">
              <h2 className="font-bold text-3xl md:text-5xl text-white mb-4 leading-tight">
                Ready to start your <br />
                <span className="gradient-text">Next Project?</span>
              </h2>
              <p className="text-white/60 text-lg">
                Let's turn your idea into a digital reality. I'm currently available for freelance projects and open to full-time opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-4 min-w-[200px]">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-white font-bold hover:shadow-glow hover:scale-105 transition-all duration-300">
                <Mail className="size-5" />
                Contact Me
              </Link>
              <a href="mailto:takshay766@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors">
                <MessageCircle className="size-5" />
                Email Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
