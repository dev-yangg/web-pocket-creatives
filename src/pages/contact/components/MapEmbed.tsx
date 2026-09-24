import { cn } from "../../../lib/utils";

interface Props {
  className?: string;
  mapData: string;
  companyName: string;
}

export default function MapEmbed({ companyName, mapData, className }: Props) {
  return (
    <iframe
      title={`${companyName} location`}
      src={mapData}
      className={cn(className)}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
