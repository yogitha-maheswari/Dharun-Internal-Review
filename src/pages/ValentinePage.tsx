"use client";

import { motion } from "framer-motion";
import { valentineLines } from "../data/content";
import { ConfettiHearts } from "../components/ConfettiHearts";
import { AnimatedText, LineByLine } from "../components/AnimatedText";
import Image from "next/image";
import couplePhoto from "@/assets/our-photo.jpg";

const ValentinePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden bg-background">
      <ConfettiHearts />

      {/* Red/orange glow burst */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(8, 85%, 30%, 0.3), transparent 70%)",
        }}
      />

      <div className="relative z-20 max-w-2xl w-full text-center">
        {/* Photo */}
        <motion.div
          className="mb-10 mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30 glow-red relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
        >
          <Image
            src={couplePhoto}
            alt="Us"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <AnimatedText delay={1.5}>
          <h1 className="text-4xl md:text-5xl font-heading gradient-text mb-8 animate-heartbeat">
            Happy Valentine's Day, My Love.
          </h1>
        </AnimatedText>

        <motion.div
          className="glass-card p-8 md:p-10 glow-red"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <LineByLine
            lines={valentineLines}
            lineClassName="text-foreground font-serif-elegant text-xl md:text-2xl leading-relaxed"
            startDelay={3}
            lineDelay={0.5}
          />

          <motion.p
            className="text-5xl mt-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 7, type: "spring", stiffness: 200 }}
          >
            ❤️
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ValentinePage;
