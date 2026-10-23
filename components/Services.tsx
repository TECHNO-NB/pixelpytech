"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type Variants,
} from "framer-motion";
import { Globe2, Smartphone, Palette, Gauge, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/about-data";
import { services, type ServiceItem } from "@/lib/services-data";

const icons: Record<string, typeof Globe2> = {
  "website-development": Globe2,
  "mobile-app-development": Smartphone,
  "ui-ux-design": Palette,
  "performance-qa": Gauge,
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE.url}/services`,
  name: "Website and mobile app development services by PixelPy Tech",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      serviceType: s.title,
      description: s.desc,
      url: `${SITE.url}/services/${s.slug}`,
      provider: { "@id": `${SITE.url}/#organization` },
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

const gridContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconVariants: Variants = {
  hover: {
    rotate: -8,
    scale: 1.15,
    transition: { type: "spring", stiffness: 300, damping: 12 },
  },
};

const arrowVariants: Variants = {
  hover: { opacity: 1, x: 0, y: 0 },
};

const lineVariants: Variants = {
  hover: { scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const chipsContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};

/* ---------- card ---------- */

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.14), transparent 80%)`;

  function handleMove(e: React.MouseEvent<HTMLLIElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleLeave() {
    mouseX.set(-300);
    mouseY.set(-300);
  }

  const Icon = icons[service.slug];

  return (
    <motion.li
      ref={ref}
      variants={cardVariants}
      whileHover="hover"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative overflow-hidden bg-paper p-6 transition-colors hover:bg-paper-soft sm:p-8 md:p-10 dark:bg-ink dark:hover:bg-ink-soft"
    >
      {/* cursor spotlight */}
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* top row: icon + index + arrow */}
      <div className="relative flex items-start justify-between">
        <motion.div
          variants={iconVariants}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-line/10 bg-ink/[0.03] sm:h-12 sm:w-12 dark:border-paper-line/10 dark:bg-paper/[0.04]"
        >
          <Icon
            aria-hidden
            size={22}
            strokeWidth={1.6}
            className="text-indigo dark:text-purple-500"
          />
        </motion.div>

        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="font-mono text-xs text-ink/30 dark:text-paper/30"
          >
            0{index + 1}
          </span>
          <motion.span
            aria-hidden
            variants={arrowVariants}
            initial={{ opacity: 0, x: -6, y: 6 }}
            className="text-ink/60 dark:text-paper/60"
          >
            <ArrowUpRight size={18} />
          </motion.span>
        </div>
      </div>

      {/* text: the title link stretches over the whole card (no "relative" on h3) */}
      <h3 className="mt-6 font-display text-lg font-medium sm:text-xl">
        <Link
          href={`/services/${service.slug}`}
          className="after:absolute after:inset-0 after:z-10 after:content-['']"
        >
          {service.title}
        </Link>
      </h3>
      <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-ink/60 dark:text-paper/60">
        {service.desc}
      </p>

      {/* stack chips */}
      <motion.ul
        variants={chipsContainer}
        aria-label={`${service.title} technologies`}
        className="relative mt-5 flex flex-wrap gap-2"
      >
        {service.stack.map((tech) => (
          <motion.li
            key={tech}
            variants={chipVariants}
            className="rounded-full border border-ink-line/10 px-2.5 py-1 font-mono text-[10px] text-ink/50 sm:text-[11px] dark:border-paper-line/10 dark:text-paper/50"
          >
            {tech}
          </motion.li>
        ))}
      </motion.ul>

      {/* bottom gradient line draws in on hover */}
      <motion.span
        aria-hidden
        variants={lineVariants}
        initial={{ scaleX: 0 }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500"
      />
    </motion.li>
  );
}

/* ---------- section ---------- */

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden px-0 py-16 md:py-32 lg:px-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* soft floating glow behind the grid */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -24, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
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
            What we do
          </motion.p>

          <motion.h2
            id="services-heading"
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-medium tracking-tight md:text-4xl"
          >
            One team, from idea to app store.
          </motion.h2>

          <motion.span
            aria-hidden
            variants={{
              hidden: { scaleX: 0 },
              show: {
                scaleX: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            style={{ originX: 0 }}
            className="mt-5 block h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </motion.div>

        {/* grid */}
        <motion.ul
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-line/10 bg-ink-line/10 md:mt-16 md:grid-cols-2 dark:border-paper-line/10 dark:bg-paper-line/10"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}