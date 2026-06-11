"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, NovaPay",
    avatar: "SC",
    avatarColor: "#3B82F6",
    rating: 5,
    text: "Pixelpy Tech transformed our concept into a world-class fintech product in just 10 weeks. The attention to performance and UX detail was extraordinary — our users love it.",
  },
  {
    name: "Marcus Williams",
    role: "Founder, Zentra",
    avatar: "MW",
    avatarColor: "#A855F7",
    rating: 5,
    text: "Working with Pixelpy felt like having a senior product team embedded in our company. They understood our vision immediately and executed flawlessly on iOS and Android.",
  },
  {
    name: "Priya Sharma",
    role: "CTO, Craftly",
    avatar: "PS",
    avatarColor: "#818CF8",
    rating: 5,
    text: "The headless commerce platform they built is a technical masterpiece. Page load times under 1s, 99.9% uptime, and a 40% boost in conversion rate since launch.",
  },
  {
    name: "Tom Brennan",
    role: "Product Lead, Synthos",
    avatar: "TB",
    avatarColor: "#60A5FA",
    rating: 5,
    text: "They're not just developers — they're strategic partners. Every decision was backed by clear reasoning and genuine care for our product's success.",
  },
  {
    name: "Aisha Okonkwo",
    role: "Director of Digital, RetailCo",
    avatar: "AO",
    avatarColor: "#C084FC",
    rating: 5,
    text: "Delivered our entire mobile app in 8 weeks, on budget, with zero major bugs. Their QA process is rock solid. We shipped with total confidence.",
  },
  {
    name: "Lena Park",
    role: "Startup Founder",
    avatar: "LP",
    avatarColor: "#93C5FD",
    rating: 5,
    text: "From day one, the communication was transparent and the code quality was exceptional. I felt like we were their only client — that level of dedication is rare.",
  },
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
    <section id="testimonials" className="relative py-32 px-6">
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-30"
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
