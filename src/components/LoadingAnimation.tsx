import { useState, useRef, useEffect } from "react";
import logoVideo from "@/assets/logo-animation.mp4";
import logoImage from "@/assets/logo-sign.png";

interface LoadingAnimationProps {
  onComplete: () => void;
}

// Detect Safari browser
const isSafari = () => {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes('safari') && !ua.includes('chrome') && !ua.includes('android');
};

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [isEnding, setIsEnding] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    // Use CSS animation fallback for Safari
    if (isSafari()) {
      setUseFallback(true);
      setIsPlaying(true);
      
      // Show animation for 2.5 seconds then fade out
      const timer = setTimeout(() => {
        setIsEnding(true);
        setTimeout(onComplete, 800);
      }, 2500);
      
      return () => clearTimeout(timer);
    }

    // Video logic for non-Safari browsers
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const attemptPlay = async () => {
      if (hasStarted.current) return;
      
      try {
        await video.play();
        hasStarted.current = true;
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay failed, using fallback');
        setUseFallback(true);
        setIsPlaying(true);
        setTimeout(() => {
          setIsEnding(true);
          setTimeout(onComplete, 800);
        }, 2500);
      }
    };

    const handleCanPlay = () => {
      attemptPlay();
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        video.pause();
        setIsEnding(true);
        setTimeout(onComplete, 800);
      }
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);

    if (video.readyState >= 3) {
      attemptPlay();
    }

    // Fallback timeout
    const fallbackTimeout = setTimeout(() => {
      if (!hasStarted.current) {
        setUseFallback(true);
        setIsPlaying(true);
        setTimeout(() => {
          setIsEnding(true);
          setTimeout(onComplete, 800);
        }, 2500);
      }
    }, 3000);

    return () => {
      clearTimeout(fallbackTimeout);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        isEnding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Loading indicator */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      )}

      {/* CSS Animation Fallback for Safari */}
      {useFallback && isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={logoImage} 
            alt="Logo" 
            className="w-32 h-32 md:w-48 md:h-48 animate-logo-reveal"
          />
        </div>
      )}
      
      {/* Video for non-Safari browsers */}
      {!useFallback && (
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
      )}
    </div>
  );
};

export default LoadingAnimation;
