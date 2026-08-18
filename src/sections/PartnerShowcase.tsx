import PartnersCarousel from "../components/PartnersCarousel";

export default function PartnerShowcase() {
  return (
    <section className="py-10 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
      <article className="text-grayblue text-pretty">
        <hgroup className="font-semibold flex flex-col gap-6">
          <h2>
            As you can see, we’ve{" "}
            <span className="text-yellow md:text-blue">partnered</span> with a
            lot of amazing people
          </h2>
          <h2 className="font-bold text-blue md:text-black">
            in many different Industries:
          </h2>
        </hgroup>
        <p className="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ad
          eveniet, rerum rem fugit placeat autem aspernatur possimus sed
          tempore, praesentium ducimus quo labore exercitationem nulla commodi
          iusto temporibus veritatis!
        </p>
      </article>
      <PartnersCarousel />
    </section>
  );
}
