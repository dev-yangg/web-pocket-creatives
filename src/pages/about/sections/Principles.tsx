import PrinciplesCarousel from "../components/PrinciplesCarousel";

export default function Principles() {
  return (
    <section className="py-24">
      <div className="content-boundary flex flex-col gap-y-18">
        <hgroup className="flex flex-col gap-y-3 md:items-center md:text-center">
          <h2 className="font-bold text-heading-1">Our Code</h2>
          <p className="w-[min(600px,100%)]">
            We are happy to publish our internal values for the world to see, as
            this gives you an overview of how we conduct ourselves and our
            business. Here are the guidelines that we happily work to...
          </p>
        </hgroup>
        <section className="w-[min(1000px,100%)] mx-auto">
          <PrinciplesCarousel />
        </section>
      </div>
    </section>
  );
}
