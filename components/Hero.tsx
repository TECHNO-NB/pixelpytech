// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight, Smartphone, Globe } from "lucide-react";
import TextFrame from "@/components/textframer";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-0 md:pt-28 md:pb-22 lg:px-20"
    >
      {/* dot grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 text-ink-line/60 dark:text-paper-line/[0.15] bg-dot-grid bg-dot-sm"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%)",
        }}
      />

      <div className="container-px relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 sm:gap-2 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.div
            variants={badgeVariants}
            className="relative inline-flex overflow-hidden rounded-full p-[1px]"
          >
            <motion.span
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              className="absolute left-1/2 top-1/2 aspect-square w-[150%]"
              style={{
                x: "-50%",
                y: "-50%",
                background:
                  "conic-gradient(from 0deg, transparent 0%, transparent 60%, #3b82f6 80%, #a855f7 90%, transparent 100%)",
              }}
            />
            <span
              aria-hidden
              className="absolute inset-0 rounded-full border border-ink-line/15 dark:border-paper-line/15"
            />

            <span className="eyebrow-label relative inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1 dark:bg-ink">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint " />
              Available for new projects — Q4 2026
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[42px] leading-[1.05] sm:text-[54px] md:text-[72px] font-medium tracking-tight"
          >
            Building Modern
            <TextFrame>Website</TextFrame>
            <br />& Mobile Apps
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-base md:text-lg text-ink/65 dark:text-paper/65 leading-relaxed"
          >
            PixelPy Tech is a software development company building fast,
            reliable websites and mobile apps from initial design to
            cross-platform deployment.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-bright hover:brightness-90 transition-colors"
            >
              Start your project
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-ink-line/20 dark:border-paper-line/20 px-5 py-3 text-sm font-medium hover:border-ink/40 dark:hover:border-paper/40 transition-colors"
            >
              See our work
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-7 md:gap-8 font-mono text-xs text-ink/45 dark:text-paper/45"
          >
            <span>15+ products shipped</span>
            <span className="h-1 w-1 rounded-full bg-current" />
            <span>4.9/5 client rating</span>
            <span className="h-1 w-1 rounded-full bg-current" />
            <span>6 yrs building</span>
          </motion.div>
        </motion.div>

        {/* mockup stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="relative h-[420px] sm:h-[480px]"
        >
          {/* browser window */}
          <div className="absolute sm:h-full left-0 top-0 w-full max-w-md rounded-xl border border-ink-line/15 dark:border-paper-line/15 bg-paper-soft dark:bg-ink-soft shadow-2xl shadow-ink/10 dark:shadow-black/40 animate-float">
            <div className="flex items-center gap-1.5 border-b border-ink-line/10 dark:border-paper-line/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-line/40 dark:bg-paper-line/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-line/40 dark:bg-paper-line/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-line/40 dark:bg-paper-line/30" />
              <span className="ml-3 flex items-center gap-1.5 font-mono text-[11px] text-ink/40 dark:text-paper/40">
                <Globe size={11} /> pixelpy.tech
              </span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-relaxed text-ink/80 dark:text-paper/80">
              <TypeAnimation
                sequence={[
                  "$ npx create-next-app",
                  1200,
                  "$ npx create-next-app\n> shipping v1.0.0 ✓",
                  1500,
                  "$ npx create-next-app\n> shipping v1.0.0 ✓\n> build passed in 6.2s",
                  2500,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="whitespace-pre-wrap"
              />
            </div>
          </div>

          {/* phone mockup */}
          <div
            className="absolute right-0 bottom-24 md:bottom-0 w-40 sm:w-48 rounded-[28px] border border-ink-line/15 dark:border-paper-line/15 bg-paper dark:bg-ink shadow-2xl shadow-ink/15 dark:shadow-black/50 p-2 animate-float"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="rounded-[20px] bg-gradient-to-br from-indigo/15 to-mint/15 h-64 sm:h-72 flex flex-col p-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-ink/50 dark:text-paper/50">
                <Smartphone size={11} /> PixelPy Tech
              </div>
              <div className="mt-6 space-y-2">
                <div className="h-2.5 w-3/4 rounded bg-ink/15 dark:bg-paper/20" />
                <div className="h-2.5 w-1/2 rounded bg-ink/10 dark:bg-paper/10" />
              </div>
              <div className="mt-auto grid grid-cols-2 gap-2">
                <div className="h-14 rounded-lg bg-indigo/20" />
                <div className="h-14 rounded-lg bg-mint/20" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
