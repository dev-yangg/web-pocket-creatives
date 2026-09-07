import { useRef } from "react";
import type { VideographySample } from "../data";
import Skeleton from "./Skeleton";
import { cn } from "../../../lib/utils";

interface VideoCardProps {
  className?: string;
  path: string;
  alt: string;
  onHover?: (el: HTMLVideoElement | null) => void;
  onHoverEnd?: (el: HTMLVideoElement | null) => void;
}

export default function VideographyGrid({
  items,
}: {
  items: VideographySample[];
}) {
  const handleHover = (el: HTMLVideoElement | null) => {
    el?.play();
  };
  const handleHoverEnd = (el: HTMLVideoElement | null) => {
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
      {items.length < 1 &&
        Array.from({ length: 12 }).map((_, index) => <Skeleton key={index} />)}
      {items.length > 0 &&
        items.map((item) => (
          <figure key={item.id} className="flex flex-col">
            <VideoCard
              path={item.path}
              alt={item.alt}
              onHover={handleHover}
              onHoverEnd={handleHoverEnd}
              className="cursor-pointer"
            />
            <figcaption className="py-1">{item.label}</figcaption>
          </figure>
        ))}
    </section>
  );
}

function VideoCard({
  className,
  path,
  alt,
  onHover,
  onHoverEnd,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <video
      ref={videoRef}
      className={cn(className)}
      src={path}
      loop
      muted
      playsInline
      aria-label={alt}
      onMouseEnter={() => onHover?.(videoRef.current)}
      onMouseLeave={() => onHoverEnd?.(videoRef.current)}
    />
  );
}
