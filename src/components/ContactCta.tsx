import { cn } from "../lib/utils";

interface Props {
  className?: string;
  label: string;
}

export default function ContactCta({ className, label }: Props) {
  return (
    <button
      className={cn(
        "order-3 md:order-2 @container justify-self-center bg-yellow md:bg-blue md:text-white font-extrabold leading-none w-24 md:w-14  aspect-square rounded-full rotate-10 drop-shadow-[3px_3px_3px] drop-shadow-grayblue",
        className,
      )}>
      <span className="text-[26cqw] inline-block">{label}</span>
    </button>
  );
}
