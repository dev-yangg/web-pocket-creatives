import { useState } from "react";
import type { PhotographySample } from "../data";
import PhotoCard from "./PhotoCard";
import PhotoLightbox from "./PhotoLightbox";
import { type PhotoLightboxProps } from "./PhotoLightbox";

export default function PhotographyGrid({
  items,
}: {
  items: PhotographySample[];
}) {
  const [lightboxData, setLightboxData] = useState<PhotoLightboxProps | null>(
    null,
  );

  const handlePhotoClick = ({ images, startIndex }: PhotoLightboxProps) => {
    console.log("CLICKED");
    setLightboxData({ images, startIndex });
  };
  return (
    <section className="">
      <div className="grid md:hidden grid-cols-2 gap-6">
        {items.map((img) => (
          <PhotoCard
            key={img.id}
            id={img.id}
            label={img.label}
            images={img.images}
            onClick={handlePhotoClick}
          />
        ))}
      </div>
      <div className="hidden md:grid md:grid-cols-3 gap-10">
        {gridHelper(items).map((groups, index) => (
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
