"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" id="contact">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="glass glass-hover rounded-3xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/10 to-neon-cyan/10 pointer-events-none" />

          {/* Icon */}
          <motion.div
            className="relative w-20 h-20 mx-auto mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="absolute inset-0 bg-neon-cyan rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="relative w-full h-full bg-neon-cyan/20 rounded-full border-2 border-neon-cyan/40 flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-neon-cyan" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-neon-cyan via-electric-indigo to-neon-cyan bg-clip-text text-transparent">
              Let&apos;s Build Something Together
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-white/70 text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Whether you have a project in mind, want to collaborate, or just want to say hi, 
            I&apos;m always open to new opportunities and conversations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://linkedin.com/in/mertozek"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl px-8 py-4 font-semibold flex items-center gap-3 transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-neon-cyan group-hover:rotate-12 transition-transform" />
              <span>Connect on LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/MT0100"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl px-8 py-4 font-semibold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-electric-indigo to-neon-cyan bg-clip-text text-transparent">
                Explore GitHub
              </span>
            </motion.a>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-white/40 text-sm">
              © 2025 Mert Özek. Built with Next.js, TypeScript, and Framer Motion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
