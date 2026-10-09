import { useEffect, useRef, useState } from "react";
import type { PhotographySample } from "../data";
import type { PhotoLightboxProps } from "./PhotoLightbox";

interface Props extends PhotographySample {
  onClick: ({ images, startIndex }: PhotoLightboxProps) => void;
}

const cycleMs = 500;

export default function PhotoCard({ id, label, images, onClick }: Props) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = () => {
    if (images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, cycleMs);
  };

  const stopCycle = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIndex(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <figure
      className="aspect-1/1.25 flex flex-col cursor-pointer"
      onMouseEnter={startCycle}
      onMouseLeave={stopCycle}
      onClick={() => onClick({ images, startIndex: index })}>
      <div className="relative grow overflow-hidden">
        <img
          key={id}
          src={images[index].path}
          alt={images[index].alt}
          className="absolute inset-0 object-cover object-center w-full h-full"
        />
      </div>
      <figcaption className="py-1">{label}</figcaption>
    </figure>
  );
}
