import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { Autoplay } from "swiper/modules";

interface ReviewProps {
  id: number;
  author: string;
  quote: string;
}

const reviewList: ReviewProps[] = [
  {
    id: 1,
    author: "Marcus Ramtohul",
    quote:
      "I've shot with Pocket Creatives on a number of occasions as a model and actor. Always delivering amazing results for clients - gorgeous images and a fun and creative environment. I am constantly looking forward to the next opportunity to shoot with...",
  },
  {
    id: 2,
    author: "Klara Niklewicz",
    quote:
      "Really enjoyed working with Pocket Creatives on a video campaign & webinar. Delivery was quick and to high standard. Thank you!",
  },
  {
    id: 3,
    author: "Michelle Vellacott",
    quote:
      "Pocket Creatives are a great, friendly production company and we love having them use our studios at Tower Bridge Studios. Always a wonderful atmosphere when they are here. Pre-production for the shoot is always very smooth and efficient. A great...",
  },
  {
    id: 4,
    author: "Winnie Asawakanjanakit",
    quote:
      "I had a such a great time working with Steven and his team! They were very professional and they created a safe space for me which made my job as a model on set easier and more enjoyable. Would definitely love to work with them again. :)",
  },
  {
    id: 5,
    author: "Crime And Comedy Theatre Corporation",
    quote:
      "Steve & Charlie at Pocket Creatives were fantastic, first class. Our project involved an older actor and not only did they conduct the pre-shoot with personable, fact-finding efficiency, but they were very considerate, accommodating olved an older actor and not only did they conduct the pre-shoot with personable, fact-finding efficiency, but they were very considerate, accommodating ",
  },
  {
    id: 6,
    author: "John Bond",
    quote:
      "Very professional company to deal with and delighted with the product videos received. Always a pleasure to dela with Steven and his team.",
  },
];

export default function ReviewsCarousel() {
  const { md, lg } = useBreakpoint();

  return (
    <div className="overflow-x-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay
        loop
        className="scrollbar-none w-full"
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2, spaceBetween: 20 },
          [md]: { slidesPerView: 2.5, spaceBetween: 20 },
          [lg]: { slidesPerView: 3, spaceBetween: 20 },
        }}>
        {reviewList.map((rev) => (
          <SwiperSlide key={rev.id} style={{ height: "auto" }}>
            <ReviewCard id={rev.id} author={rev.author} quote={rev.quote} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function ReviewCard({ author, quote }: ReviewProps) {
  return (
    <article
      style={
        {
          "--inner-round": "1rem",
          "--pad-x": "calc(var(--spacing) * 2)",
          "--pad-bottom": "var(--spacing)",
        } as React.CSSProperties
      }
      className="bg-gray flex flex-col w-full h-full px-(--pad-x) pt-(--pad-x) pb-(--pad-bottom) rounded-t-[calc(var(--inner-round)+var(--pad-x))] rounded-b-[calc(var(--inner-round)+var(--pad-bottom))]">
      <blockquote className="bg-white grow p-3 rounded-(--inner-round)">
        <p className="line-clamp-7">{quote}</p>
      </blockquote>
      <footer className="truncate pt-2 pb-0.5 px-(--pad-x) text-grayblue font-bold">
        {author}
      </footer>
    </article>
  );
}
