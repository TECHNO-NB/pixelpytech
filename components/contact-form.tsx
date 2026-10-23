"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/services-data";

const BUDGETS = ["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const field: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const inputClass =
  "w-full rounded-xl border border-ink-line/15 bg-paper px-4 py-3 text-sm outline-none transition placeholder:text-ink/35 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 dark:border-paper-line/15 dark:bg-ink dark:placeholder:text-paper/35";
const labelClass = "mb-2 block font-mono text-xs text-ink/55 dark:text-paper/55";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        className="flex h-full min-h-[360px] flex-col items-center justify-center rounded-2xl border border-ink-line/10 p-8 text-center dark:border-paper-line/10"
      >
        <CheckCircle2 size={44} className="text-mint" aria-hidden />
        <h3 className="mt-5 font-display text-2xl font-medium">Message sent</h3>
        <p className="mt-2 max-w-xs text-sm text-ink/60 dark:text-paper/60">
          Thanks for reaching out. We will reply within 24 hours on business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium hover:text-indigo dark:hover:text-mint"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      onSubmit={onSubmit}
      noValidate={false}
      aria-label="Project enquiry form"
      className="grid gap-5 rounded-2xl border border-ink-line/10 p-6 sm:grid-cols-2 md:p-8 dark:border-paper-line/10"
    >
      <motion.div variants={field}>
        <label htmlFor="name" className={labelClass}>Name *</label>
        <input id="name" name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your name" className={inputClass} />
      </motion.div>

      <motion.div variants={field}>
        <label htmlFor="email" className={labelClass}>Email *</label>
        <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" placeholder="you@company.com" className={inputClass} />
      </motion.div>

      <motion.div variants={field}>
        <label htmlFor="service" className={labelClass}>Service</label>
        <select id="service" name="service" defaultValue="" className={inputClass}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </motion.div>

      <motion.div variants={field}>
        <label htmlFor="budget" className={labelClass}>Budget</label>
        <select id="budget" name="budget" defaultValue="" className={inputClass}>
          <option value="">Select a range</option>
          {BUDGETS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </motion.div>

      <motion.div variants={field} className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>Project details *</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={3000}
          rows={5}
          placeholder="What are you building, who is it for, and when do you need it?"
          className={`${inputClass} resize-y`}
        />
      </motion.div>

      {/* honeypot: hidden from people, bots fill it in */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <motion.div variants={field} className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-medium text-white transition hover:brightness-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden /> Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </>
          )}
        </button>
        <p className="text-xs text-ink/45 dark:text-paper/45">
          We only use your details to reply to this enquiry.
        </p>
      </motion.div>

      <p aria-live="polite" className="text-sm text-red-500 sm:col-span-2">
        {status === "error" ? error : ""}
      </p>
    </motion.form>
  );
}