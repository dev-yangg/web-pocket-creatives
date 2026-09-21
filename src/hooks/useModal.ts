import { createContext, useContext } from "react";
import type { ModalType } from "../components/modals";

export type ModalProps = {
  className?: string;
  [key: string]: unknown;
};

export type ActiveModal = {
  name: ModalType;
  props?: ModalProps;
} | null;

export interface ModalContextType {
  activeModal: ActiveModal;
  openModal: (name: ModalType, props?: Record<string, unknown>) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
