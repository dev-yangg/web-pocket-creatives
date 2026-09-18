import { BsArrowRight } from "react-icons/bs";

export default function ScrollTo({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-white flex items-start gap-x-4 group">
      <span className="inline-block w-6 scale-x-[0.85] group-hover:scale-x-110 text-black group-hover:translate-x-1.5 origin-left transition-transform duration-150 ease-in-out">
        <BsArrowRight className="w-full h-auto fill-current stroke-[0.5]" />
      </span>
      <span className="leading-[1.2] group-hover:translate-x-1 transition-transform duration-150 ease-in-out pb-0.5 relative after:absolute after:bg-current after:h-0.5 after:w-full after:left-0 after:bottom-0 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:origin-left">
        <span className="capitalize">{label}</span>
      </span>
    </button>
  );
}
