import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import VideographyDetails from "./sections/VideographyDetails";
import VideographyPortfolio from "./sections/VideographyPortfolio";

export default function VideographyPage() {
  return (
    <main>
      <Hero />
      <FAQ />
      <VideographyPortfolio />
      <VideographyDetails />
    </main>
  );
}
