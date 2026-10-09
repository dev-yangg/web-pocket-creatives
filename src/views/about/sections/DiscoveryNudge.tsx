import VideoClip from "../../../components/VideoClip";
import discovery from "/videos/discovery-clip.mp4";

export default function DiscoveryNudge() {
  return (
    <section>
      <div className="content-boundary py-8 flex flex-col gap-y-6 md:py-24">
        <h2 className="leading-tight font-bold text-heading-4">
          Want to know a bit more about who we work with, and what makes a
          'Pocket Person'? Or go behind the scenes to see how we work in action…
        </h2>
        <VideoClip
          src={discovery}
          isActive
          toggleMuteCaption
          captionAtTop={false}
        />
      </div>
    </section>
  );
}
