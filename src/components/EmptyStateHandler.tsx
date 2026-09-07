import { cn } from "../lib/utils";

export default function EmptyStateHandler({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("grid place-items-center", className)}>
      <p>Nothing to display here</p>
    </div>
  );
}
