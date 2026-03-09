"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    slug: "tubitak-bigg-yolculugu",
    title: "TÜBİTAK BİGG ile 900K TL Hibe Aldık",
    excerpt:
      "StoryLiv olarak TÜBİTAK BİGG programından 900.000 TL hibe almaya hak kazandık. Bu süreçte öğrendiklerimizi ve başvuru stratejimizi paylaşıyorum.",
    date: "2026-02-15",
    coverImage: "/images/blog-tubitak.jpg",
    fallback: true,
  },
  {
    slug: "itu-cekirdek-deneyimi",
    title: "İTÜ Çekirdek Accelerator'da 6 Ay",
    excerpt:
      "İstanbul Teknik Üniversitesi'nin girişim hızlandırma programında geçirdiğimiz 6 ayın ardından startup hayatı hakkında gerçekçi bir değerlendirme.",
    date: "2025-11-10",
    coverImage: "/images/blog-itu.jpg",
    fallback: true,
  },
  {
    slug: "tua-astrohackathon-it-director",
    title: "TUA AstroHackathon: IT Director Olarak Sahada",
    excerpt:
      "Türkiye Uzay Ajansı'nın AstroHackathon etkinliğinde IT Director olarak platform yönetimi ve teknik altyapı kurulumunda yaşadıklarım.",
    date: "2026-01-20",
    coverImage: "/images/blog-tua.jpg",
    fallback: true,
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogFeed() {
  return (
    <section className="py-20 px-4" id="blog">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-electric-indigo to-neon-cyan bg-clip-text text-transparent">
              Latest Posts
            </span>
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            Thoughts on AI, startups, and building in public
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <motion.a
              key={post.slug}
              href={`https://blog.mertozek.me/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-2xl overflow-hidden group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Cover Image */}
              <div className="relative h-44 bg-gradient-to-br from-electric-indigo/20 to-neon-cyan/20 flex items-center justify-center overflow-hidden">
                {!post.fallback ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/30 to-neon-cyan/20" />
                )}
                <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <span className="text-2xl">✍️</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-neon-cyan font-mono mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </div>
                <h3 className="font-bold text-lg mb-2 leading-snug group-hover:text-neon-cyan transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1.5 mt-4 text-electric-indigo text-sm font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://blog.mertozek.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass glass-hover rounded-xl px-8 py-4 font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-neon-cyan to-electric-indigo bg-clip-text text-transparent">
              View All Posts
            </span>
            <ExternalLink className="w-4 h-4 text-neon-cyan" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
