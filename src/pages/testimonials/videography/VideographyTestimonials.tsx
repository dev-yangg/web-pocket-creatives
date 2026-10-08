import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import { heroData } from "../data";
import GoBackButton from "../components/GoBackButton";
import StorySection from "../components/StorySection";
import TestimonialsSlider from "../components/TestimonialsSlider";

export default function VideographyTestimonials() {
  const { headline, content } = heroData;
  return (
    <main className="pt-app-padding-top pb-14 overflow-x-clip">
      <section className="content-boundary">
        <GoBackButton />
        <PageHeader
          headline={`Video Production ${headline}`}
          content={content}
          className="grid grid-cols-1 gap-x-8 xl:grid-cols-2"
        />
      </section>
      <TestimonialsSlider />
      <ContactForm />
      <StorySection />
    </main>
  );
}
