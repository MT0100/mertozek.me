"use client";

import { motion } from "framer-motion";
import { Sparkles, Car, Brain, Server } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "StoryLiv",
      desc: "AI-powered interactive gaming platform. Established in 2025. Building the future of narrative-driven gaming with machine learning.",
      icon: Sparkles,
      tags: ["AI", "ML", "Gaming", "Startup"],
      featured: true,
    },
    {
      title: "Autonomous Robotaxi",
      desc: "ROS/C++ based autonomous vehicle system for Teknofest competition. Computer vision & path planning.",
      icon: Car,
      tags: ["ROS", "C++", "Computer Vision", "Robotics"],
      featured: true,
    },
    {
      title: "Attention Please",
      desc: "NLP sentiment analysis system using BERT. Teknofest Finalist project for social media monitoring.",
      icon: Brain,
      tags: ["NLP", "BERT", "Python", "PyTorch"],
      featured: false,
    },
    {
      title: "HomeLab Infrastructure",
      desc: "Self-hosted ecosystem with Mailcow, Nextcloud, monitoring stack. Full DevOps automation.",
      icon: Server,
      tags: ["Docker", "Kubernetes", "DevOps", "Self-Hosting"],
      featured: false,
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-neon-cyan to-electric-indigo bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            Building innovative solutions at the intersection of AI, robotics, and cloud infrastructure
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`glass glass-hover rounded-2xl p-8 ${
                project.featured ? "md:col-span-1" : "md:col-span-1"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon with glow */}
              <div className="relative w-14 h-14 mb-6">
                <div className="absolute inset-0 bg-neon-cyan rounded-xl blur-xl opacity-30" />
                <div className="relative w-full h-full bg-neon-cyan/20 rounded-xl border border-neon-cyan/40 flex items-center justify-center">
                  <project.icon className="w-7 h-7 text-neon-cyan" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-white/70 mb-6 leading-relaxed">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-electric-indigo/10 border border-electric-indigo/30 text-electric-indigo"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-indigo/0 to-neon-cyan/0 group-hover:from-electric-indigo/5 group-hover:to-neon-cyan/5 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-white/60 mb-4">Interested in collaborating?</p>
          <motion.a
            href="https://github.com/MT0100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block glass glass-hover rounded-xl px-8 py-4 font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-neon-cyan to-electric-indigo bg-clip-text text-transparent">
              View All Projects on GitHub →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
