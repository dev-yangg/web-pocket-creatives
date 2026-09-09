import { FaWhatsapp } from "react-icons/fa";
import AppAnchor from "./AppAnchor";
import MainLinks from "./MainLinks";
import MenuButton from "./MenuButton";
import type { UseMenuReturn } from "../hooks/useMenu";

type AppHeaderProps = Pick<UseMenuReturn, "isOpen" | "toggleMenu">;

export default function AppHeader({ isOpen, toggleMenu }: AppHeaderProps) {
  return (
    <header className="bg-white z-app-header w-app-header fixed top-4 left-1/2 -translate-x-1/2 shadow-[0_4px_16px_0] shadow-black/10 rounded-3xl px-6 py-2 flex justify-between items-center gap-x-4">
      <div className="flex shrink-0 items-center">
        <AppAnchor className="" />
      </div>
      <nav className="hidden nav-breakpoint:grid place-content-center">
        <ul className="flex items-center gap-x-3 lg:gap-x-5 text-small lg:text-base whitespace-nowrap">
          <MainLinks />
        </ul>
      </nav>
      <div className="grid place-content-center nav-breakpoint:place-content-end">
        <button className=" w-8 aspect-square text-grayblue">
          <FaWhatsapp className="fill-current hover:fill-[#25d366] transition-colors duration-150 ease-in-out w-full h-full " />
        </button>
      </div>
      <div className="grid place-content-end">
        <MenuButton
          isOpen={isOpen}
          onClick={toggleMenu}
          className="flex flex-col nav-breakpoint:hidden justify-between"
        />
      </div>
    </header>
  );
}
