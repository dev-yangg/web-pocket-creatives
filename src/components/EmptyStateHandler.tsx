import { cn } from "../lib/utils";

export default function EmptyStateHandler({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("grid place-items-center", className)}>
      <p className="text-black/35 text-heading-3">Nothing to see here yet</p>
    </div>
  );
}
