import { useState, useRef, useEffect } from "react";
import logoVideo from "@/assets/logo-animation.mp4";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [isEnding, setIsEnding] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.currentTime = 1;
    };

    const handleSeeked = () => {
      setIsReady(true);
      video.play().catch(console.error);
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= 6) {
        video.pause();
        setIsEnding(true);
        setTimeout(onComplete, 800);
      }
    };

    video.addEventListener("canplaythrough", handleCanPlay);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("timeupdate", handleTimeUpdate);

    // If already loaded
    if (video.readyState >= 4) {
      video.currentTime = 1;
    }

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
      video.removeEventListener("seeked", handleSeeked);
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
        className={`w-full h-full object-contain md:object-cover transition-opacity duration-300 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default LoadingAnimation;
