import type { PhotographySample } from "../data";
import Skeleton from "./Skeleton";

export default function PhotographyGrid({
  items,
}: {
  items: PhotographySample[];
}) {
  const mockCells = Array.from({ length: 12 });
  console.log({ "Photography Items": items });
  return (
    <section className="">
      <div className="grid md:hidden grid-cols-2 gap-6">
        {mockCells.map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
      <div className="hidden md:grid md:grid-cols-3 gap-10">
        {gridHelper(mockCells).map((groups, index) => (
          <div key={index} className="grid grid-cols-2 gap-3">
            {groups.map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        ))}
      </div>
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
