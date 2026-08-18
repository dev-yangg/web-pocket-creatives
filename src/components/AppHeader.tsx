import { FaWhatsapp } from "react-icons/fa";
import AppAnchor from "./AppAnchor";
import MainLinks from "./MainLinks";
import MenuButton from "./MenuButton";

export default function AppHeader() {
  return (
    <header className="bg-white z-app-header w-app-header fixed top-4 left-1/2 -translate-x-1/2 flex items-center justify-between gap-x-2 shadow-[0_4px_16px_0] shadow-black/10 rounded-3xl px-8 py-2">
      <AppAnchor className="inline-block shrink-0" />
      <nav className="hidden md:block">
        <ul className="flex items-center justify-between">
          <MainLinks />
        </ul>
      </nav>
      <button className="shrink-0 w-8 aspect-square text-grayblue">
        <FaWhatsapp className="fill-current w-full h-full" />
      </button>
      <MenuButton />
    </header>
  );
}
