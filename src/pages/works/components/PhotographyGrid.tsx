import { useState } from "react";
import type { PhotographySample } from "../data";
import PhotoCard from "./PhotoCard";
import PhotoLightbox from "./PhotoLightbox";
import { type PhotoLightboxProps } from "./PhotoLightbox";
import Skeleton from "./Skeleton";

export default function PhotographyGrid({
  items,
}: {
  items: PhotographySample[];
}) {
  const [lightboxData, setLightboxData] = useState<PhotoLightboxProps | null>(
    null,
  );

  const handlePhotoClick = ({ images, startIndex }: PhotoLightboxProps) => {
    setLightboxData({ images, startIndex });
  };
  return (
    <section className="">
      <div className="grid md:hidden grid-cols-2 gap-6">
        {items.length > 0 &&
          items.map((img) => (
            <PhotoCard
              key={img.id}
              id={img.id}
              label={img.label}
              images={img.images}
              onClick={handlePhotoClick}
            />
          ))}
        {items.length < 1 &&
          Array.from({ length: 12 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
      <div className="hidden md:grid md:grid-cols-3 gap-10">
        {/* Skeletons just for layout visualization */}
        {items.length < 1 &&
          gridHelper(Array.from({ length: 12 })).map((groups, index) => (
            <div key={index} className="grid grid-cols-2 gap-3">
              {groups.map((_, index) => (
                <Skeleton key={index} />
              ))}
            </div>
          ))}
        {/* --------------------------- */}

        {items.length > 0 &&
          gridHelper(items).map((groups, index) => (
            <div key={index} className="grid grid-cols-2 gap-3">
              {groups.map((img) => (
                <PhotoCard
                  key={img.id}
                  id={img.id}
                  label={img.label}
                  images={img.images}
                  onClick={handlePhotoClick}
                />
              ))}
            </div>
          ))}
      </div>

      {lightboxData && (
        <PhotoLightbox
          props={lightboxData}
          onClose={() => setLightboxData(null)}
        />
      )}
    </section>
  );
}

const gridHelper = <T,>(items: T[]): T[][] => {
  const groups: T[][] = [[], [], []];
  items.forEach((item, index) => {
    const col = index % 6;
    groups[Math.floor(col / 2)].push(item);
  });

  return groups;
};
