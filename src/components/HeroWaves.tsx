"use client";
import { useMemo } from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

/**
 * Wavy canvas backdrop for the hero section (dark theme).
 * Brown wave palette, subtle opacity so the minimal design
 * stays clean. Fluid, responsive, resizes with its container.
 */
export default function HeroWaves() {
  const colors = useMemo(
    () => ["#D8B48C", "#8C6F4E", "#5C4033", "#E8C9A5", "#3A2C21"],
    [],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <WavyBackground
        colors={colors}
        backgroundFill="#17110d"
        waveOpacity={0.28}
        blur={12}
        speed="slow"
        waveWidth={60}
        containerClassName="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
