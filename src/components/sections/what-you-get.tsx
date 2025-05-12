import { Users, Clock, Shield, Network, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Strategia dopasowana do Ciebie",
    description: "Nie musisz zgadywać ani ryzykować. Analizuję Twoją sytuację od podstaw i tworzę plan, który naprawdę działa — żeby Twoje życie toczyło się swoim rytmem, bez niespodzianek i bez stresu.",
    icon: Shield,
  },
  {
    title: "Bezpiecznie przechodzisz przez każdy etap",
    description: "Jestem z Tobą przy umowach deweloperskich, przedwstępnych, sprzedaży — tam, gdzie zaczynają się najtrudniejsze decyzje. Dzięki temu wiesz, że nie zostajesz sam, kiedy najbardziej potrzebujesz wsparcia.",
    icon: Users,
  },
  {
    title: "Załatwiasz formalności bez rezygnacji z życia",
    description: "Spotkania zdalne, elastyczne godziny, dojazd do Ciebie. Tak działa pośrednictwo, które nie wywraca Twojego dnia do góry nogami. Twoje plany, praca i rodzina zostają na pierwszym miejscu — kredyt ogarniasz przy okazji.",
    icon: Clock,
  },
  {
    title: "Wszystko gotowe, zanim pojawi się stres",
    description: "Notariusze, pośrednicy, prawnicy — mam wokół siebie ludzi, których sam sprawdziłem. Dzięki temu masz pewność, że proces przebiegnie sprawnie, a Ty możesz skupić się na spacerach, rozmowach i życiu — zamiast na szukaniu specjalistów w ostatniej chwili.",
    icon: Network,
  }
];

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="py-24 px-8 lg:px-[120px] bg-white">
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
          className="text-center mb-24"
        >
          <h2 
            style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }}
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
          >
            <span className="text-black">Zobacz co </span>
            <span className="text-[#2C65C8]">zyskujesz ze mną</span>
          </h2>
          <p 
            style={{ fontFamily: 'Inter' }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Twój komfort i bezpieczeństwo są dla mnie najważniejsze
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }
                }}
                viewport={{ once: true }}
                className="feature-card group hover:bg-[#F1F5FF] shadow-[6px_8px_16px_rgba(0,0,0,0.15)] hover:shadow-[8px_10px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#2C65C8]/10 group-hover:bg-[#2C65C8]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#2C65C8]" />
                  </div>
                  <h3 style={{ fontFamily: 'Inter' }} className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p style={{ fontFamily: 'Inter' }} className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
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
            Rozpocznij swoją drogę do własnego mieszkania z profesjonalnym wsparciem
          </p>
          
          <Link 
            to="/contact"
            className="cta-button group"
          >
            <Clock className="w-5 h-5" />
            <span>Zrób Pierwszy Krok Bez Presji</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}