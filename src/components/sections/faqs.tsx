import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CalendarCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "Czy współpraca ze mną coś kosztuje?",
    answer: "Nie pobieram żadnych opłat od klienta – moja usługa jest bezpłatna, a wynagrodzenie otrzymuję od banku po zakończeniu procesu. Dzięki temu możesz liczyć na pełne wsparcie bez dodatkowych kosztów."
  },
  {
    question: "Czy muszę mieć już wybraną nieruchomość, zanim się zgłoszę?",
    answer: "Nie. Współpracę warto rozpocząć wcześniej – pomogę Ci oszacować zdolność kredytową, przygotować się do zakupu i wskazać, na co zwrócić uwagę podczas wyboru nieruchomości."
  },
  {
    question: "Czy możemy wszystko załatwić zdalnie?",
    answer: "Tak, zdecydowana większość formalności może odbyć się online lub z dojazdem do Ciebie – dostosowuje się do Twojej sytuacji i grafiku, by cały proces był wygodny i bezproblemowy."
  },
  {
    question: "Jak długo trwa cały proces uzyskania kredytu?",
    answer: "To zależy od indywidualnej sytuacji, ale zazwyczaj zajmuje to od kilku dni do kilku tygodni. Z moją pomocą unikniesz opóźnień i przyspieszysz całą procedurę."
  },
  {
    question: "Czy pomaga Pan tylko przy kredycie hipotecznym?",
    answer: "Nie tylko. Udzielam wsparcia również przy refinansowaniu, kredytach firmowych, gotówkowych oraz w analizie umów deweloperskich i notarialnych. Możesz liczyć na kompleksowe wsparcie – nie tylko przy samym finansowaniu."
  },
  {
    question: "Czy mogę liczyć na wsparcie także po podpisaniu umowy kredytowej?",
    answer: "Oczywiście. Monitoruję sytuację rynkową i jeśli pojawi się korzystniejsza oferta lub zmiana warunków, poinformuje Cię o tym. Współpraca nie kończy się na podpisaniu umowy – jestem do Twojej dyspozycji również później."
  }
];

function FaqItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: index * 0.1,
          ease: [0.23, 1, 0.32, 1]
        }
      }}
      viewport={{ once: true }}
      className={`
        border-2 border-[#2C65C8]/20 rounded-xl overflow-hidden
        transition-all duration-300
        ${isOpen ? 'bg-[#F1F5FF]' : 'hover:bg-[#F1F5FF]/50'}
      `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between gap-4"
      >
        <h3 
          style={{ fontFamily: 'Inter' }}
          className={`
            text-lg text-left transition-colors duration-300
            ${isOpen ? 'text-[#2C65C8] font-semibold' : 'text-foreground/80'}
          `}
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`
            flex-shrink-0 transition-colors duration-300
            ${isOpen ? 'text-[#2C65C8]' : 'text-foreground/60'}
          `}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
              }
            }}
          >
            <div className="px-6 pb-4">
              <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faqs() {
  return (
    <section id="faqs" className="py-24 px-8 lg:px-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1]
            }
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#2C65C8]/5 backdrop-blur-sm border border-[#2C65C8]/20 rounded-lg px-6 py-3 mb-8">
            <p style={{ fontFamily: 'Inter' }} className="text-xl font-extrabold text-[#2C65C8]">
              Najczęściej Zadawane Pytania
            </p>
          </div>
          <h2 style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }} className="text-3xl md:text-4xl lg:text-5xl mb-6">
            <span className="text-black">Wszystko, co musisz </span>
            <span className="text-[#2C65C8]">wiedzieć</span>
          </h2>
          <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Odpowiedzi na najczęściej zadawane pytania. Jeśli nie znajdziesz tu odpowiedzi na swoje pytanie, skontaktuj się ze mną.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.23, 1, 0.32, 1]
            }
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mt-16"
        >
          <p style={{ fontFamily: 'Inter' }} className="text-xl text-foreground/80 mb-8 max-w-2xl">
            Masz więcej pytań? Skontaktuj się ze mną!
          </p>
          
          <Link 
            to="/contact"
            className="cta-button group"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Zadaj Pytanie - Resztą Zajmę się ja</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}