"use client";

import { fromMeLines } from "../data/content";
import { CinematicSection } from "../components/CinematicSection";
import { AnimatedText, LineByLine } from "../components/AnimatedText";
import { NavButton } from "../components/NavButton";

const FromMePage = () => (
  <CinematicSection>
    <AnimatedText delay={0.3}>
      <h1 className="text-3xl md:text-4xl font-heading text-center mb-10">
        <span className="gradient-text">From Me.</span>
      </h1>
    </AnimatedText>

    <div className="glass-card p-8 md:p-10 glow-red">
      <LineByLine
        lines={fromMeLines}
        lineClassName="text-foreground font-serif-elegant text-center text-lg md:text-l leading-relaxed"
        startDelay={0.8}
        lineDelay={0.5}
      />
    </div>

    <div className="flex justify-center">
      <NavButton to="/stronger" label="Continue →" delay={8} />
    </div>
  </CinematicSection>
);

export default FromMePage;
