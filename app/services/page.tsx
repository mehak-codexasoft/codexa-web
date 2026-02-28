"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  ShoppingBag,
  Brain,
  Layout,
  ArrowRight,
  CheckCircle,
  Code2,
  Database,
  Monitor,
  Shield,
  Cpu,
  GitBranch,
  Layers,
  Wifi,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify Store Development",
    description:
      "Custom Shopify stores with stunning themes, seamless checkout, and integrations that drive sales and conversions.",
    color: "from-green-500 to-teal-500",
    features: [
      "Custom Shopify Theme Development",
      "Shopify Plus Enterprise Solutions",
      "Payment Gateway Integration",
      "Inventory & Order Management",
      "Shopify App Development",
      "Store Migration & Optimization",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "Hydrogen", "Remix", "GraphQL"],
  },
  {
    icon: Layout,
    title: "WordPress Development",
    description:
      "Professional WordPress websites with custom themes, plugins, and optimized performance for your business needs.",
    color: "from-blue-500 to-primary-500",
    features: [
      "Custom Theme Development",
      "Plugin Development & Customization",
      "WooCommerce Integration",
      "Speed & Performance Optimization",
      "SEO & Security Hardening",
      "Multisite & Multilingual Setup",
    ],
    technologies: ["WordPress", "PHP", "MySQL", "Elementor", "WooCommerce", "ACF"],
  },
  {
    icon: Brain,
    title: "AI App Development",
    description:
      "Intelligent AI-powered applications with custom models, chatbots, and automation that transform your business operations.",
    color: "from-purple-500 to-accent-500",
    features: [
      "Custom AI Model Development",
      "Chatbot & Virtual Assistants",
      "Natural Language Processing (NLP)",
      "Computer Vision Solutions",
      "AI-powered Automation",
      "Predictive Analytics & Insights",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android.",
    color: "from-primary-500 to-teal-500",
    features: [
      "Cross-platform with Flutter & React Native",
      "Native iOS (Swift) & Android (Kotlin)",
      "Offline-first Architecture",
      "Push Notifications & Analytics",
      "App Store Optimization",
      "In-app Purchases & Subscriptions",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Supabase"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Full-stack web applications built with modern frameworks for blazing-fast performance and exceptional user experience.",
    color: "from-teal-400 to-blue-500",
    features: [
      "Custom React & Next.js Applications",
      "Progressive Web Apps (PWA)",
      "E-commerce & SaaS Platforms",
      "REST & GraphQL API Development",
      "Performance Optimization & SEO",
      "Real-time Web Applications",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs — from enterprise platforms to desktop applications and APIs.",
    color: "from-orange-500 to-red-500",
    features: [
      "Custom Enterprise Software",
      "Desktop Application Development",
      "API Development & Integration",
      "Legacy System Modernization",
      "Cloud-native Applications",
      "Database Design & Optimization",
    ],
    technologies: ["Python", ".NET", "Java", "Go", "Docker", "AWS"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive and stunning interfaces designed to captivate users and boost engagement with pixel-perfect precision.",
    color: "from-accent-500 to-primary-500",
    features: [
      "User Research & Persona Development",
      "Wireframing & Interactive Prototypes",
      "Visual Design & Brand Systems",
      "Usability Testing & A/B Testing",
      "Design Systems & Component Libraries",
      "Responsive & Accessible Design",
    ],
    technologies: ["Figma", "Adobe XD", "Framer", "Principle", "Maze", "Hotjar"],
  },
];

const process = [
  {
    step: "01",
    icon: Monitor,
    title: "Discovery",
    description:
      "We dive deep into understanding your business, goals, users, and technical requirements through detailed consultation.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Planning & Design",
    description:
      "Our team creates wireframes, prototypes, and technical architecture to map out the perfect solution.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Development",
    description:
      "Agile development with bi-weekly sprints, continuous integration, and regular demos to keep you in the loop.",
  },
  {
    step: "04",
    icon: Shield,
    title: "Testing & QA",
    description:
      "Rigorous automated and manual testing ensures your product is bug-free, secure, and performance-optimized.",
  },
  {
    step: "05",
    icon: Cpu,
    title: "Deployment",
    description:
      "Smooth deployment to production with zero-downtime strategies and comprehensive monitoring setup.",
  },
  {
    step: "06",
    icon: GitBranch,
    title: "Support & Growth",
    description:
      "Ongoing maintenance, performance monitoring, feature updates, and scaling support post-launch.",
  },
];

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "Java", ".NET", "Rust"] },
  { category: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin", "Dart", "Ionic"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB", "Supabase"] },
  { category: "Cloud", items: ["AWS", "Azure", "GCP", "Vercel", "DigitalOcean", "Cloudflare"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform", "Grafana"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-500/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              What We Do
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6">
              Services That{" "}
              <span className="gradient-text">Drive Results</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end software solutions designed to help your business
              innovate, scale, and dominate in the digital era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/[0.05] text-gray-400 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-[0.03]`}
                    />
                    <div className="relative z-10 space-y-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                        >
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0 opacity-80`}
                          >
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm text-gray-300 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <div className="neon-line mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A proven development process that ensures quality, transparency,
              and on-time delivery for every project.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {process.map((step) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="glass-card p-8 rounded-xl hover:bg-white/[0.06] transition-all duration-300 group relative glow-effect-hover"
              >
                <span className="absolute top-6 right-6 text-4xl font-bold text-white/[0.03] font-[family-name:var(--font-space-grotesk)]">
                  {step.step}
                </span>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-teal-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
              Our Arsenal
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <div className="neon-line mx-auto mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-primary-400">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.05] text-gray-300 border border-white/[0.08] hover:border-primary-500/30 hover:text-white transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-teal-500/20 to-accent-500/20" />
            <div className="absolute inset-0 bg-dark-800/80 backdrop-blur-3xl" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-500/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-teal-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
                Ready to Start Your{" "}
                <span className="gradient-text">Project?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                Tell us about your idea and let&apos;s discuss how we can bring it to
                life with the right technology stack.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
