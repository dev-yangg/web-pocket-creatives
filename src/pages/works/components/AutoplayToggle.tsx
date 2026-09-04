import { useState } from "react";
import PlayIcon from "./PlayIcon";
import PauseIcon from "./PauseIcon";

export default function AutoplayToggle() {
  const [isPause, setIsPause] = useState(false);
  const handleClick = () => {
    setIsPause((prev: boolean) => !prev);
  };
  return (
    <button
      onClick={handleClick}
      className="@container bg-yellow text-black rounded-full w-8 aspect-square grid place-items-center gap-0.75 p-2 px-2.5">
      {isPause && <PlayIcon />}
      {!isPause && <PauseIcon />}
    </button>
  );
}
