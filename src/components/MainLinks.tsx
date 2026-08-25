import { Link } from "react-router";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function MainLinks() {
  return links.map((link) => {
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
