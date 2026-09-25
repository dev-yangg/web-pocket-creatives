import { Link, NavLink } from "react-router";
import {
  applinks,
  contactInfo,
  footerExtraLinks,
  footerLinks,
} from "../data/globals";
import logo from "../assets/logo.svg";
import SocialsList from "./SocialsList";
import { cn } from "../lib/utils";

export default function AppFooter() {
  const { email, address, tel } = contactInfo;
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
            <h2 className="text-white text-balance leading-none text-heading-2">
              We love talking about what we do, so if you have a project, get in
              touch.
            </h2>
            <section className="@container text-heading-3 font-bold w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
              <div>
                <a
                  href={`mailto:${email}`}
                  className="underline max-w-full inline-block wrap-break-word text-balance text-[clamp(1.4rem,3.5cqi,1.75rem)]">
                  {email}
                </a>
              </div>
              <address className="not-italic leading-none underline md:row-start-1 md:row-end-3 md:col-start-2">
                <a href={address.mapHref}>{address.text}</a>
              </address>
              <div>
                <a
                  href={`tel:${tel.href}`}
                  className="inline-block w-fit  text-[clamp(1.4rem,3.5cqi,1.75rem)]">
                  {tel.display}
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
      <div className="max-md:custom-underline">
        <section className="content-boundary grid grid-cols-1 md:grid-cols-[2fr_1fr] pt-4 pb-8 md:pb-0 @container">
          <h3 className="font-extrabold text-heading-3">QuickLinks</h3>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 ">
            {[...applinks, ...footerLinks].map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "inline-block uppercase font-normal text-white text-[clamp(1.15rem,3.5cqi,1.35rem)] hover:text-yellow transition-colors duration-300 ease-in-out relative",
                      { "text-yellow": isActive },
                    )
                  }>
                  {link.label}
                </NavLink>
              </li>
            ))}
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
      <div className="custom-underline">
        <section className="content-boundary py-2 md:pt-0 md:pb-4">
          <ul className="uppercase text-white flex flex-col md:flex-row gap-x-4">
            {footerExtraLinks.map((link) => (
              <li key={link.label} className="w-fit">
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "inline-block font-normal text-white text-[clamp(1.15rem,3.5cqi,1.35rem)] hover:text-yellow transition-colors duration-300 ease-in-out relative",
                      { "text-yellow": isActive },
                    )
                  }>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="custom-underline py-4">
        <section className="content-boundary items-center grid grid-cols-1 md:grid-cols-2 gap-y-4">
          <SocialsList className="flex flex-wrap gap-y-2 gap-x-6 text-white" />
          <small className="text-white md:text-right">
            Designed & Built By SeekSocial 2024
          </small>
        </section>
      </div>
    </footer>
  );
}
