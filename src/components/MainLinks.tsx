const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function MainLinks() {
  return links.map((link) => (
    <li>
      <a
        href={link.href}
        className="block hover:bg-lightblue rounded-full px-4 py-1">
        {link.label}
      </a>
    </li>
  ));
}
