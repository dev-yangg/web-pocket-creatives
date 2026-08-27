import { HiOutlineMail } from "react-icons/hi";
import VideoClip from "../../../components/VideoClip";
import heroClip from "/videos/about-hero-clip.mp4";
import flatLogo from "../../../assets/logo-flat.svg";

export default function Hero() {
  return (
    <section className="pb-14">
      <div className="content-boundary flex flex-col gap-4">
        <header>
          <h2 className="leading-none sm:text-heading-1 md:text-balance 3xl:text-grayblue w-[min(900px,100%)] 3xl:w-full">
            About us at{" "}
            <span className="3xl:hidden">
              <span className="text-blue font-bold">Pocket</span>{" "}
              <span className="text-yellow font-bold">Creatives</span>
            </span>
            <span className="hidden 3xl:inline-block w-[12em] max-w-full">
              <img src={flatLogo} alt="" className="w-full h-auto" />
            </span>
          </h2>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div>
            <VideoClip
              src={heroClip}
              isActive
              toggleMuteCaption
              captionAtTop={false}
            />
          </div>
          <div className="mt-8 md:mt-0 flex flex-col md:items-end gap-y-6 md:pt-1">
            <p className="md:text-right md:text-pretty lg:w-[min(500px,100%)] xl:w-full leading-normal">
              Find out more about our production team, what we stand for and why
              you would choose us for your next video production or photography
              shoot.
            </p>
            <button className="self-center md:self-auto px-3 py-3.5 md:uppercase flex items-center bg-blue text-white md:text-black rounded-xl md:rounded-none gap-[1ch] md:gap-[1.5ch]">
              <span className="inline-block w-[1.75em] md:w-[1.25em] aspect-auto">
                <HiOutlineMail className="md:stroke-[1.5]" />
              </span>
              I'd like to chat!
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
