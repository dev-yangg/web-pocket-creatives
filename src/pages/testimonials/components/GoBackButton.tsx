import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router";

export default function GoBackButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="text-small text-blue/75 hover:text-blue transition-colors duration-175 ease-swap inline-flex items-center gap-x-3 group mb-2">
      <span className="inline-block h-[.7em] group-hover:-translate-x-0.5 transition-transform duration-175 ease-in-out">
        <SlArrowLeft className="w-full h-full" />
      </span>
      <span className="group-hover:-translate-x-1 transition-transform duration-175 ease-in-out">
        Go back
      </span>
    </button>
  );
}
