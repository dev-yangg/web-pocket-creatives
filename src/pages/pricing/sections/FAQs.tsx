import { cn } from "../../../lib/utils";
import { faqData } from "../data";

export default function FAQs() {
  const { sections } = faqData;
  return (
    <section className="bg-blue py-24 ">
      <h2 className="sr-only">FAQs</h2>
      <div className="content-boundary flex flex-col gap-y-14">
        {sections.map((section, index) => {
          const is2nd = index === 1;
          return (
            <section
              key={section.badge}
              className="flex flex-col items-center gap-y-5">
              <h3
                className={cn(
                  "inline-block w-fit text-black bg-yellow text-heading-2 font-extrabold py-4 px-6 leading-tight",
                  { "md:self-start": !is2nd },
                  { "md:self-end": is2nd },
                )}>
                {section.badge}
              </h3>
              <div className="flex flex-col gap-y-5 text-white">
                {section.paragraphs.map((content) => (
                  <p key={content}>{content}</p>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
