import ContactForm from "./sections/ContactForm";
import FAQs from "./sections/FAQs";
import Hero from "./sections/Hero";
import PricingOverview from "./sections/PricingOverview";
import ServiceDetails from "./sections/ServiceDetails";

export default function PricingPage() {
  return (
    <main>
      <Hero />
      <PricingOverview />
      <FAQs />
      <ContactForm />
      <ServiceDetails />
    </main>
  );
}
