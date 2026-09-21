import { LuCirclePlay } from "react-icons/lu";
import VideoShowcaseCarousel from "../components/VideoShowcaseCarousel";
import SectionShowcaseHeading from "../../../components/SectionShowcaseHeading";
import ContactCta from "../../../components/ContactCta";
import { useModal } from "../../../hooks/useModal";

export default function VideoShowcaseSection() {
  const { openModal } = useModal();
  return (
    <section className="py-14">
      <div className="content-boundary gap-y-4 grid grid-cols-1 md:grid-cols-2">
        <SectionShowcaseHeading
          icon={LuCirclePlay}
          iconClass="stroke-[2.5]"
          label="Video Production"
        />
        <div className="md:grid md:grid-cols-4 order-3 md:order-2 justify-self-center">
          <ContactCta
            label="Let's Talk"
            className="bg-yellow md:bg-blue md:text-white md:hover:bg-yellow  md:col-start-3"
            onClick={() => openModal("contact")}
          />
        </div>
        <VideoShowcaseCarousel className="md:order-3 md:col-start-1 md:col-end-3" />
      </div>
    </section>
  );
}
