import PartnersCarousel from "../../../components/PartnersCarousel";
import parse from "html-react-parser";

export interface PartnerShowcaseProps {
  intro: string;
  description: string;
}

export default function PartnerShowcase({
  intro,
  description,
}: PartnerShowcaseProps) {
  return (
    <section className="py-10 lg:py-24">
      <div className="content-boundary grid grid-cols-1 md:grid-cols-2 gap-12">
        <article className="text-grayblue text-pretty">
          <div className="font-semibold text-heading-3">{parse(intro)}</div>
          <div className="mt-4">{description}</div>
        </article>
        <PartnersCarousel />
      </div>
    </section>
  );
}
