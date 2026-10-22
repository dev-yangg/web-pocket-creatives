import BtsReviews from "./sections/BtsReviews";
import Features from "./sections/Features";
import Hero, { type HeroProps } from "./sections/Hero";
import PartnerShowcase from "./sections/PartnerShowcase";
import PhotographyProdIntro from "./sections/PhotographyProdIntro";
import PhotographyShowcaseSection from "./sections/PhotographyShowcaseSection";
import Pricing from "./sections/Pricing";
import Team from "./sections/Team";
import VideoProdIntro from "./sections/VideoProdIntro";
import VideoShowcaseSection from "./sections/VideoShowcaseSection";

export interface HomepageContent {
  hero: HeroProps;
}

interface Props {
  content: HomepageContent;
}

export default function Homepage({ content }: Props) {
  return (
    <main className="pt-app-padding-top">
      <Hero {...content.hero} />
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
  );
}
