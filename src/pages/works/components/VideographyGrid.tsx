import type { VideographySample } from "../data";
import VideoCard from "./VideoCard";

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
      {items.length > 0 &&
        items.map((item) => (
          <VideoCard
            key={item.id}
            label={item.label}
            path={item.path}
            alt={item.alt}
            onHover={handleHover}
            onHoverEnd={handleHoverEnd}
            className="cursor-pointer"
          />
        ))}
    </section>
  );
}
