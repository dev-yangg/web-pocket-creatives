import { baseContactFormFields } from "../../data/globals";
import { FaCamera, FaVideo } from "react-icons/fa";
import type { IconType } from "react-icons";

interface TestimonialIntroCTA {
  icon: IconType;
  title: string;
  subtitle: string;
  href: string;
}
interface TestimonialsIntro {
  headline: string;
  subheading: string;
  cta: TestimonialIntroCTA[];
}
interface TestimonialSlide {
  clientName: string;
  content: string[];
  logo: {
    src: string;
    alt: string;
  };
}

export const testimonialsIntro: TestimonialsIntro = {
  headline: "Testimonials",
  subheading: "What people say about us...",
  cta: [
    {
      icon: FaCamera,
      title: "Photography\nTestimonials",
      subtitle: "Real moments, genuine feedback from our clients",
      href: "/testimonials/photography",
    },
    {
      icon: FaVideo,
      title: "Videography\nTestimonials",
      subtitle: "Meaningful stories, honest feedback from our clients",
      href: "/testimonials/videography",
    },
  ],
};

export const heroData = {
  headline: "Testimonials",
  content: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus velit sem, vitae mollis dolor ultricies nec. Praesent odio mi, commodo accumsan libero vitae, finibus rhoncus mauris. Praesent non libero mattis, vulputate diam sed, convallis nunc. Fusce augue tortor, aliquam vel molestie volutpat, tincidunt at justo. Pellentesque lectus nunc, varius id posuere sit amet, finibus vitae est. Morbi venenatis ac nunc vulputate dignissim. Aliquam et volutpat sem. Sed ullamcorper suscipit viverra. Mauris auctor augue fringilla turpis aliquet commodo. Curabitur nunc augue, faucibus non bibendum sit amet, sagittis ut neque. Vivamus ac felis vel eros accumsan congue. ",
    "Nunc eu maximus purus. Nunc posuere aliquet aliquam. xAenean mauris nunc, mollis ut ornare vitae, venenatis fermentum purus. Nullam leo tortor, vestibulum vitae felis nec, aliquam feugiat nibh. Donec turpis arcu, pretium in blandit vel, mattis a enim. Aenean vestibulum urna eget efficitur luctus. Etiam sodales fringilla nisl non posuere. Duis posuere venenatis turpis, a pharetra purus vehicula a. Quisque eu vestibulum lorem, id interdum eros. In tempor vestibulum consequat. Aliquam sodales eu sapien nec consectetur. Etiam pulvinar scelerisque ullamcorper.",
  ],
};

export const slidesContent: TestimonialSlide[] = [
  {
    clientName: "Argos",
    content: [
      "Fun, innovative and unflappable. Pocket Creatives are great to work with - whether it's finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude. I see the whole team as trusted creative partners to make great content together.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-1/argos.webp",
      alt: "Argos logo",
    },
  },
  {
    clientName: "Ladbrokes",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis purus vestibulum, commodo ante vitae, dignissim ligula. Maecenas at sodales.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-1/ladbrokes.webp",
      alt: "Ladbrokes logo",
    },
  },
  {
    clientName: "The Telegraph",
    content: [
      "Fun, innovative and unflappable. Pocket Creatives are great to work with - whether it's finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude. I see the whole team as trusted creative partners to make great content together.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-1/telegraph.webp",
      alt: "The Telegraph logo",
    },
  },
  {
    clientName: "The Gym Group",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis purus vestibulum, commodo ante vitae, dignissim ligula. Maecenas at sodales.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-1/the-gym-group.webp",
      alt: "The Gym Group logo",
    },
  },
  {
    clientName: "Business Insider",
    content: [
      "Fun, innovative and unflappable. Pocket Creatives are great to work with - whether it's finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude. I see the whole team as trusted creative partners to make great content together.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-1/business-insider.webp",
      alt: "Business Insider logo",
    },
  },
  {
    clientName: "Co-op",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis purus vestibulum, commodo ante vitae, dignissim ligula. Maecenas at sodales.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-1/coop.webp",
      alt: "Co-op logo",
    },
  },
  {
    clientName: "Colman's",
    content: [
      "Fun, innovative and unflappable. Pocket Creatives are great to work with - whether it's finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude. I see the whole team as trusted creative partners to make great content together.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-2/colmans.webp",
      alt: "Colman's logo",
    },
  },
  {
    clientName: "Soap & Glory",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis purus vestibulum, commodo ante vitae, dignissim ligula. Maecenas at sodales.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-1/soap-glory.webp",
      alt: "Soap & Glory logo",
    },
  },
  {
    clientName: "Masabi",
    content: [
      "Fun, innovative and unflappable. Pocket Creatives are great to work with - whether it's finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude. I see the whole team as trusted creative partners to make great content together.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-2/masabi.webp",
      alt: "Masabi logo",
    },
  },
  {
    clientName: "Nursem",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis purus vestibulum, commodo ante vitae, dignissim ligula. Maecenas at sodales.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-2/nursem.webp",
      alt: "Nursem logo",
    },
  },
  {
    clientName: "Prestige Flowers",
    content: [
      "Fun, innovative and unflappable. Pocket Creatives are great to work with - whether it's finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude. I see the whole team as trusted creative partners to make great content together.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-2/prestige-flowers.webp",
      alt: "Prestige Flowers logo",
    },
  },
  {
    clientName: "QVC",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis purus vestibulum, commodo ante vitae, dignissim ligula. Maecenas at sodales.",
    ],
    logo: {
      src: "/images/logo-carousel/carousel-2/qvc.webp",
      alt: "QVC logo",
    },
  },
];

export const contactFormData = {
  headline: "We'd love to hear about you!",
  subheading:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id massa aliquam, imperdiet risus non, volutpat ligula. Nam pharetra eu leo a ultrices. Suspendisse potenti. Phasellus nunc enim, bibendum nec leo eu, pellentesque ultrices ipsum. Praesent pretium nisl sapien, ac.",
  fields: baseContactFormFields,
  submitLabel: "send",
};

export const storySection = {
  headline: "Lorem ipsum dolor sit amet",
  image: {
    src: "/how-we-work/sample1.jpg",
    alt: "Behind the scenes of a photoshoot",
  },
  contents: [
    {
      headline: "Lorem ipsum",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt tellus leo, id tempor ligula dignissim ac. Nullam vel metus eros. Integer non ligula vitae augue dignissim molestie. Quisque bibendum massa vestibulum, convallis mi ac, dignissim urna. Praesent eu lorem a nisi convallis pretium ac eu nisi. Sed convallis dolor tellus, ut egestas risus imperdiet a. Etiam imperdiet felis ac pellentesque luctus. Quisque quis dui eu arcu sodales tempus. Duis sit amet vehicula velit. Donec vulputate porta eros id egestas. Donec non lectus a diam varius scelerisque.",
        "Sed fermentum libero et consectetur mattis. Duis ut dui suscipit dui aliquam elementum ac eget libero. In eget enim nibh. Mauris eget ullamcorper leo. Mauris eget ante eu odio auctor pharetra eget sit amet tellus. Ut hendrerit ipsum orci, quis tempor mi suscipit id. Pellentesque a sollicitudin mauris. Vivamus rutrum orci sed felis eleifend fringilla. Mauris id fringilla sapien, eget semper nulla.",
      ],
    },
    {
      headline: "Dolor Sit Amet",
      content: [
        "Sed fermentum libero et consectetur mattis. Duis ut dui suscipit dui aliquam elementum ac eget libero. In eget enim nibh. Mauris eget ullamcorper leo. Mauris eget ante eu odio auctor pharetra eget sit amet tellus. Ut hendrerit ipsum orci, quis tempor mi suscipit id. Pellentesque a sollicitudin mauris. Vivamus rutrum orci sed felis eleifend fringilla. Mauris id fringilla sapien, eget semper nulla.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt tellus leo, id tempor ligula dignissim ac. Nullam vel metus eros. Integer non ligula vitae augue dignissim molestie. Quisque bibendum massa vestibulum, convallis mi ac, dignissim urna. Praesent eu lorem a nisi convallis pretium ac eu nisi. Sed convallis dolor tellus, ut egestas risus imperdiet a. Etiam imperdiet felis ac pellentesque luctus. Quisque quis dui eu arcu sodales tempus. Duis sit amet vehicula velit. Donec vulputate porta eros id egestas. Donec non lectus a diam varius scelerisque.",
      ],
    },
  ],
};
