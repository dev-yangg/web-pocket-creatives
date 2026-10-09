import type { AnchorHTMLAttributes } from "react";
import { Link } from "gatsby";
import { useLocation } from "../contexts/LocationContext";

type NavLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className" | "href"
> & {
  to: string;
  className?: string | ((state: { isActive: boolean }) => string);
};

const trimSlash = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, "") : path;

export default function NavLink({ to, className, ...rest }: NavLinkProps) {
  const { pathname } = useLocation();
  const current = trimSlash(pathname);
  const target = trimSlash(to);

  // Same rule as React Router: "/" matches only itself,
  // everything else also matches its sub-paths (/blogs/some-post marks /blogs active)
  const isActive =
    target === "/"
      ? current === "/"
      : current === target || current.startsWith(`${target}/`);

  return (
    <Link
      to={to}
      className={
        typeof className === "function" ? className({ isActive }) : className
      }
      aria-current={isActive ? "page" : undefined}
      {...rest}
    />
  );
}
