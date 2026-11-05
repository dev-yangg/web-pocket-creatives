import FloatingArrowDown from "../../../components/FloatingArrowDown";

export interface VideoShowcaseIntroProps {
  heading: string;
  description: string;
}

export default function VideoProdIntro({
  heading,
  description,
}: VideoShowcaseIntroProps) {
  return (
    <section className="bg-yellow py-14 grid 2xl:place-items-center 2xl:min-h-dvh">
      <div className="w-[min(1000px,(100%-2em))] mx-auto content-boundary grid grid-cols-1 place-items-center gap-6 md:grid-cols-3">
        <div className="md:col-start-1 md:col-end-4 text-white font-bold leading-none text-balance text-heading-1">
          {heading}
        </div>
        <div className="w-[min(600px,100%)] justify-self-start text-pretty md:col-start-1 md:col-end-3 leading-7">
          {description}
        </div>
        <FloatingArrowDown className="justify-self-center md:justify-self-start md:col-start-3 md:col-end-4 text-white" />
      </div>
    </section>
  );
}
