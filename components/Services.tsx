"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbot Development",
    desc: "Custom LLM-powered chatbots with RAG, fine-tuning, and seamless API integration for your business workflows.",
    gradient: "from-purple-500/20 to-electric-indigo/20",
    border: "group-hover:border-purple-400/60",
    iconColor: "text-purple-400",
    glowColor: "bg-purple-500",
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    desc: "End-to-end workflow automation with n8n. Connect your apps, automate repetitive tasks, and save hundreds of hours.",
    gradient: "from-orange-500/20 to-yellow-500/20",
    border: "group-hover:border-orange-400/60",
    iconColor: "text-orange-400",
    glowColor: "bg-orange-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Modern, performant web apps with Next.js and TypeScript. From landing pages to full-stack SaaS products.",
    gradient: "from-neon-cyan/20 to-blue-500/20",
    border: "group-hover:border-neon-cyan/60",
    iconColor: "text-neon-cyan",
    glowColor: "bg-neon-cyan",
  },
  {
    icon: Shield,
    title: "Self-Hosting & Security",
    desc: "Secure self-hosted infrastructure setup — Mailcow, Nextcloud, VPN, reverse proxy, and hardened Linux environments.",
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-400/60",
    iconColor: "text-green-400",
    glowColor: "bg-green-500",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-neon-cyan to-electric-indigo bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            Turning complex problems into elegant, automated solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`relative group glass rounded-2xl p-8 border border-white/10 transition-all duration-300 ${service.border} overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient bg on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="relative w-14 h-14 mb-6">
                  <div
                    className={`absolute inset-0 ${service.glowColor} rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
                  />
                  <div className="relative w-full h-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
