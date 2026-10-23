"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/about-data";
import dunaiboardingimg from "@/public/dunaiboardingwebimg.jpg";
import prakashkoiralaimg from "@/public/prakashkoiralaweb.jpg";
import yatrabusimg from "@/public/yatrabusmobileimg.webp";
import plusbookimg from "@/public/plusbookmobileimg.jpg";

const projects = [
  {
    name: "YatraBus",
    type: "Web · Mobile",
    year: "2026",
    blurb: "Bus and Hiace ticket booking app.",
    color: "from-indigo/25 to-indigo/5",
    image: yatrabusimg,
    href: "https://play.google.com/store/apps/details?id=com.yatrabus.app",
  },
  {
    name: "PlusBook",
    type: "Web · Mobile",
    year: "2026",
    blurb: "Online learning, chat and social sharing app.",
    color: "from-indigo/25 to-indigo/5",
    image: plusbookimg,
    href: "https://play.google.com/store/apps/details?id=com.plusbook.app",
  },
  {
    name: "Prakash Koirala Portfolio",
    type: "Web",
    year: "2026",
    blurb: "Modern personal portfolio website.",
    color: "from-mint/25 to-mint/5",
    image: prakashkoiralaimg,
    href: "https://prakashkoirala.com",
  },
  {
    name: "Dunai Boarding School",
    type: "Web",
    year: "2026",
    blurb: "Official school website.",
    color: "from-indigo/20 to-mint/10",
    image: dunaiboardingimg,
    href: "https://dunaiboardingschool.com",
  },
];



const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE.url}/projects`,
  name: "Recent website and mobile app projects by PixelPy Tech",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.name,
      description: `${p.blurb} ${p.type.replace(" · ", " and ")} project.`,
      url: p.href,
      image: `${SITE.url}${p.image.src}`,
      dateCreated: p.year,
      creator: { "@id": `${SITE.url}/#organization` },
    },
  })),
};

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

const listContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// border line draws in from the left
const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

// background sweep on hover
const sweepVariants: Variants = {
  hover: { scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const thumbVariants: Variants = {
  hover: {
    scale: 1.1,
    rotate: -4,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

const titleVariants: Variants = {
  hover: { x: 8, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

const arrowVariants: Variants = {
  hover: {
    x: 4,
    y: -4,
    scale: 1.15,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

/* ---------- section ---------- */

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative overflow-hidden bg-paper-soft py-16 md:py-32 lg:px-20 dark:bg-ink-soft"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* floating glow */}
      <motion.div
        aria-hidden
        animate={{ y: [0, 24, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
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
            Selected work
          </motion.p>
          <motion.h2
            id="work-heading"
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-medium tracking-tight md:text-4xl"
          >
            Recent launches.
          </motion.h2>
          <motion.span
            aria-hidden
            variants={lineVariants}
            style={{ originX: 0 }}
            className="mt-5 block h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </motion.div>

        {/* list */}
        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 md:mt-16"
        >
          <ul className="flex flex-col">
            {projects.map((p, i) => (
              <motion.li
                key={p.name}
                variants={rowVariants}
                whileHover="hover"
                className="relative"
              >
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name}: ${p.blurb} (${p.type} project, opens in a new tab)`}
                  className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 px-2 py-6 sm:px-3 md:grid-cols-[auto_auto_1fr_auto_auto] md:gap-x-8 md:py-8"
                >
                  {/* top border that draws itself */}
                  <motion.span
                    aria-hidden
                    variants={lineVariants}
                    style={{ originX: 0 }}
                    className="absolute left-0 top-0 h-px w-full bg-ink-line/15 dark:bg-paper-line/15"
                  />

                  {/* hover background sweep */}
                  <motion.span
                    aria-hidden
                    variants={sweepVariants}
                    initial={{ scaleX: 0 }}
                    style={{ originX: 0 }}
                    className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-500/[0.07] to-purple-500/[0.04]"
                  />

                  {/* index (desktop only) */}
                  <span
                    aria-hidden
                    className="relative hidden font-mono text-xs text-ink/30 md:block dark:text-paper/30"
                  >
                    0{i + 1}
                  </span>

                  {/* thumbnail: same box and gradient, screenshot sits inside */}
                  <motion.div
                    variants={thumbVariants}
                    className={`relative h-12 w-14 shrink-0 overflow-hidden rounded-md bg-gradient-to-br sm:w-16 md:h-14 md:w-20 ${p.color}`}
                  >
                    <Image
                      src={p.image}
                      alt={`${p.name} ${p.type.replace(" · ", " and ")} project screenshot`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* title + blurb */}
                  <motion.div variants={titleVariants} className="relative min-w-0">
                    <h3 className="font-display text-xl font-medium transition-colors group-hover:text-indigo md:text-2xl dark:group-hover:text-mint">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-ink/55 dark:text-paper/55">
                      {p.blurb}
                    </p>
                  </motion.div>

                  {/* meta */}
                  <span className="relative order-4 col-span-3 font-mono text-xs text-ink/40 md:order-none md:col-span-1 dark:text-paper/40">
                    {p.type} · <time dateTime={p.year}>{p.year}</time>
                  </span>

                  {/* arrow */}
                  <motion.span
                    aria-hidden
                    variants={arrowVariants}
                    className="relative justify-self-end text-ink/30 transition-colors group-hover:text-indigo dark:text-paper/30 dark:group-hover:text-mint"
                  >
                    <ArrowUpRight size={20} />
                  </motion.span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* closing bottom border */}
          <motion.span
            aria-hidden
            variants={lineVariants}
            style={{ originX: 0 }}
            className="block h-px w-full bg-ink-line/15 dark:bg-paper-line/15"
          />
        </motion.div>
      </div>
    </section>
  );
}