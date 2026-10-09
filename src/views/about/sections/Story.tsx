import MilestoneCarousel from "../components/MilestoneCarousel";

export default function Story() {
  return (
    <section className="bg-yellow py-14">
      <div className="content-boundary">
        <h2 className="font-bold text-white text-heading-1">Our Story</h2>
        <section>
          <MilestoneCarousel />
        </section>
      </div>
    </section>
  );
}
