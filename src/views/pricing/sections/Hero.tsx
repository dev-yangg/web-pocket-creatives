import VideoClip from "../../../components/VideoClip";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { useScreen } from "../../../hooks/useScreen";
import { heroData } from "../data";
import heroClip from "/videos/hero-clip.mp4";

export default function Hero() {
  const { preheading, headline, paragraphs } = heroData;

  const { lg } = useBreakpoint();
  const isLg = useScreen(lg);
  return (
    <section className="pt-app-padding-top bg-yellow pb-14">
      <div className="content-boundary grid grid-cols-1 lg:gap-x-8 lg:grid-cols-[3fr_1.85fr] xl:grid-cols-[3fr_1.5fr] gap-y-3">
        <hgroup className="flex flex-col gap-y-1 mb-2">
          <p className="font-bold text-heading-4">{preheading}</p>
          <h1 className="text-heading-1 font-extrabold leading-none">
            {headline}
          </h1>
        </hgroup>
        <div className="mb-8 lg:col-start-2 lg:row-start-1 lg:row-end-3 flex flex-col lg:gap-y-4 lg:h-full">
          <VideoClip
            src={heroClip}
            isActive
            toggleMuteCaption
            captionAtTop={false}
            captionClassName="mt-0"
            captionAtLeft={!isLg}
            wrapperClassName="h-full"
            className="h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          {paragraphs.map((text, index) => (
            <p key={index} className="leading-tight">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
