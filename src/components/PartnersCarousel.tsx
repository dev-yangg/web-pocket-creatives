const carousel1Logos = [
  { src: "argos.webp", alt: "Argos" },
  { src: "business-insider.webp", alt: "Business Insider" },
  { src: "coop.webp", alt: "Co-op" },
  { src: "koppaberg.webp", alt: "Kopparberg" },
  { src: "ladbrokes.webp", alt: "Ladbrokes" },
  { src: "mcmillan.webp", alt: "Macmillan Cancer Support" },
  { src: "soap-glory.webp", alt: "Soap & Glory" },
  { src: "telegraph.webp", alt: "The Telegraph" },
  { src: "the-gym-group.webp", alt: "The Gym Group" },
];

const carousel2Logos = [
  { src: "colmans.webp", alt: "Colman's" },
  { src: "masabi.webp", alt: "Masabi" },
  { src: "nursem.webp", alt: "NurseM" },
  { src: "prestige-flowers.webp", alt: "Prestige Flowers" },
  { src: "qvc.webp", alt: "QVC" },
  { src: "rightmove.webp", alt: "Rightmove" },
  { src: "saputo.webp", alt: "Saputo" },
  { src: "unilab.webp", alt: "Unilab" },
  { src: "vida-glow.webp", alt: "Vida Glow" },
];

export default function PartnersCarousel() {
  return (
    <section className="overflow-hidden">
      <div className="flex gap-4 animation-carousel-slide-x">
        <ul className="grid grid-cols-3 p-1 gap-4 items-center min-w-full">
          {carousel1Logos.map((logo) => (
            <li
              key={logo.alt}
              className="bg-[#fff] shadow-[0_4px_4px_0] shadow-black/25 rounded-xl px-4 py-1.25 h-14 lg:h-20 flex items-center justify-center ">
              <img
                src={`/images/logo-carousel/carousel-1/${logo.src}`}
                alt={logo.alt}
                className="max-h-full max-w-full w-full h-full object-contain"
              />
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-3 p-1 gap-4 items-center min-w-full">
          {carousel2Logos.map((logo) => (
            <li
              key={logo.alt}
              className="bg-[#fff] shadow-[0_4px_4px_0] shadow-black/25 rounded-xl px-4 py-1.25 h-14 lg:h-20 flex items-center justify-center ">
              <img
                src={`/images/logo-carousel/carousel-2/${logo.src}`}
                alt={logo.alt}
                className="max-h-full max-w-full w-full h-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
