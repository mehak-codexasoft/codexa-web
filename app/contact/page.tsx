"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@codexasoft.com", "support@codexasoft.com"],
    color: "from-primary-500 to-teal-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (234) 567-890", "+92 (321) 456-7890"],
    color: "from-teal-400 to-accent-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Tech Street", "Silicon Valley, CA 94025"],
    color: "from-accent-500 to-blue-500",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
    color: "from-blue-500 to-primary-500",
  },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "AI & Machine Learning",
  "DevOps & Automation",
  "Custom Software",
  "Consultation",
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website may take 4-6 weeks, while a complex SaaS platform could take 3-6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing models including fixed-price, time & material, and dedicated team engagement. The best model depends on your project scope and requirements.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely! We offer comprehensive maintenance and support packages including bug fixes, performance monitoring, feature updates, and 24/7 emergency support.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes! We offer team augmentation services where our developers integrate seamlessly with your in-house team, following your workflows and processes.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in React, Next.js, Node.js, Python, Flutter, AWS, Azure, AI/ML, and more. We choose the best tech stack based on your specific project requirements.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear about it. Get in
              touch and let&apos;s turn your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-4 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card p-6 rounded-xl hover:bg-white/[0.06] transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail) => (
                  <p key={detail} className="text-sm text-gray-400">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
                  Send a Message
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                Tell Us About Your <span className="gradient-text">Project</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@company.com"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Your Company"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Service Needed *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-dark-800 text-gray-400">
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-dark-800">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-5 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-dark-800 text-gray-400">
                      Select budget range
                    </option>
                    <option value="5k-10k" className="bg-dark-800">$5,000 - $10,000</option>
                    <option value="10k-25k" className="bg-dark-800">$10,000 - $25,000</option>
                    <option value="25k-50k" className="bg-dark-800">$25,000 - $50,000</option>
                    <option value="50k-100k" className="bg-dark-800">$50,000 - $100,000</option>
                    <option value="100k+" className="bg-dark-800">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="w-full px-5 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Quick Contact */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-5">
                  <a
                    href="mailto:hello@codexasoft.com"
                    className="flex items-center gap-4 text-gray-400 hover:text-primary-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">
                        Email
                      </div>
                      <div className="text-sm">hello@codexasoft.com</div>
                    </div>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-4 text-gray-400 hover:text-primary-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">
                        Phone
                      </div>
                      <div className="text-sm">+1 (234) 567-890</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">
                        Address
                      </div>
                      <div className="text-sm">123 Tech Street, Silicon Valley</div>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-8 pt-6 border-t border-white/[0.05]">
                  <p className="text-sm text-gray-500 mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 text-gray-500 transition-all"
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-teal-500/5" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)] mb-2">
                    24h
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                    Average Response Time
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    We value your time. Our team responds to every inquiry
                    within 24 hours during business days.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <div className="neon-line mx-auto mb-6" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
