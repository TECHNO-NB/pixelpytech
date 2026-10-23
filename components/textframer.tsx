"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type TextFrameProps = {
  children: ReactNode;
  className?: string;
};

/*
  offset = border/2 + box/2
  mobile : border 2px, box 8px  -> 5px
  desktop: border 4px, box 10px -> 7px
*/
const corners = [
  "-top-[5px] -left-[5px] md:-top-[7px] md:-left-[7px]",
  "-top-[5px] -right-[5px] md:-top-[7px] md:-right-[7px]",
  "-bottom-[5px] -left-[5px] md:-bottom-[7px] md:-left-[7px]",
  "-bottom-[5px] -right-[5px] md:-bottom-[7px] md:-right-[7px]",
] as const;

const frameVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delayChildren: 0.35, // corners pop after the frame is visible
      staggerChildren: 0.1,
    },
  },
};

const cornerVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 18 },
  },
  hover: { scale: 1.4, opacity: 1 },
};

export default function TextFrame({ children, className = "" }: TextFrameProps) {
  return (
    <motion.div
      variants={frameVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`relative inline-block border-2 text-center md:border-4 md:mt-3 mt-1 mb-1 border-blue-500 px-4 py-0 ${className}`}
    >
      {corners.map((position) => (
        <motion.span
          key={position}
          variants={cornerVariants}
          className={`absolute h-[8px] w-[8px] md:h-[10px] md:w-[10px] border border-blue-500 bg-white ${position}`}
        />
      ))}

      {/* Content */}
      <div className="font-display text-[42px] leading-[1.05] text-center sm:text-[54px] md:text-[72px] font-medium tracking-tight">
        {children}
      </div>
    </motion.div>
  );
}