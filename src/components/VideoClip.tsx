import { useEffect, useRef, useState } from "react";

type VideoClipProps = {
  src: string;
  isActive: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function VideoClip({
  src,
  isActive,
  className,
  ariaLabel,
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

  return (
    <video
      ref={videoRef}
      muted={muted}
      src={src}
      loop
      playsInline
      onClick={toggleSound}
      aria-label={ariaLabel}
      className={className ?? "cursor-pointer"}
    />
  );
}
