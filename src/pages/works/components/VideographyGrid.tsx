import type { VideographySample } from "../data";
import MediaCard from "./MediaCard";
import Skeleton from "./Skeleton";

export default function VideographyGrid({
  items,
}: {
  items: VideographySample[];
}) {
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
          />
        ))}
    </section>
  );
}
