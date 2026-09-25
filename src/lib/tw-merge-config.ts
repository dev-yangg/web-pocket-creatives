import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-heading-1",
        "text-heading-2",
        "text-heading-3",
        "text-heading-4",
        "text-heading-5",
        "text-regular",
        "text-button",
        "text-small",
        "text-tiny",
      ],
      "text-color": ["text-grayblue", "text-lightblue"],
      "bg-color": ["bg-grayblue", "bg-lightblue"],
      "border-color": ["border-grayblue", "border-lightblue"],
      z: [
        "z-base",
        "z-above",
        "z-overlay",
        "z-modal",
        "z-menu",
        "z-app-header",
        "z-toast",
        "z-lightbox",
      ],
      duration: [
        "duration-blink",
        "duration-fast",
        "duration-normal",
        "duration-slow",
        "duration-turtle",
      ],
      ease: ["ease-swap"],
    },
  },
});
