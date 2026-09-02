import { socials } from "../data/globals";
import { cn } from "../lib/utils";

export default function SocialsList({ className }: { className?: string }) {
  return (
    <ul className={cn("", className)}>
      {socials.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            className="inline-block w-[clamp(1.5rem,3.5cqi,2rem)] aspect-square text-current">
            <Icon className="w-full h-full" />
          </a>
        </li>
      ))}
    </ul>
  );
}
