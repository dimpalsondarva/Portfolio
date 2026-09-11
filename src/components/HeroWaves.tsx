"use client";
import { useMemo } from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTheme } from "@/hooks/useTheme";

/**
 * Wavy canvas backdrop for the hero section.
 * Themed adaptation of the Aceternity wavy-background-demo:
 * brown wave palette matched to light/dark theme, subtle opacity
 * so the minimal design stays clean. Fluid, responsive, resizes
 * with its container.
 */
export default function HeroWaves() {
  const { theme } = useTheme();

  const colors = useMemo(
    () =>
      theme === "dark"
        ? ["#D8B48C", "#8C6F4E", "#5C4033", "#E8C9A5", "#3A2C21"]
        : ["#6F4E37", "#8C7B6E", "#C9B8A6", "#D8B48C", "#5C4033"],
    [theme],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <WavyBackground
        colors={colors}
        backgroundFill={theme === "dark" ? "#17110d" : "#fffefb"}
        waveOpacity={0.28}
        blur={12}
        speed="slow"
        waveWidth={60}
        containerClassName="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
