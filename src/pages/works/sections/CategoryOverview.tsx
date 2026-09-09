import { BsArrowRight } from "react-icons/bs";
import type { PhotographySample, VideographySample } from "../data";
import type { RefObject } from "react";
import { useScrollTo } from "../../../hooks/useScrollTo";

interface Props {
  category: string;
  videography: VideographySample[];
  photography: PhotographySample[];
  videographyRef: RefObject<HTMLElement | null>;
  photographyRef: RefObject<HTMLDivElement | null>;
}

export default function CategoryOverview({
  category,
  videography,
  photography,
  videographyRef,
  photographyRef,
}: Props) {
  const hasVideoSamples = videography.length > 0;
  const hasPhotoSamples = photography.length > 0;
  const hasSamples = hasVideoSamples || hasPhotoSamples;

  const scrollToVideography = useScrollTo(videographyRef);
  const scrollToPhotography = useScrollTo(photographyRef);

  return (
    <section className="bg-yellow py-14 lg:py-0 lg:min-h-dvh grid place-items-center">
      <div className="content-boundary grid grid-cols-1 md:grid-cols-2 gap-8">
        <h1 className="flex flex-col text-white leading-none font-extrabold md:col-span-2">
          <span>Category:</span>
          <span className="capitalize">{category}</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis.
          Et ac vitae ornare volutpat. Mollis sem scelerisque dictum nunc
          iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum amet
          vulputate tellus. Blandit pellentesque magna egestas eget rhoncus
          tincidunt. In ultrices velit et velit morbi vitae dolor fames.
          Rhoncus.
        </p>
        {hasSamples && (
          <nav className="flex flex-col gap-y-4 md:place-self-center md:self-start">
            <span className="font-extrabold">Go to...</span>
            {hasVideoSamples && (
              <ScrollTo
                onClick={scrollToVideography}
                label={`More ${category} Videography`}
              />
            )}
            {hasPhotoSamples && (
              <ScrollTo
                onClick={scrollToPhotography}
                label={`More ${category} Photography`}
              />
            )}
          </nav>
        )}
      </div>
    </section>
  );
}

function ScrollTo({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-white flex items-start gap-x-4 group">
      <span className="inline-block w-6 scale-x-[0.85] group-hover:scale-x-110 text-black group-hover:translate-x-1.5 origin-left transition-transform duration-150 ease-in-out">
        <BsArrowRight className="w-full h-auto fill-current stroke-[0.5]" />
      </span>
      <span className="leading-[1.2] group-hover:translate-x-1 transition-transform duration-150 ease-in-out pb-0.5 relative after:absolute after:bg-current after:h-0.5 after:w-full after:left-0 after:bottom-0 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:origin-left">
        <span className="capitalize">{label}</span>
      </span>
    </button>
  );
}
