import type { PhotographySample, VideographySample } from "../data";
import type { RefObject } from "react";
import { useScrollTo } from "../../../hooks/useScrollTo";
import ScrollTo from "../../../components/ScrollTo";

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
        <h1 className="flex flex-col text-white leading-none font-extrabold md:col-span-2 text-heading-1">
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
