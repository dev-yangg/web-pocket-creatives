import { Outlet } from "react-router";
import AppHeader from "./components/AppHeader";

export default function App() {
  return (
    <>
      <AppHeader />
      <main className="pt-28">
        <Outlet />
      </main>
    </>
  );
}
