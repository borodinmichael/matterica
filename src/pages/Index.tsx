import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import LoadingAnimation from "@/components/LoadingAnimation";

const Index = () => {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem("animationShown");
  });

  const handleAnimationComplete = () => {
    sessionStorage.setItem("animationShown", "true");
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingAnimation onComplete={handleAnimationComplete} />}
      <main className={`relative transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Navigation />
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
