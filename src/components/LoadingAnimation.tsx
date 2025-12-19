import { useState, useRef, useEffect } from "react";
import logoVideo from "@/assets/logo-animation.mp4";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [isEnding, setIsEnding] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari fix: set attributes directly
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.muted = true;

    const attemptPlay = async () => {
      if (hasStarted.current) return;
      
      try {
        // Safari needs a small delay after load
        await new Promise(resolve => setTimeout(resolve, 100));
        await video.play();
        hasStarted.current = true;
        setIsBuffering(false);
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay failed, skipping animation');
        hasStarted.current = true;
        setIsEnding(true);
        setTimeout(onComplete, 100);
      }
    };

    const handleCanPlayThrough = () => {
      attemptPlay();
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        video.pause();
        setIsEnding(true);
        setTimeout(onComplete, 800);
      }
    };

    const handlePlaying = () => {
      setIsBuffering(false);
      setIsPlaying(true);
    };

    video.addEventListener("canplaythrough", handleCanPlayThrough);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("playing", handlePlaying);

    // Also try on loadeddata for faster start
    video.addEventListener("loadeddata", () => {
      if (video.readyState >= 3) {
        attemptPlay();
      }
    });

    // Fallback timeout
    const fallbackTimeout = setTimeout(() => {
      if (!hasStarted.current) {
        console.log('Timeout reached, skipping animation');
        setIsEnding(true);
        setTimeout(onComplete, 100);
      }
    }, 4000);

    return () => {
      clearTimeout(fallbackTimeout);
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("playing", handlePlaying);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        isEnding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Loading indicator */}
      {isBuffering && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        src={logoVideo}
        muted
        playsInline
        preload="auto"
        className={`w-full h-full object-contain md:object-cover transition-opacity duration-300 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default LoadingAnimation;
