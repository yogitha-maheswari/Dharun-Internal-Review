"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface NavButtonProps {
  to: string;
  label: string;
  delay?: number;
}

export const NavButton = ({ to, label, delay = 0 }: NavButtonProps) => {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push(to)}
      className="mt-8 px-8 py-3 rounded-lg font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300"
      style={{ background: "var(--gradient-warm)" }}
      whileHover={{ scale: 1.04, boxShadow: "0 0 30px hsl(8, 85%, 56%, 0.3)" }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      {label}
    </motion.button>
  );
};
