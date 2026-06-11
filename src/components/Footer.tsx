"use client";
import { motion } from "framer-motion";
import { Code2, GitFork, Link, ExternalLink } from "lucide-react";


const footerLinks = {
  Services: ["Web Development", "Mobile Apps", "UI/UX Design", "Performance", "Support"],
  Company: ["About Us", "Careers", "Blog", "Press Kit"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  { icon: GitFork, href: "#", label: "GitHub" },
  { icon: Link, href: "#", label: "LinkedIn" },
  { icon: ExternalLink, href: "#", label: "Social" },
];

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #3B82F6, #A855F7)" }}
              >
                <Code2 size={18} color="white" />
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
                Pixelpy<span className="gradient-text">Tech</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
              We build high-performance websites and mobile apps for startups and
              scale-ups who refuse to settle for average.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  whileHover={{ scale: 1.1, background: "rgba(59,130,246,0.1)", borderColor: "rgba(59,130,246,0.3)" }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white text-sm font-semibold mb-5 uppercase tracking-wider"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-white/70 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Pixelpy Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <span>Crafted with</span>
            <span className="text-red-400">♥</span>
            <span>by the Pixelpy team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
