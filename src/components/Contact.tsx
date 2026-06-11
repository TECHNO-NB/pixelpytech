"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, CheckCircle, MessageSquare, Clock, Award } from "lucide-react";

const perks = [
  { icon: Clock, text: "Response within 24 hours" },
  { icon: MessageSquare, text: "Free 30-min discovery call" },
  { icon: Award, text: "No-commitment proposal" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "", budget: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(168,85,247,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: "rgba(168,85,247,0.1)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#C084FC",
              }}
            >
              <Mail size={14} />
              Let&apos;s Talk
            </div>

            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em" }}
            >
              Ready to Build
              <br />
              <span className="gradient-text">Something Great?</span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md">
              Tell us about your project and we&apos;ll get back to you within 24 hours with
              a tailored proposal and clear next steps.
            </p>

            <div className="flex flex-col gap-5">
              {perks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
                  >
                    <Icon size={18} color="#60A5FA" />
                  </div>
                  <span className="text-white/60 text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Email direct */}
            <div className="mt-10 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-white/30 text-xs">or email us directly</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <a
              href="mailto:hello@pixelpytech.com"
              className="mt-4 block text-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              hello@pixelpytech.com
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10 gap-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle size={64} color="#22C55E" />
                  </motion.div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      Message Received!
                    </h3>
                    <p className="text-white/50">
                      We&apos;ll be in touch within 24 hours with next steps.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Tell Us About Your Project
                  </h3>

                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { label: "Your Name", key: "name", type: "text", placeholder: "Jane Smith" },
                      { label: "Email Address", key: "email", type: "email", placeholder: "jane@company.com" },
                    ].map(({ label, key, type, placeholder }) => (
                      <div key={key}>
                        <label className="block text-xs text-white/40 mb-2 font-medium uppercase tracking-wider">
                          {label}
                        </label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          required
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                          onFocus={(e) => {
                            e.target.style.border = "1px solid rgba(59,130,246,0.5)";
                            e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)";
                          }}
                          onBlur={(e) => {
                            e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Project description */}
                  <div>
                    <label className="block text-xs text-white/40 mb-2 font-medium uppercase tracking-wider">
                      Project Description
                    </label>
                    <textarea
                      placeholder="Tell us what you're building — what problem it solves, your timeline, and any tech preferences..."
                      rows={4}
                      required
                      value={form.project}
                      onChange={(e) => setForm({ ...form, project: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onFocus={(e) => {
                        e.target.style.border = "1px solid rgba(59,130,246,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs text-white/40 mb-2 font-medium uppercase tracking-wider">
                      Budget Range
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-white outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: form.budget ? "white" : "rgba(255,255,255,0.2)",
                      }}
                    >
                      <option value="" disabled style={{ background: "#0A0A12" }}>Select budget range</option>
                      <option value="5-10k" style={{ background: "#0A0A12" }}>$5K – $10K</option>
                      <option value="10-25k" style={{ background: "#0A0A12" }}>$10K – $25K</option>
                      <option value="25-50k" style={{ background: "#0A0A12" }}>$25K – $50K</option>
                      <option value="50k+" style={{ background: "#0A0A12" }}>$50K+</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-base font-semibold text-white transition-all duration-300 disabled:opacity-70"
                    style={{ background: "linear-gradient(135deg, #3B82F6, #A855F7)" }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(168,85,247,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
