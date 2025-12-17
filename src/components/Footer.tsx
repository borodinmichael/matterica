import logo from "@/assets/logo-white.png";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/matterica" },
  { name: "VK", url: "https://vk.com/matterica" },
  { name: "Telegram", url: "https://t.me/matterica" },
  { name: "Vimeo", url: "https://vimeo.com/matterica" },
  { name: "YouTube", url: "https://youtube.com/@matterica" },
];

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="contact" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Contact CTA */}
        <div className="mb-24 text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">
            {t("footer.label")}
          </p>
          <h2 className="mb-8 font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            {t("footer.title1")}
            <br />
            <span className="text-muted-foreground">{t("footer.title2")}</span>
          </h2>
          <a
            href="mailto:hello@matterica.com"
            className="inline-block border border-foreground px-10 py-4 font-body text-sm uppercase tracking-widest transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            {t("footer.cta")}
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-border pt-12 md:flex-row">
          {/* Logo */}
          <img src={logo} alt="Matterica" className="h-5 w-auto opacity-50" />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © 2024-2026 Mattérica
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
