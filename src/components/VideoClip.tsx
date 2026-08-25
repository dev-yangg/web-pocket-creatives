import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

type VideoClipProps = {
  src: string;
  isActive: boolean;
  className?: string;
  ariaLabel?: string;
  toggleMuteCaption?: boolean;
  captionAtTop?: boolean;
};

export default function VideoClip({
  src,
  isActive,
  className,
  ariaLabel,
  toggleMuteCaption,
  captionAtTop = true,
}: VideoClipProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => setMuted((prev) => !prev);

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
    <figure className="w-full flex flex-col relative">
      <figcaption
        className={cn(
          "left-0",
          { "mb-2 absolute bottom-full": captionAtTop },
          { "mt-2 absolute top-full": !captionAtTop },
        )}>
        <span className="text-small text-grayblue ">
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
