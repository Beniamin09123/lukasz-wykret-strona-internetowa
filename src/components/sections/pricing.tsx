import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Solopreneur Plan",
    price: "$49",
    period: "USD / Month",
    features: [
      "Up to 2 Team Members",
      "Unlimited Onboarding Funnels",
      "Unlimited Clients",
      "Unlimited Flows",
      "Unlimited Invoices",
      "Unlimited Proposals",
      "Unlimited Chat",
      "10 GB Storage Drive",
    ],
  },
  {
    name: "Pro Plan",
    price: "$89",
    period: "USD / Month",
    features: [
      "Up 5 Team Members",
      "Unlimited Onboarding Funnels",
      "Unlimited Clients",
      "Unlimited Flows",
      "Unlimited Invoices",
      "Unlimited Proposals",
      "Unlimited Chat",
      "100 GB Storage Drive",
      "White-label Client Portal",
      "Custom domain",
      "AI Integration",
    ],
    highlight: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-8 lg:px-[120px] bg-gradient-to-b from-background to-muted/20">
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
          <p className="text-primary mb-4 font-medium">PRICING</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Level up your business. Start for free!
          </h2>
          <p className="font-open-sans text-foreground/70 text-lg max-w-2xl mx-auto">
            Attract more clients, serve them better and keep them longer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.23, 1, 0.32, 1]
                }
              }}
              viewport={{ once: true }}
              className={`pricing-card ${plan.highlight ? 'active' : ''}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-primary"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-2 text-foreground/60">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}