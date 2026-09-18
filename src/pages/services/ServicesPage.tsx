import { useRef } from "react";
import { useScrollTo } from "../../hooks/useScrollTo";
import SectionScroller from "./components/SectionScroller";
import {
  servicesIntro1,
  servicesIntro2,
  servicesIntro3,
  type ServicesSectionKey,
} from "./data";

export default function ServicesPage() {
  const videographyServicesRef = useRef<HTMLElement | null>(null);
  const photographyServicesRef = useRef<HTMLElement | null>(null);
  const theRestServicesRef = useRef<HTMLElement | null>(null);

  const jumpTo: Record<ServicesSectionKey, () => void> = {
    videography: useScrollTo(videographyServicesRef),
    photography: useScrollTo(photographyServicesRef),
    rest: useScrollTo(theRestServicesRef),
  };

  const handleClick = (reference: ServicesSectionKey) => jumpTo[reference]();

  return (
    <main className="pt-app-padding-top bg-yellow">
      <SectionScroller
        {...servicesIntro1}
        sectionRef={videographyServicesRef}
        onClick={handleClick}
        className="bg-yellow max-md:pt-0"
      />
      <SectionScroller
        {...servicesIntro2}
        sectionRef={photographyServicesRef}
        onClick={handleClick}
        className="bg-blue"
      />
      <SectionScroller
        {...servicesIntro3}
        sectionRef={theRestServicesRef}
        onClick={handleClick}
        className="bg-yellow"
      />
    </main>
  );
}
