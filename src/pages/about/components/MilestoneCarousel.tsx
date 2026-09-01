import { Swiper, SwiperSlide } from "swiper/react";

const contents = [
  "Pocket Creatives launched in the winter of 2017, formed as a limited company following the team working under the name of Steven Mayatt Creative since 2015. Pocket is the next step in our evolution.",
  "Steven's professional history started in broadcasting, supporting mainstream television programmes such as BBC's Watchdog, Crimewatch and Horizon and leading a 10-person team running 24/7 to make this happen.",
  "But photography and video production was always the passion, and he burnt all the hours in the day running a small, innovative corporate video production company alongside called Screensaver which could boast clients such as Tower Bridge, the Museum of London and the National Portrait Gallery. This paved the way to progress full time into the production world and merged into Tailwind Media in 2010.",
  "For 6 years, Steven oversaw the production team, making impressive in-roads into the UK corporate video market, working with some of the country's biggest names. Highlights would include a huge change campaign for Arcadia; helping to update the internal communications video magazine for electronics giant Philips, working with pop star Olly Murs for the Pringles 25th birthday adverts, and overseeing a multitude of projects for Tesco, Currys PC World and Groupon to name just a few.",
  "2015 saw the creation of SMC, after Steven wanted to take a different direction, by offering both video and photography. Haider Romero Perez and Lauren Hodge were invited to join, bringing a wealth of skill, enthusiasm, and drive and within 2 years have become co-owners of the newly incorporated Pocket Creatives.",
  "\"SMC provided a wonderful opportunity to meet new business owners and establish ourselves in new markets, offering new video and photography services and building a friendly and creative business where we're building long-term working relationships with our clients. Pocket Creatives couldn't have been launched without the faith and trust shown in us by our clients, and we look forward to growing alongside them over the years to come.\"",
  "Now, embarking on our 6th year in business together, we've reached one milestone after the next. We boast an enviable client list, with impressive client retention numbers and have built a genuinely wonderful team around us.",
];

export default function MilestoneCarousel() {
  return (
    <div className="relative w-full">
      <Swiper slidesPerView={1.5} className="w-full outline">
        {contents.map((content, i) => {
          const isAbove = i % 2 === 0;
          return (
            <SwiperSlide key={i} style={{ height: "100%" }}>
              <div
                className={`flex flex-col h-full! items-center ${
                  isAbove ? "justify-end" : "justify-start"
                }`}>
                {isAbove && <p className=" text-black">{content}</p>}

                <span className="z-10 w-14 aspect-square rounded-full border-4 border-yellow bg-blue" />

                {!isAbove && <p className=" text-black">{content}</p>}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
