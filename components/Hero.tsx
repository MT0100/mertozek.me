"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, FileText, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/MT0100", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mertozek", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/mertozek", label: "Twitter" },
    { icon: FileText, href: "/cv.pdf", label: "CV" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-indigo rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image with Glow */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-electric-indigo rounded-full blur-2xl opacity-40 animate-pulse" />
            <Image
              src="/images/profile.png"
              alt="Mert Özek"
              width={128}
              height={128}
              className="relative rounded-full border-2 border-white/20"
              priority
            />
          </div>

          {/* Name with gradient */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, oklch(0.95 0 0), oklch(0.8 0.15 200))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mert Özek
          </motion.h1>

          {/* Role with icon */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Sparkles className="w-5 h-5 text-electric-indigo" />
            <h2 className="text-2xl md:text-3xl text-neon-cyan font-light">
              AI Engineer & Founder of StoryLiv
            </h2>
            <Sparkles className="w-5 h-5 text-electric-indigo" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg text-white/70 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building the future of AI-powered interactive experiences. 
            Passionate about autonomous systems, machine learning, and self-hosted infrastructure.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover rounded-xl p-4 flex items-center gap-3 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <link.icon className="w-5 h-5 text-neon-cyan" />
                <span className="text-sm font-medium">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-neon-cyan rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
