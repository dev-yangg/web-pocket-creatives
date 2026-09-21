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
  subtitle: string;
  description: string;
  image: ProcessStepImage;
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
    "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies. Mollis sem scelerisque dictum nunc iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum amet vulputate tellus. Blandit pellentesque magna egestas eget rhoncus tincidunt. In ultrices velit et velit morbi vitae dolor fames. Rhoncus.",
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
    "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies. Mollis sem scelerisque dictum nunc iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum amet vulputate tellus. Blandit pellentesque magna egestas eget rhoncus tincidunt. In ultrices velit et velit morbi vitae dolor fames. Rhoncus.",
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
    "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies. Mollis sem scelerisque dictum nunc iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum amet vulputate tellus. Blandit pellentesque magna egestas eget rhoncus tincidunt. In ultrices velit et velit morbi vitae dolor fames. Rhoncus.",
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
      subtitle: "Meeting & Planning",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies.",
      image: {
        src: "/services/process-01/service-process-1-pre-pod.webp",
        alt: "Team chatting around a cafe table while planning a video project",
      },
    },
    {
      title: "Production",
      subtitle: "Lights, Camera, Action",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies.",
      image: {
        src: "/services/process-01/service-process-1-prod.webp",
        alt: "Close-up of a professional video camera on set",
      },
    },
    {
      title: "Post-production",
      subtitle: "Review & Edit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies.",
      image: {
        src: "/services/process-01/service-process-1-post-prod.webp",
        alt: "Editor reviewing footage on multiple monitors",
      },
    },
  ],
};

export const servicesProcess2: ServicesProcess = {
  headline: "The process:",
  headlineHighlight: "making it easy for you",
  steps: [
    {
      title: "Pre-production",
      subtitle: "Meeting & Planning",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies.",
      image: {
        src: "/services/process-02/service-process-2-pre-prod.webp",
        alt: "Three women discussing a shoot around a laptop, one holding a camera",
      },
    },
    {
      title: "Production",
      subtitle: "Lights, Camera, Action",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies.",
      image: {
        src: "/services/process-02/service-process-2-prod.webp",
        alt: "Photographer shooting a smiling woman applying a serum dropper",
      },
    },
    {
      title: "Post-production",
      subtitle: "Review & Edit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies.",
      image: {
        src: "/services/process-02/service-process-2-post-prod.webp",
        alt: "Editor in a cap reviewing footage on a monitor",
      },
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
        src: "/services/breakdown/planning-image.webp",
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
        src: "/services/breakdown/talent-location-image.webp",
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
        src: "/services/breakdown/editing-delivery-image.webp",
        alt: "Monitor displaying a photo editing grid at a desk",
      },
    },
  ],
};
