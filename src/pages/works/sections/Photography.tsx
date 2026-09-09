import type { Ref } from "react";
import PhotographyGrid from "../components/PhotographyGrid";
import PhotographyHeadline from "../components/PhotographyHeadline";
import type { PhotographySample } from "../data";
interface Props {
  category: string;
  items: PhotographySample[];
  ref?: Ref<HTMLDivElement>;
}

export default function Photography({ category, items, ref }: Props) {
  return (
    <section className="py-14 flex flex-col content-boundary">
      <h1 className="hidden md:inline-block w-[min(600px,100%)] my-28">
        <PhotographyHeadline />
      </h1>
      <div ref={ref} className="flex flex-col gap-y-2 md:gap-y-4 scroll-mt-24">
        <header className="portfolio-gallery-header">
          <h3 className="font-extrabold">
            <span className="capitalize">{category}</span> Photography
          </h3>
          <small className="inline md:hidden">
            *Tap thumbnail for full view
          </small>
          <small className="hidden md:inline">
            *Click on thumbnail for large view
          </small>
        </header>
        <PhotographyGrid items={items} />
      </div>
    </section>
  );
}
