"use client";

import { doubtLines } from "../data/content";
import { CinematicSection } from "../components/CinematicSection";
import { AnimatedText, LineByLine } from "../components/AnimatedText";
import { NavButton } from "../components/NavButton";

const DoubtPage = () => (
  <CinematicSection>
    <AnimatedText delay={1}>
      <div className="glass-card p-8 md:p-12 glow-red">
        <LineByLine
          lines={doubtLines}
          lineClassName="text-foreground font-serif-elegant text-xl md:text-xl leading-relaxed text-center"
          startDelay={1.5}
          lineDelay={0.5}
        />
      </div>
    </AnimatedText>

    <div className="flex justify-center">
      <NavButton to="/valentine" label="One More Thing... ❤️" delay={9} />
    </div>
  </CinematicSection>
);

export default DoubtPage;
