import { cn } from "../../../lib/utils";
import type { PhotographyOverviewImage } from "../data";

type Props = {
  images: PhotographyOverviewImage[];
  className?: string;
};

export default function Photogrid({ images, className }: Props) {
  return (
    <div className={cn("grid grid-cols-4 lg:grid-cols-2 gap-4", className)}>
      {images.map((img) => {
        return (
          <figure className="w-full h-full">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full aspect-square object-cover"
            />
            <figcaption className="hidden">{img.label}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
