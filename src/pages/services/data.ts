interface CtaLink {
  label: string;
  reference: ServicesSectionKey;
}

interface ServiceCtas {
  ctaLabel: string;
  links: CtaLink[];
}

export type ServicesSectionKey = "videography" | "photography" | "rest";

export interface ServicesIntro {
  headline: string;
  headlineHighlight: string;
  content: string;
  ctas: ServiceCtas;
}

interface ProcessStepImage {
  src: string;
  alt: string;
}

interface ProcessStep {
  title: string;
  description: string;
  images: ProcessStepImage[];
}

export interface ServicesProcess {
  headline: string;
  headlineHighlight: string;
  steps: ProcessStep[];
}

export const servicesIntro1: ServicesIntro = {
  headline: "Aaaand Action:",
  headlineHighlight: "Video Production",
  content:
    "Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat. Mollis sem scelerisque dictum nunc iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum amet vulputate tellus. Blandit pellentesque magna egestas eget rhoncus tincidunt. In ultrices velit et velit morbi vitae dolor fames. Rhoncus.",
  ctas: {
    ctaLabel: "Go to...",
    links: [
      { label: "Photography", reference: "photography" },
      { label: "The Rest", reference: "rest" },
    ],
  },
};

export const servicesIntro2: ServicesIntro = {
  headline: "Pixel perfection:",
  headlineHighlight: "Photography",
  content:
    "Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat. Mollis sem scelerisque dictum nunc iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum amet vulputate tellus. Blandit pellentesque magna egestas eget rhoncus tincidunt. In ultrices velit et velit morbi vitae dolor fames. Rhoncus.",
  ctas: {
    ctaLabel: "Go to...",
    links: [
      { label: "Video Production", reference: "videography" },
      { label: "The Rest", reference: "rest" },
    ],
  },
};

export const servicesIntro3: ServicesIntro = {
  headline: "We've got it covered:",
  headlineHighlight: "The Whole Package",
  content:
    "Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat. Mollis sem scelerisque dictum nunc iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum amet vulputate tellus. Blandit pellentesque magna egestas eget rhoncus tincidunt. In ultrices velit et velit morbi vitae dolor fames. Rhoncus.",
  ctas: {
    ctaLabel: "Go to...",
    links: [
      { label: "Video Production", reference: "videography" },
      { label: "Photography", reference: "photography" },
    ],
  },
};

export const servicesProcess1: ServicesProcess = {
  headline: "The process:",
  headlineHighlight: "making it easy for you",
  steps: [
    {
      title: "Pre-production",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.",
      images: [
        { src: "", alt: "Team meeting to plan a video production project" },
      ],
    },
    {
      title: "Production",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.",
      images: [
        { src: "", alt: "Close-up of a professional video camera on set" },
      ],
    },
    {
      title: "Post-production",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.",
      images: [
        { src: "", alt: "Editor reviewing footage on multiple monitors" },
        { src: "", alt: "Video editing timeline with clips on screen" },
      ],
    },
  ],
};

export const servicesProcess2: ServicesProcess = {
  headline: "The process:",
  headlineHighlight: "making it easy for you",
  steps: [
    {
      title: "Pre-production",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.",
      images: [
        { src: "", alt: "Team meeting to plan a video production project" },
      ],
    },
    {
      title: "Production",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.",
      images: [
        { src: "", alt: "Close-up of a professional video camera on set" },
      ],
    },
    {
      title: "Post-production",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.",
      images: [
        { src: "", alt: "Editor reviewing footage on multiple monitors" },
        { src: "", alt: "Video editing timeline with clips on screen" },
      ],
    },
  ],
};

export const servicesBreakdown1 = {
  srHeading: "Our Workflow", // sr-only
  items: [
    {
      title: "Planning",
      bullets: [
        "Lorem Ipsum dolor sit",
        "Lorem Ipsum dolor sit",
        "Lorem Ipsum dolor sit",
        "Lorem Ipsum dolor sit",
      ],
      description:
        "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
      image: {
        src: "",
        alt: "Person on a phone call reviewing a tablet while planning",
      },
    },
    {
      title: "Talent & Location",
      bullets: [
        "Lorem Ipsum dolor sit",
        "Lorem Ipsum dolor sit",
        "Lorem Ipsum dolor sit",
        "Lorem Ipsum dolor sit",
      ],
      description:
        "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
      image: {
        src: "",
        alt: "Model in patterned outfit posing on a cliffside location",
      },
    },
    {
      title: "Editing & Delivery",
      bullets: [
        "Lorem Ipsum dolor sit",
        "Lorem Ipsum dolor sit",
        "Lorem Ipsum dolor sit",
        "Lorem Ipsum dolor sit",
      ],
      description:
        "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
      image: {
        src: "",
        alt: "Monitor displaying a photo editing grid at a desk",
      },
    },
  ],
};
