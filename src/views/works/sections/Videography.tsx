import type { Ref } from "react";
import VideographyGrid from "../components/VideographyGrid";
import type { VideographySample } from "../data";
interface Props {
  category: string;
  items: VideographySample[];
  ref?: Ref<HTMLElement>;
}

export default function Videography({ category, items, ref }: Props) {
  return (
    <section ref={ref} className="py-14 scroll-mt-8">
      <div className="content-boundary flex flex-col gap-y-2 md:gap-y-4">
        <header className="portfolio-gallery-header">
          <h2 className="text-heading-3 font-extrabold">
            <span className="capitalize">{category}</span> Videography
          </h2>
          <small className="inline md:hidden">*Tap Video to play</small>
          <small className="hidden md:inline">
            *Click on Video to play in large view
          </small>
        </header>
        <VideographyGrid items={items} />
      </div>
    </section>
  );
}
