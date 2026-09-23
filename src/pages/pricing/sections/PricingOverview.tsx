import { BiCheck } from "react-icons/bi";
import { pricingOverviewData } from "../data";
import { cn } from "../../../lib/utils";

import PricingOverviewVideo from "../components/PricingOverviewVideo";

export default function PricingOverview() {
  const { headline, checklist, infoBlocks } = pricingOverviewData;
  return (
    <section className="py-20 overflow-clip">
      <div className="content-boundary flex flex-col">
        <hgroup className="flex flex-col gap-y-4 lg:gap-y-8">
          <h2 className="text-heading-2 font-extrabold leading-tight">
            {headline}
          </h2>
          <ul>
            {checklist.map((list, index) => (
              <li
                key={`${index}-${list}`}
                className="grid grid-cols-[auto_1fr] text-heading-3 gap-x-[.5ch]">
                <span className="inline-block -translate-y-1 w-[1.3em] aspect-square shrink-0 text-blue">
                  <BiCheck className="w-full h-full stroke-1" />
                </span>
                <span className="leading-tight">{list}</span>
              </li>
            ))}
          </ul>
        </hgroup>
        <PricingOverviewVideo />
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-20 2xl:mt-20">
          {infoBlocks.map((blk, index) => {
            const { icon: EuroIcon, title, description } = blk;
            const isReversed = (index + 1) % 2 === 0;
            return (
              <li
                key={`${index}-${title}`}
                className="bg-blue text-white relative @container px-14">
                <div
                  aria-hidden="true"
                  className={cn(
                    "text-black absolute w-[clamp(7rem,12cqw,10rem)] lg:w-[clamp(4rem,28cqw,10rem)]",
                    {
                      " top-0 left-0 translate-x-[-12%] lg:translate-x-[-12%] translate-y-[-25%] lg:-translate-y-1/2":
                        !isReversed,
                    },
                    {
                      "order-2 top-0 lg:bottom-0 right-0 translate-x-[20%] lg:translate-x-[18%] translate-y-[-25%] lg:translate-y-1/2":
                        isReversed,
                    },
                  )}>
                  <EuroIcon />
                </div>
                <div className="flex flex-col gap-y-8 pt-18 lg:pt-14 pb-20 w-[min(700px,100%)] lg:w-[min(500px,100%)] mx-auto">
                  <h3 className="text-heading-3 font-bold text-center leading-tight">
                    {title}
                  </h3>
                  <p>{description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
