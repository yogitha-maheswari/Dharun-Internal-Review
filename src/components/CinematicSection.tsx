"use client";

import { ReactNode } from "react";
import { BackgroundGlow } from "./BackgroundGlow";

interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
  showGlow?: boolean;
}

export const CinematicSection = ({ children, className = "", showGlow = true }: CinematicSectionProps) => (
  <div className={`relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden ${className}`}>
    {showGlow && <BackgroundGlow />}
    <div className="ambient-glow" />
    <div className="relative z-10 w-full max-w-3xl mx-auto">{children}</div>
  </div>
);
