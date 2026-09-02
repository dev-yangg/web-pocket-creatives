import { Link } from "react-router";
import { applinks } from "../data/globals";

export default function MainLinks() {
  return applinks.map((link) => {
    const isContact = link.label.toLowerCase() === "contact";
    return (
      <li key={link.label}>
        <Link
          to={link.href}
          className={`block hover:bg-yellow ${isContact ? "bg-lightblue" : ""} rounded-full px-3 py-1`}>
          {link.label}
        </Link>
      </li>
    );
  });
}
