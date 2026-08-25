import { FaWhatsapp } from "react-icons/fa";
import AppAnchor from "./AppAnchor";
import MainLinks from "./MainLinks";
import MenuButton from "./MenuButton";

export default function AppHeader() {
  return (
    <header className="bg-white z-app-header w-app-header fixed top-4 left-1/2 -translate-x-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[1fr_3fr_1fr] items-center gap-x-2 shadow-[0_4px_16px_0] shadow-black/10 rounded-3xl px-6 py-2">
      <AppAnchor className="w-fit" />
      <nav className="hidden min-[860px]:block">
        <ul className="flex items-center justify-between">
          <MainLinks />
        </ul>
      </nav>
      <button className="hidden sm:block justify-self-center min-[860px]:justify-self-end w-8 aspect-square text-grayblue">
        <FaWhatsapp className="fill-current w-full h-full" />
      </button>
      <MenuButton className="justify-self-end flex flex-col justify-between min-[860px]:hidden" />
    </header>
  );
}
