import { useState } from "react";
import type { VideographySample } from "../data";
import VideoCard from "./VideoCard";
import type { VideolightboxProps } from "./VideoLightbox";
import VideoLightbox from "./VideoLightbox";

export default function VideographyGrid({
  items,
}: {
  items: VideographySample[];
}) {
  const [lightboxData, setLightboxData] = useState<VideolightboxProps | null>(
    null,
  );
  const handleHover = (el: HTMLVideoElement | null) => {
    el?.play();
  };
  const handleHoverEnd = (el: HTMLVideoElement | null) => {
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
  };
  const handleVideoClick = ({ path, alt }: VideolightboxProps) => {
    setLightboxData({ path, alt });
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
            onClick={handleVideoClick}
            className="cursor-pointer"
          />
        ))}
      {lightboxData && (
        <VideoLightbox
          props={lightboxData}
          onClose={() => setLightboxData(null)}
        />
      )}
    </section>
  );
}
