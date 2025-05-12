import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NoYears() {
  return (
    <section className="py-24 px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column - Hidden on mobile, shown on left side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-xl hidden lg:block"
          >
            <img 
              src="/images/popoludnie.webp"
              alt="Własne mieszkanie"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-[#DCCBB7]/10" />
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:order-2"
          >
            <p 
              style={{ fontFamily: 'Inter', fontStyle: 'italic' }}
              className="text-lg text-[#2C65C8]"
            >
              Nie chodzi o mury. Chodzi o emocje, które w nich zostają…
            </p>

            <h2 
              style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Miejsce, które daje ciszę w głowie i{' '}
              <span className="text-[#2C65C8]">spokój w sercu — na lata.</span>
            </h2>

            <p 
              style={{ fontFamily: 'Inter' }}
              className="text-lg text-foreground/70 leading-relaxed font-medium"
            >
              To nie metraż ani wyliczenia w arkuszu tworzą dom, tylko bezpieczeństwo, rozmowy i śmiech przy porannej kawie.
              Dobra decyzja dziś to mniej stresu jutro — i więcej spokoju, który zostaje na lata.
              Dom, do którego chce się wracać, bo był zbudowany nie tylko na fundamencie, ale na mądrości i trosce.
            </p>

            <Link 
              to="/contact"
              className="cta-button group inline-flex"
              style={{ fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'bold' }}
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Zacznij budować spokój</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Image Column - Shown only on mobile, below content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-xl lg:hidden"
          >
            <img 
              src="/images/popoludnie.webp"
              alt="Własne mieszkanie"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-[#DCCBB7]/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}