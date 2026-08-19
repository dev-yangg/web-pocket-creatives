import AppHeader from "./components/AppHeader";
import Hero from "./sections/Hero";
import PartnerShowcase from "./sections/PartnerShowcase";
import PhotographyProdIntro from "./sections/PhotographyProdIntro";
import VideoProdIntro from "./sections/VideoProdIntro";
import VideoShowcaseSection from "./sections/VideoShowcaseSection";

export default function App() {
  return (
    <>
      <AppHeader />
      <main className="pt-28">
        <Hero />
        <PartnerShowcase />
        <VideoProdIntro />
        <VideoShowcaseSection />
        <PhotographyProdIntro />
      </main>
    </>
  );
}
