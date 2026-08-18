import { SlArrowDown } from "react-icons/sl";

export default function VideoProdIntro() {
  return (
    <section className="bg-yellow py-14">
      <div className="w-[min(1000px,(100%-2em))] mx-auto content-boundary grid grid-cols-1 place-items-center gap-6 md:grid-cols-3">
        <h1 className="md:col-start-1 md:col-end-4 text-white font-bold leading-none text-balance">
          Take a look at some of our video work...
        </h1>
        <p className="w-[min(600px,100%)] justify-self-start text-pretty md:col-start-1 md:col-end-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          voluptatibus alias architecto eveniet doloremque illo distinctio
          suscipit eaque, voluptatum expedita dolores eius ut sed?
        </p>
        <div
          aria-hidden="true"
          className="w-34 aspect-square grid place-items-center justify-self-center md:justify-self-start md:col-start-3 md:col-end-4">
          <SlArrowDown className="text-white fill-current w-full h-full animate-float" />
        </div>
      </div>
    </section>
  );
}
