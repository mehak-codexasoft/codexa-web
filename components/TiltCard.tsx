"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareEnabled?: boolean;
  tiltAmount?: number;
}

export default function TiltCard({
  children,
  className = "",
  glareEnabled = true,
  tiltAmount = 10,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    setRotateX(-percentY * tiltAmount);
    setRotateY(percentX * tiltAmount);
    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      {/* Glare Effect */}
      {glareEnabled && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: isHovering ? 0.15 : 0,
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}
