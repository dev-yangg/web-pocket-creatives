import { useEffect, useRef } from "react";

export function useSkipCSSTransitionOnResize<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      ref.current?.classList.add("no-transition");
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        ref.current?.classList.remove("no-transition");
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  return ref;
}
