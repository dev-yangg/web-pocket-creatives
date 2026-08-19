export default function PhotographyProdIntro() {
  return (
    <section className="bg-blue py-14 grid xl:place-items-center xl:min-h-dvh">
      <div className="content-boundary grid grid-cols-1 gap-5 md:gap-y-10 md:grid-cols-4 text-pretty">
        <h1 className="text-white leading-none font-bold md:col-start-1 md:col-end-5">
          We <span className="text-yellow tracking-[-0.15em]">squeeze</span>{" "}
          quality into every pixel...
        </h1>
        <p className="md:col-start-1 md:col-end-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          blanditiis earum sequi corporis asperiores iure. Vitae totam ducimus
          voluptatibus laudantium est voluptas sed. Fugit!
        </p>
        <p className="md:col-start-3 md:col-end-5 text-heading-3 text-white font-semibold leading-none">
          See some of our Photography work for different industries below.
        </p>
      </div>
    </section>
  );
}
