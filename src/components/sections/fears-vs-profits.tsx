import { X, Check, ArrowRight, CalendarCheck, Shield, Zap, Brain, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function FearsVsProfits() {
  return (
    <section className="py-24 px-8 lg:px-[120px] bg-white">
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
            className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-black"
          >
            Twoje Decyzje Mogą Cię Kosztować - <span className="text-[#2C65C8]">albo Cię Wzmocnić</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24 lg:gap-32">
          {/* Left Column - Without Help */}
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
            className="relative pt-10 p-8 rounded-2xl bg-white backdrop-blur-sm border border-[#2C65C8]/20"
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white backdrop-blur-sm border border-[#2C65C8]/20 rounded-full px-8 py-4">
              <h3 
                style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }}
                className="font-montserrat font-bold text-xl gradient-text"
              >
                Samodzielna droga
              </h3>
            </div>

            <div className="space-y-8 mt-6">
              {[
                'możliwa strata 35 000 zł +',
                'formalności na Twojej głowie',
                'Przeciętna oferta z reklamy',
                '60+ stron dokumentów'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <X className="w-6 h-6 text-red-500 shrink-0" />
                  <p 
                    style={{ fontFamily: 'Inter' }}
                    className="text-lg text-foreground/70"
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - With Help */}
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
            className="relative pt-10 p-8 rounded-2xl bg-[#F1F5FF] backdrop-blur-sm border-2 border-[#2C65C8] shadow-lg shadow-[#2C65C8]/10 scale-105"
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white backdrop-blur-sm border border-[#2C65C8]/20 rounded-full px-8 py-4">
              <h3 
                style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }}
                className="font-montserrat font-bold text-xl gradient-text"
              >
                Wybierasz Moje Wsparcie
              </h3>
            </div>

            <div className="space-y-8 mt-6">
              {[
                'Oszczędź średnio 40 000 PLN',
                'Łatwy i bezstresowy proces',
                'Brak zmartwień o formalności',
                'Pełne wsparcie po podpisaniu',
                'Spersonalizowana oferta'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p 
                    style={{ fontFamily: 'Inter' }}
                    className="text-lg text-foreground/90"
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link 
              to="/contact"
              className="cta-button w-full mt-12 group"
              style={{ fontFamily: 'Inter' }}
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Porozmawiajmy o tym, co będzie dla Ciebie najlepsze</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}