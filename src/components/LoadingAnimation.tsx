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

    const handleLoadedMetadata = () => {
      video.currentTime = 1;
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= 6) {
        video.pause();
        setIsEnding(true);
        setTimeout(onComplete, 800);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    
    // In case metadata already loaded
    if (video.readyState >= 1) {
      video.currentTime = 1;
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
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
        autoPlay
        muted
        playsInline
        className="w-full h-full object-contain md:object-cover"
      />
    </div>
  );
};

export default LoadingAnimation;
