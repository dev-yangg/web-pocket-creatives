import InquiryCTA from "../../../components/InquiryCta";
import { MultiHighlightedText } from "../../../components/MultiHighlightedText";
import VideoClip from "../../../components/VideoClip";
import { heroData } from "../data";

export default function Hero() {
  const { headline, subheading, media, intro, description } = heroData;
  return (
    <section className="bg-yellow pt-app-padding-top pb-14">
      <div className="content-boundary grid grid-cols-1 md:grid-cols-[1.25fr_1fr] lg:grid-cols-3 gap-y-4 md:gap-x-14 lg:gap-x-8">
        <hgroup className="flex flex-col gap-y-2 md:col-span-3">
          <h1 className="text-[clamp(2.5rem,1.7rem+4vw,4rem)] md:text-heading-1 font-extrabold leading-none">
            {headline}
          </h1>
          <p className="md:text-heading-3">
            <MultiHighlightedText
              text={subheading.text}
              highlights={subheading.highlights}
            />
          </p>
        </hgroup>
        <div className="mb-9 md:col-span-3">
          <VideoClip
            src={media.src}
            isActive
            toggleMuteCaption
            className="w-full md:aspect-64/27 object-cover"
            captionClassName="mt-0 md:mt-3"
            captionTextClassName="text-black text-small"
            captionAtTop={false}
          />
        </div>
        <div className="leading-tight md:leading-none lg:col-span-2 flex flex-col gap-y-4">
          <p className="font-bold md:text-heading-3">{intro.text}</p>
          <p>{intro.sub}</p>
        </div>
        <div className="flex flex-col gap-y-8 md:text-right">
          {description.paragraphs.map((content, index) => (
            <p key={`${index}-${content}`}>{content}</p>
          ))}
          <InquiryCTA className="bg-blue text-white md:self-end" />
        </div>
      </div>
    </section>
  );
}
