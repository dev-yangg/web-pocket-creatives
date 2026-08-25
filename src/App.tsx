import AppHeader from "./components/AppHeader";
import Homepage from "./pages/home/Homepage";

export default function App() {
  return (
    <>
      <AppHeader />
      <main className="pt-28">
        <Homepage />
      </main>
    </>
  );
}
