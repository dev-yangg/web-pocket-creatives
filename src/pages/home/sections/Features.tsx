import { BiCheck } from "react-icons/bi";
import ContactCta from "../../../components/ContactCta";
import FeatureCarousel from "../components/FeatureCarousel";

const commitments = ["Services", "Quality", "People"];

export default function Features() {
  return (
    <section className="bg-yellow py-14">
      <div className="content-boundary grid grid-cols-1 md:grid-cols-3 gap-14">
        <header className="md:col-start-1 md:col-end-3">
          <hgroup className="text-white font-extrabold flex flex-col leading-none">
            {commitments.map((label) => (
              <h2 key={label}>
                {label} - <CheckBadge />
              </h2>
            ))}
          </hgroup>
        </header>
        <ContactCta
          label="Say Hello"
          className="bg-white text-blue hover:bg-blue hover:text-white order-3 md:order-2 justify-self-center md:self-center md:col-start-3 md:col-end-4"
        />
        <FeatureCarousel className="md:order-3 md:col-start-1 md:col-end-4" />
      </div>
    </section>
  );
}

function CheckBadge() {
  return (
    <span className="text-blue inline-flex items-center">
      Check{" "}
      <span className="inline-block w-[1.25em] aspect-square">
        <BiCheck className="w-full h-full stroke-[1.5]" />
      </span>
    </span>
  );
}
