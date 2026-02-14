"use client";

import { motion } from "framer-motion";
import { employee, promotionTitle, promotionLines, promotionClosing } from "../data/content";
import { CinematicSection } from "../components/CinematicSection";
import { AnimatedText, LineByLine } from "../components/AnimatedText";
import { NavButton } from "../components/NavButton";

const PromotionPage = () => (
  <CinematicSection>
    <AnimatedText delay={0.3}>
      <p className="text-center text-muted-soft text-xs uppercase tracking-[0.3em] mb-2">
        Official Promotion Notice
      </p>
      <h1 className="text-3xl md:text-4xl font-heading gradient-text text-center mb-8">
        🎖 Promotion Letter
      </h1>
    </AnimatedText>

    <motion.div
      className="glass-card p-8 md:p-10 glow-red"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <AnimatedText delay={1.2}>
        <p className="text-muted-soft text-sm mb-4">Effective Immediately,</p>
        <p className="text-foreground font-serif-elegant text-lg mb-2">
          <span className="text-foreground font-medium">{employee.name}</span> is promoted to:
        </p>
        <p className="font-heading text-3xl md:text-4xl gradient-text text-center py-6">
          "{promotionTitle}"
        </p>
      </AnimatedText>

      <LineByLine
        lines={promotionLines}
        lineClassName="text-foreground font-serif-elegant text-base leading-relaxed text-center"
        startDelay={2.5}
        lineDelay={0.5}
      />

      <motion.div
        className="border-t border-border mt-6 pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
      >
        <LineByLine
          lines={promotionClosing}
          lineClassName="text-foreground font-serif-elegant text-lg leading-relaxed text-center"
          startDelay={5}
          lineDelay={0.4}
        />
      </motion.div>
    </motion.div>

    <div className="flex justify-center">
      <NavButton to="/doubt" label="Click When You Doubt Yourself" delay={8} />
    </div>
  </CinematicSection>
);

export default PromotionPage;
