import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: "Build Your Website & Link in Bio",
    description: "Maximize your online impact using our website and link in bio feature.",
    href: "#website",
  },
  {
    title: "Create Client Onboarding Funnels",
    description: "Streamline your client onboarding process with customizable funnels.",
    href: "#funnels",
  },
  {
    title: "Create Proposals & Contracts",
    description: "Professional proposals and contracts that win more clients.",
    href: "#proposals",
  },
  {
    title: "Manage Your Leads",
    description: "Keep track of potential clients and never miss an opportunity.",
    href: "#leads",
  },
  {
    title: "Send Invoices",
    description: "Get paid faster with professional, automated invoicing.",
    href: "#invoices",
  },
  {
    title: "Book Calls",
    description: "Make scheduling meetings effortless with integrated booking.",
    href: "#calls",
  },
  {
    title: "Create Client Portals",
    description: "Give clients a professional, branded experience.",
    href: "#portals",
  },
  {
    title: "Manage Your Business",
    description: "Everything you need to run your business efficiently.",
    href: "#business",
  },
  {
    title: "Enhance your work with AI",
    description: "Leverage AI to automate and improve your workflow.",
    href: "#ai",
  },
];

export function Features() {
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
            Use Flozy to
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {features.map((feature, index) => (
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
              className="group"
            >
              <a
                href={feature.href}
                className="feature-card flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">
                    {feature.description}
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}