import CollaborationSection from "./sections/CollaborationSection";
import FormSection from "./sections/FormSection";
import Hero from "./sections/Hero";
import ProcessAccordion from "./sections/ProcessAccordion";

export default function HowWeWork() {
  return (
    <main className="pt-app-padding-top">
      <Hero />
      <ProcessAccordion />
      <CollaborationSection />
      <FormSection />
    </main>
  );
}
