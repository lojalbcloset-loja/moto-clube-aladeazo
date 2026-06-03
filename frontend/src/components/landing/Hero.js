import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/f077411d-08b0-41b0-8a7c-a7fa139e38ca/images/0cbe3c0d9fce69b3d416d33bfde83cb6ef7703641437844fd5bc9427dc0bf374.png";

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[100dvh] min-h-screen flex items-center overflow-hidden hero-bg"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Background with responsive sizing */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, #0A0A0A 0%, transparent 25%),
            linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.6), rgba(0,0,0,0.3)),
            linear-gradient(to top, #0A0A0A 0%, transparent 40%),
            url(${HERO_BG})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-24 sm:pt-24 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[2px] bg-gold" />
            <span className="uppercase tracking-[0.3em] text-xs text-gold font-sans font-medium">
              Cel. Wellington Cardoso Laureano
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            data-testid="hero-title"
            className="font-heading text-5xl sm:text-6xl lg:text-[7rem] tracking-tight uppercase leading-[0.95] text-white mb-6"
          >
            Estilo em<br />
            <span className="text-gold">Duas Rodas</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            data-testid="hero-subtitle"
            className="font-serif text-lg sm:text-xl lg:text-2xl text-gold/80 italic mb-10 max-w-xl leading-relaxed"
          >
            Descubra os princípios, a segurança e a verdadeira identidade dos Moto Clubes.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              data-testid="hero-cta-btn"
              href="https://payfast.greenn.com.br/p6q6c3q"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black font-heading tracking-widest uppercase text-lg sm:text-xl px-8 py-4 hover:bg-gold-light transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] text-center"
            >
              Quero o Ebook por R$67,00
            </a>
            <button
              data-testid="hero-secondary-btn"
              onClick={() => scrollTo("#about")}
              className="border border-gold/40 text-gold font-heading tracking-widest uppercase text-lg sm:text-xl px-8 py-4 hover:bg-gold/10 transition-all duration-300 bg-transparent"
            >
              Saiba Mais
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          data-testid="scroll-down-btn"
          onClick={() => scrollTo("#about")}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-gold transition-colors"
        >
          <span className="uppercase tracking-[0.3em] text-[10px]">Explorar</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
