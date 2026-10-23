"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { ArrowUp } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Stagger wrapper. Children still render as normal server HTML. */
export function FooterContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}

export function FooterItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

export function BackToTop() {
  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.92 }}
      className="group inline-flex items-center gap-2 rounded-full border border-ink-line/15 px-4 py-2 font-mono text-xs text-ink/60 transition-colors hover:border-purple-500/50 hover:text-indigo dark:border-paper-line/15 dark:text-paper/60 dark:hover:text-mint"
    >
      Back to top
      <ArrowUp
        size={14}
        className="transition-transform group-hover:-translate-y-0.5"
      />
    </motion.button>
  );
}