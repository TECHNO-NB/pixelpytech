"use client";
import { motion } from "framer-motion";
import { MessageSquare, Paintbrush, Code2, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Project Discussion",
    description:"We understand your business goals, requirements, and project ideas.",
    duration: "Day 1",
    color: "#3B82F6",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Design & Planning",
    description:
      "We create the website structure, UI design, and project planning for approval.",
    duration: "Days 2-3",
    color: "#A855F7",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "We build fast, responsive websites and applications with modern technologies.",
    duration: "Weeks 4-10",
    color: "#60A5FA",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Testing & Review",
    description:
      "We test performance, responsiveness, and fix issues before launch.",
    duration: "Week 11",
    color: "#C084FC",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Launch & Support",
    description:"We deploy your project and provide support for a smooth launch experience.",
    duration: "Ongoing",
    color: "#818CF8",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-2 px-6">
      {/* bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 60%, rgba(59,130,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.3)",
              color: "#60A5FA",
            }}
          >
            How We Work
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em" }}
          >
            Our Development 
            <br />
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
           We Follow A Simple And Efficient Process To Design, Develop And Launch Modern Digital Solutions.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.4), rgba(168,85,247,0.4), transparent)" }}
          />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-center gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:max-w-sm">
                    <div
                      className="rounded-3xl p-8 group hover:border-opacity-30 transition-all duration-500"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="flex items-center gap-4 mb-5">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `${step.color}15`,
                            border: `1px solid ${step.color}30`,
                          }}
                        >
                          <Icon size={22} color={step.color} />
                        </div>
                        <div>
                        
                        </div>
                      </div>
                      <h3
                        className="text-xl font-bold text-white mb-3"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                        border: `2px solid ${step.color}50`,
                        fontFamily: "Syne, sans-serif",
                        color: step.color,
                        boxShadow: `0 0 30px ${step.color}20`,
                      }}
                      whileHover={{ scale: 1.1, boxShadow: `0 0 40px ${step.color}40` }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Empty right/left side */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
