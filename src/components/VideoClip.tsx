import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

type VideoClipProps = {
  src: string;
  isActive: boolean;
  unmuteOnActive?: boolean;
  className?: string;
  ariaLabel?: string;
  toggleMuteCaption?: boolean;
  captionAtTop?: boolean;
  captionAtLeft?: boolean;
  captionClassName?: string;
  captionTextClassName?: string;
  wrapperClassName?: string;
};

export default function VideoClip({
  src,
  isActive,
  unmuteOnActive = false,
  className,
  ariaLabel,
  toggleMuteCaption,
  captionAtTop = true,
  captionAtLeft = true,
  captionClassName,
  captionTextClassName,
  wrapperClassName,
}: VideoClipProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [prevIsActive, setPrevIsActive] = useState(isActive);

  const toggleSound = () => setMuted((prev) => !prev);

  if (isActive !== prevIsActive) {
    setPrevIsActive(isActive);
    if (isActive && unmuteOnActive) {
      setMuted(false);
    }
  }

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  return !toggleMuteCaption ? (
    <video
      ref={videoRef}
      muted={muted}
      src={src}
      loop
      playsInline
      onClick={toggleSound}
      aria-label={ariaLabel}
      className={cn("cursor-pointer", className)}
    />
  ) : (
    <figure className={cn("w-full flex flex-col relative", wrapperClassName)}>
      <figcaption
        className={cn(
          { "mb-2 absolute bottom-full": captionAtTop },
          { "mt-2 absolute top-full": !captionAtTop },
          { "right-0": !captionAtLeft },
          { "left-0": captionAtLeft },
          captionClassName,
        )}>
        <span className={cn("text-small text-grayblue", captionTextClassName)}>
          *<span className="inline lg:hidden">Tap</span>
          <span className="hidden lg:inline">Click on</span> Video to toggle
          sound
        </span>
      </figcaption>
      <video
        ref={videoRef}
        muted={muted}
        src={src}
        loop
        playsInline
        onClick={toggleSound}
        aria-label={ariaLabel}
        className={cn("cursor-pointer", className)}
      />
    </figure>
  );
}
