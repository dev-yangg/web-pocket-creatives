import { useState } from "react";
import { getCSSVar } from "../lib/utils";

type BreakpointKey = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

const FALLBACK: Record<BreakpointKey, number> = {
  xs: 360,
  sm: 430,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
  xxxl: 1920,
};

const readBreakpointPx = (variableName: string, fallback: number): number => {
  const raw = getCSSVar(variableName, { fallback: `${fallback}px` });
  const parsed = parseFloat(raw);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export function useBreakpoint(): Record<BreakpointKey, number> {
  const [breakpoint] = useState<Record<BreakpointKey, number>>(() => ({
    xs: readBreakpointPx("breakpoint-xs", FALLBACK.xs),
    sm: readBreakpointPx("breakpoint-sm", FALLBACK.sm),
    md: readBreakpointPx("breakpoint-md", FALLBACK.md),
    lg: readBreakpointPx("breakpoint-lg", FALLBACK.lg),
    xl: readBreakpointPx("breakpoint-xl", FALLBACK.xl),
    xxl: readBreakpointPx("breakpoint-2xl", FALLBACK.xxl),
    xxxl: readBreakpointPx("breakpoint-3xl", FALLBACK.xxxl),
  }));

  return breakpoint;
}
