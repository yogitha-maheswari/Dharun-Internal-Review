"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export const AnimatedText = ({ children, delay = 0, className = "", duration = 0.8 }: AnimatedTextProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

interface WordByWordProps {
  text: string;
  className?: string;
  startDelay?: number;
  wordDelay?: number;
}

export const WordByWord = ({ text, className = "", startDelay = 0, wordDelay = 0.12 }: WordByWordProps) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: startDelay + i * wordDelay, ease: "easeOut" }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

interface LineByLineProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  startDelay?: number;
  lineDelay?: number;
}

export const LineByLine = ({ lines, className = "", lineClassName = "", startDelay = 0, lineDelay = 0.4 }: LineByLineProps) => (
  <div className={className}>
    {lines.map((line, i) => (
      <motion.p
        key={i}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: startDelay + i * lineDelay, ease: "easeOut" }}
        className={`${lineClassName} ${line === "" ? "h-4" : ""}`}
      >
        {line}
      </motion.p>
    ))}
  </div>
);

interface FadeSlideProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const FadeSlide = ({ children, delay = 0, direction = "up", className = "" }: FadeSlideProps) => {
  const dirMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
