import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre o Autor", href: "#about" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Depoimentos", href: "#testimonials" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          data-testid="header-logo"
          className="font-heading text-xl md:text-2xl tracking-widest text-white uppercase hover:text-gold transition-colors"
        >
          Estilo em Duas Rodas
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              data-testid={`nav-link-${link.href.replace("#", "")}`}
              className="uppercase tracking-[0.2em] text-xs text-gray-300 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://payfast.greenn.com.br/p6q6c3q"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-cta-btn"
            className="bg-gold text-black font-heading tracking-widest uppercase text-sm px-6 py-2.5 hover:bg-gold-light transition-colors shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] whitespace-nowrap"
          >
            Garantir Cópia
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          data-testid="mobile-nav"
          className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="uppercase tracking-[0.2em] text-sm text-gray-300 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://payfast.greenn.com.br/p6q6c3q"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-black font-heading tracking-widest uppercase text-sm px-6 py-3 text-center mt-2 hover:bg-gold-light transition-colors"
          >
            Garantir Cópia
          </a>
        </nav>
      )}
    </header>
  );
}
