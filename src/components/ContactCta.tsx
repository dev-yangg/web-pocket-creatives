import { cn } from "../lib/utils";

interface Props {
  className?: string;
  label: string;
  onClick?: () => void;
}

export default function ContactCta({ className, label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "@container font-extrabold leading-none w-24 md:w-14  aspect-square rounded-full rotate-10 drop-shadow-[3px_3px_3px] transition-colors duration-150 ease-swap drop-shadow-grayblue",
        className,
      )}>
      <span className="text-[26cqw] inline-block">{label}</span>
    </button>
  );
}
