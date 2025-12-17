import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
