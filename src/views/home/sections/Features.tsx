// import { BiCheck } from "react-icons/bi";
import ContactCta from "../../../components/ContactCta";
import FeatureCarousel, { type Feature } from "../components/FeatureCarousel";
import { useModal } from "../../../hooks/useModal";
import parse from "html-react-parser";

export interface FeatureProps {
  commitments: {
    name: string;
  }[];
  ctaLabel: string;
  featurelist: Feature[];
}
export default function Features({
  commitments,
  ctaLabel,
  featurelist,
}: FeatureProps) {
  const { openModal } = useModal();
  return (
    <section className="bg-yellow py-14">
      <div className="content-boundary grid grid-cols-1 md:grid-cols-3 gap-14">
        <header className="md:col-start-1 md:col-end-3">
          <div className="text-heading-2 text-white font-extrabold flex flex-col leading-none">
            {commitments.map(({ name }) => (
              <div key={name} className="inline-flex items-center">
                {parse(name)}
                {/* <span className="inline-block w-[1.25em] aspect-square">
                  <BiCheck className="w-full h-full stroke-[1.5]" />
                </span> */}
              </div>
            ))}
          </div>
        </header>
        <ContactCta
          onClick={() => openModal("contact")}
          label={ctaLabel}
          className="bg-white text-blue hover:bg-blue hover:text-white order-3 md:order-2 justify-self-center md:self-center md:col-start-3 md:col-end-4"
        />
        <FeatureCarousel
          featureList={featurelist}
          className="md:order-3 md:col-start-1 md:col-end-4"
        />
      </div>
    </section>
  );
}
