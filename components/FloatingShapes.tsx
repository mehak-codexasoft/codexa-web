"use client";

import { motion } from "framer-motion";

export function FloatingCube({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ rotateX: 360, rotateY: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={`${className}`}
      style={{ perspective: "600px", transformStyle: "preserve-3d" }}
    >
      <div
        className="w-16 h-16 relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 border border-primary-500/30 bg-primary-500/5 backdrop-blur-sm"
          style={{ transform: "translateZ(32px)" }}
        />
        {/* Back */}
        <div
          className="absolute inset-0 border border-primary-500/20 bg-primary-500/5"
          style={{ transform: "translateZ(-32px) rotateY(180deg)" }}
        />
        {/* Left */}
        <div
          className="absolute inset-0 border border-teal-500/20 bg-teal-500/5"
          style={{ transform: "rotateY(-90deg) translateZ(32px)" }}
        />
        {/* Right */}
        <div
          className="absolute inset-0 border border-teal-500/30 bg-teal-500/5"
          style={{ transform: "rotateY(90deg) translateZ(32px)" }}
        />
        {/* Top */}
        <div
          className="absolute inset-0 border border-accent-500/20 bg-accent-500/5"
          style={{ transform: "rotateX(90deg) translateZ(32px)" }}
        />
        {/* Bottom */}
        <div
          className="absolute inset-0 border border-accent-500/20 bg-accent-500/5"
          style={{ transform: "rotateX(-90deg) translateZ(32px)" }}
        />
      </div>
    </motion.div>
  );
}

export function FloatingPyramid({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ rotateY: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className={`${className}`}
      style={{ perspective: "600px" }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" className="drop-shadow-lg">
        {/* Front face */}
        <polygon
          points="30,5 5,55 55,55"
          fill="none"
          stroke="rgba(20,184,166,0.4)"
          strokeWidth="1"
        />
        <polygon
          points="30,5 5,55 55,55"
          fill="rgba(20,184,166,0.05)"
        />
        {/* Inner triangle */}
        <polygon
          points="30,18 15,48 45,48"
          fill="none"
          stroke="rgba(45,212,191,0.3)"
          strokeWidth="0.5"
        />
        {/* Center line */}
        <line
          x1="30"
          y1="5"
          x2="30"
          y2="55"
          stroke="rgba(34,211,238,0.2)"
          strokeWidth="0.5"
        />
      </svg>
    </motion.div>
  );
}

export function FloatingRing({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ rotateX: 360, rotateZ: 15 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className={`${className}`}
      style={{ perspective: "600px" }}
    >
      <div
        className="w-20 h-20 rounded-full border-2 border-primary-500/30"
        style={{
          transform: "rotateX(60deg)",
          boxShadow: "0 0 20px rgba(20,184,166,0.15), inset 0 0 20px rgba(20,184,166,0.05)",
        }}
      />
    </motion.div>
  );
}

export function FloatingDiamond({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ rotateY: 360, rotateZ: 45 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className={`${className}`}
      style={{ perspective: "800px" }}
    >
      <div
        className="w-12 h-12 border border-teal-500/40 bg-teal-500/5 backdrop-blur-sm"
        style={{
          transform: "rotateX(45deg)",
          boxShadow: "0 0 15px rgba(45,212,191,0.1)",
        }}
      />
    </motion.div>
  );
}

export function FloatingOctahedron({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ rotateY: 360, rotateX: 180 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className={`${className}`}
      style={{ perspective: "600px" }}
    >
      <svg width="50" height="60" viewBox="0 0 50 60">
        {/* Top half */}
        <polygon
          points="25,2 2,30 48,30"
          fill="rgba(20,184,166,0.05)"
          stroke="rgba(20,184,166,0.35)"
          strokeWidth="0.8"
        />
        {/* Bottom half */}
        <polygon
          points="25,58 2,30 48,30"
          fill="rgba(34,211,238,0.05)"
          stroke="rgba(34,211,238,0.3)"
          strokeWidth="0.8"
        />
        {/* Center line */}
        <line
          x1="25"
          y1="2"
          x2="25"
          y2="58"
          stroke="rgba(45,212,191,0.15)"
          strokeWidth="0.5"
        />
      </svg>
    </motion.div>
  );
}

export function ParticleField({ className = "" }: { className?: string }) {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary-500/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
