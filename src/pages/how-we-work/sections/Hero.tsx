import { HighlightedText } from "../../../components/HighlightedText";
import { cn } from "../../../lib/utils";
import { processHighlights, processIntro } from "../data";

export default function Hero() {
  const {
    headline,
    highlightedText,
    subheadline,
    ctaIcon: Icon,
    ctaLabel,
  } = processIntro;
  return (
    <section className="pb-14">
      <div className="content-boundary grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <section className="flex flex-col items-start gap-y-2">
          <h3 className="text-blue font-extrabold leading-snug text-balance">
            <HighlightedText
              text={headline}
              highlight={highlightedText}
              highlightClassName="bg-yellow text-black px-1.5 py-1"
            />
          </h3>
          <p>{subheadline}</p>
          <a
            href="mailto:"
            className="text-regular flex items-center gap-x-[.5ch] bg-yellow self-center min-[700px]:self-start p-4 md:px-3 md:py-2.5 rounded-2xl mt-8 shadow-below">
            <span className="block h-[1.5em] aspect-square">
              <Icon className="w-full h-full" />
            </span>
            <span>{ctaLabel}</span>
          </a>
        </section>
        <section className="hidden md:flex flex-col gap-y-8">
          {processHighlights.map((content, index) => {
            const { icon: Icon, title, description } = content;
            const isFirst = index === 0;
            const Header = isFirst ? "h2" : "h3";

            return (
              <div
                key={title}
                className={cn(
                  "bg-blue text-white flex flex-col px-8 py-6 lg:py-12",
                  {
                    "bg-yellow text-black": !isFirst,
                  },
                )}>
                <Header
                  className={cn(
                    "font-bold flex leading-none py-3 items-start",
                    { "gap-x-2": !isFirst },
                  )}>
                  <span className="block w-[1.2em] h-[1.2em] shrink-0">
                    <Icon className="w-full h-full" />
                  </span>
                  <span>{title}</span>
                </Header>
                <p className="leading-snug">{description}</p>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}
