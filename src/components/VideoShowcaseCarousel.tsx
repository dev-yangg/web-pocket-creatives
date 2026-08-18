import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import VideoClip from "./VideoClip";

const videoProdSamples = [
  { label: "Beauty", src: "/videos/video-prod/beauty-slider.mp4" },
  { label: "Food & Drink", src: "/videos/video-prod/food-drink-slider.mp4" },
  { label: "Product", src: "/videos/video-prod/product-slider.mp4" },
  { label: "Crowdfunding", src: "/videos/video-prod/crowdfunding-slider.mp4" },
  { label: "Education", src: "/videos/video-prod/education-slider.mp4" },
  { label: "Explainers", src: "/videos/video-prod/explainers-slider.mp4" },
  { label: "HR", src: "/videos/video-prod/hr-slider.mp4" },
  { label: "Social-First", src: "/videos/video-prod/social-first-slider.mp4" },
  { label: "TV", src: "/videos/video-prod/tv-slider.mp4" },
];

export default function VideoShowcaseCarousel({
  className,
}: {
  className?: string;
}) {
  return (
    <section className={`${className ?? " "} flex flex-col gap-2.5`}>
      <ul className="flex gap-3 overflow-x-clip cursor-grab">
        {videoProdSamples.map((video, index) => (
          <li
            key={video.label}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${videoProdSamples.length}: ${video.label}`}
            className="flex flex-col w-[min(380px,100%)] xl:w-[min(550px,100%)] shrink-0">
            <h3 className="font-extrabold text-grayblue">{video.label}</h3>
            <VideoClip
              className="w-full h-auto object-cover rounded-lg"
              isActive={false}
              src={video.src}
              ariaLabel={`${video.label} video`}
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center gap-y-2 gap-x-4">
        <div
          role="group"
          aria-label="carousel navigation"
          className="flex gap-4">
          <button
            aria-label="previous slide"
            className="w-6 aspect-square bg-blue rounded-full p-1">
            <FaArrowLeft />
          </button>
          <button
            aria-label="next slide"
            className="w-6 aspect-square bg-blue rounded-full p-1">
            <FaArrowRight />
          </button>
        </div>
        <p className="text-tiny text-grayblue text-pretty leading-tight">
          *Drag to play the next Video, Tap to toggle sound
        </p>
      </div>
    </section>
  );
}
