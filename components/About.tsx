"use client";

import { motion } from "framer-motion";
import { Code2, Trophy, Rocket, Server } from "lucide-react";

export default function About() {
  const timeline = [
    { year: "2014", event: "Started Coding", icon: Code2, desc: "6th grade - First line of code" },
    { year: "2023", event: "Teknofest Finalist", icon: Trophy, desc: "NLP Sentiment Analysis project" },
    { year: "2023", event: "Teknofest Competitor", icon: Rocket, desc: "Autonomous Robotaxi with ROS/C++" },
    { year: "2025", event: "Founded StoryLiv", icon: Rocket, desc: "AI interactive gaming startup" },
  ];

  const techStack = [
    "Python", "C++", "TypeScript", "React", "Next.js", 
    "PyTorch", "TensorFlow", "ROS", "Docker", "Kubernetes"
  ];

  const interests = [
    { icon: Rocket, title: "AI & Machine Learning", desc: "Building intelligent systems" },
    { icon: Trophy, title: "Autonomous Systems", desc: "Robotics & self-driving tech" },
    { icon: Server, title: "Self-Hosting", desc: "Mailcow, Nextcloud, HomeLab" },
  ];

  return (
    <section className="min-h-screen py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-electric-indigo to-neon-cyan bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            Computer Engineering student on a mission to push the boundaries of AI and automation
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="glass glass-hover rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-neon-cyan">Journey</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-electric-indigo/20 border border-electric-indigo/40 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-electric-indigo" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-neon-cyan font-mono mb-1">{item.year}</div>
                  <div className="font-semibold mb-1">{item.event}</div>
                  <div className="text-sm text-white/60">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="glass glass-hover rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-electric-indigo/50 transition-all text-sm font-mono"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className="glass glass-hover rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <interest.icon className="w-10 h-10 text-neon-cyan mb-4" />
              <h4 className="text-xl font-semibold mb-2">{interest.title}</h4>
              <p className="text-white/60 text-sm">{interest.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
