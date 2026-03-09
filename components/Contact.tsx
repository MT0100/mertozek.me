"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, User, AtSign } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Placeholder — wire up to your preferred email service
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-neon-cyan via-electric-indigo to-neon-cyan bg-clip-text text-transparent">
              Let&apos;s Build Something Together
            </span>
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Open to freelance projects, collaborations, and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Hire Me CTA */}
          <motion.div
            className="glass glass-hover rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/10 to-neon-cyan/10 pointer-events-none" />

            <div className="relative">
              <div className="w-16 h-16 mb-6 relative">
                <div className="absolute inset-0 bg-neon-cyan rounded-full blur-2xl opacity-40 animate-pulse" />
                <div className="relative w-full h-full bg-neon-cyan/20 rounded-full border-2 border-neon-cyan/40 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-neon-cyan" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3">Available for Hire</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Looking for an AI engineer or automation specialist? I&apos;m open to
                freelance projects and part-time collaborations.
              </p>

              <div className="flex flex-col gap-3">
                <motion.a
                  href="https://linkedin.com/in/mertozek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-electric-indigo hover:bg-electric-indigo/80 text-white rounded-xl px-6 py-3 font-semibold transition-all"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Mail className="w-5 h-5" />
                  Hire Me on LinkedIn
                </motion.a>

                <motion.a
                  href="https://github.com/MT0100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass glass-hover rounded-xl px-6 py-3 font-semibold transition-all"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="bg-gradient-to-r from-electric-indigo to-neon-cyan bg-clip-text text-transparent">
                    Explore GitHub
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="glass glass-hover rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                <div className="text-5xl">🚀</div>
                <h3 className="text-2xl font-bold text-neon-cyan">Message Sent!</h3>
                <p className="text-white/60">I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-electric-indigo/60 transition-colors"
                  />
                </div>

                <div className="relative">
                  <AtSign className="absolute left-3 top-3.5 w-4 h-4 text-white/40" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-electric-indigo/60 transition-colors"
                  />
                </div>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-electric-indigo/60 transition-colors resize-none"
                />

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-electric-indigo to-neon-cyan text-white rounded-xl py-3 px-6 font-semibold disabled:opacity-60 transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
