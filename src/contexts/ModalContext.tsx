import { useState } from "react";
import { ModalContext, type ActiveModal } from "../hooks/useModal";
import type { ModalType } from "../components/modals";

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const openModal = (name: ModalType, props: Record<string, unknown> = {}) => {
    setActiveModal({ name, props });
  };

  const closeModal = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
