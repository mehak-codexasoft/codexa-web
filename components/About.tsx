"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import TiltCard from "./TiltCard";

const highlights = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with innovative software solutions that drive growth and digital transformation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading software partner for companies seeking to shape the future through technology.",
  },
  {
    icon: Award,
    title: "Our Values",
    description:
      "Excellence, innovation, transparency, and client-first approach in everything we build.",
  },
  {
    icon: Users,
    title: "Our Culture",
    description:
      "A collaborative environment where passionate developers, designers, and strategists thrive together.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[128px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
              About CodexaSoft
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-6">
              Crafting Software{" "}
              <span className="gradient-text">Excellence</span> Since 2016
            </h2>
            <div className="neon-line mb-8" />

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              At CodexaSoft, we are more than just a software company — we are
              your technology partner. With over 8 years of experience, our team
              of expert developers, designers, and strategists work together to
              deliver solutions that matter.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              From startups to enterprises, we have helped hundreds of businesses
              transform their ideas into powerful digital products that users
              love and businesses rely on.
            </p>

            {/* Stats with 3D hover */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "500+", label: "Projects" },
                { value: "200+", label: "Clients" },
                { value: "50+", label: "Team" },
                { value: "8+", label: "Years" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, scale: 1.08 }}
                  className="text-center cursor-default"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - 3D Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TiltCard className="h-full glass-card rounded-xl" tiltAmount={12}>
                  <div className="p-6 group h-full">
                    <motion.div
                      whileHover={{ scale: 1.15, rotateY: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:from-primary-500/30 group-hover:to-teal-500/30 transition-all"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <item.icon className="w-6 h-6 text-primary-400" />
                    </motion.div>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
