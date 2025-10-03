"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/Button/Button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const isActive = (path: string) => pathname == path || false;
  return (
    <nav className="fixed top-0 right-0 left-0 glass-effect border-b border-border/50">
      <div className="container mx-auto  py-4">
        <div className="flex items-center justify-between  ">
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
                {isActive(link?.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full animate-fade-in" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            size="sm"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks?.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`py-2 px-3 rounded-lg transition-colors duration-300 ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
