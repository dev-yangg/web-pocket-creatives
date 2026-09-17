import type { Blog } from "../data";
import { useState } from "react";
import { cn } from "../../../lib/utils";
import { LuThumbsUp } from "react-icons/lu";

function formatLikeCount(count: number) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(count);
}

export default function LikeButton({ likeCount }: Pick<Blog, "likeCount">) {
  const [liked, setLiked] = useState(false);
  const [allowHoverAnim, setAllowHoverAnim] = useState(true);
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount ?? 0);

  const handleClick = () => {
    setLiked((prev) => !prev);
    setAllowHoverAnim(false);
    setCurrentLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <p className="flex items-center gap-x-4 shrink-0">
      <button
        className="flex items-center gap-x-2 bg-yellow pl-4 pr-6 py-2 group"
        onClick={handleClick}
        onMouseLeave={() => setAllowHoverAnim(true)}>
        <span
          className={cn("inline-block h-[1.25em] aspect-square", {
            "group-hover:animate-hover-like": !liked && allowHoverAnim,
          })}>
          <LuThumbsUp className="w-full h-full" />
        </span>
        <span
          className={cn("font-bold pt-1 will-change-transform", {
            "group-hover:animate-move-right": !liked && allowHoverAnim,
          })}>
          Like
        </span>
      </button>
      <span className="text-blue"> | </span>
      <span className="flex items-center gap-x-1 text-blue">
        <span
          className={cn(
            "h-[1.15em] aspect-square group-hover:-rotate-15 transition-transform duration-150 ease-in-out",
            { "animate-like": liked },
          )}>
          <LuThumbsUp
            className={cn("w-full h-full fill-transparent", {
              "fill-blue": liked,
            })}
          />
        </span>
        <span className="pt-1">{formatLikeCount(currentLikeCount)}</span>
      </span>
    </p>
  );
}
