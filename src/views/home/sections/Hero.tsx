import parse from "html-react-parser";
import VideoClip from "../../../components/VideoClip";

type Media = {
  node: {
    mediaItemUrl: string;
  };
};

export interface HeroProps {
  heading: string | null;
  video: Media | null;
  bannerlogo: Media | null;
  bannerlogoflat: Media | null;
  bannercutout1: Media | null;
  bannercutout2: Media | null;
}

export default function Hero({
  heading,
  video,
  bannerlogo,
  bannerlogoflat,
  bannercutout1,
  bannercutout2,
}: HeroProps) {
  const heroClip = video?.node.mediaItemUrl;
  const flatLogo = bannerlogoflat?.node.mediaItemUrl;
  const logo = bannerlogo?.node.mediaItemUrl;
  const stock1 = bannercutout1?.node.mediaItemUrl;
  const stock2 = bannercutout2?.node.mediaItemUrl;

  return (
    <section className="flex flex-col gap-8 items-center">
      <div className="content-boundary">
        <header className="custom-underline flex justify-between items-end">
          <div className="py-2 w-45 lg:hidden">
            <img src={flatLogo} className="w-full h-auto" />
          </div>
          <div className="w-45 hidden lg:block">
            <img src={logo} className="w-full h-auto" />
          </div>
          <div aria-hidden="true" className="hidden lg:flex h-24">
            <img src={stock1} alt="" className="w-auto object-contain" />
            <img src={stock2} alt="" className="w-auto object-contain" />
          </div>
        </header>
        <div className="text-heading-3 text-grayblue text-pretty py-3 mb-6">
          {heading && parse(heading)}
        </div>
        {heroClip && (
          <VideoClip
            toggleMuteCaption
            isActive
            src={heroClip}
            className="w-full h-full rounded-xl"
          />
        )}
      </div>
    </section>
  );
}
