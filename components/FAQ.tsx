"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. A simple website takes 4-6 weeks, while complex SaaS platforms may take 3-6 months. We provide detailed timelines during our free discovery call.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing: fixed-price for well-defined projects, time & material for evolving scopes, and dedicated team engagement for long-term partnerships. Most projects range from $10K to $100K+.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely! We offer comprehensive maintenance packages including bug fixes, performance monitoring, security updates, feature additions, and 24/7 emergency support.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in React, Next.js, Node.js, Python, Flutter, React Native, AWS, Azure, AI/ML (TensorFlow, OpenAI), and more. We choose the best tech stack for each project's needs.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes! We offer team augmentation services where our developers integrate seamlessly with your in-house team, following your existing workflows, tools, and processes.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow agile methodology with bi-weekly sprints, code reviews, automated testing (95%+ coverage), CI/CD pipelines, and dedicated QA engineers. Every project goes through rigorous testing before launch.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function FAQ() {
  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <div className="neon-line mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know before starting your project with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              variants={itemVariants}
              className="glass-card rounded-xl group"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-medium font-[family-name:var(--font-space-grotesk)] hover:text-primary-400 transition-colors list-none">
                {faq.question}
                <ArrowRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform shrink-0 ml-4" />
              </summary>
              <div className="px-6 pb-6 -mt-2">
                <p className="text-sm text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.details>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm mb-3">
            Still have questions?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm hover:text-primary-300 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
