import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Building2, Wallet, LineChart, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { SimpleCard } from '@/components/ui/simple-card';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: "Oszczędność 47 000 zł na kredycie hipotecznym",
    description: <>
      Para młodych specjalistów IT szukała swojego pierwszego mieszkania. Dzięki odpowiedniej strategii kredytowej i negocjacjom z bankami, <strong className="text-black">udało się obniżyć całkowity koszt kredytu o 47 000 zł</strong> w perspektywie 25 lat.
    </>,
    icon: Building2,
    stats: [
      { label: "Kwota kredytu", value: "520 000 zł" },
      { label: "Okres kredytowania", value: "25 lat" },
      { label: "Oszczędność", value: "47 000 zł" }
    ]
  },
  {
    title: "Refinansowanie z obniżką raty o 1 450 zł",
    description: <>
      Rodzina z dwójką dzieci potrzebowała zmniejszyć miesięczne obciążenie kredytem. Poprzez refinansowanie i negocjacje z bankami, <strong className="text-black">udało się obniżyć ratę o 1 450 zł miesięcznie</strong>, co dało <strong className="text-black">17 400 zł oszczędności</strong> rocznie.
    </>,
    icon: Wallet,
    stats: [
      { label: "Poprzednia rata", value: "4 200 zł" },
      { label: "Nowa rata", value: "2 750 zł" },
      { label: "Roczna oszczędność", value: "17 400 zł" }
    ]
  },
  {
    title: "Kredyt firmowy na rozwój działalności",
    description: "Właściciel firmy IT potrzebował finansowania na rozwój działalności. Dzięki odpowiedniemu przygotowaniu dokumentacji i wyborowi najlepszej oferty, udało się uzyskać kredyt na bardzo korzystnych warunkach.",
    icon: LineChart,
    stats: [
      { label: "Kwota finansowania", value: "800 000 zł" },
      { label: "Okres kredytowania", value: "5 lat" },
      { label: "Oprocentowanie", value: "6.2%" }
    ]
  },
  {
    title: "Kredyt dla rodziny z jednym dochodem",
    description: "Młode małżeństwo z jednym dochodem marzyło o własnym mieszkaniu. Mimo początkowych odmów w kilku bankach, udało się znaleźć odpowiednie rozwiązanie i sfinansować zakup wymarzonego mieszkania.",
    icon: Users,
    stats: [
      { label: "Kwota kredytu", value: "420 000 zł" },
      { label: "Wkład własny", value: "10%" },
      { label: "Okres kredytowania", value: "30 lat" }
    ]
  }
];

export function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="case-studies" className="py-24 px-8 lg:px-[120px] bg-white">
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
            <p style={{ fontFamily: 'Inter' }} className="font-bold text-xl gradient-text">
              Historie Sukcesu
            </p>
          </div>
          <h2 style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }} className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            <span className="text-black">Zobacz, jak pomogłem innym </span>
            <span className="text-[#2C65C8]">spełnić marzenia</span>
          </h2>
          <p style={{ fontFamily: 'Inter' }} className="font-open-sans text-foreground/70 text-lg max-w-2xl mx-auto">
            Poznaj prawdziwe historie moich klientów i dowiedz się, jak wspólnie osiągnęliśmy ich cele finansowe
          </p>
        </motion.div>

        <div className="relative max-w-[600px] mx-auto mb-8">
          <SimpleCard testimonial={caseStudies[currentIndex]} />
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 rounded-full bg-white border-2 border-[#2C65C8] text-black hover:bg-[#2C65C8]/5 transition-colors duration-300 z-10"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 rounded-full bg-white border-2 border-[#2C65C8] text-black hover:bg-[#2C65C8]/5 transition-colors duration-300 z-10"
              aria-label="Next case study"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 mb-8">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full bg-white border-2 border-[#2C65C8] text-black hover:bg-[#2C65C8]/5 transition-colors duration-300"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white border-2 border-[#2C65C8] text-black hover:bg-[#2C65C8]/5 transition-colors duration-300"
            aria-label="Next case study"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-16">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-[#2C65C8]' : 'bg-[#2C65C8]/20'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
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
            Dołącz do grona zadowolonych klientów i zacznij oszczędzać już dziś!
          </p>
          
          <Link 
            to="/contact"
            className="cta-button group"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Umów Bezpłatną Konsultację</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}