import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Send, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Footer } from './footer';

const services = [
  { value: 'hipoteczny', label: 'Kredyt Hipoteczny' },
  { value: 'refinansowanie', label: 'Refinansowanie' },
  { value: 'firmowy', label: 'Kredyt Firmowy' },
  { value: 'gotowkowy', label: 'Kredyt Gotówkowy' }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    rodo: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (formRef.current) {
        const formBottom = formRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        setShowFooter(formBottom < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash === '#form-top') {
      const scrollToForm = () => {
        const offset = 80; // Height of the fixed navbar
        const elementPosition = formRef.current?.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      };

      // Small delay to ensure DOM is ready
      setTimeout(scrollToForm, 100);
    }
  }, [location]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format adresu email';
    }
    
    if (!formData.service) {
      newErrors.service = 'Wybór usługi jest wymagany';
    }

    if (!formData.rodo) {
      newErrors.rodo = 'Wymagana jest zgoda na przetwarzanie danych';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section 
      ref={formRef}
      id="form-top" 
      className="py-24 px-8 lg:px-[120px] bg-white min-h-screen"
    >
      <div className="max-w-[800px] mx-auto">
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
          <div className="inline-block bg-[#2C65C8]/5 backdrop-blur-sm border border-[#2C65C8]/20 rounded-lg px-6 py-3 mb-8">
            <p className="font-montserrat font-bold text-xl gradient-text">
              Skontaktuj się ze mną
            </p>
          </div>
          <h2 style={{ fontFamily: 'DM Serif Display', letterSpacing: '0.02em' }} className="text-3xl md:text-4xl lg:text-5xl mb-6">
            <span className="text-black">Rozpocznij swoją drogę do </span>
            <span className="text-[#2C65C8]">własnego mieszkania</span>
          </h2>
          <p className="font-open-sans text-foreground/70 text-lg max-w-2xl mx-auto">
            Wypełnij formularz, a skontaktuję się z Tobą w ciągu 24 godzin
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 rounded-2xl border-2 border-[#2C65C8] bg-[#F1F5FF]"
          >
            <CheckCircle className="w-16 h-16 text-[#2C65C8] mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Dziękuję za wiadomość!
            </h3>
            <p className="text-foreground/70 mb-8">
              Odpowiem na Twoją wiadomość najszybciej jak to możliwe, zazwyczaj w ciągu 24 godzin.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="cta-button"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Wyślij kolejną wiadomość</span>
            </button>
          </motion.div>
        ) : (
          <motion.form
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
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-medium mb-2 text-foreground/80">
                Imię i nazwisko *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.name ? 'border-red-500' : 'border-[#2C65C8]/20'
                } focus:border-[#2C65C8] focus:outline-none transition-colors`}
                placeholder="Wprowadź imię i nazwisko"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-2 text-foreground/80">
                Adres email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.email ? 'border-red-500' : 'border-[#2C65C8]/20'
                } focus:border-[#2C65C8] focus:outline-none transition-colors`}
                placeholder="Wprowadź adres email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="block font-medium mb-2 text-foreground/80">
                Wybrana usługa *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.service ? 'border-red-500' : 'border-[#2C65C8]/20'
                } focus:border-[#2C65C8] focus:outline-none transition-colors`}
              >
                <option value="">Wybierz usługę</option>
                {services.map(service => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-500">{errors.service}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-2 text-foreground/80">
                Dodatkowe informacje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#2C65C8]/20 focus:border-[#2C65C8] focus:outline-none transition-colors"
                placeholder="Wprowadź dodatkowe informacje (opcjonalnie)"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="rodo"
                name="rodo"
                checked={formData.rodo}
                onChange={handleChange}
                className="mt-1"
              />
              <label htmlFor="rodo" className="text-sm text-foreground/70">
                Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. *
              </label>
            </div>
            {errors.rodo && (
              <p className="text-sm text-red-500">{errors.rodo}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`cta-button w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Wysyłanie...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Wyślij wiadomość</span>
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
      
      {showFooter && <Footer />}
    </section>
  );
}