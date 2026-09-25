import ContactForm from "./sections/ContactForm";
import Hero from "./sections/Hero";
import PhotographyDetails from "./sections/PhotographyDetails";
import PhotographyOverview from "./sections/PhotographyOverview";

export default function PhotographyPage() {
  return (
    <main>
      <Hero />
      <PhotographyOverview />
      <ContactForm />
      <PhotographyDetails />
    </main>
  );
}
