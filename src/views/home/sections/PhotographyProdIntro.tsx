import parse from "html-react-parser";

export interface PhotographyShowcaseIntroProps {
  heading: string;
  subheading: string;
  description: string;
}

export default function PhotographyProdIntro({
  heading,
  subheading,
  description,
}: PhotographyShowcaseIntroProps) {
  return (
    <section className="bg-blue py-14 grid 2xl:place-items-center 2xl:min-h-dvh">
      <div className="content-boundary grid grid-cols-1 gap-5 md:gap-y-10 md:grid-cols-4 text-pretty">
        <div className="text-heading-1 text-white leading-none font-bold md:col-start-1 md:col-end-5">
          {parse(heading)}
        </div>
        <div className="md:col-start-1 md:col-end-3 leading-7">
          {description}
        </div>
        <div className="md:col-start-3 md:col-end-5 text-heading-3 text-white font-semibold leading-none">
          {subheading}
        </div>
      </div>
    </section>
  );
}
