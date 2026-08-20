import logo from "/pocket-creatives-logo.svg";
import { BiCheck } from "react-icons/bi";

export default function Pricing() {
  return (
    <section className="py-14">
      <div className="content-boundary grid grid-cols-1 md:grid-cols-4 gap-8">
        <h3 className="font-extrabold leading-none md:text-[clamp(1.5rem,1.75rem+0.25rem,4rem)] lg:text-[clamp(1.75rem,2.25rem+0.75rem,4rem)] text-balance md:col-span-3">
          We value <span className="text-blue">transparency</span>, so let’s
          talk about pricing.
        </h3>
        <button className="bg-yellow rounded-full px-3 py-1 leading-none justify-self-center md:self-start shrink-0">
          View Pricing
        </button>
        <p className="md:col-span-2 flex-1 max-w-100 text-heading-4 leading-none text-pretty">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta
          quam ornare.
        </p>
        <p className="flex items-center justify-self-center shrink-0 text-[clamp(1.15rem,1.25vw+1rem,3rem)] gap-x-1 md:col-span-2 place-self-center">
          <img src={logo} alt="" className="w-[1em] aspect-square" />
          <span className="inline-block text-nowrap leading-none">
            Pocket Promise
          </span>
        </p>
        <p className="md:col-span-2 w-[min(700px,100%)]">
          Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta
          quam ornare. In nec lacinia consectetur placerat vestibulum sem odio.
          In feugiat elit fames eget lobortis turpis scelerisque tincidunt.
          Enim.
        </p>
        <span className="md:col-span-2 md:self-center bg-yellow inline-flex items-baseline-last py-1 px-3 rounded-lg leading-none justify-self-center shrink-0">
          <span className="text-heading-2 text-white font-bold">Value</span>
          <span className="font-semibold">Price</span>
          <span className="self-end text-[2em] text-blue">
            <BiCheck className="w-full h-full stroke-[1.5]" />
          </span>
        </span>
      </div>
    </section>
  );
}
