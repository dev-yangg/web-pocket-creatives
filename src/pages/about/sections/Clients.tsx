import PartnersCarousel from "../../../components/PartnersCarousel";
import ClientNameAnim from "../components/ClientNameAnim";

export default function Clients() {
  return (
    <section className="lg:min-h-dvh grid place-items-center bg-blue text-white py-14">
      <div className="content-boundary flex flex-col gap-y-4">
        <h1 className="capitalize text-balance leading-[1.15] font-bold">
          Who we work with
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-8 md:mt-12">
          <section className="flex flex-col gap-y-6">
            <p>
              We have provided video and photography services to a huge variety
              of clients in our history, from crowdfunders and startups through
              to more established names and global businesses. We love that mix,
              and being entrusted with the visuals for clients of any size is
              extremely satisfying.
            </p>
            <p>
              We work with most clients directly, and we're also able to provide
              our services to agencies and other creative companies who don't
              have access to video and photography services in house.
            </p>
            <p>
              We're very proud to have worked with known clients such as{" "}
              <span className="bg-yellow font-bold text-nowrap px-2 text-black">
                <ClientNameAnim />
              </span>{" "}
              and many more emerging names that you'll come to know very soon.
            </p>
          </section>
          <div className="flex flex-col gap-y-1">
            <PartnersCarousel className="hidden md:block" />
            <div className="w-full hidden md:grid grid-cols-3 px-1 gap-2 @container">
              <p
                style={
                  {
                    "--custom-underline-color": "currentColor",
                  } as React.CSSProperties
                }
                className="text-[clamp(0.65rem,2.65cqi,.9rem)] lg:text-[clamp(0.65rem,2.725cqi,.85rem)] font-bold col-start-3 text-right bg-yellow client-box inline-block text-black">
                <span className="inline-block lg:w-[min(120px,100%)]">
                  You can see what they say about us{" "}
                  <a href="" className="custom-underline">
                    here
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <a
          href=""
          className="inline-block self-center md:hidden bg-yellow text-black font-bold rounded-lg py-3 px-4">
          View Testimonials
        </a>
      </div>
    </section>
  );
}
