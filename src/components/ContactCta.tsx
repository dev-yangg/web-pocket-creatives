import { cn } from "../lib/utils";

export default function ContactCta({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        "order-3 md:order-2 @container justify-self-center bg-yellow md:bg-blue md:text-white font-bold leading-none w-24 md:w-14  aspect-square rounded-full rotate-10 drop-shadow-[3px_3px_3px] drop-shadow-grayblue",
        className,
      )}>
      <span className="text-[30cqw] inline-block">Let's Talk</span>
    </button>
  );
}
