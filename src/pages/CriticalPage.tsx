"use client";

import { motion } from "framer-motion";
import { criticalLines } from "../data/content";
import { NavButton } from "../components/NavButton";
import { WordByWord } from "../components/AnimatedText";

const CriticalPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
    <motion.div
      className="max-w-2xl text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.p
        className="text-muted-soft text-xs uppercase tracking-[0.3em] mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        Root Cause Identified
      </motion.p>

      <motion.p
        className="text-secondary-foreground font-serif-elegant text-sm mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        The person believes:
      </motion.p>

      <motion.p
        className="font-heading text-2xl md:text-3xl gradient-text mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.5, duration: 1.2 }}
      >
        {criticalLines.belief}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 1.5 }}
        className="space-y-4"
      >
        <p className="text-foreground font-serif-elegant text-lg italic">
          <WordByWord text={criticalLines.question1} startDelay={6.5} wordDelay={0.15} />
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 9, duration: 1.5 }}
        className="mt-4"
      >
        <p className="text-foreground font-serif-elegant text-lg italic">
          <WordByWord text={criticalLines.question2} startDelay={9.5} wordDelay={0.15} />
        </p>
      </motion.div>

      <div className="flex justify-center">
        <NavButton to="/from-me" label="Continue →" delay={13} />
      </div>
    </motion.div>
  </div>
);

export default CriticalPage;
