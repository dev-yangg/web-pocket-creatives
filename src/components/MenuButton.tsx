import { cn } from "../lib/utils";

export default function MenuButton({ className }: { className?: string }) {
  return (
    <button className={cn("w-8 h-5", className)}>
      <div className="w-full h-1 bg-yellow" />
      <div className="w-full h-1 bg-yellow" />
      <div className="w-full h-1 bg-yellow" />
    </button>
  );
}
