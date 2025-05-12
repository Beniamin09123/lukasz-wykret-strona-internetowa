import { CalendarCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <section id="about" className="py-24 px-8 lg:px-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            className="flex flex-col gap-6"
          >
            <h2 
              style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }}
              className="text-3xl md:text-4xl lg:text-5xl text-black"
            >
              O mnie
            </h2>
            
            <div className="space-y-6">
              <p style={{ fontFamily: 'Inter' }} className="text-lg text-foreground/70 leading-relaxed">
                Nazywam się <strong className="text-black">Łukasz Wykręt</strong> i od 2006 roku pomagam klientom <strong className="text-black">spokojnie i bezpiecznie przejść przez proces kredytowy</strong>. Zaczynałem, pracując po stronie instytucji – w konsultingu IT dla największych banków i firm finansowych w Polsce. To tam nauczyłem się, jak naprawdę działa ten system, gdzie są luki, jak myślą analitycy… i gdzie klient indywidualny zazwyczaj nie ma szans przebić się bez odpowiedniego wsparcia.
              </p>
              
              <p style={{ fontFamily: 'Inter' }} className="text-lg text-foreground/70 leading-relaxed">
                <strong className="text-black">Dziś wykorzystuję tę wiedzę po drugiej stronie – po stronie klientów</strong>. Nie jestem „sprzedawcą kredytów", nie działam hurtowo. Każda współpraca zaczyna się od rozmowy, dopasowania i pełnej analizy. Jasny język, konkret, bez naciągania.
              </p>
              
              <p style={{ fontFamily: 'Inter' }} className="text-lg text-foreground/70 leading-relaxed">
                <strong className="text-black">Działam tak, jak wygodnie Tobie — zdalnie, hybrydowo lub z dojazdem</strong>. Jeśli prowadzisz firmę, masz dzieci albo zwyczajnie nie chcesz poświęcać weekendów na czytanie umów — <strong className="text-black">dopasowuje się do Twojego rytmu</strong>. To Ty wybierasz czas i formę współpracy, a ja ogarniam resztę.
              </p>

              <p style={{ fontFamily: 'Inter' }} className="text-lg text-foreground/70 leading-relaxed">
                Większość osób, które się do mnie zgłaszają, <strong className="text-black">trafia z polecenia</strong> – od rodziny, znajomych albo innych klientów, którym pomogłem. To dla mnie największy dowód, że to, co robię, ma sens. <strong className="text-black">A każda kolejna historia</strong> pokazuje, że <strong className="text-black">zaufanie, spokój i przewidywalność</strong> w finansach nadal mają ogromną wartość.
              </p>

              <p style={{ fontFamily: 'Inter' }} className="text-lg text-foreground/70 leading-relaxed">
                Nie ścigam się z rynkiem. <strong className="text-black">Działam z zasadami, które sprawiają, że ludzie zostają na lata.</strong>
              </p>

              <p style={{ fontFamily: 'Inter' }} className="text-lg text-foreground/70 leading-relaxed">
                <strong className="text-black">I właśnie dlatego – wygrywają.</strong>
              </p>
            </div>

            <Link
              to="/contact"
              className="cta-button self-start group mt-8"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Przekonaj się, że da się inaczej</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Column - Empty container for desktop layout */}
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
            className="relative aspect-[4/5] lg:aspect-square hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}