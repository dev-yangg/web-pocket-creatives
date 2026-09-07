import LightboxCloseButton from "../../../components/LightboxCloseButton";
import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll";
import type { VideographySample } from "../data";

export type VideolightboxProps = Omit<VideographySample, "id" | "label">;
export default function VideoLightbox({
  props,
  onClose,
}: {
  props: VideolightboxProps;
  onClose: () => void;
}) {
  useLockBodyScroll();
  const { path, alt } = props;
  return (
    <div className="overlay grid place-items-center p-4" onClick={onClose}>
      <div
        className="relative w-full max-h-[85dvh]"
        onClick={(e) => e.stopPropagation()}>
        <LightboxCloseButton onClose={onClose} />
        <video
          src={path}
          loop
          autoPlay
          playsInline
          aria-label={alt}
          className="w-full max-h-[85dvh]"
        />
      </div>
    </div>
  );
}
