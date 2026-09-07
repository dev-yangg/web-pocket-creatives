import { useRef } from "react";
import { cn } from "../../../lib/utils";

type MediaType = "image" | "video";
type MediaElement = HTMLVideoElement | HTMLImageElement;

interface MediaProps {
  label: string;
  path: string;
  alt: string;
  mediaType: MediaType;
  onHover?: (el: MediaElement | null) => void;
  onHoverEnd?: (el: MediaElement | null) => void;
}

export default function MediaCard(props: MediaProps) {
  return (
    <figure>
      <Media mediaProps={props} className="cursor-pointer" />
      <figcaption>{props.label}</figcaption>
    </figure>
  );
}

function Media({
  mediaProps,
  className,
}: {
  mediaProps: Omit<MediaProps, "label">;
  className?: string;
}) {
  const { path, alt, mediaType, onHover, onHoverEnd } = mediaProps;
  const mediaRef = useRef<MediaElement | null>(null);

  const assignMediaRef = (targetElement: MediaElement | null) => {
    mediaRef.current = targetElement;
  };

  const handleMouseEnter = () => onHover?.(mediaRef.current);
  const handleMouseLeave = () => onHoverEnd?.(mediaRef.current);

  if (mediaType === "video") {
    return (
      <video
        ref={assignMediaRef}
        className={cn(className)}
        src={path}
        loop
        muted
        playsInline
        aria-label={alt}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  }

  return (
    <img
      ref={assignMediaRef}
      className={cn(className)}
      src={path}
      alt={alt}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
