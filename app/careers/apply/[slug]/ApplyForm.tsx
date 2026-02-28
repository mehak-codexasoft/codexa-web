"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Upload,
  CheckCircle,
  User,
  Mail,
  Phone,
  FileText,
  Linkedin,
  Globe,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { openPositions } from "@/lib/data";

type Position = (typeof openPositions)[number];

export default function ApplyForm({ position }: { position: Position }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    experience: "",
    currentRole: "",
    expectedSalary: "",
    availability: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <main className="relative overflow-hidden">
        <Navbar />
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 min-h-screen flex items-center">
          <div className="absolute inset-0 bg-grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                Application <span className="gradient-text">Submitted!</span>
              </h1>
              <p className="text-gray-400 text-lg mb-3">
                Thank you for applying for{" "}
                <span className="text-white font-medium">{position.title}</span>.
              </p>
              <p className="text-gray-500 mb-8">
                Our hiring team will review your application and get back to you within 5-7 business
                days. Keep an eye on your inbox!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  View More Positions
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-300 glass-card rounded-full hover:text-white transition-all"
                >
                  Go Home
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />
        <div
          className={`absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br ${position.gradient} opacity-10 rounded-full blur-[128px]`}
        />

        <div className="container-custom relative z-10">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${position.gradient} flex items-center justify-center shadow-lg`}
              >
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
                  Apply for{" "}
                  <span className="gradient-text">{position.title}</span>
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-2">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" /> {position.department}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> {position.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {position.type}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                {position.level}
              </span>
              {position.salary && (
                <span className="flex items-center gap-1.5 text-primary-400">
                  <DollarSign className="w-4 h-4" /> {position.salary}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative pt-4 pb-20">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-5 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary-400" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 (234) 567-890"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Current Role
                      </label>
                      <input
                        type="text"
                        name="currentRole"
                        value={formData.currentRole}
                        onChange={handleChange}
                        placeholder="e.g. Frontend Developer at ABC Corp"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Info */}
                <div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-5 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary-400" />
                    Professional Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        LinkedIn Profile
                      </label>
                      <div className="relative">
                        <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input
                          type="url"
                          name="linkedIn"
                          value={formData.linkedIn}
                          onChange={handleChange}
                          placeholder="linkedin.com/in/yourprofile"
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Portfolio / GitHub
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleChange}
                          placeholder="github.com/yourprofile"
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Years of Experience <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm appearance-none"
                      >
                        <option value="" className="bg-dark-800">Select experience</option>
                        <option value="1-2" className="bg-dark-800">1-2 years</option>
                        <option value="3-5" className="bg-dark-800">3-5 years</option>
                        <option value="5-8" className="bg-dark-800">5-8 years</option>
                        <option value="8+" className="bg-dark-800">8+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Availability
                      </label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm appearance-none"
                      >
                        <option value="" className="bg-dark-800">Select availability</option>
                        <option value="immediate" className="bg-dark-800">Immediately</option>
                        <option value="2-weeks" className="bg-dark-800">2 weeks notice</option>
                        <option value="1-month" className="bg-dark-800">1 month notice</option>
                        <option value="2-months" className="bg-dark-800">2+ months notice</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-5 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary-400" />
                    Resume / CV
                  </h3>
                  <label className="block cursor-pointer">
                    <div
                      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                        resume
                          ? "border-primary-500/50 bg-primary-500/5"
                          : "border-white/[0.1] hover:border-primary-500/30 hover:bg-white/[0.02]"
                      }`}
                    >
                      {resume ? (
                        <div className="flex items-center justify-center gap-3">
                          <CheckCircle className="w-6 h-6 text-primary-400" />
                          <div>
                            <p className="text-sm text-white font-medium">{resume.name}</p>
                            <p className="text-xs text-gray-500">
                              {(resume.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-gray-500 mx-auto mb-3" />
                          <p className="text-sm text-gray-400 mb-1">
                            Drag & drop or <span className="text-primary-400">click to upload</span>
                          </p>
                          <p className="text-xs text-gray-600">
                            PDF, DOC, or DOCX (Max 5MB)
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setResume(e.target.files?.[0] || null)}
                    />
                  </label>
                </div>

                {/* Cover Letter */}
                <div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-5 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary-400" />
                    Cover Letter
                  </h3>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us why you'd be a great fit for this role. Share your relevant experience, what excites you about CodexaSoft, and any projects you're proud of..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Sidebar - Job Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Job Description */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">
                  About This Role
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {position.longDescription}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">
                  Responsibilities
                </h3>
                <ul className="space-y-2.5">
                  {position.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">
                  Requirements
                </h3>
                <ul className="space-y-2.5">
                  {position.requirements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {position.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
