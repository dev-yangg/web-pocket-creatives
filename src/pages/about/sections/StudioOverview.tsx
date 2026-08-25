import us from "/images/about/us.webp";
export default function StudioOverview() {
  return (
    <section className="bg-blue py-14">
      <div className="content-boundary flex flex-col gap-y-6 md:gap-y-12">
        <h2 className="font-bold leading-tight md:leading-none text-white md:text-balance md:text-heading-1">
          Video production and photography at Pocket Creatives
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8">
          <div className=" md:order-2 md:py-10 md:pl-4">
            <div className="relative">
              <img
                src={us}
                alt=""
                className="w-full aspect-[5/2.9] object-cover"
              />
              <div
                data-before="This is us..."
                className="@container hidden md:block before:absolute before:top-0 before:-translate-x-1/2 before:translate-y-[-30%] before:left-0 before:w-[12cqw] before:aspect-square before:bg-yellow before:text-black before:content-[attr(data-before)] before:rounded-full before:text-[clamp(0.5rem,3.25cqw,0.85rem)] before:px-1 before:grid before:place-content-center before:text-center before:font-bold before:leading-none before:-rotate-10"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-y-8 md:leading-loose">
            <p>
              Pocket Creatives is a video production and photography team built
              on over 16 years of experience in the visual and creative
              industries. Run by co-owners{" "}
              <span className="text-white">Steven</span>,{" "}
              <span className="text-white">Haider</span> and{" "}
              <span className="text-white">Lauren</span>, our team loves
              producing great video and photography, and we like to think that
              it shows in the work we deliver.
            </p>
            <p>
              We've worked hard to assemble a talented team who can deliver high
              quality video production services, as well as video and
              photography content creation.
            </p>
            <p>
              Drop us a mail, we're a friendly bunch and are more than happy to
              chat about what we could offer on your next project!
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
