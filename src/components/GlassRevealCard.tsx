"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface GlassRevealCardProps {
  children: ReactNode;
  className?: string;
  revealLabel?: string;
}

export const GlassRevealCard = ({ children, className = "", revealLabel = "Click to reveal" }: GlassRevealCardProps) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      className={`glass-card-hover p-6 md:p-8 ${className}`}
      onClick={() => setRevealed(true)}
      whileHover={{ scale: 1.01 }}
      layout
    >
      {!revealed ? (
        <div className="flex items-center justify-center py-8 text-muted-foreground font-serif text-lg italic cursor-pointer select-none">
          <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
            {revealLabel}
          </motion.span>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};
