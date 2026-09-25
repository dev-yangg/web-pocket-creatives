import { heroData } from "../data";
import { MultiHighlightedText } from "../../../components/MultiHighlightedText";
import VideoClip from "../../../components/VideoClip";
import { useModal } from "../../../hooks/useModal";

export default function Hero() {
  const { headline, subheading, media, intro, description, cta } = heroData;
  const { text: subtext, highlights: subhighlight } = subheading;
  const { text: introtext, highlights: introhighlight } = intro;
  const { icon: Icon, label } = cta;

  const { openModal } = useModal();

  return (
    <section className="pt-app-padding-top pb-14 bg-blue">
      <div className="content-boundary text-white grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
        <hgroup className="flex flex-col gap-y-2 md:col-span-2">
          <h1 className="text-heading-1 font-extrabold leading-none">
            {headline}
          </h1>
          <p className="md:text-heading-3">
            <MultiHighlightedText text={subtext} highlights={subhighlight} />
          </p>
        </hgroup>
        <div className="mb-9 md:col-span-2">
          <VideoClip
            src={media.src}
            isActive
            toggleMuteCaption
            captionClassName="mt-0 md:mt-3"
            captionTextClassName="text-white text-small"
            captionAtTop={false}
          />
        </div>
        <div>
          <p className="font-bold md:text-heading-3 leading-tight">
            <MultiHighlightedText
              text={introtext}
              highlights={introhighlight}
            />
          </p>
        </div>
        <div className="flex flex-col py-4 md:py-0 gap-y-6 text-center text-balance md:text-wrap md:text-left">
          {description.paragraphs.map((content, index) => (
            <p key={`${index}-${content}`} className="leading-tight">
              {content}
            </p>
          ))}
          <button
            onClick={() => openModal("contact")}
            className="bg-yellow p-4 md:py-2 md:pl-2 md:pr-3 max-md:rounded-xl max-md:shadow-below flex items-center gap-x-[.5ch] text-black self-center md:self-start">
            <span className="w-[1.5em] aspect-square">
              <Icon className="w-full h-full" />
            </span>
            <span>{label}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
