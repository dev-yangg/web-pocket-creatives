import WorksCarousel from "../components/WorksCarousel";

export default function Works() {
  return (
    <section className="py-20">
      <div className="content-boundary flex flex-col gap-y-18">
        <h2 className="text-center font-bold text-heading-1">Our Works</h2>
        <section>
          <WorksCarousel />
        </section>
      </div>
    </section>
  );
}
