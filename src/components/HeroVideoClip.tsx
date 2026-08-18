import heroClip from "/videos/hero-clip.mp4";
import VideoClip from "./VideoClip";

export default function HeroVideoClip() {
  return (
    <figure className={"w-full flex flex-col"}>
      <figcaption className="text-small text-grayblue mb-2">
        *<span className="inline lg:hidden">Tap</span>
        <span className="hidden lg:inline">Click on</span> Video to toggle sound
      </figcaption>
      <VideoClip isActive src={heroClip} className="w-full h-full rounded-xl" />
    </figure>
  );
}
