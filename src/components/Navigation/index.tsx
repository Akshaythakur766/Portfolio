"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
export const Navigation = () => {
  const pathname = usePathname();
  console.log({pathname , location:location.pathname})
  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const isActive = (path: string) => pathname == path || false ;
  return (
    <nav className="fixed top-0 right-0 left-0 glass-effect">
      <div>
        <div className="flex items-center justify-between px-4 py-4 ">
          <Link className="text-2xl font-bold gradient-text" href={"/home"}>
            Portfolio
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks?.map((link, index) => (
              <Link
                className={`relative py-2 px-1 transition-colors duration-300  ${
                  isActive(link?.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                href={link?.path}
                key={index}
              >
                {link?.name}
                {isActive(link?.path) && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full animate-fade-in"/>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
