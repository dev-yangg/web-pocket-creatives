import { Outlet } from "react-router";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default function App() {
  return (
    <>
      <AppHeader />
      <main className="pt-28">
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}
