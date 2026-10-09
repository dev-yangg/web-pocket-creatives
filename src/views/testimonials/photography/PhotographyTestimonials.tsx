import ContactForm from "../components/ContactForm";
import GoBackButton from "../components/GoBackButton";
import PageHeader from "../components/PageHeader";
import StorySection from "../components/StorySection";
import TestimonialsSlider from "../components/TestimonialsSlider";
import { heroData } from "../data";

export default function PhotographyTestimonials() {
  const { headline, content } = heroData;
  return (
    <main className="pt-app-padding-top pb-14 overflow-x-clip">
      <section className="content-boundary">
        <GoBackButton />
        <PageHeader
          headline={`Photography ${headline}`}
          content={content}
          className="grid grid-cols-1 gap-y-8"
        />
      </section>
      <TestimonialsSlider />
      <ContactForm />
      <StorySection />
    </main>
  );
}
