import { NavLink } from "react-router";
import { applinks } from "../data/globals";
import SocialsList from "./SocialsList";
import { cn } from "../lib/utils";
import type { UseMenuReturn } from "../hooks/useMenu";

export default function MainMenu({
  isOpen,
  closeMenu,
}: Pick<UseMenuReturn, "isOpen" | "closeMenu">) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-menu bg-white pt-28 flex flex-col transition-transform duration-300 ease-swap",
        { "translate-x-full": !isOpen },
        { "translate-x-0": isOpen },
      )}>
      <nav className="outline outline-yellow">
        <ul className="flex flex-col justify-center items-center">
          {applinks.map((link, index) => {
            const isLast = index === applinks.length - 1;

            return (
              <li
                key={link.href}
                style={
                  {
                    "--custom-underline-color": "var(--color-yellow)",
                  } as React.CSSProperties
                }
                className={cn(" w-full flex justify-center py-2", {
                  "custom-underline": !isLast,
                })}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    cn("block py-2 w-fit px-20 rounded-lg text-center", {
                      "bg-yellow": isActive,
                    })
                  }
                  onClick={closeMenu}>
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <SocialsList className="w-[min(300px,100%)] self-center flex pt-6 text-grayblue justify-center flex-wrap gap-x-8 gap-y-2" />
      <small className="text-center leading-none py-6">
        <p>Pocket Creatives</p>
        <p className="text-blue">Video Production & Photography</p>
      </small>
    </div>
  );
}
