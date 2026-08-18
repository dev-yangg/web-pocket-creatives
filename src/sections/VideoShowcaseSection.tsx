import { LuCirclePlay } from "react-icons/lu";
import VideoShowcaseCarousel from "../components/VideoShowcaseCarousel";

export default function VideoShowcaseSection() {
  return (
    <section className="py-14">
      <div className="content-boundary gap-y-4 grid grid-cols-1 md:grid-cols-2">
        <header>
          <h3 className="flex flex-wrap items-center gap-2">
            <span className="inline-block w-7">
              <LuCirclePlay className="fill-none stroke-blue stroke-[2.5] w-full h-auto" />
            </span>
            <span className="text-grayblue">Video Production</span>
          </h3>
        </header>
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
