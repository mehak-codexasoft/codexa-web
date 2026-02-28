"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-teal-500 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold text-white">
                    C
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">CodexaSoft</div>
                    <div className="text-white/80 text-xs flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                      Online now
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-white/90 text-sm">
                Hi! How can we help you today?
              </p>
            </div>

            {/* Quick Actions */}
            <div className="bg-dark-800 p-4 space-y-3">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                Quick Actions
              </p>

              <a
                href="https://wa.me/1234567890?text=Hi%20CodexaSoft!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">
                    WhatsApp Chat
                  </div>
                  <div className="text-xs text-gray-500">Typically replies instantly</div>
                </div>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">
                    Call Us
                  </div>
                  <div className="text-xs text-gray-500">+1 (234) 567-890</div>
                </div>
              </a>

              <a
                href="mailto:hello@codexasoft.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-teal-400 transition-colors">
                    Email Us
                  </div>
                  <div className="text-xs text-gray-500">hello@codexasoft.com</div>
                </div>
              </a>

              <p className="text-[10px] text-gray-600 text-center pt-1">
                We typically respond within 24 hours
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className={`fixed bottom-8 right-24 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-dark-800 border border-white/[0.1] shadow-black/20"
            : "bg-green-500 shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-110"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-400" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 border-2 border-dark-900 animate-pulse" />
          </>
        )}
      </motion.button>
    </>
  );
}
