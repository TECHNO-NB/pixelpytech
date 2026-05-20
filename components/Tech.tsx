"use client";
import { motion } from "framer-motion";

const techStack = [
  { name: "Next.js", category: "Frontend", color: "#FFFFFF" },
  { name: "React", category: "Frontend", color: "#61DAFB" },
  { name: "TypeScript", category: "Language", color: "#3178C6" },
  { name: "React Native", category: "Mobile", color: "#61DAFB" },
  { name: "Expo", category: "Mobile", color: "#000020" },
  { name: "Tailwind CSS", category: "Styling", color: "#06B6D4" },
  { name: "Framer Motion", category: "Animation", color: "#FF0055" },
  { name: "Node.js", category: "Backend", color: "#339933" },
  { name: "PostgreSQL", category: "Database", color: "#336791" },
  { name: "Prisma", category: "ORM", color: "#2D3748" },
  { name: "Supabase", category: "BaaS", color: "#3ECF8E" },
  { name: "Firebase", category: "BaaS", color: "#FFCA28" },
  { name: "Vercel", category: "Deploy", color: "#FFFFFF" },
  { name: "AWS", category: "Cloud", color: "#FF9900" },
  { name: "Docker", category: "DevOps", color: "#2496ED" },
  { name: "GraphQL", category: "API", color: "#E10098" },
  { name: "Stripe", category: "Payments", color: "#635BFF" },
  { name: "Figma", category: "Design", color: "#F24E1E" },
];

const categoryColors: Record<string, string> = {
  Frontend: "#3B82F6",
  Language: "#60A5FA",
  Mobile: "#A855F7",
  Styling: "#06B6D4",
  Animation: "#F43F5E",
  Backend: "#22C55E",
  Database: "#F59E0B",
  ORM: "#8B5CF6",
  BaaS: "#10B981",
  Deploy: "#E5E7EB",
  Cloud: "#F97316",
  DevOps: "#3B82F6",
  API: "#EC4899",
  Payments: "#635BFF",
  Design: "#F24E1E",
};

export default function Tech() {
  return (
    <section id="tech" className="relative py-20 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 70%)",
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
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#C084FC",
            }}
          >
            Our Stack
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em" }}
          >
            Built With the
            <br />
            <span className="gradient-text">Best Tools</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            We pick technologies for performance, developer experience, and longevity — not trends.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, i) => {
            const catColor = categoryColors[tech.category] ?? "#60A5FA";
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "backOut" }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group relative rounded-2xl p-5 text-center cursor-pointer transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${catColor}10 0%, transparent 70%)`,
                  }}
                />

                <div
                  className="text-sm font-semibold text-white mb-2 relative"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {tech.name}
                </div>
                <div
                  className="text-xs font-medium px-2 py-0.5 rounded-full inline-block relative"
                  style={{
                    background: `${catColor}15`,
                    color: catColor,
                    border: `1px solid ${catColor}25`,
                  }}
                >
                  {tech.category}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
