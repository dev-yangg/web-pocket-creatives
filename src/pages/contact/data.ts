import { HiOutlineMail } from "react-icons/hi";
import { baseContactFormFields, contactInfo } from "../../data/globals";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const heroData = {
  headline: "Grab a latte and let's have a chat",
  subheading: [
    "Want to talk about your new project with our video and photography agency team?",
    "We aim to reply within 1 hour during normal working hours, so we can get you that quote and any more information as quickly as possible.",
    "We'd love to hear from you!",
  ],
  cta: {
    mobileFormTrigger: {
      icon: HiOutlineMail,
      label: "Message us!",
    },
    submitLabel: "send",
  },
  fields: baseContactFormFields,
};

export const infoSection = {
  headline: "Contact Info", // sr-only.
  contactMethods: [
    {
      icon: FaPhone,
      label: contactInfo.tel.display,
      href: contactInfo.tel.href,
    },
    { icon: FaMapMarkerAlt, label: contactInfo.address.text },
    { icon: FaEnvelope, label: contactInfo.email, href: contactInfo.email },
  ],
  companyName: contactInfo.companyName,
  mapData: contactInfo.address.mapEmbedSrc,
};

export const vacanciesAndPartners = {
  sections: [
    {
      heading: "Vacancies",
      body: "At our video and photography agency we always want to hear from great people and create regular opportunities. Feel free to send us your information to the address below:",
      email: "jobs@pocketcreatives.co.uk",
      image: {
        src: "/images/about/us.webp",
        alt: "Pocket Creatives team",
      },
    },
    {
      heading: "Partners",
      body: "Our video and photography agency also has links to some excellent partners who work in other creative industries. If you think you'd make a good Pocket Partner, mail us below:",
      email: "partners@pocketcreatives.co.uk",
      image: {
        src: "/contact/logo-grid.webp",
        alt: "Logos of Pocket Creatives partner brands",
      },
    },
  ],
  cta: {
    label: "see our works",
    href: "/works",
  },
};
