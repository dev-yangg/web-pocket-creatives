import { RiCameraLensLine } from "react-icons/ri";
import SectionShowcaseHeading from "../../../components/SectionShowcaseHeading";
import ContactCta from "../../../components/ContactCta";
import { useModal } from "../../../hooks/useModal";
const photographDisplay = "/images/photography/beauty.webp";

export interface PhotographyShowcaseProps {
  heading: string;
  categories: { name: string }[];
  ctaLabel: string;
}

export default function PhotographyShowcaseSection({
  heading,
  categories,
  ctaLabel,
}: PhotographyShowcaseProps) {
  const { openModal } = useModal();
  return (
    <section className="py-6 md:py-14 flex flex-col gap-6">
      <div className="content-boundary grid grid-cols-1 md:grid-cols-2">
        <SectionShowcaseHeading
          icon={RiCameraLensLine}
          iconClass="fill-blue"
          label={heading}
        />
        <div className="hidden md:grid md:grid-cols-4 order-3 md:order-2 justify-self-center">
          <ContactCta
            label={ctaLabel}
            className="bg-blue text-white hover:bg-yellow md:col-start-3"
            onClick={() => openModal("contact")}
          />
        </div>
      </div>
      <section className="max-md:content-boundary md:bleed-grid">
        <div className="grid grid-cols-1 md:grid-cols-3 md:items-center gap-4 md:gap-4 lg:gap-8 md:col-start-2 md:col-end-4">
          <div className="md:col-start-2 md:col-end-4 rounded-md md:rounded-none overflow-clip md:order-2 h-full relative">
            <img
              src={photographDisplay}
              alt="Beauty Preview"
              loading="lazy"
              className="md:absolute md:inset-0 w-full h-full object-cover object-center"
            />
          </div>
          <ul className="flex flex-col">
            {categories.map(({ name }) => (
              <li
                key={name}
                className="inline-block overflow-hidden custom-underline">
                <a
                  href="/"
                  className="inline-grid group py-1 font-bold text-heading-3">
                  <span className="col-start-1 row-start-1 text-nowrap text-grayblue md:text-black group-hover:-translate-y-full transition-transform duration-150 ease-swap">
                    {name}
                  </span>
                  <span className="col-start-1 row-start-1 text-nowrap text-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-swap">
                    View {name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
