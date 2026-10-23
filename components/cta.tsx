
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const CONTACT_EMAIL = "pixelpytech@gmail.com";
const CONTACT_PHONE = "+9779869991666";

export function CTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 lg:px-20"
    >
      <div className="container-px">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
          }}
          className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-paper dark:bg-paper-soft dark:text-ink md:px-16 md:py-20"
        >
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-sm text-paper opacity-[0.06] dark:text-ink dark:opacity-[0.08]"
            style={{
              maskImage:
                "radial-gradient(ellipse 60% 80% at 100% 0%, black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 80% at 100% 0%, black 30%, transparent 75%)",
            }}
          />

          <div className="relative max-w-2xl">
            <p className="gradient-text text-sm font-semibold uppercase tracking-wider">
              Let&apos;s build something
            </p>

            <h2
              id="contact-heading"
              className="mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl"
            >
              Have a product in mind? Let&apos;s build it together.
            </h2>

            <p className="mt-5 max-w-md text-base text-paper/65 dark:text-ink/65">
              Looking for a reliable software development partner?
              Contact PixelPy Tech to discuss your website, web
              application, mobile app, or custom software project.
              Get next steps and an estimated timeline within one
              business day, with no sales call required.
            </p>

            <address className="mt-9 not-italic">
              <ul className="flex flex-wrap items-center gap-4">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    aria-label={`Email PixelPy Tech at ${CONTACT_EMAIL}`}
                    className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <Mail
                      size={16}
                      aria-hidden="true"
                    />
                    <span>{CONTACT_EMAIL}</span>
                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    aria-label={`Call PixelPy Tech at ${CONTACT_PHONE}`}
                    className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <Phone
                      size={16}
                      aria-hidden="true"
                    />
                    <span>{CONTACT_PHONE}</span>
                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
