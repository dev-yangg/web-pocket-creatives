import PlayIcon from "./PlayIcon";
import PauseIcon from "./PauseIcon";

interface Props {
  isCarouselPaused: boolean;
  onClick: () => void;
}
export default function AutoplayToggle({ isCarouselPaused, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="@container bg-yellow text-black rounded-full w-8 aspect-square grid place-items-center gap-0.75 p-2 px-2.5">
      {isCarouselPaused && <PlayIcon />}
      {!isCarouselPaused && <PauseIcon />}
    </button>
  );
}
