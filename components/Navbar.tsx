"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.png"

const links = ["Services", "Work", "Process", "Tech", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 max-w-screen"
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(5,5,8,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <motion.div className="flex items-center gap-0" whileHover={{ scale: 1.03 }}>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center "
           
          >
            <Image src={logo} alt="PixelPy Logo" height={50} width={50} className=" rounded-md" />
          </div>
          <span className="text-white font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
            Pixelpy<span className="gradient-text">Tech</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              whileHover={{ y: -1 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
          style={{ background: "linear-gradient(135deg, #3B82F6, #A855F7)" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
          whileTap={{ scale: 0.97 }}
        >
          Get Started
        </motion.a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,10,18,0.95)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-4 py-3 rounded-xl text-center text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #3B82F6, #A855F7)" }}
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
