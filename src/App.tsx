import AppHeader from "./components/AppHeader";
import BtsReviews from "./sections/BtsReviews";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import PartnerShowcase from "./sections/PartnerShowcase";
import PhotographyProdIntro from "./sections/PhotographyProdIntro";
import PhotographyShowcaseSection from "./sections/PhotographyShowcaseSection";
import Pricing from "./sections/Pricing";
import Team from "./sections/Team";
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
        <PhotographyShowcaseSection />
        <Features />
        <Team />
        <BtsReviews />
        <Pricing />
      </main>
    </>
  );
}
