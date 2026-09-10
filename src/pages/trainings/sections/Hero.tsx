import { MultiHighlightedText } from "../../../components/MultiHighlightedText";
import VideoClip from "../../../components/VideoClip";
import { trainingsIntro } from "../data";

export default function Hero() {
  return (
    <section className="pb-46">
      <div className="content-boundary grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-12">
        <h2 className="leading-none md:col-span-2">
          <MultiHighlightedText
            text={trainingsIntro.headline}
            highlights={trainingsIntro.highlights}
          />
        </h2>
        <div className="mb-10 md:mb-0 md:col-start-2 md:col-end-3 md:row-start-2">
          <VideoClip
            src={trainingsIntro.media}
            isActive
            toggleMuteCaption
            captionAtTop={false}
          />
        </div>
        <div className="flex flex-col gap-y-4 md:col-start-1 md:col-end-2 md:row-start-2">
          {trainingsIntro.content.map((text) => (
            <p key={text} className="leading-tight">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
