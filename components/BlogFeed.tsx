"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  published_at: string;
  feature_image: string | null;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogFeed() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/blog-posts");
        if (res.ok) {
          const data = await res.json();
          setPosts(data.posts || []);
        }
      } catch {
        // Silently fail, show nothing
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4" id="blog">
        <div className="max-w-6xl mx-auto text-center text-white/40">
          Loading posts...
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  // Filter out "Coming soon" placeholder
  const realPosts = posts.filter(
    (p) => p.title.toLowerCase() !== "coming soon"
  );

  if (realPosts.length === 0) return null;

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
          {realPosts.slice(0, 3).map((post, index) => (
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
                {post.feature_image ? (
                  <img
                    src={post.feature_image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/30 to-neon-cyan/20" />
                )}
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-neon-cyan font-mono mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.published_at)}
                </div>
                <h3 className="font-bold text-lg mb-2 leading-snug group-hover:text-neon-cyan transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1 line-clamp-3">
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
