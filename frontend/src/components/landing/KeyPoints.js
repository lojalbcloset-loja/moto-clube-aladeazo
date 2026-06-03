import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Flame, Users, Navigation, BookMarked, Bike } from "lucide-react";

const TEXTURE_BG = "https://static.prod-images.emergentagent.com/jobs/f077411d-08b0-41b0-8a7c-a7fa139e38ca/images/761b6aabcae0aeac7dd1567d6268bec18989a3257b7a5a43ef60da441c780d21.png";

const points = [
  {
    icon: Flame,
    title: "Liberdade",
    description:
      "Entenda o verdadeiro significado de liberdade sobre duas rodas. A estrada aberta, o vento no rosto e a conexão com a máquina.",
  },
  {
    icon: Users,
    title: "Irmandade",
    description:
      "Descubra como os laços de irmandade são formados e mantidos dentro dos Moto Clubes. Lealdade, respeito e união.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description:
      "Dicas essenciais de pilotagem segura, equipamentos de proteção e cuidados para pilotar com confiança e responsabilidade.",
  },
  {
    icon: Navigation,
    title: "Disciplina em Comboio",
    description:
      "Aprenda as regras e sinais de mão para pilotagem em grupo. A arte do comboio perfeito e a comunicação na estrada.",
  },
  {
    icon: BookMarked,
    title: "História dos Moto Clubes",
    description:
      "Conheça a origem, evolução e os princípios que regem os Moto Clubes no Brasil e no mundo.",
  },
  {
    icon: Bike,
    title: "Estilos de Motos",
    description:
      "Guia completo dos diferentes tipos de motocicletas: Custom, Speed, Naked, Big Trail, Chopper, Vintage e Off Road.",
  },
];

export default function KeyPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="benefits"
      data-testid="benefits-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <img src={TEXTURE_BG} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-surface-card/95" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="uppercase tracking-[0.3em] text-xs text-gold font-sans font-medium">
              O Que Você Vai Aprender
            </span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h2
            data-testid="benefits-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-tight text-white mb-4"
          >
            Tudo Sobre o Universo<br />
            <span className="text-gold">Motociclista</span>
          </h2>
          <p className="font-serif text-base sm:text-lg text-gray-400 italic max-w-2xl mx-auto">
            Do piloteiro iniciante ao veterano dos comboios, este ebook traz conhecimento
            essencial para viver a cultura moto com autenticidade.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              data-testid={`benefit-card-${i}`}
              className="group bg-surface-base border border-white/5 p-8 hover:border-gold/30 transition-all duration-300"
            >
              <point.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-xl tracking-wider uppercase text-white mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
