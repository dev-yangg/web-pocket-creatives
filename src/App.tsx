import { Outlet, ScrollRestoration } from "react-router";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import MainMenu from "./components/MainMenu";
import { useMenu } from "./hooks/useMenu";

export default function App() {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  return (
    <>
      <AppHeader toggleMenu={toggleMenu} isOpen={isOpen} />
      <Outlet />
      <AppFooter />
      <MainMenu isOpen={isOpen} closeMenu={closeMenu} />
      <ScrollRestoration />
    </>
  );
}
