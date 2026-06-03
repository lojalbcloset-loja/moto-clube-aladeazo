import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos 'Falcão' Ribeiro",
    club: "Presidente — Águias do Asfalto MC",
    avatar: "https://images.unsplash.com/photo-1553640662-9ab20b8fa2ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxiaWtlciUyMG1hbiUyMHBvcnRyYWl0JTIwbGVhdGhlciUyMGphY2tldHxlbnwwfHx8fDE3ODAzMjQzNjF8MA&ixlib=rb-4.1.0&q=85",
    quote:
      "Esse ebook é leitura obrigatória para qualquer motociclista que respeita a cultura dos Moto Clubes. O Cel. Wellington traduziu em palavras o que sentimos na estrada.",
    rating: 5,
  },
  {
    name: "Roberto 'Trovão' Mendes",
    club: "Road Captain — Lobos Noturnos MC",
    avatar: "https://images.unsplash.com/photo-1605268845395-15828acd992e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxiaWtlciUyMG1hbiUyMHBvcnRyYWl0JTIwbGVhdGhlciUyMGphY2tldHxlbnwwfHx8fDE3ODAzMjQzNjF8MA&ixlib=rb-4.1.0&q=85",
    quote:
      "Depois de ler 'Estilo em Duas Rodas', organizei nosso comboio com muito mais segurança e disciplina. Os capítulos sobre sinais de mão e formação salvaram vidas.",
    rating: 5,
  },
  {
    name: "Marcos 'Pistão' Oliveira",
    club: "Membro — Irmãos de Ferro MC",
    avatar: "https://images.pexels.com/photos/33680726/pexels-photo-33680726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    quote:
      "Eu era novato no motoclubismo e esse livro me abriu os olhos para a verdadeira essência da irmandade. Respeito, honra e lealdade — tudo explicado de forma clara e autêntica.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-24 md:py-32 bg-surface-base"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
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
              Depoimentos
            </span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h2
            data-testid="testimonials-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-tight text-white mb-4"
          >
            O Que Dizem os <span className="text-gold">Irmãos</span>
          </h2>
          <p className="font-serif text-base sm:text-lg text-gray-400 italic max-w-2xl mx-auto">
            Motociclistas de todo o Brasil já transformaram sua experiência com este ebook.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              data-testid={`testimonial-card-${i}`}
              className="group relative bg-surface-card border border-white/5 p-8 hover:border-gold/30 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-300 leading-relaxed text-sm flex-1 mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-gold/20"
                />
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-gold/60 text-xs">{t.club}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
