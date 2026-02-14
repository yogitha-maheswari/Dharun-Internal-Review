"use client";

import { useEffect, useRef, useCallback } from "react";

interface Heart {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  alpha: number;
  color: string;
}

export const ConfettiHearts = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawHeart = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(x, y + topCurveHeight);
    ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
    ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.4, x, y + size);
    ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.4, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
    ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
    ctx.closePath();
    ctx.fill();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts: Heart[] = [];
    const colors = [
      "rgba(220, 50, 50,",
      "rgba(240, 100, 60,",
      "rgba(255, 150, 100,",
      "rgba(200, 30, 30,",
      "rgba(255, 80, 80,",
    ];

    for (let i = 0; i < 60; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 15 + 8,
        speedY: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 1.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 3,
        alpha: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((h) => {
        h.y += h.speedY;
        h.x += h.speedX;
        h.rotation += h.rotationSpeed;
        if (h.y > canvas.height + 20) {
          h.y = -20;
          h.x = Math.random() * canvas.width;
        }
        ctx.save();
        ctx.translate(h.x, h.y);
        ctx.rotate((h.rotation * Math.PI) / 180);
        ctx.fillStyle = `${h.color} ${h.alpha})`;
        drawHeart(ctx, 0, 0, h.size);
        ctx.restore();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [drawHeart]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />;
};
