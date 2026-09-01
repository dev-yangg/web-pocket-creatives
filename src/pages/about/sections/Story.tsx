import MilestoneCarousel from "../components/MilestoneCarousel";

export default function Story() {
  return (
    <section className="bg-yellow py-14">
      <div className="content-boundary">
        <h1 className="font-bold text-white">Our Story</h1>
        <section>
          <MilestoneCarousel />
        </section>
      </div>
    </section>
  );
}
