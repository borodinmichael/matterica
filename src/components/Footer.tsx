import logo from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Contact CTA */}
        <div className="mb-24 text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">
            Начнём проект
          </p>
          <h2 className="mb-8 font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Есть идея?
            <br />
            <span className="text-muted-foreground">Давайте обсудим</span>
          </h2>
          <a
            href="mailto:hello@matterica.com"
            className="inline-block border border-foreground px-10 py-4 font-body text-sm uppercase tracking-widest transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Связаться с нами
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-border pt-12 md:flex-row">
          {/* Logo */}
          <img src={logo} alt="Matterica" className="h-5 w-auto opacity-50" />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {["Instagram", "Behance", "Vimeo", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © 2025 Mattérica
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
