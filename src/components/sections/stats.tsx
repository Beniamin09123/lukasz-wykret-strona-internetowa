import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { HandshakeIcon, Coins, Star, Building2 } from 'lucide-react';

export function Stats() {
  const stats = [
    { 
      end: 638, 
      description: "zadowolonych klientów", 
      icon: HandshakeIcon,
      isHighlighted: true 
    },
    { 
      end: 978, 
      description: "zaoszczędzonych tysięcy", 
      icon: Coins,
      isHighlighted: false 
    },
    { 
      end: 15, 
      description: "lat doświadczenia", 
      icon: Star,
      isHighlighted: false 
    },
    { 
      end: 73, 
      description: "banki w ofercie", 
      icon: Building2,
      isHighlighted: false 
    },
  ];

  return (
    <section className="relative py-24 px-8 lg:px-[120px]" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto relative">
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
            Za każdą liczbą stoi czyjś{' '}
            <span className="text-[#2C65C8]">spokój i marzenia</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { ref, inView } = useInView({
              threshold: 0.3,
              triggerOnce: true,
            });
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
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
                className={`flex flex-col items-center justify-center p-6 rounded-xl bg-white backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 shadow-[0_4px_12px_rgba(0,0,0,0.1)] ${
                  stat.isHighlighted ? 'border-green-500' : 'border-[#2C65C8]'
                }`}
              >
                <div className="mb-4 p-3 rounded-xl bg-[#2C65C8]/10">
                  <Icon className="w-8 h-8 text-[#2C65C8]" />
                </div>
                <div className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-3 text-[#2C65C8]">
                  {inView ? (
                    <CountUp
                      end={stat.end}
                      duration={2.5}
                      separator=" "
                    />
                  ) : '0'}
                </div>
                <p className={`font-open-sans text-black text-center text-sm md:text-base ${
                  stat.isHighlighted ? 'font-bold' : ''
                }`}>
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}