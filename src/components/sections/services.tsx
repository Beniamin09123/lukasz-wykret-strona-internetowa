import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Building2, RefreshCw, Briefcase, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Building2,
    title: "Dom, który daje ciepło, nie stres",
    highlightedDesc: "Twoje wymarzone mieszkanie – bez ukrytych kosztów i zbędnego stresu.",
    fullDesc: <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 leading-relaxed">
      Twoje własne cztery kąty to marzenie, które może stać się rzeczywistością. Dobieram <strong className="text-black">kredyt dopasowany do Twoich potrzeb i możliwości finansowych</strong>, dbając o to, abyś nie ponosił zbędnych kosztów. Zdaję sobie sprawę, jak ważna jest każda decyzja finansowa, dlatego <strong className="text-black">towarzyszę Ci na każdym etapie</strong> – od pierwszej konsultacji po podpisanie umowy, zapewniając <strong className="text-black">pełne wsparcie i przejrzystość</strong>.
    </p>,
    image: "/images/przepro.webp",
  },
  {
    icon: RefreshCw,
    title: "Niższe raty, wcześniejsze wakacje",
    highlightedDesc: "Zmniejsz raty kredytu i odzyskaj kontrolę nad swoimi finansami.",
    fullDesc: <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 leading-relaxed">
      Masz już kredyt, ale jego warunki przestały Ci odpowiadać? Pomagam <strong className="text-black">oszczędzić nawet 500 000 zł</strong> w perspektywie całego kredytu i dostosować zobowiązanie do Twojej aktualnej sytuacji finansowej. Zajmę się formalnościami, aby <strong className="text-black">cały proces przebiegł szybko i bez zbędnych komplikacji</strong>. Ty możesz skupić się na tym, co najważniejsze, a ja zadbam o korzystne rozwiązanie dla Twojego budżetu.
    </p>,
    image: "/images/refinan.webp",
  },
  {
    icon: Briefcase,
    title: "Kapitał, który skaluje Twoje dochody",
    highlightedDesc: "Rozwijaj biznes na własnych zasadach",
    fullDesc: <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 leading-relaxed">
      Prowadzisz działalność i potrzebujesz finansowego wsparcia? Pomagam przedsiębiorcom w znalezieniu najlepszych ofert kredytowych, które <strong className="text-black">zapewnią stabilność i rozwój biznesu</strong>. Bez względu na to, czy planujesz inwestycję, zakup sprzętu czy rozbudowę firmy – <strong className="text-black">ze mną podejmiesz świadomą i opłacalną decyzję</strong>.
    </p>,
    image: "/images/firmowy.webp",
  },
  {
    icon: Wallet,
    title: "Gotówka wtedy, gdy naprawdę jej potrzebujesz",
    highlightedDesc: "Nie czekaj – elastyczne finansowanie na Twoje potrzeby.",
    fullDesc: <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 leading-relaxed">
      Zepsuł się samochód lub <strong className="text-black">nie chcesz dłużej czekać na wymarzone wakacje</strong>? Dzięki elastycznym opcjom kredytowym możesz uzyskać potrzebne środki szybko i bez zbędnych formalności. Pomagam znaleźć rozwiązanie dopasowane do Twoich możliwości, abyś <strong className="text-black">mógł zrealizować swoje cele bez zbędnego stresu</strong>.
    </p>,
    image: "/images/gotowkowy.webp",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-8 lg:px-[120px] bg-white">
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
          <h2 
            style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }}
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
          >
            <span className="text-black">4 OBSZARY </span>
            <span className="text-[#2C65C8]">FINANSOWANIA</span>
          </h2>
          <p 
            style={{ fontFamily: 'Inter' }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Każda opcja jest precyzyjnie dobrana, aby maksymalnie zwiększyć Twoje korzyści finansowe – od zakupu nieruchomości po rozwój biznesu.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 mb-16">
          {services.map((service, index) => (
            <ServiceBlock key={index} service={service} index={index} />
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
          <Link 
            to="/contact"
            className="cta-button group"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Wybierz Wsparcie Dopasowane Do Ciebie</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceBlock({ service, index }: { service: typeof services[0], index: number }) {
  const isEven = index % 2 === 0;
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.23, 1, 0.32, 1]
        }
      }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
    >
      {/* Image Container with Gradient */}
      <div className={cn(
        "relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-square",
        isEven ? "lg:order-1" : "lg:order-2"
      )}>
        {/* Gradient Background */}
        <div 
          className="absolute -inset-6 rounded-[2rem]"
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(44, 101, 200, 0.3) 0%,
                rgba(44, 101, 200, 0.15) 35%,
                rgba(44, 101, 200, 0.05) 70%,
                transparent 100%
              )
            `,
            filter: 'blur(20px)',
          }}
        />

        {/* Additional glow effect */}
        <div 
          className="absolute -inset-4 rounded-[2rem]"
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(255, 255, 255, 0.1) 0%,
                transparent 70%
              )
            `,
            filter: 'blur(15px)',
          }}
        />

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-[#2C65C8]/10" />
          
          {/* Icon Overlay */}
          <div className="absolute top-6 right-6 p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
            <Icon className="w-8 h-8 text-[#2C65C8]" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className={cn(
        "w-full lg:w-1/2 space-y-4",
        isEven ? "lg:order-2" : "lg:order-1",
        isEven ? "lg:text-left" : "lg:text-right"
      )}>
        <h3 className="font-montserrat text-2xl font-bold text-black">
          {service.title}
        </h3>
        
        <p style={{ fontFamily: 'Inter' }} className="font-semibold text-lg text-[#2C65C8]">
          {service.highlightedDesc}
        </p>
        
        {service.fullDesc}
      </div>
    </motion.div>
  );
}