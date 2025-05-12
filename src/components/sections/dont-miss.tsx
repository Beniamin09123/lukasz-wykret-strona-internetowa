import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DontMiss() {
  return (
    <section className="relative py-24 px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }
            }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1]
                }
              }}
              viewport={{ once: true }}
              style={{ fontFamily: 'Inter', fontStyle: 'italic' }}
              className="text-lg sm:text-xl text-[#2C65C8] mb-8"
            >
              Bliscy nie zawsze powiedzą, co czują. Ale pamiętają wszystko
            </motion.p>

            <h2 
              style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }}
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              <span className="text-black">Nie pozwól, by to miejsce kojarzyło się z </span>
              <span className="text-[#2C65C8]">napięciem tylko z bliskością.</span>
            </h2>

            <p 
              style={{ fontFamily: 'Inter' }}
              className="text-lg text-foreground/70 mb-8 leading-relaxed font-medium"
            >
              Wspomnienia mogą być źródłem siły i spokoju — lub cieniem, który długo się niesie.
              Czasem wystarczy jedna świadoma decyzja, by codzienność wypełniła się rozmowami, śmiechem i spokojem.
              Każdy krok dziś tworzy przeszłość, do której będzie się chciało wracać.
            </p>

            <Link 
              to="/contact"
              className="cta-button group inline-flex"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Umów Bezpłatną Konsultację</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }
            }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src="/images/rodzina.webp"
              alt="Nie trać czasu"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-[#DCCBB7]/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}