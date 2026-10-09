import { useState, useEffect, useRef } from "react";
import type { FeaturedWorksSample } from "../data";

interface Props {
  featured: FeaturedWorksSample[];
  isCarouselPaused: boolean;
}

export default function FeaturedCarousel({
  featured,
  isCarouselPaused,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement>(null);
  const secondSetStartRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!firstItemRef.current || !secondSetStartRef.current) return;
      const start = firstItemRef.current.getBoundingClientRect().left;
      const secondSetStart =
        secondSetStartRef.current.getBoundingClientRect().left;
      setDistance(secondSetStart - start);
    };

    const raf = requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [featured]);

  return (
    <div className="max-w-full overflow-hidden" style={{}}>
      <div
        ref={trackRef}
        className="w-fit flex h-80 gap-x-16 animate-marquee-x will-change-auto"
        style={
          {
            "--marquee-distance": `${distance}px`,
            animationPlayState: `${isCarouselPaused ? "paused" : "running"}`,
          } as React.CSSProperties
        }>
        {[...featured, ...featured].map((feat, index) => (
          <figure
            key={`${feat.id}-${index}`}
            ref={
              index === 0
                ? firstItemRef
                : index === featured.length
                  ? secondSetStartRef
                  : undefined
            }
            className="h-full shrink-0 flex flex-col">
            {feat.type === "photo" && (
              <img
                src={feat.path}
                alt={feat.alt}
                className="h-[90%] aspect-5/7 object-cover"
              />
            )}
            {feat.type === "video" && (
              <div className="h-[90%] aspect-video overflow-clip">
                <video
                  src={feat.path}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-[1.1]"
                />
              </div>
            )}
            {feat.type === "photo-comp" && (
              <PhotoCompSlide images={feat.images} alt={feat.alt} />
            )}
            <figcaption className="flex justify-between py-1">
              <span className="capitalize">{feat.label}</span>
              <span className="capitalize">{feat.type}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function PhotoCompSlide({ images, alt }: { images: string[]; alt: string }) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const frameInterval = setInterval(
      () => setFrame((img) => (img + 1) % images.length),
      800,
    );
    return () => clearInterval(frameInterval);
  }, [images.length]);
  return (
    <img
      src={images[frame]}
      alt={alt}
      className="h-[90%] aspect-6/5 object-cover"
    />
  );
}
