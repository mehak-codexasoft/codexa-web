"use client";

import { motion } from "framer-motion";
import { Clock, ArrowLeft, Tag, Calendar, User } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";

type BlogPost = (typeof blogPosts)[number];

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-500/15 rounded-full blur-[128px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-medium border border-primary-500/20">
                {post.category}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 pb-8 border-b border-white/[0.05]">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${post.authorColor} flex items-center justify-center text-sm font-bold text-white`}>
                {post.authorAvatar}
              </div>
              <div>
                <div className="font-semibold text-white">{post.author}</div>
                <div className="text-sm text-gray-500">{post.authorRole} &middot; {post.date}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-20">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <article className="prose prose-invert prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mt-12 mb-4 gradient-text"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={i}
                      className="text-xl md:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mt-8 mb-3 text-white"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                return (
                  <p key={i} className="text-gray-400 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/[0.05]">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-4 py-2 rounded-full bg-white/[0.05] text-gray-300 border border-white/[0.08] hover:border-primary-500/30 hover:text-white transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding relative border-t border-white/[0.05]">
          <div className="container-custom relative z-10">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-8">
              Related <span className="gradient-text">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="block group">
                  <div className="glass-card rounded-xl p-6 hover:bg-white/[0.06] transition-all duration-300 glow-effect-hover">
                    <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">
                      {related.category}
                    </span>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mt-2 mb-2 group-hover:text-white transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{related.date}</span>
                      <span className="text-primary-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowLeft className="w-3 h-3 rotate-180" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
