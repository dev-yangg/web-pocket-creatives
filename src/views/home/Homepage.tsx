import BtsReviews from "./sections/BtsReviews";
import Features, { type FeatureProps } from "./sections/Features";
import Hero, { type HeroProps } from "./sections/Hero";
import PartnerShowcase, {
  type PartnerShowcaseProps,
} from "./sections/PartnerShowcase";
import PhotographyProdIntro, {
  type PhotographyShowcaseIntroProps,
} from "./sections/PhotographyProdIntro";
import PhotographyShowcaseSection, {
  type PhotographyShowcaseProps,
} from "./sections/PhotographyShowcaseSection";
import Pricing from "./sections/Pricing";
import Team from "./sections/Team";
import VideoProdIntro, {
  type VideoShowcaseIntroProps,
} from "./sections/VideoProdIntro";
import VideoShowcaseSection from "./sections/VideoShowcaseSection";

export interface HomepageContent {
  hero: HeroProps;
  partnerShowcase: PartnerShowcaseProps;
  videoShowcaseIntro: VideoShowcaseIntroProps;
  photographyShowcaseIntro: PhotographyShowcaseIntroProps;
  photographyShowcase: PhotographyShowcaseProps;
  features: FeatureProps;
}

interface Props {
  content: HomepageContent;
}

export default function Homepage({ content }: Props) {
  return (
    <main className="pt-app-padding-top">
      <Hero {...content.hero} />
      <PartnerShowcase {...content.partnerShowcase} />
      <VideoProdIntro {...content.videoShowcaseIntro} />
      <VideoShowcaseSection />
      <PhotographyProdIntro {...content.photographyShowcaseIntro} />
      <PhotographyShowcaseSection {...content.photographyShowcase} />
      <Features {...content.features} />
      <Team />
      <BtsReviews />
      <Pricing />
    </main>
  );
}
