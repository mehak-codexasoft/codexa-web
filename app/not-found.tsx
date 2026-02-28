"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px]" />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Big 404 */}
            <div className="relative mb-8">
              <span className="text-[150px] md:text-[200px] font-bold font-[family-name:var(--font-space-grotesk)] gradient-text leading-none opacity-20">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500/20 to-teal-500/20 flex items-center justify-center">
                  <Search className="w-10 h-10 text-primary-400" />
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              Page <span className="gradient-text">Not Found</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has
              been moved to a different URL.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-gray-300 glass-card rounded-full hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
