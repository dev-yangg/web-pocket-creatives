import ContactForm from "./sections/ContactForm";
import Hero from "./sections/Hero";
import PhotographyOverview from "./sections/PhotographyOverview";

export default function PhotographyPage() {
  return (
    <main>
      <Hero />
      <PhotographyOverview />
      <ContactForm />
    </main>
  );
}
