import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-8 lg:px-[120px] section-gradient">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
            >
              Twoja Droga do{' '}
              <span className="text-[#a47764]">Własnego Mieszkania</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-foreground/70 mb-12"
            >
              Oszczędź średnio 40 000 zł na kredycie hipotecznym. Bez stresu, ukrytych kosztów i ryzyka - przeprowadzę Cię przez cały proces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a href="#konsultacja" className="cta-button group">
                UMÓW BEZPŁATNĄ KONSULTACJĘ
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-xl"
          >
            <picture>
              <source
                srcSet="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1920&fm=webp"
                type="image/webp"
              />
              <source
                srcSet="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1920"
                type="image/jpeg"
              />
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1920"
                alt="Twoja droga do własnego mieszkania"
                className="w-full h-full object-cover rounded-2xl"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            <div className="absolute inset-0 bg-[#a47764]/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}