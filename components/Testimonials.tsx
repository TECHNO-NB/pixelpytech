"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
{
  name: "Dunai Boarding School",
  role: "Project Feedback, Dunai Boarding School",
  avatar: "DB",
  avatarColor: "#3B82F6",
  rating: 5,
  text: "The platform has significantly improved how we manage our daily operations. It's fast, reliable, and easy for our staff to use. We are very satisfied with the results and the professionalism of the team.",
},
  {
    name: "Subba Cleaner",
    role: "Project Feedback, Subba Cleaner",
    avatar: "SC",
    avatarColor: "#A855F7",
    rating: 5,
    text: "The booking flow is very simple and user-friendly. Our customers can now easily schedule cleaning services without confusion.",
  },
  {
    name: "Sajilo Drainage",
    role: "Project Feedback, Sajilo Drainage",
    avatar: "SD",
    avatarColor: "#818CF8",
    rating: 5,
    text: "We finally have a proper online system for service requests. It has improved how customers contact and book our services.",
  }
 
];

function TestimonialCard({ t, index }: { t: (typeof testimonials)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-3xl p-8 transition-all duration-500"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote size={48} color="#A855F7" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
        ))}
      </div>

      {/* Text */}
      <p className="text-white/70 text-sm leading-relaxed mb-8 relative">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}80)`,
            boxShadow: `0 0 20px ${t.avatarColor}30`,
          }}
        >
          {t.avatar}
        </div>
        <div>
          <div className="text-white text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
            {t.name}
          </div>
          <div className="text-white/40 text-xs">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 px-6">
      <div
        className="absolute top-0 left-0 w-150 h-150 pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 60%)" }}
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
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.3)",
              color: "#60A5FA",
            }}
          >
            Client Love
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em" }}
          >
            What Our Clients
            <br />
            <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            We measure our success by the results we deliver and the relationships we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
