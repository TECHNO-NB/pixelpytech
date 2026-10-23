"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FACTS, FAQS, SUMMARY, TIMELINE, VALUES } from "@/lib/about-data";

/* ---------- variants ---------- */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
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

const card: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  hover: { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

const lineY: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 1.1, ease: "easeOut" } },
};

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div variants={container} {...inView} className="max-w-xl">
      <motion.p variants={fadeUp} className="gradient-text">
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-4 font-display text-3xl font-medium tracking-tight md:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.span
        aria-hidden
        variants={underline}
        style={{ originX: 0 }}
        className="mt-5 block h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
      />
    </motion.div>
  );
}

/* ---------- page ---------- */

export function About() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pb-24 lg:px-20">
        <div
          className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-sm text-ink-line/60 dark:text-paper-line/[0.15]"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%)",
          }}
        />
        <motion.div
          aria-hidden
          animate={{ y: [0, -24, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="container-px relative max-w-3xl"
        >
          <motion.nav aria-label="Breadcrumb" variants={fadeUp}>
            <ol className="flex items-center gap-2 font-mono text-xs text-ink/45 dark:text-paper/45">
              <li><a href="/" className="hover:text-indigo dark:hover:text-mint">Home</a></li>
              <li aria-hidden>/</li>
              <li aria-current="page">About</li>
            </ol>
          </motion.nav>

          <motion.p variants={fadeUp} className="gradient-text mt-6">
            About us
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 font-display text-[40px] font-medium leading-[1.05] tracking-tight sm:text-[52px] md:text-[64px]"
          >
            We build websites & mobile apps that{" "}
            <span className="gradient-text">actually ship.</span>
          </motion.h1>

          {/* answer-first paragraph: the passage AI engines quote */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-ink/65 md:text-lg dark:text-paper/65"
          >
            {SUMMARY}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-medium text-white transition hover:brightness-90"
            >
              Start your project
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center rounded-full border border-ink-line/20 px-5 py-3 text-sm font-medium transition-colors hover:border-ink/40 dark:border-paper-line/20 dark:hover:border-paper/40"
            >
              See our work
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== FACTS ===== */}
      <section aria-label="PixelPy Tech at a glance" className="pb-16 md:pb-24 lg:px-20">
        <div className="container-px">
          <motion.dl
            variants={container}
            {...inView}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-line/10 bg-ink-line/10 lg:grid-cols-4 dark:border-paper-line/10 dark:bg-paper-line/10"
          >
            {FACTS.map((f) => (
              <motion.div
                key={f.label}
                variants={card}
                className="bg-paper p-6 md:p-8 dark:bg-ink"
              >
                <dd className="gradient-text font-display text-2xl font-medium md:text-4xl">
                  {f.value}
                </dd>
                <dt className="mt-2 font-mono text-[11px] text-ink/45 md:text-xs dark:text-paper/45">
                  {f.label}
                </dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="relative overflow-hidden bg-paper-soft py-16 md:py-28 lg:px-20 dark:bg-ink-soft">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Heading eyebrow="Our story" title="Small team. Big shipping habit." />
            <motion.div
              variants={container}
              {...inView}
              className="mt-8 space-y-4 text-sm leading-relaxed text-ink/65 md:text-base dark:text-paper/65"
            >
              <motion.p variants={fadeUp}>
                PixelPy Tech started with a simple frustration: agencies that
                disappear for months and return with something nobody asked for.
                We work the other way around, with weekly demos, direct access to
                the people building your product, and honest scope.
              </motion.p>
              <motion.p variants={fadeUp}>
                Today we are a product studio of designers and engineers who take
                a project from first wireframe to App Store release, and stay
                around after launch to fix what real usage reveals.
              </motion.p>
            </motion.div>
          </div>

          {/* timeline */}
          <motion.ol
            variants={container}
            {...inView}
            className="relative space-y-8 pl-8"
          >
            <motion.span
              aria-hidden
              variants={lineY}
              style={{ originY: 0 }}
              className="absolute left-0 top-1 h-full w-px bg-ink-line/20 dark:bg-paper-line/20"
            />
            {TIMELINE.map((t) => (
              <motion.li key={t.year} variants={fadeUp} className="relative">
                <span className="absolute left-0 top-1.5 -translate-x-1/2">
                  <span className="block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
                </span>
                <time className="gradient-text font-mono text-xs dark:text-mint">
                  {t.year}
                </time>
                <p className="mt-1 text-sm text-ink/70 md:text-base dark:text-paper/70">
                  {t.text}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-16 md:py-28 lg:px-20">
        <div className="container-px">
          <Heading eyebrow="How we think" title="What we care about." />
          <motion.ul
            variants={container}
            {...inView}
            className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4"
          >
            {VALUES.map((v, i) => (
              <motion.li
                key={v.title}
                variants={card}
                whileHover="hover"
                className="group relative overflow-hidden rounded-2xl border border-ink-line/10 p-6 transition-colors hover:bg-paper-soft dark:border-paper-line/10 dark:hover:bg-ink-soft"
              >
                <span className="font-mono text-xs text-ink/30 dark:text-paper/30">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-medium">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                  {v.desc}
                </p>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-500 group-hover:scale-x-100"
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-paper-soft py-16 md:py-28 lg:px-20 dark:bg-ink-soft">
        <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Heading eyebrow="FAQ" title="Questions we hear a lot." />

          {/* <details> keeps every answer in the HTML even when collapsed */}
          <motion.div variants={container} {...inView} className="space-y-3">
            {FAQS.map((f) => (
              <motion.details
                key={f.q}
                variants={fadeUp}
                className="group rounded-xl border border-ink-line/10 bg-paper px-5 py-4 open:border-purple-500/40 dark:border-paper-line/10 dark:bg-ink"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-medium">{f.q}</h3>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-ink/40 transition-transform duration-300 group-open:rotate-180 dark:text-paper/40"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-paper/65">
                  {f.a}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-28 lg:px-20">
        <div className="container-px">
          <motion.div
            variants={container}
            {...inView}
            className="relative overflow-hidden rounded-3xl border border-ink-line/10 p-8 text-center md:p-16 dark:border-paper-line/10"
          >
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl"
            />
            <motion.h2
              variants={fadeUp}
              className="relative font-display text-3xl font-medium tracking-tight md:text-5xl"
            >
              Have an idea? Let&apos;s ship it.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="relative mx-auto mt-4 max-w-md text-sm text-ink/65 md:text-base dark:text-paper/65"
            >
              Tell us what you are building and we will reply with a clear scope
              and estimate.
            </motion.p>
            <motion.div variants={fadeUp} className="relative mt-8">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-medium text-white transition hover:brightness-90"
              >
                Start your project
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}