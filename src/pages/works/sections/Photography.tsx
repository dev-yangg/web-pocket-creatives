import PhotographyGrid from "../components/PhotographyGrid";
import type { WorksGridSample } from "../data";
interface Props {
  category: string;
  items: WorksGridSample[];
}

export default function Photography({ category, items }: Props) {
  return (
    <section className="py-14">
      <div className="content-boundary flex flex-col gap-y-2 md:gap-y-4">
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
