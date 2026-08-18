import AppHeader from "./components/AppHeader";
import Hero from "./sections/Hero";
import PartnerShowcase from "./sections/PartnerShowcase";
import VideoProdIntro from "./sections/VideoProdIntro";

export default function App() {
  return (
    <>
      <AppHeader />
      <main className="pt-28">
        <Hero />
        <PartnerShowcase />
        <VideoProdIntro />
      </main>
    </>
  );
}
