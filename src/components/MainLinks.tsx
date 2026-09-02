import { NavLink } from "react-router";
import { applinks } from "../data/globals";
import { cn } from "../lib/utils";

export default function MainLinks({ className }: { className?: string }) {
  return applinks.map((link) => {
    const isContact = link.label.toLowerCase() === "contact";
    return (
      <li key={link.label}>
        <NavLink
          to={link.href}
          className={({ isActive }) =>
            cn(
              "block hover:bg-yellow rounded-full transition-colors duration-150 ease-linear px-3 py-1",
              { "bg-lightblue": isContact },
              { "bg-yellow": isActive },
              className,
            )
          }>
          {link.label}
        </NavLink>
      </li>
    );
  });
}
