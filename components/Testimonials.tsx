"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVentures Inc.",
    content:
      "CodexaSoft transformed our outdated system into a modern, scalable platform. Their team's expertise and dedication exceeded our expectations. Truly a game-changer for our business.",
    rating: 5,
    avatar: "SJ",
    color: "from-blue-500 to-primary-500",
  },
  {
    name: "Ahmed Khan",
    role: "CTO",
    company: "DataFlow Solutions",
    content:
      "The AI-powered analytics dashboard they built for us has revolutionized how we make decisions. Incredible attention to detail and top-notch code quality throughout.",
    rating: 5,
    avatar: "AK",
    color: "from-primary-500 to-teal-500",
  },
  {
    name: "Emily Chen",
    role: "Founder",
    company: "GreenLeaf Apps",
    content:
      "Working with CodexaSoft was a fantastic experience. They delivered our mobile app ahead of schedule with features we didn't even think were possible. Highly recommended!",
    rating: 5,
    avatar: "EC",
    color: "from-teal-500 to-accent-500",
  },
  {
    name: "Michael Rivera",
    role: "VP of Engineering",
    company: "CloudScale Corp.",
    content:
      "Their cloud migration expertise saved us thousands in infrastructure costs while improving our system performance by 300%. An exceptional team to work with.",
    rating: 5,
    avatar: "MR",
    color: "from-accent-500 to-blue-500",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Product Manager",
    company: "InnoHealth",
    content:
      "The telemedicine platform CodexaSoft built has helped us serve over 100,000 patients. Their understanding of healthcare compliance was impressive.",
    rating: 5,
    avatar: "FA",
    color: "from-green-500 to-accent-500",
  },
  {
    name: "David Park",
    role: "Director",
    company: "EduTech Global",
    content:
      "From concept to launch, CodexaSoft delivered a world-class e-learning platform. Their proactive communication and agile approach made the entire process smooth.",
    rating: 5,
    avatar: "DP",
    color: "from-orange-500 to-red-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[128px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="neon-line mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped transform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="glass-card p-8 rounded-xl hover:bg-white/[0.06] transition-all duration-300 group relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary-500/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-sm font-bold text-white`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
