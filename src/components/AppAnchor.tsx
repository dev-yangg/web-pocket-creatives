import logo from "../assets/logo.svg";
import { cn } from "../lib/utils";

export default function AppAnchor({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("block", className)}>
      <img src={logo} alt="Web Pocket Creatives logo" />
    </a>
  );
}
