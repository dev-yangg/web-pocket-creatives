import type { IconType } from "react-icons";

type SectionHeadingProps = {
  icon: IconType;
  iconClass?: string;
  label: string;
};

export default function SectionShowcaseHeading({
  icon: Icon,
  iconClass,
  label,
}: SectionHeadingProps) {
  return (
    <header>
      <h3 className="flex flex-wrap items-center gap-2">
        <span className="inline-block w-8">
          <Icon className={`stroke-blue w-full h-auto ${iconClass ?? " "}`} />
        </span>
        <span className="text-grayblue">{label}</span>
      </h3>
    </header>
  );
}
