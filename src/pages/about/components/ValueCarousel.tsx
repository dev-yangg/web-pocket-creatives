import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "../../../lib/utils";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import CarouselControls from "../../../components/CarouselControls";

const values = [
  {
    title: "We're consultative",
    description: [
      "The consultation process is arguably the most important stage of any project. Within a few questions we can understand more about what you're looking for and how we can best provide our video and photography services. Our aim is to understand what you need, provide our recommendations, and then present you with some options.",
    ],
  },
  {
    title: "It's all about service",
    description: [
      "This is a hard industry to develop USPs in - established video and photography companies deliver content to a professional standard these days, and in all shapes and sizes. We take the above as a given and know that we have to deliver quality that goes beyond your budget, but more importantly, we know that you're more likely to come back if we provide a great service and if you've enjoyed the experience.",
    ],
  },
  {
    title: "At the right price",
    description: [
      "Every client has different spending power. Every business has a need for video and photography, and living in an increasingly visual word there's a greater reliance than ever on communicating through visual media. We'll give you a budget breakdown and will work with you to manage your budget in an honest and transparent way. Very often we can make a modest pot go further than you'd think!",
    ],
  },
  {
    title: "For everybody",
    description: [
      "We're privileged to have built this company through providing video and photography for both small businesses and startups through to some of the largest companies in the UK, it's our goal to stay competitive and offer a service that's tailored to fit YOU.",
      "Quality content creation shouldn't just be for those with the greatest spending power - and our modular pricing model means that we can cater for everybody.",
    ],
  },
  {
    title: "We're flexible, adaptable and versatile People",
    description: [
      "We're multi-sector experienced and unashamedly diverse. We've chosen to remain flexible so that we can respond and rise to different challenges with great video and photography content.",
      "While our main areas of expertise are in food & drink, beauty & cosmetics, products, health & wellbeing and products, our skills allow us to work across wider sectors. Experience in one area helps to cross-pollinate new skills that are relevant to other markets.",
    ],
  },
  {
    title: "We understand urgency!",
    description: [
      "We know how important it is for you to have it done yesterday and capitalise on the now.",
      "Getting your content in front of your audience at the right time is so important, particularly in today's trend and time-driven world. Good planning, organisation and communication is the key.",
    ],
  },
  {
    title: "We want to help you stand out",
    description: [
      "Our video and photography content says more, shouts louder, and travels further. We want to stay true to the quote that an image is worth a thousand words... and counting!",
      "There's a time and a place for simple product images isolated against white backgrounds, and we offer those as well. But to get the best from us, we want to make use of locations, props, styling, and models as they all help to tell your story for a greater visual impact.",
    ],
  },
  {
    title: "We always put our clients first",
    description: [
      "You're more important to us than anything.",
      "We wouldn't exist without you, we know that, so we'll do our very best to make sure that you're always happy with our video and photography content, and you want to work with us time and again. We've built long-standing and trustworthy relationships with our clients since we started, so that we can partner each other as we grow.",
    ],
  },
];
export default function ValueCarousel({ className }: { className?: string }) {
  const { md, xl } = useBreakpoint();
  return (
    <div className={cn("flex flex-col gap-y-14", className)}>
      <Swiper
        slidesPerView={1}
        spaceBetween={56}
        breakpoints={{
          [md]: { slidesPerView: 2 },
          [xl]: { slidesPerView: 3.5 },
        }}
        className="w-full">
        {values.map((value) => (
          <SwiperSlide key={value.title}>
            <div className="flex flex-col gap-y-8">
              <h5 className="font-bold leading-none text-white">
                {value.title}
              </h5>
              <div className="flex flex-col gap-y-6">
                {value.description.map((descrip) => (
                  <p className="text-black">{descrip}</p>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselControls
        className="bg-yellow"
        onPrevious={() => console.log("prev")}
        onNext={() => console.log("next")}
      />
    </div>
  );
}
