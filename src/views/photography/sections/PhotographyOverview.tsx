import OverviewContent from "../components/OverviewContent";
import Photogrid from "../components/Photogrid";
import { photographyOverview } from "../data";

export default function PhotographyOverview() {
  const { contents, images } = photographyOverview;
  const { grid01, grid02 } = images;

  return (
    <section className="py-24">
      <div className="content-boundary grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 gap-4 lg:gap-x-8 lg:gap-y-14">
        <OverviewContent
          {...contents.leading}
          className="lg:col-span-2 lg:col-start-1 lg:col-end-3 lg:leading-tight"
          headingClassName="bg-yellow px-2 text-center lg:text-left"
        />
        <Photogrid
          images={grid01}
          flipped
          className="pt-4 lg:pt-0 lg:self-start lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-end-3"
        />
        <Photogrid
          images={grid02}
          flipped
          className="pb-4 lg:pb-0 lg:self-end lg:row-start-2 lg:row-end-4 lg:col-span-2"
        />
        <OverviewContent
          {...contents.ending}
          className="lg:row-start-3 lg:row-end-4 lg:col-span-2 lg:leading-tight"
          headingClassName="bg-blue px-2 order-2 text-white text-center lg:text-right"
        />
      </div>
    </section>
  );
}
