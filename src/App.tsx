import AppHeader from "./components/AppHeader";
import BtsReviews from "./pages/home/BtsReviews";
import Features from "./pages/home/Features";
import Hero from "./pages/home/Hero";
import PartnerShowcase from "./pages/home/PartnerShowcase";
import PhotographyProdIntro from "./pages/home/PhotographyProdIntro";
import PhotographyShowcaseSection from "./pages/home/PhotographyShowcaseSection";
import Pricing from "./pages/home/Pricing";
import Team from "./pages/home/Team";
import VideoProdIntro from "./pages/home/VideoProdIntro";
import VideoShowcaseSection from "./pages/home/VideoShowcaseSection";

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
