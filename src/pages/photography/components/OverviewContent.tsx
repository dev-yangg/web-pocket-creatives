import { MultiHighlightedText } from "../../../components/MultiHighlightedText";
import { cn } from "../../../lib/utils";
import type { ContentSection } from "../data";

type Props = ContentSection & {
  className?: string;
  headingClassName?: string;
};

export default function OverviewContent({
  banner,
  description,
  className,
  headingClassName,
}: Props) {
  return (
    <hgroup className={cn("flex flex-col gap-y-12", className)}>
      <h2 className={cn("text-heading-2 font-bold", headingClassName)}>
        {banner}
      </h2>
      <div className="flex flex-col gap-y-4">
        {description.map((content) => (
          <p>
            <MultiHighlightedText {...content} />
          </p>
        ))}
      </div>
    </hgroup>
  );
}
