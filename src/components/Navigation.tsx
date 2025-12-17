import { useState, useEffect } from "react";
import logo from "@/assets/logo-matterica.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.works"), href: "#works" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contacts"), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="#" className="group">
          <img 
            src={logo} 
            alt="Matterica" 
            className="h-6 w-auto transition-opacity duration-300 group-hover:opacity-70"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm uppercase tracking-wider text-foreground/70 transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-1 font-body text-sm uppercase tracking-wider">
            <button
              onClick={() => setLanguage("en")}
              className={`transition-colors duration-300 ${
                language === "en" ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"
              }`}
            >
              EN
            </button>
            <span className="text-foreground/30">|</span>
            <button
              onClick={() => setLanguage("ru")}
              className={`transition-colors duration-300 ${
                language === "ru" ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"
              }`}
            >
              RU
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-body text-lg uppercase tracking-wider text-foreground/70 transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-3 font-body text-lg uppercase tracking-wider pt-4">
            <button
              onClick={() => setLanguage("en")}
              className={`transition-colors duration-300 ${
                language === "en" ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"
              }`}
            >
              EN
            </button>
            <span className="text-foreground/30">|</span>
            <button
              onClick={() => setLanguage("ru")}
              className={`transition-colors duration-300 ${
                language === "ru" ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"
              }`}
            >
              RU
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
