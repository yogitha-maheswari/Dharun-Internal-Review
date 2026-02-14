"use client";

import { motion } from "framer-motion";
import { forecastCorrection } from "../data/content";
import { CinematicSection } from "../components/CinematicSection";
import { AnimatedText, LineByLine } from "../components/AnimatedText";
import { RisingGraph } from "../components/RisingGraph";
import { NavButton } from "../components/NavButton";

const ForecastPage = () => (
  <CinematicSection>
    <AnimatedText delay={0.2}>
      <h1 className="text-3xl md:text-4xl font-heading gradient-text text-center mb-3">
        Future Financial Forecast
      </h1>
    </AnimatedText>

    <AnimatedText delay={0.5} className="mb-6">
      <p className="text-center text-foreground font-serif-elegant text-sm">
        Based on current discipline, competitive drive, and hunger for upward mobility:
      </p>
    </AnimatedText>

    <AnimatedText delay={0.8} className="mb-4">
      <div className="glass-card p-6 text-center">
        <p className="text-muted-soft text-xs uppercase tracking-widest mb-2">Long-Term Financial Success Probability</p>
        <p className="font-heading text-3xl gradient-text">HIGH</p>
      </div>
    </AnimatedText>

    <AnimatedText delay={1.2} className="mb-8">
      <RisingGraph />
    </AnimatedText>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1.5 }}
      className="glass-card p-6 text-center mb-4"
    >
      <p className="text-muted-soft text-sm italic font-serif-elegant mb-4">But here is the correction in the model.</p>
      <LineByLine
        lines={forecastCorrection}
        lineClassName="text-foreground/80 font-serif-elegant text-lg leading-relaxed"
        startDelay={4.5}
        lineDelay={0.5}
      />
    </motion.div>

    <div className="flex justify-center">
      <NavButton to="/critical" label="Continue →" delay={7} />
    </div>
  </CinematicSection>
);

export default ForecastPage;
