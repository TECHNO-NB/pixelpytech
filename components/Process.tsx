"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We map the problem, the users, and what success looks like before a line of code is written.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes to high-fidelity screens, tested with real users until the flow feels obvious.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Weekly demos as we ship — you see working software from week one, not month three.",
  },
  {
    n: "04",
    title: "Launch & support",
    desc: "App store submission, deployment, and a support window after launch to fix what real usage reveals.",
  },
];

/* ---------- variants ---------- */

const headerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const underline: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const gridContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  hover: { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

// desktop: line draws left to right
const lineX: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

// mobile / tablet: line draws top to bottom
const lineY: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
      delay: 0.3,
    },
  },
  hover: { scale: 1.6 },
};

const numberVariants: Variants = {
  hover: { x: 6, transition: { type: "spring", stiffness: 300, damping: 15 } },
};

const glowVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
};

/* ---------- section ---------- */

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-16 md:py-32 lg:px-20"
    >
      {/* floating glow */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
      />

      <div className="container-px relative">
        {/* header */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-xl"
        >
          <motion.p variants={fadeUp} className="gradient-text">
            How we work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-medium tracking-tight md:text-4xl"
          >
            A process built for momentum.
          </motion.h2>
          <motion.span
            aria-hidden
            variants={underline}
            style={{ originX: 0 }}
            className="mt-5 block h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </motion.div>

        {/* steps */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:mt-20 lg:grid-cols-4 lg:gap-x-10 xl:gap-x-14"
        >
          {steps.map((s, i) => {
            const isLast = i === steps.length - 1;

            return (
              <motion.div
                key={s.n}
                variants={cardVariants}
                whileHover="hover"
                className="group relative pl-8 lg:pl-0 lg:pr-2 lg:pt-4 xl:pr-4"
              >
                <motion.span
                  aria-hidden
                  variants={lineY}
                  style={{ originY: 0 }}
                  className="absolute left-0 top-0 h-full w-px bg-ink-line/15 lg:hidden dark:bg-paper-line/15"
                />

                <motion.span
                  aria-hidden
                  variants={lineX}
                  style={{ originX: 0 }}
                  className={`absolute left-0 top-0 hidden h-px bg-ink-line/15 lg:block dark:bg-paper-line/15 ${
                    isLast
                      ? "w-full"
                      : "lg:w-[calc(100%+2.5rem)] xl:w-[calc(100%+3.5rem)]"
                  }`}
                />

                <span className="absolute left-0 top-1.5 -translate-x-1/2 lg:top-0 lg:-translate-y-1/2 lg:translate-x-0">
                  <motion.span
                    variants={dotVariants}
                    className="block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                  />
                </span>

                {/* hover glow */}
                <motion.span
                  aria-hidden
                  variants={glowVariants}
                  className="pointer-events-none absolute -inset-3 -z-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.07] to-purple-500/[0.05]"
                />

                <motion.span
                  variants={numberVariants}
                  className="gradient-text relative inline-block font-mono text-xs dark:text-mint"
                >
                  {s.n}
                </motion.span>
                <h3 className="relative mt-3 font-display text-lg font-medium">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}