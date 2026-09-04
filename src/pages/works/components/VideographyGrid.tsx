import type { WorksGridSample } from "../data";
import Skeleton from "./Skeleton";

export default function VideographyGrid({
  items,
}: {
  items: WorksGridSample[];
}) {
  console.log({ "Videography Items": items });

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </section>
  );
}
