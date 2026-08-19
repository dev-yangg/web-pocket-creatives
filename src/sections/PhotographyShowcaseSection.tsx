import { RiCameraLensLine } from "react-icons/ri";
import SectionShowcaseHeading from "../components/SectionShowcaseHeading";
import photographDisplay from "/images/photography/beauty.webp";

const photographyCateg = [
  { name: "Beauty", path: "/works/beauty" },
  { name: "Food&Drink", path: "/works/food-drink" },
  { name: "Product", path: "/works/product" },
  { name: "Events", path: "/works/events" },
  { name: "Crowdfunding", path: "/works/crowdfunding" },
  { name: "Fashion", path: "/works/fashion" },
  { name: "People", path: "/works/people" },
  { name: "Jewellery", path: "/works/jewellery" },
];

export default function PhotographyShowcaseSection() {
  return (
    <section className="py-6 md:py-14 flex flex-col gap-6">
      <div className="content-boundary">
        <SectionShowcaseHeading
          icon={RiCameraLensLine}
          iconClass="fill-blue"
          label="Photography"
        />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 content-boundary md:items-center gap-4">
        <div className="rounded-md md:rounded-none overflow-clip md:order-2 h-full relative">
          <img
            src={photographDisplay}
            alt="Beauty Preview"
            loading="lazy"
            className="md:absolute md:inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <ul className="flex flex-col">
          {photographyCateg.map((categ) => (
            <li
              key={categ.name}
              className="inline-block overflow-hidden custom-underline">
              <a
                href={categ.path}
                className="inline-grid group py-1 font-bold text-heading-3">
                <span className="col-start-1 row-start-1 text-nowrap text-grayblue md:text-black group-hover:-translate-y-full transition-transform duration-150 ease-swap">
                  {categ.name}
                </span>
                <span className="col-start-1 row-start-1 text-nowrap text-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-swap">
                  View {categ.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
