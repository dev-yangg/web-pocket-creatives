import type { Ref } from "react";
import ScrollTo from "../../../components/ScrollTo";
import type { ServicesIntro, ServicesSectionKey } from "../data";
import { cn } from "../../../lib/utils";

type Props = ServicesIntro & {
  sectionRef: Ref<HTMLElement>;
  onClick: (ref: ServicesSectionKey) => void;
  className?: string;
};

export default function SectionScroller({
  headline,
  headlineHighlight,
  content,
  ctas,
  sectionRef,
  className,
  onClick,
}: Props) {
  return (
    <section ref={sectionRef} className={cn("py-44", className)}>
      <div className="content-boundary grid grid-cols-1 md:grid-cols-2 gap-y-14">
        <h2 className="flex flex-col text-[clamp(2.5rem,4vw+1vw,5rem)]  min-[490px]:text-heading-1 text-white leading-none font-extrabold text-balance md:col-span-2">
          <span>{headline}</span>
          <span>{headlineHighlight}</span>
        </h2>
        <p className="">{content}</p>
        <div className="flex flex-col gap-y-3  md:justify-self-center">
          <p className="font-extrabold">{ctas.ctaLabel}</p>
          <nav className="flex flex-col gap-y-2">
            {ctas.links.map((btn) => (
              <ScrollTo
                key={btn.label}
                onClick={() => onClick(btn.reference)}
                label={btn.label}
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
