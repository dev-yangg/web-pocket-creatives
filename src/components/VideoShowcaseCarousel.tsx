import VideoClip from "./VideoClip";
import CarouselControls from "./CarouselControls";

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
      <ul
        style={{ "--gap-x": "0.75rem" } as React.CSSProperties}
        className="flex gap-(--gap-x) overflow-x-auto snap-mandatory snap-x cursor-grab scrollbar-none pr-[calc(100%-min(450px,100%))]">
        {videoProdSamples.map((video, index) => (
          <li
            key={video.label}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${videoProdSamples.length}: ${video.label}`}
            className="snap-start flex flex-col w-[min(450px,100%)] shrink-0">
            <h3 className="font-extrabold text-grayblue">{video.label}</h3>
            <VideoClip
              className="w-full h-auto object-cover rounded-lg"
              isActive={false}
              src={video.src}
              ariaLabel={`${video.label} video`}
            />
          </li>
        ))}
        <li className="snap-start flex flex-col justify-center w-[min(450px,100%)] shrink-0">
          <a
            href="/"
            className="inline-block leading-none w-fit text-heading-1 font-extrabold ml-(--gap-x) hover:text-yellow underline">
            View <br /> All.
          </a>
        </li>
      </ul>
      <div className="flex justify-between items-center gap-y-2 gap-x-4">
        <CarouselControls
          className="bg-blue"
          onPrevious={() => console.log("Prev Video")}
          onNext={() => console.log("Next Video")}
        />
        <p className="text-tiny text-grayblue text-pretty leading-tight">
          *Drag to play the next Video, Tap to toggle sound
        </p>
      </div>
    </section>
  );
}
