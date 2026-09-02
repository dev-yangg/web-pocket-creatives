import { Link } from "react-router";
import { applinks } from "../data/globals";
import { cn } from "../lib/utils";

export default function MainLinks() {
  return applinks.map((link) => {
    const isContact = link.label.toLowerCase() === "contact";
    return (
      <li key={link.label}>
        <Link
          to={link.href}
          className={cn("block hover:bg-yellow rounded-full px-3 py-1", {
            "bg-lightblue": isContact,
          })}>
          {link.label}
        </Link>
      </li>
    );
  });
}
