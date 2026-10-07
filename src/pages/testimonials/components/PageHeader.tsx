import { cn } from "../../../lib/utils";

interface Props {
  className?: string;
  headlineClassName?: string;
  headline: string;
  content: string[];
}
export default function PageHeader({
  className,
  headlineClassName,
  headline,
  content,
}: Props) {
  return (
    <hgroup className={cn("flex flex-col leading-none gap-y-4", className)}>
      <h1 className={cn("text-heading-1 font-extrabold", headlineClassName)}>
        {headline}
      </h1>
      <div className="flex flex-col gap-y-6">
        {content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </hgroup>
  );
}
