import AppHeader from "./components/AppHeader";
import BtsReviews from "./pages/home/sections/BtsReviews";
import Features from "./pages/home/sections/Features";
import Hero from "./pages/home/sections/Hero";
import PartnerShowcase from "./pages/home/sections/PartnerShowcase";
import PhotographyProdIntro from "./pages/home/sections/PhotographyProdIntro";
import PhotographyShowcaseSection from "./pages/home/sections/PhotographyShowcaseSection";
import Pricing from "./pages/home/sections/Pricing";
import Team from "./pages/home/sections/Team";
import VideoProdIntro from "./pages/home/sections/VideoProdIntro";
import VideoShowcaseSection from "./pages/home/sections/VideoShowcaseSection";

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
        <PhotographyShowcaseSection />
        <Features />
        <Team />
        <BtsReviews />
        <Pricing />
      </main>
    </>
  );
}
