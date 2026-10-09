import MapEmbed from "../components/MapEmbed";
import { infoSection } from "../data";

export default function CompanyInfo() {
  const { headline, contactMethods, companyName, mapData } = infoSection;
  return (
    <section className="py-14 lg:py-24">
      <h2 className="sr-only">{headline}</h2>
      <div className="content-boundary grid grid-cols-1 gap-y-14">
        <address>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-12">
            {contactMethods.map(({ icon: Icon, label, href }) => (
              <li
                key={label}
                className="grid grid-cols-[auto_1fr] items-center gap-x-4 @container not-italic font-bold">
                <span className="w-[clamp(2rem,10rem+1cqw,5rem)] p-4 aspect-square bg-yellow rounded-full">
                  <Icon className="w-full h-full" />
                </span>
                {href ? (
                  <a
                    className="leading-none wrap-break-word min-w-0"
                    href={href}>
                    {label}
                  </a>
                ) : (
                  <span className="leading-none wrap-break-word min-w-0">
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </address>
        <div>
          <MapEmbed
            companyName={companyName}
            mapData={mapData}
            className="w-full aspect-video outline-4 outline-gray"
          />
        </div>
      </div>
    </section>
  );
}
