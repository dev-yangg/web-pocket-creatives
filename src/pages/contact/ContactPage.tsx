import CompanyInfo from "./sections/CompanyInfo";
import ContactForm from "./sections/ContactForm";
import VacanciesAndPartners from "./sections/VacanciesAndPartners";

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
      <CompanyInfo />
      <VacanciesAndPartners />
    </main>
  );
}
