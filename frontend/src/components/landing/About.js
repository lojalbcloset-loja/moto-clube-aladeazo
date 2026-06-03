import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Award, Shield } from "lucide-react";

const AUTHOR_IMG = "https://customer-assets.emergentagent.com/job_moto-culture-hub/artifacts/7v76x4em_capa-sobre.png";

const stats = [
  { icon: BookOpen, value: "15+", label: "Capítulos" },
  { icon: Award, value: "30+", label: "Anos de Experiência" },
  { icon: Shield, value: "100%", label: "Autêntico" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 bg-surface-base"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={AUTHOR_IMG}
                alt="Cel. Wellington Cardoso Laureano"
                data-testid="about-author-img"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-base/80 via-transparent to-transparent" />
            </div>
            {/* Gold accent line */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-32 sm:h-32 border-r-2 border-b-2 border-gold/30" />
            <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-32 sm:h-32 border-l-2 border-t-2 border-gold/30" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="uppercase tracking-[0.3em] text-xs text-gold font-sans font-medium">
                Sobre o Autor
              </span>
            </div>

            <h2
              data-testid="about-title"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-tight text-white mb-6"            >
              Cel. Wellington<br />
              <span className="text-gold">Cardoso Laureano</span>
            </h2>

            <p className="font-serif text-lg text-gold/70 italic mb-6">
              "Uma vida dedicada à disciplina e à paixão sobre rodas"
            </p>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-10">
              <p>
                Coronel Veterano da Polícia Militar, ex-piloto de motovelocidade e campeão
                brasileiro, Wellington Cardoso Laureano é um dos nomes mais respeitados do
                cenário motociclista nacional.
              </p>
              <p>
                Fundador e presidente de Moto Clubes, ele reúne em{" "}
                <strong className="text-white">"Estilo em Duas Rodas"</strong> toda sua
                experiência de mais de três décadas sobre duas rodas — da segurança na
                pilotagem à essência da irmandade que move os Moto Clubes.
              </p>
              <p>
                Este ebook é um guia completo para quem vive ou quer viver a cultura
                motociclista com autenticidade, respeito e honra.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <div className="font-heading text-2xl text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
