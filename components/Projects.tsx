"use client";

import { motion } from "framer-motion";
import { Sparkles, Car, Brain, Server, Globe, ExternalLink } from "lucide-react";

const tagColors: Record<string, string> = {
  AI: "bg-purple-500/15 border-purple-400/40 text-purple-300",
  ML: "bg-pink-500/15 border-pink-400/40 text-pink-300",
  Gaming: "bg-yellow-500/15 border-yellow-400/40 text-yellow-300",
  Startup: "bg-orange-500/15 border-orange-400/40 text-orange-300",
  ROS: "bg-blue-500/15 border-blue-400/40 text-blue-300",
  "C++": "bg-cyan-500/15 border-cyan-400/40 text-cyan-300",
  "Computer Vision": "bg-green-500/15 border-green-400/40 text-green-300",
  Robotics: "bg-teal-500/15 border-teal-400/40 text-teal-300",
  NLP: "bg-rose-500/15 border-rose-400/40 text-rose-300",
  BERT: "bg-indigo-500/15 border-indigo-400/40 text-indigo-300",
  Python: "bg-sky-500/15 border-sky-400/40 text-sky-300",
  PyTorch: "bg-orange-500/15 border-orange-400/40 text-orange-300",
  Docker: "bg-blue-500/15 border-blue-400/40 text-blue-300",
  Kubernetes: "bg-violet-500/15 border-violet-400/40 text-violet-300",
  DevOps: "bg-emerald-500/15 border-emerald-400/40 text-emerald-300",
  "Self-Hosting": "bg-lime-500/15 border-lime-400/40 text-lime-300",
  Platform: "bg-amber-500/15 border-amber-400/40 text-amber-300",
  "Space Tech": "bg-indigo-500/15 border-indigo-400/40 text-indigo-300",
  Hackathon: "bg-red-500/15 border-red-400/40 text-red-300",
  TypeScript: "bg-blue-500/15 border-blue-400/40 text-blue-300",
};

const defaultTagColor = "bg-electric-indigo/10 border-electric-indigo/30 text-electric-indigo";

const projects = [
  {
    title: "StoryLiv",
    desc: "AI-powered interactive gaming platform. Established in 2025. Building the future of narrative-driven gaming with machine learning.",
    icon: Sparkles,
    tags: ["AI", "ML", "Gaming", "Startup"],
    featured: true,
    liveUrl: "https://storyliv.com",
  },
  {
    title: "TUA AstroHackathon Platform",
    desc: "Official platform for Türkiye Uzay Ajansı's AstroHackathon event. Led IT infrastructure, participant management, and live event systems.",
    icon: Globe,
    tags: ["Platform", "Space Tech", "Hackathon", "TypeScript"],
    featured: true,
    liveUrl: "https://tuaastrohackathon.com",
  },
  {
    title: "Autonomous Robotaxi",
    desc: "ROS/C++ based autonomous vehicle system for Teknofest competition. Computer vision & path planning.",
    icon: Car,
    tags: ["ROS", "C++", "Computer Vision", "Robotics"],
    featured: false,
    liveUrl: null,
  },
  {
    title: "Attention Please",
    desc: "NLP sentiment analysis system using BERT. Teknofest Finalist project for social media monitoring.",
    icon: Brain,
    tags: ["NLP", "BERT", "Python", "PyTorch"],
    featured: false,
    liveUrl: null,
  },
  {
    title: "HomeLab Infrastructure",
    desc: "Self-hosted ecosystem with Mailcow, Nextcloud, monitoring stack. Full DevOps automation.",
    icon: Server,
    tags: ["Docker", "Kubernetes", "DevOps", "Self-Hosting"],
    featured: false,
    liveUrl: null,
  },
];

export default function Projects() {
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
              className="relative glass glass-hover rounded-2xl p-8 flex flex-col"
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
              <p className="text-white/70 mb-6 leading-relaxed flex-1">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-xs font-mono rounded-lg border ${tagColors[tag] ?? defaultTagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live link */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neon-cyan hover:text-electric-indigo transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.liveUrl.replace("https://", "")}
                </a>
              )}
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
