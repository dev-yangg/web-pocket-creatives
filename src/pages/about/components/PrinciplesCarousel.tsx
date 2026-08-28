import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

const principles = [
  {
    title: "Quality of Product",
    why: "You should expect a professional level of visual quality and craft from the video and photography work that we deliver. The quality of what we create is as important to us as it is to you, and we want to be continually proud of the end results.",
    how: "We will achieve this by being aware of how technology and techniques in our industry can directly shape individual video and photography projects; by choosing the right equipment and approach to fit the brief; and monitoring accuracy through internal quality control procedures and retrospective project reviews.",
  },
  {
    title: "Kind, Mindful and Ethical of Product",
    why: "Creating great working relationships not only makes every day more enjoyable, but helps us all to create better end products. We measure the success of a project not only in the results but in the way we conduct ourselves throughout a project's lifecycle.",
    how: "We aspire to create an environment and culture where our clients know they can have open and honest conversations about their video and photography projects. Whether bouncing around ideas or talking numbers, by phone, email or over a coffee. Always treating clients, suppliers, contributors and each other with respect and ensure that we build genuine trust at every stage.",
  },
  {
    title: "Kind, Mindful and Ethical of Product",
    why: "We want to help you surpass expectations and achieve more than simply keeping up with your competition. Your visuals have to work harder and be more effective than ever to positively impact your audience.",
    how: "We want to help you stand out rather than blend in, using the versatility and strengths that video and photography have to offer in expressing the vision of your company, service or products. We'll explore different approaches in communicating your brand's individuality and purpose, whilst understanding your audience to know how best to reach and affect them.",
  },
  {
    title: "Quality of Service",
    why: "We know that how we behave, speak and interact is important in building and maintaining the perfect working relationship. We want you to enjoy working with us, trust in the video and photography content we deliver, and value the benefits in a long term relationship.",
    how: "Friendly and reliable communication is at the heart of why our clients come to us, and keep coming back. We're always \"on\" and provide multiple ways to be reachable - you don't finish your day at 5pm, and neither do we. We do our best to accommodate last minute requests, delivering to tight schedules even in challenging conditions.",
  },
  {
    title: "Being Human",
    why: "Our video and photography clients are people first, clients second.",
    how: "We demonstrate understanding and empathy in your processes as well as ours, as you're juggling multiple tasks and challenges outside of what we are working on together. You are project managers, business owners, parents, and often have two jobs at once. Where we can tailor our approach to you personally, we will.",
  },
];

export default function PrinciplesCarousel() {
  const { md } = useBreakpoint();
  return (
    <Swiper
      className="w-full"
      grabCursor={true}
      slidesPerView={1.2}
      spaceBetween={46}
      breakpoints={{ [md]: { slidesPerView: 1.35 } }}>
      {principles.map((princip, index) => (
        <SwiperSlide key={`${princip.title}-${index}`}>
          <div className="w-[min(650px,100%)] flex flex-col gap-y-6">
            <header className="flex min-h-18 items-end gap-[1ch] leading-none font-bold">
              <h1 className="text-blue leading-[.8]">{index + 1}</h1>
              <h3 className="w-[min(500px,100%)]">{princip.title}</h3>
            </header>
            <div className="flex flex-col gap-y-3">
              <p className="text-blue ">Why is this important to us?</p>
              <p>{princip.why}</p>
              <p className="text-yellow">How are we going to achieve it?</p>
              <p>{princip.how}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
