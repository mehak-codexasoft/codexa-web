"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Users, Code2, Clock } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successful projects across industries",
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "Happy Clients",
    description: "Businesses trust our expertise",
  },
  {
    icon: Code2,
    value: 50,
    suffix: "+",
    label: "Team Members",
    description: "Talented developers & designers",
  },
  {
    icon: Clock,
    value: 8,
    suffix: "+",
    label: "Years Experience",
    description: "Of building great software",
  },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-teal-500/10 to-accent-500/10" />
      <div className="absolute inset-0 bg-dark-900/80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/10 to-teal-500/10 flex items-center justify-center mx-auto mb-4 group-hover:from-primary-500/20 group-hover:to-teal-500/20 transition-all duration-300">
                <stat.icon className="w-7 h-7 text-primary-400" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)] mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
