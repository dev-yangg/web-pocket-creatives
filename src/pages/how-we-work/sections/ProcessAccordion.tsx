import { useState } from "react";
import { cn } from "../../../lib/utils";
import { processAccordion } from "../data";
import { IoIosArrowDown } from "react-icons/io";
export default function ProcessAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-blue py-14">
      <div className="content-boundary">
        <ul className="flex flex-col gap-y-4">
          {processAccordion.map((accord, index) => {
            const target = openIndex === index;

            return (
              <li key={accord.title}>
                <h3
                  className={cn(
                    "text-[clamp(1.56rem,0.7rem+2.5vw,5rem)] bg-yellow text-black md:text-white md:bg-transparent flex md:inline-flex gap-x-8 justify-between px-4 py-2 transition-colors duration-fast ease-swap cursor-pointer",
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
