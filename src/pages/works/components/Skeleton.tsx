import { cn } from "../../../lib/utils";

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="aspect-video bg-black/15 rounded animate-pulse" />
      <div className="h-3 md:h-4 w-3/5 bg-black/15 rounded animate-pulse" />
    </div>
  );
}
