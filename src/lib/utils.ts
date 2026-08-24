import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type CSSVariableOpt = {
  element?: HTMLElement;
  fallback?: string;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const normalizeCSSVariable = (name: string) =>
  name.startsWith("--") ? name : `--${name}`;

export function getCSSVar(name: string, opt: CSSVariableOpt = {}): string {
  const { element = document.documentElement, fallback = "" } = opt;
  const value = getComputedStyle(element)
    .getPropertyValue(normalizeCSSVariable(name))
    .trim();

  return value || fallback;
}
