"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    title: "NovaPay",
    category: "Web App",
    description: "A modern fintech dashboard with real-time analytics, AI-powered insights, and multi-currency support for global payments.",
    icon: Globe,
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    gradient: "from-blue-600 to-blue-900",
    accent: "#3B82F6",
    year: "2024",
    mockBg: "#0D1B3E",
    shapes: [
      { type: "rect", x: 20, y: 60, w: 55, h: 8, color: "rgba(59,130,246,0.3)" },
      { type: "rect", x: 20, y: 75, w: 35, h: 8, color: "rgba(59,130,246,0.15)" },
      { type: "bar", x: 20, y: 100, bars: [40, 60, 45, 80, 65, 90, 55], color: "#3B82F6" },
    ],
  },
  {
    title: "Zentra",
    category: "Mobile App",
    description: "A mindfulness and wellness companion for iOS & Android — featuring guided sessions, mood tracking, and biometric integrations.",
    icon: Smartphone,
    tags: ["React Native", "Expo", "Firebase", "HealthKit"],
    gradient: "from-purple-600 to-purple-900",
    accent: "#A855F7",
    year: "2024",
    mockBg: "#1A0D3E",
    shapes: [],
  },
  {
    title: "Craftly",
    category: "E-commerce",
    description: "A headless commerce platform for independent artisans — lightning-fast, SEO-perfect, with a custom 3D product viewer.",
    icon: Globe,
    tags: ["Next.js", "Shopify API", "Three.js", "Vercel"],
    gradient: "from-indigo-600 to-blue-900",
    accent: "#818CF8",
    year: "2023",
    mockBg: "#0D1230",
    shapes: [],
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
      whileHover={{ y: -4 }}
    >
      {/* Visual Top */}
      <div
        className="relative h-64 overflow-hidden"
        style={{ background: project.mockBg }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%">
            <defs>
              <pattern id={`grid-${index}`} width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
          </svg>
        </div>

        {/* Glowing orb */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-40"
          style={{ background: `radial-gradient(circle, ${project.accent}60 0%, transparent 70%)` }}
        />

        {/* Mock UI */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <motion.div
            className="w-full rounded-2xl p-5"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 h-4 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-4/5 rounded" style={{ background: `${project.accent}40` }} />
              <div className="h-3 w-3/5 rounded" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="h-3 w-2/3 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
            </div>
            <div className="mt-4 flex gap-2">
              {[60, 75, 50, 85, 65].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h * 0.4}px`,
                    background: `linear-gradient(to top, ${project.accent}, ${project.accent}40)`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Type badge */}
        <div
          className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{
            background: `${project.accent}20`,
            border: `1px solid ${project.accent}40`,
            color: project.accent,
          }}
        >
          <Icon size={12} />
          {project.category}
        </div>

        {/* Year */}
        <div className="absolute top-4 right-4 text-xs text-white/30 font-medium">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-3">
          <h3
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {project.title}
          </h3>
          <motion.div
            className="w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}30` }}
            whileHover={{ scale: 1.1, rotate: 45 }}
          >
            <ArrowUpRight size={16} color={project.accent} />
          </motion.div>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs text-white/50"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle at 100% 50%, rgba(168,85,247,0.08) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#C084FC",
            }}
          >
            Our Work
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em" }}
          >
            Projects We&apos;re
            <br />
            <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every project is a partnership. Here&apos;s a look at recent work
            that&apos;s shipped and making an impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white/70 hover:text-white transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.04)" }}
          >
            View All Projects <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
