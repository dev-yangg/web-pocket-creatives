import { Link } from "react-router";
import { applinks } from "../data/globals";
import logo from "../assets/logo.svg";
import SocialsList from "./SocialsList";

export default function AppFooter() {
  return (
    <footer
      className="bg-blue text-heading-4"
      style={
        {
          "--custom-underline-color": "var(--color-white)",
        } as React.CSSProperties
      }>
      <div className="custom-underline pt-14 md:pt-24 pb-8">
        <div className="content-boundary flex flex-col gap-y-4 md:gap-y-14">
          <div className="w-[min(1000px,100%)] flex flex-col gap-y-4 md:gap-y-14">
            <h2 className="text-white text-balance leading-none">
              We love talking about what we do, so if you have a project, get in
              touch.
            </h2>
            <section className="@container text-heading-3 font-bold w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
              <div>
                <a
                  href="mailto:team@pocketcreatives.co.uk"
                  className="underline max-w-full inline-block wrap-break-word text-balance text-[clamp(1.4rem,3.5cqi,1.75rem)]">
                  team@pocketcreatives.co.uk
                </a>
              </div>
              <address className="not-italic leading-none underline md:row-start-1 md:row-end-3 md:col-start-2">
                <a href="https://www.google.com/maps/@51.474706,-0.1456135,3a,90y,150.58h,90.26t/data=!3m7!1e1!3m5!1s0OQWGxEl7_F3Ig2ROdBLfQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.2560872843961022%26panoid%3D0OQWGxEl7_F3Ig2ROdBLfQ%26yaw%3D150.57895195361183!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D">
                  Wow Workspaces BatterseaUnit 3, 7-9 Ingate PlaceBattersea,
                  London SW8 3NS
                </a>
              </address>
              <div>
                <a
                  href="tel:+02036338494"
                  className="inline-block w-fit  text-[clamp(1.4rem,3.5cqi,1.75rem)]">
                  020 3633 8494
                </a>
              </div>
            </section>
            <form
              action="/"
              method="post"
              className="text-heading-4 flex flex-col gap-y-2">
              <p className="text-white">Sign up to our Newsletter</p>
              <fieldset className="grid grid-cols-1 md:grid-cols-2 items-start md:items-end gap-y-2 md:gap-x-8">
                <label htmlFor="newsletter-email" className="sr-only">
                  Your Email Address
                </label>
                <input
                  type="email"
                  name="newsletter-email"
                  id="newsletter-email"
                  placeholder="Your Email Address"
                  className="outline bg-white w-[min(500px,100%)] text-regular px-3 py-2"
                />
                <button
                  type="submit"
                  className="underline text-white justify-self-start">
                  Subscribe
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div className="custom-underline">
        <section className="content-boundary grid grid-cols-1 md:grid-cols-[2fr_1fr] py-4 @container">
          <h3 className="font-extrabold">QuickLinks</h3>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-white text-[clamp(1.15rem,3.5cqi,1.35rem)]">
            {applinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="inline-block uppercase font-normal ">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={"/blog"}
                className="inline-block uppercase font-normal ">
                blog
              </Link>
            </li>
          </ul>
          <Link
            to={"/"}
            className="@container inline-grid place-items-center w-[min(180px,100%)] place-self-center md:justify-self-end bg-white rounded-2xl md:col-start-2 md:row-start-1 md:row-end-3 py-1.5 mt-4 md:mt-0">
            <img
              src={logo}
              alt="Pocket Creatives"
              className="w-[clamp(8rem,20cqi,10rem)] h-auto"
            />
          </Link>
        </section>
      </div>
      <div className="custom-underline py-4">
        <section className="content-boundary items-center grid grid-cols-1 md:grid-cols-2 gap-y-4">
          <SocialsList className="flex flex-wrap gap-y-2 gap-x-6" />
          <small className="text-white md:text-right">
            Designed & Built By SeekSocial 2024
          </small>
        </section>
      </div>
    </footer>
  );
}
