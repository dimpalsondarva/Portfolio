"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome"),
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noise = createNoise3D();
    let w = 0;
    let h = 0;
    let nt = 0;
    let animationId = 0;
    const speedValue = speed === "fast" ? 0.002 : 0.001;
    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];

    const resize = () => {
      w = canvas.width = container.clientWidth;
      h = canvas.height = container.clientHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    const drawWave = (n: number) => {
      nt += speedValue;
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationId = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [backgroundFill, blur, colors, speed, waveOpacity, waveWidth]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName,
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
