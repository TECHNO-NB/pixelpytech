"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { useEffect, useRef } from "react";

const floatingOrbs = [
  { x: "10%", y: "20%", size: 500, color: "rgba(59,130,246,0.15)", delay: 0 },
  { x: "70%", y: "60%", size: 400, color: "rgba(168,85,247,0.12)", delay: 1 },
  { x: "50%", y: "10%", size: 300, color: "rgba(96,165,250,0.08)", delay: 2 },
];

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" style={{ opacity: 0.15 }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

function FloatingCard({ delay, x, y, children }: {
  delay: number; x: string; y: string; children: React.ReactNode;
}) {
  return (
    <motion.div
      className="absolute hidden lg:block"
      style={{ left: x, top: y }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div
        className="px-4 py-3 rounded-2xl text-sm font-medium"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen max-w-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6 + orb.delay, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}

      <AnimatedGrid />

      {/* Floating Cards */}
      <FloatingCard delay={0} x="5%" y="30%">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/70">React Native</span>
        </div>
      </FloatingCard>
      <FloatingCard delay={1.5} x="75%" y="20%">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <span className="text-blue-400 text-xs font-bold">TS</span>
          </div>
          <span className="text-white/70">TypeScript</span>
        </div>
      </FloatingCard>

      <FloatingCard delay={1.5} x="90%" y="40%">
        <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/70">React Js</span>
        </div>
      </FloatingCard>
      <FloatingCard delay={1.5} x="10%" y="60%">
        <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/70">Next Js</span>
        </div>
      </FloatingCard>


      <FloatingCard delay={0.8} x="80%" y="65%">
        <div className="text-white/70">
          <span className="text-purple-400">99%</span> Client Satisfaction
        </div>
      </FloatingCard>


      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap- px-4 py-2 rounded-full text-sm font-medium mb-6"
          style={{
            background: "rgba(168,85,247,0.1)",
            border: "1px solid rgba(168,85,247,0.3)",
            color: "#C084FC",
          }}
        >
          <Sparkles size={14} />
          Next-Gen Digital Experiences
          <Sparkles size={14} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-none mb-6"
          style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em" }}
        >
          Building Modern 
          <br />
          <span className="gradient-text">Websites &</span>
          <br />
          <span className="text-white/90">Mobile Apps</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          PixelPyTech Builds Professional Websites And Mobile Apps That Help Businesses Grow Online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-white transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #3B82F6, #A855F7)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(168,85,247,0.5), 0 0 80px rgba(59,130,246,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#work"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-white/70 hover:text-white transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.04)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Play size={16} />
            View Our Work
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "10+", label: "Projects Shipped" },
            { value: "5★", label: "Average Rating" },
            { value: "98%", label: "On-Time Delivery" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl font-bold mb-1 gradient-text"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #050508, transparent)" }}
      />
    </section>
  );
}
