import { useCallback, useSyncExternalStore } from "react";

type ScreenQuery = number | string;

const buildQuery = (query: ScreenQuery): string =>
  typeof query === "number" ? `(min-width: ${query}px)` : query;

export function useScreen(query: ScreenQuery): boolean {
  const targetBreakpoint = buildQuery(query);

  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(targetBreakpoint);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [targetBreakpoint],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(targetBreakpoint).matches, // browser
    () => false, // server and hydration
  );
}
