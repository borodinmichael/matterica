import { useState, useRef, useEffect } from "react";
import logoVideo from "@/assets/logo-animation.mp4";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [isEnding, setIsEnding] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked - skip animation
          setIsEnding(true);
          setTimeout(onComplete, 100);
        });
      }
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        video.pause();
        setIsEnding(true);
        setTimeout(onComplete, 800);
      }
    };

    video.addEventListener("loadeddata", startVideo);
    video.addEventListener("canplay", startVideo);
    video.addEventListener("timeupdate", handleTimeUpdate);

    // Try to start if already ready
    if (video.readyState >= 2) {
      startVideo();
    }

    // Fallback timeout - if video doesn't start in 3 seconds, skip
    const fallbackTimeout = setTimeout(() => {
      if (!hasStarted.current) {
        setIsEnding(true);
        setTimeout(onComplete, 100);
      }
    }, 3000);

    return () => {
      clearTimeout(fallbackTimeout);
      video.removeEventListener("loadeddata", startVideo);
      video.removeEventListener("canplay", startVideo);
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
