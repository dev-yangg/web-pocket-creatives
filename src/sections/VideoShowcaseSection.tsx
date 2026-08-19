import { LuCirclePlay } from "react-icons/lu";
import VideoShowcaseCarousel from "../components/VideoShowcaseCarousel";
import SectionShowcaseHeading from "../components/SectionShowcaseHeading";

export default function VideoShowcaseSection() {
  return (
    <section className="py-6 md:py-14">
      <div className="content-boundary gap-y-4 grid grid-cols-1 md:grid-cols-2">
        <SectionShowcaseHeading
          icon={LuCirclePlay}
          iconClass="stroke-[2.5]"
          label="Video Production"
        />
        <button className="order-3 md:order-2 @container justify-self-center bg-yellow md:bg-blue md:text-white font-bold leading-none w-24 md:w-14  aspect-square rounded-full rotate-10 drop-shadow-[3px_3px_3px] drop-shadow-grayblue">
          <span className="text-[30cqw] inline-block">
            Let's <br /> Talk
          </span>
        </button>
        <VideoShowcaseCarousel className="md:order-3 md:col-start-1 md:col-end-3" />
      </div>
    </section>
  );
}
