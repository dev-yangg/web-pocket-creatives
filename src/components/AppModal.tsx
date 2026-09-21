import { useEffect, useRef } from "react";
import { useModal } from "../hooks/useModal";
import { MODALS } from "./modals";
import { BiX } from "react-icons/bi";
import { cn } from "../lib/utils";

export default function AppModal() {
  const { activeModal, closeModal } = useModal();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeModal) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else {
      dialog.close();
      document.documentElement.style.removeProperty("overflow");
    }
  }, [activeModal]);

  // for esc key
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => closeModal();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [closeModal]);

  useEffect(() => {
    console.log(activeModal);
  }, [activeModal]);

  const targetModal = activeModal ? MODALS[activeModal.name] : null;
  const ModalComponent = targetModal?.component ?? null;

  const { className: classOverride, ...props } = activeModal?.props ?? {};

  return (
    <dialog
      ref={dialogRef}
      onClick={(e) => e.target === dialogRef.current && closeModal()}
      className={cn(
        "m-auto backdrop:bg-black/65 backdrop:backdrop-blur-sm scrollbar-none",
        targetModal?.className,
        classOverride as string | undefined,
      )}>
      <div className="flex flex-col w-full">
        <button
          onClick={closeModal}
          className="w-8 aspect-square self-end mr-3 mt-3 hover:text-yellow transition-colors duration-300 ease-in-out">
          <BiX className="w-full h-full" />
        </button>
        {ModalComponent && <ModalComponent {...props} />}
      </div>
    </dialog>
  );
}
