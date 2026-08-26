import ValueCarousel from "../components/ValueCarousel";

export default function ValueProposition() {
  return (
    <section className="pt-16 pb-8 md:pb-16 bg-yellow flex flex-col gap-y-12 lg:gap-y-16">
      <div className="content-boundary text-white px-6">
        <header className="flex flex-col gap-y-6">
          <h1 className="font-bold">Why us?</h1>
          <p className="text-heading-4 md:text-black">
            We know that you have a wonderful variety of creative video and
            photography companies out there to choose from, so here are the
            reasons we'd like you to consider us:
          </p>
        </header>
      </div>
      <section className="bleed-grid ">
        <ValueCarousel className="col-start-2 col-span-2 bg-blue px-6 py-8" />
      </section>
    </section>
  );
}
