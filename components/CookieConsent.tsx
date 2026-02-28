"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-[55] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 border border-white/[0.08] shadow-2xl shadow-black/50">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Cookie className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    We use cookies
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve
                    personalized content, and analyze our traffic. By clicking
                    &ldquo;Accept All&rdquo;, you consent to our use of cookies.{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-primary-400 hover:underline"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                <button
                  onClick={decline}
                  className="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium text-gray-400 rounded-full border border-white/[0.1] hover:bg-white/[0.05] hover:text-white transition-all"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="flex-1 md:flex-none px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
