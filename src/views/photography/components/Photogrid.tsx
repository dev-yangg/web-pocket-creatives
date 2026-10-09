import { cn } from "../../../lib/utils";
import type { PhotographyOverviewImage } from "../data";

type Props = {
  images: PhotographyOverviewImage[];
  className?: string;
  flipped?: boolean;
};

const ORDER_CLASS_BY_LABEL: Record<string, string> = {
  Product: "lg:order-4",
  Events: "lg:order-3",
  Fashion: "lg:order-1",
  Crowdfunding: "lg:order-2",
  People: "lg:order-3",
  Jewellery: "lg:order-4",
};

export default function Photogrid({ images, className, flipped }: Props) {
  const shouldFlip = flipped;

  return (
    <div className={cn("grid grid-cols-4 lg:grid-cols-2 gap-4", className)}>
      {images.map((img) => {
        const orderClass = shouldFlip
          ? (ORDER_CLASS_BY_LABEL[img.label] ?? "")
          : "";
        return (
          <figure
            key={img.src}
            className={cn("w-full h-full relative @container", orderClass)}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full aspect-square object-cover"
            />
            <figcaption className="absolute inset-0 flex items-center justify-center bg-yellow/85 text-black font-extrabold text-[clamp(1rem,0.8rem+8cqi,5rem)] text-center px-2 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              {img.label}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
