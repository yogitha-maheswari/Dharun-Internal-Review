"use client";

import {
  managerComments,
  performanceRisks,
  recommendation,
} from "@/data/content";
import { CinematicSection } from "@/components/CinematicSection";
import { AnimatedText } from "@/components/AnimatedText";
import { NavButton } from "@/components/NavButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface RevealCardProps {
  revealLabel: string;
  children: React.ReactNode;
  className?: string;
}

const GlassRevealCard = ({
  revealLabel,
  children,
  className = "",
}: RevealCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      onClick={() => setOpen(!open)}
      className={`glass-card glass-card-hover p-12 md:p-14 rounded-2xl border border-border cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.p
            key="label"
            className="text-center text-muted-soft italic font-serif text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {revealLabel}
          </motion.p>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CommentsPage = () => (
  <CinematicSection>
    <AnimatedText delay={0.2}>
      <h1 className="text-3xl md:text-4xl font-heading gradient-text text-center mb-12">
        Performance Review Comments
      </h1>
    </AnimatedText>

    <div className="space-y-10">
      {/* Manager comments */}
      <GlassRevealCard revealLabel="Click to read Executive Assessment">
        <h2 className="font-heading text-2xl gradient-text">
          Executive Assessment
        </h2>

        <ul className="space-y-3">
          {managerComments.map((line, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.35 }}
              className="risk-item font-serif-elegant text-base flex gap-2"
            >
              <span className="gradient-text">•</span>
              {line}
            </motion.li>
          ))}
        </ul>
      </GlassRevealCard>

      {/* Performance risk */}
      <GlassRevealCard revealLabel="Click to view Performance Risk">
        <h2 className="font-heading text-2xl gradient-text">
          Performance Risk Identified
        </h2>

        <ul className="space-y-3">
          {performanceRisks.map((r, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.35 }}
              className="risk-item font-serif-elegant text-base flex gap-2"
            >
              <span className="gradient-text">•</span>
              {r}
            </motion.li>
          ))}
        </ul>
      </GlassRevealCard>

      {/* Recommendation */}
      <GlassRevealCard revealLabel="Click to read Recommendation">
        <h2 className="font-heading text-2xl gradient-text">
          Recommendation
        </h2>

        <p className="text-muted-soft font-serif-elegant text-base">
          Immediate intervention required to correct the belief:
        </p>

        <motion.p
          className="font-heading text-2xl text-center gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {recommendation}
        </motion.p>
      </GlassRevealCard>
    </div>

    <div className="flex justify-center mt-14">
      <NavButton to="/achievements" label="View Achievements →" delay={0.5} />
    </div>
  </CinematicSection>
);

export default CommentsPage;
