import { useEffect, useState } from "react";

type ScreenQuery = number | string;

const buildQuery = (query: ScreenQuery): string =>
  typeof query === "number" ? `(min-width: ${query}px)` : query;

export function useScreen(query: ScreenQuery): boolean {
  const targetBreakpoint = buildQuery(query);
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia(targetBreakpoint).matches
      : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(targetBreakpoint);
    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handleChange);

    return () => mql.removeEventListener("change", handleChange);
  }, [targetBreakpoint]);

  return matches;
}
