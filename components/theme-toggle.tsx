"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink-line/10 dark:border-paper-line/10 text-ink dark:text-paper hover:border-indigo/50 dark:hover:border-mint/50 transition-colors"
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </button>
  );
}
