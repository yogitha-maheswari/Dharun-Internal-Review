"use client";

import { motion } from "framer-motion";
import { forecastPoints } from "../data/content";

type ForecastPoint = {
  year: string;
  value: number;
};

export const RisingGraph = () => {
  const maxValue = 100;
  const width = 600;
  const height = 250;
  const padding = 40;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  const points = (forecastPoints as ForecastPoint[]).map((p, i: number) => ({
    x: padding + (i / (forecastPoints.length - 1)) * graphWidth,
    y: padding + graphHeight - (p.value / maxValue) * graphHeight,
  }));

  const pathD = points
    .map((p, i: number) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  const areaD = `${pathD} 
    L ${points[points.length - 1].x} ${padding + graphHeight} 
    L ${points[0].x} ${padding + graphHeight} Z`;

  return (
    <div className="w-full flex justify-center">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((v) => {
          const y = padding + graphHeight - (v / maxValue) * graphHeight;
          return (
            <line
              key={v}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              stroke="hsl(0, 0%, 20%)"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Area fill */}
        <motion.path
          d={areaD}
          fill="url(#graphGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Points */}
        {points.map((p, i: number) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="hsl(8, 85%, 56%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.3, duration: 0.4 }}
          />
        ))}

        {/* Labels */}
        {(forecastPoints as ForecastPoint[]).map((p, i: number) => (
          <motion.text
            key={i}
            x={points[i].x}
            y={height - 8}
            textAnchor="middle"
            fill="hsl(0, 0%, 55%)"
            fontSize="11"
            fontFamily="Inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
          >
            {p.year}
          </motion.text>
        ))}

        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(8, 85%, 56%)" />
            <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
          </linearGradient>
          <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(8, 85%, 56%)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
