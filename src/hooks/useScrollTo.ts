import { useCallback, type RefObject } from "react";

interface UseScrollToOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  focusTarget?: boolean;
}

export function useScrollTo(
  targetRef: RefObject<HTMLElement | null>,
  options: UseScrollToOptions = {},
) {
  const { behavior = "smooth", block = "start", focusTarget = true } = options;

  return useCallback(() => {
    const el = targetRef.current;
    if (!el) return;

    el.scrollIntoView({ behavior, block });

    if (focusTarget) {
      const hadTabIndex = el.hasAttribute("tabindex");
      if (!hadTabIndex) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
      if (!hadTabIndex) {
        el.addEventListener("blur", () => el.removeAttribute("tabindex"), {
          once: true,
        });
      }
    }
  }, [targetRef, behavior, block, focusTarget]);
}
