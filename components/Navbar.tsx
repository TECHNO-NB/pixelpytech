"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import logo from "@/public/logo.png";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed lg:px-20 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-paper/80 dark:bg-ink/80 border-b border-ink-line/10 dark:border-paper-line/10"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-px flex h-16 items-center justify-between"
        aria-label="Main Navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2"
          title="PixelPy Tech - Home"
        >
          <Image
            src={logo}
            alt="PixelPy Tech - Web & Mobile App Development Company in Nepal"
            className="h-8 w-8 rounded-lg"
            priority
          />
          <span className="font-display text-[17px] font-medium tracking-tight">
            PixelPy<span className="text-indigo dark:text-mint">.</span>Tech
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:bg-indigo-bright hover:brightness-90 transition-colors px-4 py-2 text-sm font-medium hover:opacity-90"
            title="Start a web or mobile app development project with PixelPy Tech"
          >
            Start a project
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle Navigation Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-ink-line/10 dark:border-paper-line/10 bg-paper dark:bg-ink"
          >
            <div className="container-px flex flex-col gap-4 py-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-ink dark:bg-paper text-paper dark:text-ink px-4 py-2 text-sm font-medium"
                title="Start a web or mobile app development project"
              >
                Start a project
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}