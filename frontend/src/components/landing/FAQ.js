import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Preciso ser membro de um Moto Clube para aproveitar o ebook?",
    answer:
      "Não. O ebook foi escrito tanto para quem já faz parte de um Moto Clube quanto para quem está começando no mundo motociclista. Seja você um veterano ou um iniciante curioso, o conteúdo vai agregar conhecimento valioso à sua jornada.",
  },
  {
    question: "O ebook aborda questões de segurança na pilotagem?",
    answer:
      "Sim. Um dos pilares do livro é a segurança. Você encontrará capítulos dedicados a equipamentos de proteção (EPI), pilotagem defensiva, cuidados com a moto, dicas para pilotar na chuva e à noite, e os riscos do álcool ao pilotar.",
  },
  {
    question: "Como funciona a disciplina em comboio explicada no livro?",
    answer:
      "O ebook detalha toda a formação de comboio — posições, sinais de mão, comunicação entre os pilotos, o papel do Road Captain e do Ferrolho (segurança traseira). É um guia prático para quem participa de passeios em grupo.",
  },
  {
    question: "Quem é o autor e qual sua experiência no motoclubismo?",
    answer:
      "O Cel. Wellington Cardoso Laureano é Coronel Veterano da Polícia Militar, ex-piloto de motovelocidade e campeão brasileiro. Fundador e presidente de Moto Clubes, ele possui mais de 30 anos de vivência no universo motociclista.",
  },
  {
    question: "Qual o formato do ebook e como recebo após a compra?",
    answer:
      "O ebook é entregue em formato digital (PDF) imediatamente após a confirmação do pagamento. Você pode ler no celular, tablet ou computador — a qualquer hora, em qualquer lugar.",
  },
  {
    question: "O livro explica como criar ou ingressar em um Moto Clube?",
    answer:
      "Sim. Há capítulos dedicados à estrutura organizacional dos Moto Clubes, os diferentes tipos (Moto Clube, Moto Turismo, Moto Casal), as fases de ingresso, hierarquia, e até os aspectos legais envolvidos na fundação de um clube.",
  },
  {
    question: "Existe garantia de satisfação?",
    answer:
      "Sim. Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o conteúdo, devolvemos 100% do seu investimento, sem perguntas.",
  },
];

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * index, duration: 0.4 }}
      data-testid={`faq-item-${index}`}
      className="border-b border-white/5 last:border-b-0"
    >
      <button
        data-testid={`faq-toggle-${index}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-sm md:text-base text-white font-medium pr-8 group-hover:text-gold transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-400 leading-relaxed pr-12">
          {faq.answer}
        </p>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 md:py-32 bg-surface-base"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="uppercase tracking-[0.3em] text-xs text-gold font-sans font-medium">
              Dúvidas Frequentes
            </span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h2
            data-testid="faq-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-tight text-white"
          >
            Perguntas <span className="text-gold">Frequentes</span>
          </h2>
        </motion.div>

        {isInView && (
          <div className="bg-surface-card border border-white/5 px-6 md:px-10">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
