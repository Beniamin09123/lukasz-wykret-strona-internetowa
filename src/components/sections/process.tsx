import { Timeline } from "@/components/ui/timeline";
import { CalendarCheck, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export function Process() {
  const processData = [
    {
      title: "Krok 1",
      content: (
        <div>
          <h4 className="font-montserrat font-semibold text-xl mb-4 gradient-text">
            Spotkanie – „Rozmawiamy o Twoich potrzebach."
          </h4>
          <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 text-lg leading-relaxed">
            Podczas pierwszej rozmowy wszystko wyjaśnię prostym językiem – bez bankowego żargonu i niezrozumiałych zapisów. Skupię się na Twoich potrzebach, możliwościach i najlepszych opcjach. Zero zobowiązań, zero ryzyka.
          </p>
        </div>
      ),
    },
    {
      title: "Krok 2",
      content: (
        <div>
          <h4 className="font-montserrat font-semibold text-xl mb-4 gradient-text">
            Analiza – „Sprawdzam oferty wszystkich banków."
          </h4>
          <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 text-lg leading-relaxed">
            Sprawdzę aktualne oferty kilkunastu banków i wskażę Ci najlepsze opcje. Dzięki mojej znajomości procedur bankowych znajdziesz warunki, których sam mógłbyś nie dostać. Oszczędzisz średnio 40 000 zł na oprocentowaniu i dodatkowych kosztach – a wszystko będzie w 100% transparentne.
          </p>
        </div>
      ),
    },
    {
      title: "Krok 3",
      content: (
        <div>
          <h4 className="font-montserrat font-semibold text-xl mb-4 gradient-text">
            Wybór – „Dostajesz gotowe najlepsze opcje."
          </h4>
          <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 text-lg leading-relaxed">
            Na tym etapie masz pełną jasność i kontrolę. Przedstawię Ci konkretne wyliczenia i porównanie dostępnych opcji, uwzględniając wszystkie koszty i haczyki, które banki często ukrywają w drobnym druku. Dzięki temu podejmiesz świadomą decyzję, oszczędzając czas, nerwy i średnio 40 000 zł na oprocentowaniu i dodatkowych opłatach.
          </p>
        </div>
      ),
    },
    {
      title: "Krok 4",
      content: (
        <div>
          <h4 className="font-montserrat font-semibold text-xl mb-4 gradient-text">
            Podpisanie – „Finalizujesz kredyt – BEZ STRESU."
          </h4>
          <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 text-lg leading-relaxed">
            Przed podpisaniem dokładnie przejdziemy przez każdy zapis umowy, abyś miał 100% pewności, że wszystko jest dla Ciebie jasne. Wskażę, na co zwrócić uwagę i rozwieję wszelkie wątpliwości. Nie ma niespodzianek, nie ma ukrytych kosztów – tylko najlepsze możliwe warunki!
          </p>
        </div>
      ),
    },
    {
      title: "Krok 5",
      content: (
        <div>
          <h4 className="font-montserrat font-semibold text-xl mb-4 gradient-text">
            Wypłata kredytu i wsparcie po decyzji
          </h4>
          <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 text-lg leading-relaxed">
            Twoje pieniądze trafiają tam, gdzie powinny, a Ty możesz skupić się na swoim nowym domu lub inwestycji. Ale to nie koniec mojej pomocy! Jeśli pojawią się pytania – jestem do Twojej dyspozycji. Jesteś w dobrych rękach – teraz i w przyszłości.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="process" className="bg-white">
      <Timeline 
        data={processData} 
        title={
          <h2 style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }} className="text-3xl md:text-4xl lg:text-5xl mb-6">
            <span className="text-black">Spełnienie Twoich marzeń</span>
            <span className="text-[#2C65C8]"> – w 5 prostych krokach</span>
          </h2>
        }
        subtitle="Przeprowadzę Cię przez cały proces krok po kroku, dbając o Twój komfort i najlepsze warunki finansowe"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.2,
            ease: [0.23, 1, 0.32, 1]
          }
        }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto px-8 pb-24 flex flex-col items-center gap-6 text-center"
      >
        <h3 className="font-montserrat text-2xl md:text-3xl font-bold">
          <span className="text-black"><strong>Rozpocznij swoją drogę do </strong></span>
          <span className="text-[#2C65C8]"><strong>własnego mieszkania</strong></span>
        </h3>
        <p style={{ fontFamily: 'Inter' }} className="text-lg text-foreground/70 max-w-2xl">
          Umów bezpłatną konsultację i dowiedz się, jak mogę pomóc Ci osiągnąć Twoje cele
        </p>
        <Link
          to="/contact"
          className="cta-button group mt-4"
        >
          <CalendarCheck className="w-5 h-5" />
          <span>Umów Bezpłatną Konsultację</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}