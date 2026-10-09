import { useSyncExternalStore, type ReactNode } from "react";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import MainMenu from "./components/MainMenu";
import { useMenu } from "./hooks/useMenu";
import { ModalProvider } from "./contexts/ModalContext";
import { LocationContext, type AppLocation } from "./contexts/LocationContext";
import AppModal from "./components/AppModal";

export default function App({
  children,
  location,
}: {
  children: ReactNode;
  location: AppLocation;
}) {
  // false during server render and hydration, true right after
  const hydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  return (
    <LocationContext.Provider
      value={{
        pathname: location.pathname,
        search: hydrated ? location.search : "",
      }}>
      <Layout>{children}</Layout>
    </LocationContext.Provider>
  );
}

function Layout({ children }: { children: ReactNode }) {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  return (
    <ModalProvider>
      <AppHeader toggleMenu={toggleMenu} isOpen={isOpen} />
      {children}
      <AppFooter />
      <MainMenu isOpen={isOpen} closeMenu={closeMenu} />
      <AppModal />
    </ModalProvider>
  );
}
