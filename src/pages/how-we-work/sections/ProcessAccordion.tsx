import { useState } from "react";
import { cn } from "../../../lib/utils";
import { processAccordion } from "../data";
import { IoIosArrowDown } from "react-icons/io";
import SVG1 from "../components/SVG1";
export default function ProcessAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-blue py-24 relative">
      <div
        aria-hidden="true"
        className="content-boundary absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[90%] md:left-0 md:translate-x-0">
          <div className="w-full h-full">
            <SVG1 />
          </div>
        </div>
      </div>
      <div className="content-boundary">
        <ul className="flex flex-col gap-y-4">
          {processAccordion.map((accord, index) => {
            const target = openIndex === index;

            return (
              <li key={accord.title}>
                <h3
                  className={cn(
                    "text-[clamp(1.56rem,0.7rem+2.5vw,5rem)] bg-yellow text-black md:text-white md:bg-transparent flex md:inline-flex gap-x-8 justify-between px-4 py-2 transition-colors duration-fast ease-swap cursor-pointer leading-tight",
                    { "md:bg-yellow md:text-black": target },
                  )}
                  onClick={() => handleClick(index)}>
                  <span className="font-bold">{accord.title}</span>
                  <span
                    className={cn(
                      "block w-[1em] aspect-square transition-transform duration-fast ease-in-out",
                      {
                        "rotate-180": target,
                      },
                    )}>
                    <IoIosArrowDown className="w-full h-full" />
                  </span>
                </h3>
                <div
                  className={cn("px-2 accordion", {
                    isOpen: target,
                  })}>
                  <div className="accordion-content text-white flex flex-col gap-y-4">
                    {accord.content.map((text) => (
                      <p key={text} className="leading-none">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
