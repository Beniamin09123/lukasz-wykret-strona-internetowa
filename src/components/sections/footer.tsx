import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CalendarCheck, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Footer() {
  const location = useLocation();
  const isFormPage = location.pathname === '/contact';

  const handlePhoneClick = () => {
    window.location.href = 'tel:+48514110541';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:kredyty@annderson.pl';
  };

  const handleAddressClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=ul.+Zwierzyniecka+22%2F2+31-105+Kraków', '_blank');
  };

  return (
    <footer className="bg-white border-t-2 border-[#2C65C8]/20">
      <div className="max-w-[1200px] mx-auto px-8 py-16 lg:px-[120px]">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.1,
                ease: [0.23, 1, 0.32, 1]
              }
            }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat text-xl font-semibold mb-4 gradient-text">
              Szybkie Linki
            </h3>
            <nav className="space-y-3">
              <a href="#what-you-get" className="block font-open-sans text-foreground/70 hover:text-[#2C65C8] transition-colors">
                Co mnie wyróżnia
              </a>
              <a href="#testimonials" className="block font-open-sans text-foreground/70 hover:text-[#2C65C8] transition-colors">
                Opinie
              </a>
              <a href="#services" className="block font-open-sans text-foreground/70 hover:text-[#2C65C8] transition-colors">
                Usługi
              </a>
              <a href="#process" className="block font-open-sans text-foreground/70 hover:text-[#2C65C8] transition-colors">
                Proces
              </a>
              <a href="#about" className="block font-open-sans text-foreground/70 hover:text-[#2C65C8] transition-colors">
                O mnie
              </a>
              <a href="#faqs" className="block font-open-sans text-foreground/70 hover:text-[#2C65C8] transition-colors">
                FAQ
              </a>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1]
              }
            }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat text-xl font-semibold mb-4 gradient-text">
              Kontakt
            </h3>
            <div className="space-y-3">
              <button 
                onClick={handlePhoneClick}
                className="flex items-center gap-3 font-open-sans text-foreground/70 hover:text-[#2C65C8] transition-colors w-full text-left"
              >
                <Phone className="w-5 h-5 text-[#2C65C8]" />
                <span>+48 514 110 541</span>
              </button>
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-3 font-open-sans text-foreground/70 hover:text-[#2C65C8] transition-colors w-full text-left"
              >
                <Mail className="w-5 h-5 text-[#2C65C8]" />
                <span>kredyty@annderson.pl</span>
              </button>
              <button 
                onClick={handleAddressClick}
                className="flex items-center gap-3 font-open-sans text-foreground/70 hover:text-[#2C65C8] transition-colors w-full text-left"
              >
                <MapPin className="w-5 h-5 text-[#2C65C8]" />
                <span>ul. Zwierzyniecka 22/2, 31-105 Kraków</span>
              </button>
              {!isFormPage && (
                <Link 
                  to="/contact"
                  className="cta-button group mt-4 text-base md:inline-flex hidden"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Umów Konsultację</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.23, 1, 0.32, 1]
            }
          }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t-2 border-[#2C65C8]/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-open-sans text-sm text-foreground/60">
            © 2024 Annderson Finanse. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-open-sans text-sm text-foreground/60 hover:text-[#2C65C8] transition-colors">
              Polityka Prywatności
            </Link>
            <Link to="/terms" className="font-open-sans text-sm text-foreground/60 hover:text-[#2C65C8] transition-colors">
              Regulamin
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}