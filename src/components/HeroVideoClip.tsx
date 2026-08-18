import { useRef, useState } from "react";
import heroClip from "/videos/hero-clip.mp4";

export default function HeroVideoClip() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <figure className={"w-full flex flex-col"}>
      <figcaption className="text-small text-grayblue mb-2">
        *<span className="inline lg:hidden">Tap</span>
        <span className="hidden lg:inline">Click on</span> Video to toggle sound
      </figcaption>
      <video
        ref={videoRef}
        muted={muted}
        src={heroClip}
        autoPlay
        loop
        playsInline
        onClick={toggleSound}
        className="cursor-pointer w-full h-full rounded-2xl"
      />
    </figure>
  );
}
