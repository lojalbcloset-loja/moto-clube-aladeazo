import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Download, Lock, CheckCircle } from "lucide-react";
import Countdown from "./Countdown";

const EBOOK_COVER = "https://customer-assets.emergentagent.com/job_moto-culture-hub/artifacts/cmp0r9kc_2.png";

const guarantees = [
  { icon: ShieldCheck, text: "Garantia de 7 dias" },
  { icon: Download, text: "Download imediato" },
  { icon: Lock, text: "Pagamento seguro" },
];

const includes = [
  "15+ capítulos sobre a cultura motociclista",
  "Guia completo de segurança na pilotagem",
  "Estrutura e organização dos Moto Clubes",
  "Sinais de mão e disciplina em comboio",
  "Estilos de motos explicados em detalhes",
  "A identidade e simbologia biker",
];

export default function PurchaseCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="purchase"
      data-testid="purchase-section"
      className="relative py-24 md:py-32 bg-surface-card overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="uppercase tracking-[0.3em] text-xs text-gold font-sans font-medium">
              Garanta o Seu
            </span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h2
            data-testid="purchase-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-tight text-white mb-6"
          >
            Comece Sua Jornada <span className="text-gold">Agora</span>
          </h2>
          <Countdown />
        </motion.div>

        {/* Purchase card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-surface-base border border-gold/20 p-6 sm:p-8 lg:p-12 relative">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/40" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/40" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40" />

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Dual book mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex justify-center items-center px-4 lg:px-8"
                data-testid="purchase-ebook-img"
              >
                <div className="relative w-44 sm:w-56 md:w-64 lg:w-[25rem] aspect-[3/4]">
                  {/* Back book (leaning left) */}
                  <div
                    className="absolute left-[5%] bottom-0 w-[65%] origin-bottom-right"
                    style={{
                      transform: "rotate(-12deg)",
                      filter: "brightness(0.85)",
                    }}
                  >
                    <div className="relative shadow-[4px_8px_30px_rgba(0,0,0,0.6)]">
                      <img
                        src={EBOOK_COVER}
                        alt="Ebook Estilo em Duas Rodas - verso"
                        className="w-full h-auto block rounded-[2px]"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none rounded-[2px]"
                        style={{
                          background: "linear-gradient(160deg, rgba(0,0,0,0.15) 0%, transparent 50%)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Front book (standing upright) */}
                  <div
                    className="absolute right-[5%] bottom-0 w-[68%] z-10"
                    style={{ transform: "rotate(3deg)" }}
                  >
                    <div className="relative shadow-[-6px_10px_35px_rgba(0,0,0,0.7)]">
                      <img
                        src={EBOOK_COVER}
                        alt="Ebook Estilo em Duas Rodas"
                        className="w-full h-auto block rounded-[2px]"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none rounded-[2px]"
                        style={{
                          background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 35%, transparent 100%)",
                        }}
                      />
                      <div
                        className="absolute top-0 left-0 w-[4px] h-full"
                        style={{
                          background: "linear-gradient(to right, rgba(0,0,0,0.4), transparent)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Purchase details */}
              <div>
                <h3 className="font-heading text-2xl lg:text-3xl tracking-wider uppercase text-white mb-2">
                  Estilo em Duas Rodas
                </h3>
                <p className="font-serif text-gold/70 italic text-sm mb-6">
                  por Cel. Wellington Cardoso Laureano
                </p>

                {/* Includes */}
                <ul className="space-y-3 mb-8">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-gray-500 text-sm line-through mb-1">De R$ 97,00</div>
                  <span className="font-heading text-5xl text-gold">R$67,00</span>
                  <p className="text-xs text-gray-500 mt-1">Pagamento único. Acesso vitalício.</p>
                </div>

                {/* CTA Button */}
                <a
                  href="https://payfast.greenn.com.br/p6q6c3q"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="purchase-cta-btn"
                  className="block w-full text-center bg-gold text-black font-heading tracking-widest uppercase text-xl px-8 py-5 hover:bg-gold-light transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
                >
                  Comprar Agora — R$67,00
                </a>

                {/* Guarantees */}
                <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
                  {guarantees.map((g) => (
                    <div key={g.text} className="flex items-center gap-2">
                      <g.icon className="w-4 h-4 text-gold/50" />
                      <span className="text-[11px] text-gray-500 uppercase tracking-wider">{g.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
