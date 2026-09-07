import { useRef, useState } from "react";
import { cn } from "../../../lib/utils";
import Skeleton from "./Skeleton";

interface Props {
  label: string;
  className?: string;
  path: string;
  alt: string;
  onHover?: (el: HTMLVideoElement | null) => void;
  onHoverEnd?: (el: HTMLVideoElement | null) => void;
}

export default function VideoCard({
  label,
  className,
  path,
  alt,
  onHover,
  onHoverEnd,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <figure className="flex flex-col relative isolate">
      {!isVideoLoaded && <Skeleton className="absolute inset-0" />}
      <video
        ref={videoRef}
        className={cn(className, {
          "opacity-0 pointer-events-none": !isVideoLoaded,
        })}
        src={path}
        loop
        muted
        playsInline
        aria-label={alt}
        onLoadedData={() => setIsVideoLoaded(true)}
        onMouseEnter={() => onHover?.(videoRef.current)}
        onMouseLeave={() => onHoverEnd?.(videoRef.current)}
      />
      {isVideoLoaded && <figcaption className="py-1">{label}</figcaption>}
    </figure>
  );
}
