import flatLogo from "../assets/logo-flat.svg";
import stock1 from "../assets/stock1.webp";
import stock2 from "../assets/stock2.webp";
import HeroVideoClip from "../components/HeroVideoClip";

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 items-center">
      <article className="w-[min(1000px,100%)] mx-auto">
        <header className="custom-underline flex justify-between items-end">
          <div className="py-2 block md:hidden">
            <img src={flatLogo} />
          </div>
          <h2 className="text-grayblue capitalize font-black hidden md:block">
            Pocket Creatives
          </h2>
          <div className="hidden md:flex h-24">
            <img src={stock1} alt="" className="w-auto object-contain" />
            <img src={stock2} alt="" className="w-auto object-contain" />
          </div>
        </header>
        <p className="text-title text-grayblue text-pretty py-3">
          A <span className="font-bold text-blue">fast</span> &{" "}
          <span className="font-bold text-blue md:text-yellow">friendly</span>{" "}
          <span className="font-bold text-black">Video Production</span> and{" "}
          <span className="font-bold text-black">Photography</span> company with{" "}
          <span className="font-bold text-black">bags of experience</span> and
          who <span className="text-red">♥</span> what we do.{" "}
          <span className="inline md:hidden">:)</span>
        </p>
      </article>
      <HeroVideoClip />
    </section>
  );
}
