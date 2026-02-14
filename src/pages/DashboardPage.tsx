"use client";

import { motion } from "framer-motion";
import { employee, metrics } from "../data/content";
import { CinematicSection } from "../components/CinematicSection";
import { AnimatedText } from "../components/AnimatedText";
import { NavButton } from "../components/NavButton";

const DashboardPage = () => (
  <CinematicSection>
    <AnimatedText delay={0.2}>
      <h1 className="text-3xl md:text-4xl font-heading gradient-text text-center mb-2">
        Performance Evaluation Summary
      </h1>
    </AnimatedText>

    <AnimatedText delay={0.6} className="text-center mb-10">
      <p className="text-muted-soft text-sm">{employee.name}</p>
      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="text-2xl">⭐</span>
        <span className="font-heading text-xl text-foreground">{employee.rating}</span>
      </div>
    </AnimatedText>

    <div className="space-y-3">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          className="glass-card p-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-secondary-foreground">{m.label}</span>
            <span className="text-sm font-medium text-foreground">
              {m.display || `${m.value} / ${m.max}`}
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "var(--gradient-warm)" }}
              initial={{ width: 0 }}
              animate={{ width: `${(m.value / m.max) * 100}%` }}
              transition={{ delay: 1 + i * 0.15, duration: 1, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      ))}
    </div>

    <AnimatedText delay={2.5} className="mt-6">
      <p className="text-center text-muted-soft text-xs italic font-serif-elegant">
        Evaluation based on long-term observation, not temporary outcomes.
      </p>
    </AnimatedText>

    <div className="flex justify-center">
      <NavButton to="/comments" label="View Comments →" delay={2.8} />
    </div>
  </CinematicSection>
);

export default DashboardPage;
