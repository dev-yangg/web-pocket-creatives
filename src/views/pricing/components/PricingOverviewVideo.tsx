import { useCallback, useEffect, useRef, useState } from "react";
import VideoClip from "../../../components/VideoClip";
import clip from "/training/bts/bts-03.mp4";
import PlayIcon from "../../works/components/PlayIcon";
import PauseIcon from "../../works/components/PauseIcon";
import { cn } from "../../../lib/utils";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { useScreen } from "../../../hooks/useScreen";

const CONTROLS_HIDE_DELAY = 1500;

export default function PricingOverviewVideo() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [prevIsVideoActive, setPrevIsVideoActive] = useState(isVideoActive);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimeout = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const scheduleHide = useCallback(() => {
    clearHideTimeout();
    hideTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, CONTROLS_HIDE_DELAY);
  }, [clearHideTimeout]);

  const handleMouseMove = () => {
    setShowControls(true);
    if (isVideoActive) {
      scheduleHide();
    }
  };

  const handleMouseLeave = () => {
    clearHideTimeout();
    if (isVideoActive) {
      setShowControls(false);
    }
  };

  if (isVideoActive !== prevIsVideoActive) {
    setPrevIsVideoActive(isVideoActive);
    if (!isVideoActive) {
      setShowControls(true);
    }
  }

  useEffect(() => {
    if (isVideoActive) {
      scheduleHide();
    } else {
      clearHideTimeout();
    }
    return clearHideTimeout;
  }, [isVideoActive, scheduleHide, clearHideTimeout]);

  const { xxl } = useBreakpoint();
  const is2xl = useScreen(xxl);

  const isVideoPlaying = isVideoActive && is2xl;
  return (
    <div
      className="hidden 2xl:block mt-12 relative group/wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <button
        onClick={() => setIsVideoActive((prev) => !prev)}
        className={cn(
          "w-24 aspect-square absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#999]/75 hover:bg-[#999] p-6 rounded-full group/button transition-opacity duration-150 ease-in-out",
          showControls ? "opacity-100" : "opacity-0",
        )}>
        {!isVideoPlaying && (
          <PlayIcon className="w-full h-full ml-1 fill-black/25 group-hover/button:fill-black/65 transition-opacity duration-150 ease-in-out" />
        )}
        {isVideoPlaying && (
          <PauseIcon className="w-full h-full fill-black/25 group-hover/button:fill-black/65 transition-colors duration-150 ease-in-out" />
        )}
      </button>
      <VideoClip
        src={clip}
        isActive={isVideoPlaying}
        unmuteOnActive
        className="pointer-events-none"
      />
    </div>
  );
}
