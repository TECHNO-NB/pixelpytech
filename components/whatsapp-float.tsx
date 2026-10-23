"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { WhatsAppIcon } from "./whatsapp-icon";

// Country code + number, digits only (no + or spaces)
const PHONE = "9779869991666";
const MESSAGE = "Hi PixelPy Tech, I'd like to discuss a project.";

const buttonVariants: Variants = {
  hidden: { scale: 0, opacity: 0, y: 24 },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 16, delay: 1 },
  },
  hover: { scale: 1.08, transition: { type: "spring", stiffness: 300, damping: 14 } },
};

// stays hidden until the button is hovered (desktop only)
const tooltipVariants: Variants = {
  hidden: { opacity: 0, x: 12 },
  show: { opacity: 0, x: 12 },
  hover: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

export function WhatsAppFloat() {
  const reduce = useReducedMotion();
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <div
      className="fixed z-50 right-4 bottom-4 md:right-6 md:bottom-6"
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        variants={buttonVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
        whileTap={{ scale: 0.92 }}
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 ring-2 ring-white/70 md:h-12 md:w-12 dark:ring-white/10 dark:shadow-[#25D366]/25"
      >
        {/* expanding ripple rings */}
        {!reduce &&
          [0, 1].map((i) => (
            <motion.span
              key={i}
              aria-hidden
              animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
              transition={{
                duration: 2.2,
                ease: "easeOut",
                repeat: Infinity,
                delay: i * 1.1,
              }}
              className="absolute inset-0 rounded-full bg-[#25D366]"
            />
          ))}

        {/* icon with a periodic "ring" wiggle */}
        <motion.span
          animate={reduce ? undefined : { rotate: [0, -14, 12, -8, 6, 0] }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4,
            delay: 2.5,
          }}
          className="relative flex"
        >
          <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
        </motion.span>

        {/* tooltip: wrapper positions it, inner motion span animates it */}
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 md:block">
          <motion.span
            variants={tooltipVariants}
            className="block whitespace-nowrap rounded-full bg-ink px-3 py-1.5 font-mono text-xs text-paper shadow-md dark:bg-paper dark:text-ink"
          >
            Chat with us
          </motion.span>
        </span>
      </motion.a>
    </div>
  );
}