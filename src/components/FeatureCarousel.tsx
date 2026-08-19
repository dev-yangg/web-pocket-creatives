import { cn } from "../lib/utils";
import CarouselControls from "./CarouselControls";

const featureList = [
  {
    title: "Proactive",
    description:
      "We pride ourselves on our quality of service above everything else. We've taken the time to build a cracking little team at Pocket, and we make sure that you feel the benefits of working with a dedicated video production company who are there for you, and dedicated to the success of your project.",
  },
  {
    title: "Nerds for Visuals",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum ut laoreet nunc at amet. Pretium sed tristique eu erat dui elementum eu duis. Sem posuere congue pellentesque duis in. Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat id habitasse mauris mauris iaculis. Id at.",
  },
  {
    title: "Valuable",
    description:
      "Lorem ipsum dolor sit amet consectetur. Varius tempor id nulla aliquet gravida. Quis at auctor quis lectus velit id parturient bibendum. Amet a erat faucibus enim orci. Praesent magna facilisi erat eget dictumst nulla nunc. Scelerisque cras viverra ipsum at accumsan a. Sed sollicitudin lacinia amet arcu volutpat. Id.",
  },
  {
    title: "Flexible",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin nibh sed nullam commodo volutpat urna mus. Tristique arcu non sed erat amet facilisi aliquet massa feugiat. Ipsum placerat accumsan sagittis egestas sagittis id volutpat. Mauris est lectus libero at sem. Amet magna euismod tristique interdum pretium. Massa venenatis.",
  },
  {
    title: "Normal People",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis eu aliquam molestie arcu maecenas. Integer volutpat quisque orci facilisis. Et volutpat mauris lacus feugiat tempor. Facilisi risus id egestas eget sit adipiscing nec lectus. Consequat pretium sit in id phasellus vitae mi. Libero tempus ut leo egestas elit. Ut consectetur lacus amet porta.",
  },
  {
    title: "Conscious",
    description:
      "Lorem ipsum dolor sit amet consectetur. Gravida eget sem non feugiat iaculis faucibus. Ut enim semper in commodo neque tortor leo eu. Convallis est in leo porttitor tempor vitae etiam urna. Aliquet fusce dolor aliquet sed dictum. Dolor auctor vitae ultricies nisi ridiculus. Est elementum massa ullamcorper et malesuada et tristique.",
  },
];

export default function FeatureCarousel({ className }: { className?: string }) {
  const handlePrev = () => {
    console.log("Previous Feature");
  };
  const handleNext = () => {
    console.log("Next Feature");
  };
  return (
    <section className={cn("lg:flex lg:flex-col lg:gap-4", className)}>
      <ul
        style={{ "--col-gap": "2.5rem" } as React.CSSProperties}
        className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-(--col-gap) overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none">
        {featureList.map((feat) => (
          <li
            key={feat.title}
            className="lg:shrink-0 lg:w-[calc((100%-var(--col-gap)*2)/3)]">
            <article className="flex flex-col gap-1.5">
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </article>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">
        <CarouselControls
          className="bg-white"
          onPrevious={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}
