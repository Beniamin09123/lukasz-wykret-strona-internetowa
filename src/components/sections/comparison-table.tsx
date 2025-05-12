import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export function ComparisonTable() {
  return (
    <section className="py-24 px-8 lg:px-[120px] bg-gradient-to-b from-background to-muted/20">
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
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Maximize Your Clients' Happiness
          </h2>
          <p className="font-open-sans text-foreground/70 text-lg max-w-2xl mx-auto">
            Acquiring new customers cost 5x more than retaining existing ones so keep your clients happy and boost your bottom line.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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
            className="feature-card"
          >
            <div className="flex items-center gap-4 mb-6">
              <X className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-semibold">Old Way</h3>
            </div>
            <p className="text-foreground/70">
              Connect up to 8 different softwares to create your onboarding process and get your clients to log in to at least 3 different platforms to communicate, access files and manage tasks.
            </p>
          </motion.div>

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
            className="feature-card"
          >
            <div className="flex items-center gap-4 mb-6">
              <Check className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Flozy Way</h3>
            </div>
            <p className="text-foreground/70">
              Use 1 platform to create your onboarding process and manage your clients and entire business in a custom branded hub.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}