import ContactForm from "../components/ContactForm";
import GoBackButton from "../components/GoBackButton";
import PageHeader from "../components/PageHeader";
import { heroData } from "../data";

export default function PhotographyTestimonials() {
  const { headline, content } = heroData;
  return (
    <main className="pt-app-padding-top pb-14">
      <section className="content-boundary pb-14">
        <GoBackButton />
        <PageHeader
          headline={`Photography ${headline}`}
          content={content}
          className="grid grid-cols-1 gap-y-8"
        />
      </section>
      <ContactForm />
    </main>
  );
}
