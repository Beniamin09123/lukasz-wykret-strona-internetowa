import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner immediately
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/5 backdrop-blur-md border-t border-[#2C65C8]/10"
          role="alertdialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-description"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-2 border-[#2C65C8]/20 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-[#2C65C8] shrink-0 mt-1" />
                <div>
                  <h2 
                    id="cookie-title"
                    className="text-base font-semibold mb-2 text-foreground"
                  >
                    Dbamy o Twoją prywatność
                  </h2>
                  <p 
                    id="cookie-description"
                    className="text-foreground/70 text-sm md:text-base"
                  >
                    Ta strona używa plików cookies do analizy ruchu i personalizacji treści. 
                    Korzystając ze strony, zgadzasz się na ich wykorzystanie zgodnie z naszą 
                    <a 
                      href="/privacy" 
                      className="text-[#2C65C8] hover:underline ml-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      polityką prywatności
                    </a>.
                  </p>
                </div>
              </div>
              <button
                onClick={acceptCookies}
                className="cta-button text-sm py-2 px-6 whitespace-nowrap min-w-[120px] focus:ring-2 focus:ring-offset-2 focus:ring-[#2C65C8] focus:outline-none"
                aria-label="Zaakceptuj pliki cookies"
              >
                Akceptuję
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}