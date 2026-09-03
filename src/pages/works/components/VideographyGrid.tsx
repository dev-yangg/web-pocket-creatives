import Skeleton from "./Skeleton";

export default function VideographyGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </section>
  );
}
