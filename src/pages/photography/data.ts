import { HiOutlineMail } from "react-icons/hi";
import { baseContactFormFields } from "../../data/globals";
import type { ContentParagraph } from "../../types";

export interface ContentSection {
  banner: string;
  description: ContentParagraph[];
}

export interface PhotographyOverviewContents {
  leading: ContentSection;
  ending: ContentSection;
}

export interface PhotographyOverviewImage {
  src: string;
  label: string;
  alt: string;
}

export interface PhotographyOverview {
  contents: PhotographyOverviewContents;
  images: {
    grid01: PhotographyOverviewImage[];
    grid02: PhotographyOverviewImage[];
  };
}

export const heroData = {
  headline: "Photography Services",
  subheading: {
    text: "available from Pocket Creatives",
    highlights: [{ text: "Pocket Creatives", style: "font-bold uppercase" }],
  },
  media: {
    src: "/videos/about-hero-clip.mp4",
  },
  intro: {
    text: "If you're looking for expert photography services, you've come to the right place.",
    highlights: [
      {
        text: "right place.",
        style:
          "inline-block mt-1 font-bold bg-yellow pl-2 pr-1.5 pb-1 text-black text-nowrap",
      },
    ],
  },
  description: {
    paragraphs: [
      "We put quality and creativity at the heart of what we do, and can organise locations, models, make-up artists and more to complete the picture.",
      "It really is the full package.",
    ],
  },
  cta: {
    icon: HiOutlineMail,
    label: "Have questions?",
  },
};

const photographyLeadingContent: ContentParagraph[] = [
  {
    text: "Our professional photography services are flexible and affordably priced, so that you can scale up or down depending on your requirements. We create eye-catching results for use in advertising campaigns, product listings and e-commerce, and for social media.",
    highlights: [
      { text: "flexible and affordably priced", style: "font-bold" },
    ],
  },
  {
    text: "Here, you'll see our extensive portfolio. It covers a range of subjects so whatever you're here for, we're sure you'll find something to pique your interest.",
  },
];

const photographyEndingContent: ContentParagraph[] = [
  {
    text: "Our photography agency is commissioned by a wonderfully diverse range of clients including food producers, beauty brands, new product releases, events needing expert coverage, fashion brands and jewellery & watch brands.",
  },
  {
    text: "We work with clients of all sizes, making the most of your budget to reach your goals. We're here to build a strong working relationship, where you want to come back to us time and again because you trust what we can deliver.",
  },
  {
    text: "We have now opened our brand new photography studio in London Waterloo, which gives us a great space to base our photography services from - and makes booking new projects easier than ever.",
    highlights: [
      {
        text: "photography studio in London Waterloo",
        style: "font-bold text-blue",
      },
    ],
  },
];

export const photographyOverview: PhotographyOverview = {
  contents: {
    leading: {
      banner: "Photography",
      description: photographyLeadingContent,
    },
    ending: {
      banner: "Services",
      description: photographyEndingContent,
    },
  },
  images: {
    grid01: [
      {
        src: "/photography/grid/food.webp",
        label: "Food & Drink",
        alt: "Beautifully styled food photography for a food producer client",
      },
      {
        src: "/photography/grid/beauty.webp",
        label: "Beauty",
        alt: "Beauty product photography showcasing cosmetics and skincare",
      },
      {
        src: "/photography/grid/product.webp",
        label: "Product",
        alt: "Commercial product photography for a new product release",
      },
      {
        src: "/photography/grid/events.webp",
        label: "Events",
        alt: "Event coverage photography capturing key moments live",
      },
    ],
    grid02: [
      {
        src: "/photography/grid/fashion.webp",
        label: "Fashion",
        alt: "Fashion brand photography featuring styled clothing and models",
      },
      {
        src: "/photography/grid/people.webp",
        label: "People",
        alt: "Portrait and lifestyle photography featuring people",
      },
      {
        src: "/photography/grid/crowdfunding.webp",
        label: "Crowdfunding",
        alt: "Photography created for a crowdfunding campaign",
      },
      {
        src: "/photography/grid/jewellery.webp",
        label: "Jewellery",
        alt: "Jewellery and watch brand product photography",
      },
    ],
  },
};

export const contactForm = {
  headline: "Ready to see what we could do with your next project?",
  fields: baseContactFormFields,
  submitLabel: "send",
};

export const photographyDetails = [
  {
    image: {
      src: "/photography/details/01.webp",
      alt: "",
    },
    heading: "How we work",
    content: [
      "We try to make the consultation process for our photography services as simple as possible - understanding your requirements as quickly as possible.",
      "Quoting is relatively easy, as we charge based on time and resources (rather than per-image).",
      "You can book our photography agency for as little as one hour - ideal when you need a handful of simple images, and are happy for us to work remotely.",
      "We also offer either half day or full day slots, with full pre-planning consultation. We can help with props, backgrounds, locations and models where required. We have numerous shoot location options as well, including the possibility to come to you.",
      "We like to think we have a solution to satisfy most challenges!",
    ],
  },
  {
    image: {
      src: "/photography/details/02.webp",
      alt: "",
    },
    heading: "Technically speaking",
    content: [
      "We shoot on high resolution Nikon cameras, capable of delivering clean, crisp imagery with acres of detail.",
      "Our lens options include Nikon's two workhorse focal length ranges (24-70mm and 70-200mm), and we support macro lenses for close-up work and ultra-wide, as wide as 12mm, for dramatic wide angles.",
      "We use both studio lighting and portable battery-powered flash, which makes us a photography company able to shoot in all locations. Post-production is completed through Adobe Raw and Photoshop.",
    ],
  },
  {
    image: {
      src: "/photography/details/03.webp",
      alt: "",
    },
    heading: "The whole package",
    content: [
      "We try to make the consultation process for our photography services as simple as possible - understanding your requirements as quickly as possible.",
      "Quoting is relatively easy, as we charge based on time and resources (rather than per-image).",
      "You can book our photography agency for as little as one hour - ideal when you need a handful of simple images, and are happy for us to work remotely.",
      "We also offer either half day or full day slots, with full pre-planning consultation. We can help with props, backgrounds, locations and models where required. We have numerous shoot location options as well, including the possibility to come to you.",
      "We like to think we have a solution to satisfy most challenges!",
    ],
  },
];
