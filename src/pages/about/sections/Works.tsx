import WorksCarousel from "../components/WorksCarousel";

export default function Works() {
  return (
    <section className="py-20">
      <div className="content-boundary flex flex-col gap-y-18">
        <h1 className="text-center font-bold">Our Works</h1>
        <section>
          <WorksCarousel />
        </section>
      </div>
    </section>
  );
}
