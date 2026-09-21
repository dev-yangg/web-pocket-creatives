import type { FC } from "react";
import ContactModal from "./ContactModal";

interface ModalEntry {
  component: FC<Record<string, unknown>>;
  className?: string;
}

export const MODALS = {
  contact: {
    component: ContactModal,
    className: "rounded-xl bg-blue w-[min(1000px,100%)] mx-auto",
  },
} satisfies Record<string, ModalEntry>;

export type ModalType = keyof typeof MODALS;
