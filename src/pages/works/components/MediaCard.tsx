import { cn } from "../../../lib/utils";

type MediaType = "image" | "video";

interface MediaProps {
  label: string;
  path: string;
  alt: string;
  mediaType: MediaType;
}

export default function MediaCard(props: MediaProps) {
  return (
    <figure>
      <Media mediaProps={props} className="cursor-pointer" />
      <figcaption>{props.label}</figcaption>
    </figure>
  );
}

function Media({
  mediaProps,
  className,
}: {
  mediaProps: Omit<MediaProps, "label">;
  className?: string;
}) {
  const { path, alt, mediaType } = mediaProps;
  if (mediaType === "video") {
    return (
      <video
        className={cn(className)}
        src={path}
        autoPlay={false}
        loop
        muted
        playsInline
        aria-label={alt}
      />
    );
  }

  return <img className={cn(className)} src={path} alt={alt} />;
}
