import { useState, useRef, useEffect } from "react";
import logoVideo from "@/assets/logo-animation.mp4";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [isEnding, setIsEnding] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.currentTime = 1;
      video.play().catch(console.error);
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= 6) {
        video.pause();
        setIsEnding(true);
        setTimeout(onComplete, 800);
      }
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);

    if (video.readyState >= 2) {
      video.currentTime = 1;
      video.play().catch(console.error);
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        isEnding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src={logoVideo}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-contain md:object-cover"
      />
    </div>
  );
};

export default LoadingAnimation;
