import type { VideographySample } from "../data";
import MediaCard from "./MediaCard";
import Skeleton from "./Skeleton";

export default function VideographyGrid({
  items,
}: {
  items: VideographySample[];
}) {
  const handleHover = (el: HTMLVideoElement | HTMLImageElement | null) => {
    if (el instanceof HTMLVideoElement) el.play();
  };
  const handleHoverEnd = (el: HTMLVideoElement | HTMLImageElement | null) => {
    if (el instanceof HTMLVideoElement) {
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
          <MediaCard
            key={item.id}
            label={item.label}
            path={item.path}
            alt={item.alt}
            mediaType={item.mediaType}
            onHover={handleHover}
            onHoverEnd={handleHoverEnd}
          />
        ))}
    </section>
  );
}
