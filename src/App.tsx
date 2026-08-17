import AppHeader from "./components/AppHeader";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <>
      <AppHeader />
      <main className="pt-28 w-app-boundary mx-auto">
        <Hero />
      </main>
    </>
  );
}
