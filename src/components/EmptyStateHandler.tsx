import { cn } from "../lib/utils";

interface Props {
  message?: string;
  className?: string;
}

export default function EmptyStateHandler({ message, className }: Props) {
  return (
    <div className={cn("grid place-items-center text-heading-3", className)}>
      <p className="text-black/35 ">{message ?? "Nothing to see here yet"}</p>
    </div>
  );
}
