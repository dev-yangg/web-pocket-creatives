import googleLogo from "../assets/google-logo.svg";
import bts from "/videos/bts-clip.mp4";
import VideoClip from "../components/VideoClip";
import ReviewsCarousel from "../components/ReviewsCarousel";

export default function BtsReviews() {
  return (
    <section className="py-14">
      <div className="content-boundary flex flex-col gap-8">
        <header className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          <hgroup className="flex flex-col gap-y-4 md:gap-y-8">
            <h3 className="leading-none md:text-heading-2 font-extrabold text-pretty">
              Go behind the scenes of our{" "}
              <span className="text-lightblue text-nowrap md:text-yellow relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-current">
                5 Star
              </span>{" "}
              Service
            </h3>
            <p className="flex gap-2 md:text-heading-3 font-bold">
              <span className="block w-[1.75em]">
                <img
                  src={googleLogo}
                  alt="Google logo"
                  className="w-full h-full"
                />
              </span>
              <span className="leading-[.85]">
                Based on <br />
                88 reviews
              </span>
            </p>
          </hgroup>
          <VideoClip
            src={bts}
            isActive
            ariaLabel="Behind the Scenes clip"
            toggleMuteCaption
            className="rounded-xl"
          />
        </header>
        <ReviewsCarousel />
      </div>
    </section>
  );
}
