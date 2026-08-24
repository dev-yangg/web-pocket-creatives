import { LuCirclePlay } from "react-icons/lu";
import VideoShowcaseCarousel from "../components/VideoShowcaseCarousel";
import SectionShowcaseHeading from "../components/SectionShowcaseHeading";
import ContactCta from "../components/ContactCta";

export default function VideoShowcaseSection() {
  return (
    <section className="py-14">
      <div className="content-boundary gap-y-4 grid grid-cols-1 md:grid-cols-2">
        <SectionShowcaseHeading
          icon={LuCirclePlay}
          iconClass="stroke-[2.5]"
          label="Video Production"
        />
        <ContactCta
          label="Let's Talk"
          className="bg-yellow md:bg-blue md:text-white md:hover:bg-yellow order-3 md:order-2 justify-self-center"
        />
        <VideoShowcaseCarousel className="md:order-3 md:col-start-1 md:col-end-3" />
      </div>
    </section>
  );
}
