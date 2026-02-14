"use client";

import { motion } from "framer-motion";
import { achievements } from "../data/content";
import { CinematicSection } from "../components/CinematicSection";
import { AnimatedText } from "../components/AnimatedText";
import { NavButton } from "../components/NavButton";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const AchievementsPage = () => {
  useEffect(() => {
    // Confetti burst
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 5,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 150);

    // Applause sound
    const audio = new Audio("/sounds/applause.mp3");
    audio.volume = 0.6;
    audio.play().catch(() => {});

    return () => clearInterval(interval);
  }, []);

  return (
    <CinematicSection>
      <AnimatedText delay={0.2}>
        <h1 className="text-3xl md:text-4xl font-heading gradient-text text-center mb-3">
          Achievements That Were Never Applauded
        </h1>
      </AnimatedText>

      <div className="space-y-4 mt-10">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            className="glass-card achievement-card p-5 flex items-start gap-4"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.6 + i * 0.25,
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <span className="gradient-text text-lg mt-0.5">✦</span>
            <p className="achievement-item font-serif-elegant text-base leading-relaxed">
              {a}
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatedText delay={3} className="mt-8">
        <p className="text-center text-muted-soft text-sm italic font-serif-elegant">
          Not all achievements come with applause. Some come with silent endurance.
        </p>
      </AnimatedText>

      <div className="flex justify-center">
        <NavButton to="/forecast" label="View Forecast →" delay={3.2} />
      </div>
    </CinematicSection>
  );
};

export default AchievementsPage;
