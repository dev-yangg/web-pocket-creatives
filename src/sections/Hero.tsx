import flatLogo from "../assets/logo-flat.svg";
import logo from "../assets/logo.svg";
import stock1 from "../assets/stock1.webp";
import stock2 from "../assets/stock2.webp";
import heroClip from "/videos/hero-clip.mp4";
import VideoClip from "../components/VideoClip";

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 items-center">
      <div className="content-boundary">
        <header className="custom-underline flex justify-between items-end">
          <div className="py-2 w-45 lg:hidden">
            <img src={flatLogo} className="w-full h-auto" />
          </div>
          <div className="w-45 hidden lg:block">
            <img src={logo} className="w-full h-auto" />
          </div>
          <div aria-hidden="true" className="hidden lg:flex h-24">
            <img src={stock1} alt="" className="w-auto object-contain" />
            <img src={stock2} alt="" className="w-auto object-contain" />
          </div>
        </header>
        <p className="text-heading-3 text-grayblue text-pretty py-3 mb-6">
          A <span className="font-bold text-blue">fast</span> &{" "}
          <span className="font-bold text-blue md:text-yellow">friendly</span>{" "}
          <span className="font-bold text-black">Video Production</span> and{" "}
          <span className="font-bold text-black">Photography</span> company with{" "}
          <span className="font-bold text-black">bags of experience</span> and
          who <span className="text-red">♥</span> what we do.{" "}
          <span className="inline md:hidden">:)</span>
        </p>
        <VideoClip
          toggleMuteCaption
          isActive
          src={heroClip}
          className="w-full h-full rounded-xl"
        />
      </div>
    </section>
  );
}
