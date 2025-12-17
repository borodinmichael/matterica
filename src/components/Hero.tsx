import logo from "@/assets/logo-matterica.png";
import brandBg from "@/assets/brand-bg.png";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${brandBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Film Grain */}
      <div className="absolute inset-0 grain-overlay" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* Logo */}
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <img 
            src={logo} 
            alt="Matterica" 
            className="h-auto w-[280px] md:w-[400px] lg:w-[500px] animate-float"
          />
        </div>
        
        {/* Tagline */}
        <p className="mt-8 text-center font-body text-sm uppercase tracking-[0.3em] text-muted-foreground animate-fade-in-up opacity-0 delay-500">
          Documentary film studio
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-600">
        <div className="flex flex-col items-center gap-3">
          <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-foreground/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
