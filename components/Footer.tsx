"use client";

import { Github, Linkedin, Twitter, Globe } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/MT0100", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/mertozek", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/mertozek", label: "Twitter" },
  { icon: Globe, href: "https://blog.mertozek.me", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-white/50 text-sm">
          © 2026{" "}
          <span className="text-white/80 font-semibold">Mert Özek</span>. Built
          with{" "}
          <span className="text-neon-cyan">Next.js</span> &amp; Framer Motion.
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-6 text-sm text-white/50">
          {["about", "services", "projects", "blog", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-neon-cyan transition-colors capitalize"
            >
              {section}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-white/40 hover:text-neon-cyan transition-colors"
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
