import VideographyGrid from "../components/VideographyGrid";
import type { VideographySample } from "../data";
interface Props {
  category: string;
  items: VideographySample[];
}

export default function Videography({ category, items }: Props) {
  return (
    <section className="py-14">
      <div className="content-boundary flex flex-col gap-y-2 md:gap-y-4">
        <header className="portfolio-gallery-header">
          <h3 className="font-extrabold">
            <span className="capitalize">{category}</span> Videography
          </h3>
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
