import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavBar } from './components/ui/navbar';
import { About } from './components/sections/about';
import { Services } from './components/sections/services';
import { Process } from './components/sections/process';
import { WhatYouGet } from './components/sections/what-you-get';
import { FearsVsProfits } from './components/sections/fears-vs-profits';
import { Stats } from './components/sections/stats';
import { Testimonials } from './components/sections/testimonials';
import { DontMiss } from './components/sections/dont-miss';
import { NoYears } from './components/sections/no-years';
import { CaseStudies } from './components/sections/case-studies';
import { Faqs } from './components/sections/faqs';
import { Footer } from './components/sections/footer';
import { CookieConsent } from './components/ui/cookie-consent';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 lg:px-[120px] overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
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
                style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
              >
                Codzienność <span className="text-[#2C65C8]">Bez Biegania i Pytań</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontFamily: 'Inter' }}
                className="text-lg sm:text-xl text-foreground/70 mb-12 font-medium"
              >
                Zamiast spędzać kolejne wieczory na analizowaniu ofert i zasypiać z bólem głowy, siedzisz z rodziną przy filmie. Spokojny, bo wszystko już załatwione.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <a href="/contact" className="cta-button group">
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
              <img 
                src="/images/telewi.webp"
                alt="Twoja droga do własnego mieszkania"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 bg-[#DCCBB7]/5" />
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />
      <DontMiss />
      <NoYears />
      <WhatYouGet />
      <Testimonials />
      <Services />
      <CaseStudies />
      <FearsVsProfits />
      <Process />
      <About />
      <Faqs />
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;