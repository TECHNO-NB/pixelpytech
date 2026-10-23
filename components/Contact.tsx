"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ChevronDown, Clock, Mail } from "lucide-react";
import { WhatsAppIcon } from "./whatsapp-icon";
import { ContactForm } from "./contact-form";
import { CONTACT, CONTACT_FAQS, STEPS, WHATSAPP_URL } from "@/lib/contact-data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const underline: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } },
};
const lineY: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 1, ease: "easeOut" } },
};
const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;

const cardClass =
  "group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-ink-line/10 p-5 transition-colors hover:bg-paper-soft dark:border-paper-line/10 dark:hover:bg-ink-soft";
const iconBox =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-line/10 bg-ink/[0.03] dark:border-paper-line/10 dark:bg-paper/[0.04]";

export function Contact() {
  return (
    <main>
      {/* ===== HERO + FORM ===== */}
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 lg:px-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-sm text-ink-line/60 dark:text-paper-line/[0.15]"
          style={{
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%)",
          }}
        />
        <motion.div
          aria-hidden
          animate={{ y: [0, -24, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        />

        <div className="container-px relative">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
            <motion.nav aria-label="Breadcrumb" variants={fadeUp}>
              <ol className="flex items-center gap-2 font-mono text-xs text-ink/45 dark:text-paper/45">
                <li><a href="/" className="hover:text-indigo dark:hover:text-mint">Home</a></li>
                <li aria-hidden>/</li>
                <li aria-current="page">Contact</li>
              </ol>
            </motion.nav>

            <motion.p variants={fadeUp} className="gradient-text mt-6">
              Contact us
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-[40px] font-medium leading-[1.05] tracking-tight sm:text-[52px] md:text-[64px]"
            >
              Let&apos;s build your <span className="gradient-text">website or app.</span>
            </motion.h1>

            {/* answer-first paragraph: the passage AI engines quote */}
            <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-ink/65 md:text-lg dark:text-paper/65">
              Contact PixelPy Tech to start a website, web application or mobile app project. Send
              us your idea by form, email or WhatsApp and we will reply {CONTACT.responseTime} with
              a clear scope and estimate.
            </motion.p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            {/* contact methods */}
            <motion.ul variants={container} {...inView} className="space-y-4">
              <motion.li variants={card} whileHover="hover">
                <a href={`mailto:${CONTACT.email}`} className={cardClass}>
                  <span className={iconBox}><Mail size={20} aria-hidden className="text-indigo dark:text-purple-500" /></span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs text-ink/45 dark:text-paper/45">Email</span>
                    <span className="block truncate font-display text-base font-medium">{CONTACT.email}</span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden className="ml-auto shrink-0 text-ink/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-paper/30" />
                </a>
              </motion.li>

              <motion.li variants={card} whileHover="hover">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  <span className={iconBox}><WhatsAppIcon size={20} className="text-[#25D366]" /></span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs text-ink/45 dark:text-paper/45">WhatsApp</span>
                    <span className="block font-display text-base font-medium">Chat with us</span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden className="ml-auto shrink-0 text-ink/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-paper/30" />
                </a>
              </motion.li>

              <motion.li variants={card} className={cardClass.replace("group ", "")}>
                <span className={iconBox}><Clock size={20} aria-hidden className="text-indigo dark:text-purple-500" /></span>
                <span>
                  <span className="block font-mono text-xs text-ink/45 dark:text-paper/45">Response time</span>
                  <span className="block font-display text-base font-medium capitalize-first">Within 24 hours</span>
                </span>
              </motion.li>
            </motion.ul>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ===== WHAT HAPPENS NEXT ===== */}
      <section aria-labelledby="next-heading" className="bg-paper-soft py-16 md:py-28 lg:px-20 dark:bg-ink-soft">
        <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div variants={container} {...inView} className="max-w-xl">
            <motion.p variants={fadeUp} className="gradient-text">What happens next</motion.p>
            <motion.h2 id="next-heading" variants={fadeUp} className="mt-4 font-display text-3xl font-medium tracking-tight md:text-4xl">
              From message to scope in four steps.
            </motion.h2>
            <motion.span aria-hidden variants={underline} style={{ originX: 0 }} className="mt-5 block h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>

          <motion.ol variants={container} {...inView} className="relative space-y-8 pl-8">
            <motion.span aria-hidden variants={lineY} style={{ originY: 0 }} className="absolute left-0 top-1 h-full w-px bg-ink-line/20 dark:bg-paper-line/20" />
            {STEPS.map((s, i) => (
              <motion.li key={s.title} variants={fadeUp} className="relative">
                <span className="absolute left-0 top-1.5 -translate-x-1/2">
                  <span className="block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
                </span>
                <span className="gradient-text font-mono text-xs dark:text-mint">0{i + 1}</span>
                <h3 className="mt-1 font-display text-lg font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-ink/65 md:text-base dark:text-paper/65">{s.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section aria-labelledby="faq-heading" className="py-16 md:py-28 lg:px-20">
        <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div variants={container} {...inView} className="max-w-xl">
            <motion.p variants={fadeUp} className="gradient-text">FAQ</motion.p>
            <motion.h2 id="faq-heading" variants={fadeUp} className="mt-4 font-display text-3xl font-medium tracking-tight md:text-4xl">
              Before you get in touch.
            </motion.h2>
            <motion.span aria-hidden variants={underline} style={{ originX: 0 }} className="mt-5 block h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>

          {/* <details> keeps every answer in the HTML even when collapsed */}
          <motion.div variants={container} {...inView} className="space-y-3">
            {CONTACT_FAQS.map((f) => (
              <motion.details
                key={f.q}
                variants={fadeUp}
                className="group rounded-xl border border-ink-line/10 bg-paper px-5 py-4 open:border-purple-500/40 dark:border-paper-line/10 dark:bg-ink"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-base font-medium">{f.q}</h3>
                  <ChevronDown size={18} aria-hidden className="shrink-0 text-ink/40 transition-transform duration-300 group-open:rotate-180 dark:text-paper/40" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-paper/65">{f.a}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}