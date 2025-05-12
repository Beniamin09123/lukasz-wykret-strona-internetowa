import { motion } from 'framer-motion';

export function SimpleCard({ testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="w-full min-h-[600px] rounded-2xl border-2 border-[#2C65C8] bg-white p-8 md:p-12 shadow-xl"
    >
      <div className="h-full flex flex-col">
        <div className="flex-grow space-y-8">
          <div className="p-4 rounded-xl bg-[#2C65C8]/10 w-fit mx-auto">
            {testimonial.icon && <testimonial.icon className="w-16 h-16 text-[#2C65C8]" />}
          </div>
          <h3 style={{ fontFamily: 'Inter' }} className="text-2xl md:text-3xl font-bold text-center gradient-text leading-tight">
            {testimonial.title}
          </h3>
          <p style={{ fontFamily: 'Inter' }} className="text-center text-lg md:text-xl text-foreground/70 leading-relaxed">
            {testimonial.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">
          {testimonial.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p style={{ fontFamily: 'Inter' }} className="font-bold text-xl md:text-2xl text-[#2C65C8]">
                {stat.value}
              </p>
              <p style={{ fontFamily: 'Inter' }} className="text-sm md:text-base text-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}