"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe, Smartphone, Layers, Zap, Shield, BarChart3, ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We architect blazing-fast, pixel-perfect websites — from marketing pages to complex SaaS dashboards — using Next.js, React, and cutting-edge tooling.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.2)",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native-quality iOS and Android apps built with React Native. Smooth animations, offline support, and seamless API integration.",
    tags: ["React Native", "iOS", "Android", "Expo"],
    color: "#A855F7",
    glow: "rgba(168,85,247,0.2)",
    featured: true,
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Strategic design systems grounded in user research. Every screen, component, and interaction is intentional.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    color: "#60A5FA",
    glow: "rgba(96,165,250,0.15)",
    featured: false,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "We audit and turbo-charge your existing product — Core Web Vitals, bundle analysis, edge caching, and beyond.",
    tags: ["Core Web Vitals", "CDN", "Caching"],
    color: "#C084FC",
    glow: "rgba(192,132,252,0.15)",
    featured: false,
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "24/7 monitoring, security patches, dependency updates, and proactive performance reviews to keep your product bulletproof.",
    tags: ["SLA", "Monitoring", "Security"],
    color: "#818CF8",
    glow: "rgba(129,140,248,0.15)",
    featured: false,
  },
  {
    icon: BarChart3,
    title: "Analytics & Growth",
    description:
      "Data-driven decisions. We implement analytics infrastructure, A/B testing pipelines, and conversion optimization strategies.",
    tags: ["Analytics", "A/B Testing", "CRO"],
    color: "#93C5FD",
    glow: "rgba(147,197,253,0.15)",
    featured: false,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-3xl p-8 cursor-pointer transition-all duration-500 ${
        service.featured ? "md:col-span-1" : ""
      }`}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid rgba(255,255,255,0.06)`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${service.glow} 0%, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <div
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${service.glow}, rgba(255,255,255,0.04))`,
          border: `1px solid ${service.glow}`,
        }}
      >
        <Icon size={24} color={service.color} />
      </div>

      {/* Content */}
      <div className="relative">
        <h3
          className="text-xl font-bold text-white mb-3"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {service.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${service.glow}`,
                color: service.color,
                border: `1px solid ${service.glow}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
          style={{ color: service.color }}
          whileHover={{ x: 4 }}
        >
          Learn More <ArrowUpRight size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      {/* Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.3)",
              color: "#60A5FA",
            }}
          >
            What We Do
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em" }}
          >
            Services That
            <br />
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            From concept to launch, we bring your vision to life with technology
            that performs and design that converts.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
