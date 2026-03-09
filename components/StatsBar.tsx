"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Award, Zap, CheckCircle } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Projects", value: 5, suffix: "+", prefix: "" },
  { icon: Award, label: "TÜBİTAK Funded", value: null, suffix: "", prefix: "" },
  { icon: Zap, label: "Automations", value: 50, suffix: "+", prefix: "" },
  { icon: CheckCircle, label: "Available for Hire", value: null, suffix: "", prefix: "" },
];

function AnimatedNumber({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="glass rounded-2xl px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, type: "spring" }}
            >
              <stat.icon className="w-6 h-6 text-neon-cyan mb-1" />
              <div className="text-3xl font-bold bg-gradient-to-r from-electric-indigo to-neon-cyan bg-clip-text text-transparent">
                {stat.value !== null ? (
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                ) : stat.label === "TÜBİTAK Funded" ? (
                  <span className="text-neon-cyan text-2xl">✓ Yes</span>
                ) : (
                  <span className="text-green-400 text-2xl">✓ Open</span>
                )}
              </div>
              <div className="text-white/60 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
