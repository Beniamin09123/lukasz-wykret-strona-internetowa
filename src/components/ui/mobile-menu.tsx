import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { User, Briefcase, FileText, Star, Users, ArrowRight, CalendarCheck, Award } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Co mnie wyróżnia', url: '/#what-you-get', icon: Award },
  { name: 'Opinie', url: '/#testimonials', icon: Star },
  { name: 'Usługi', url: '/#services', icon: Briefcase },
  { name: 'Proces', url: '/#process', icon: FileText },
  { name: 'O mnie', url: '/#about', icon: User },
  { name: 'Kontakt', url: '/contact', icon: Users }
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith('/#')) {
      e.preventDefault();
      const element = document.querySelector(url.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="md:hidden">
      <Button
        ref={buttonRef}
        className="group relative z-50"
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        <svg
          className="pointer-events-none"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M4 12L20 12"
            className={cn(
              "origin-center transition-all duration-300",
              isOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
            )}
          />
          <path
            d="M4 12H20"
            className={cn(
              "origin-center transition-all duration-300",
              isOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <path
            d="M4 12H20"
            className={cn(
              "origin-center transition-all duration-300",
              isOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
            )}
          />
        </svg>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              aria-hidden="true"
            />
            
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="fixed top-[4.5rem] left-4 right-4 bg-background border border-border rounded-xl shadow-lg z-40 overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.3,
                        }
                      }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      {item.name === 'Kontakt' ? (
                        <Link
                          to={item.url}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted/10 transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      ) : (
                        <a
                          href={item.url}
                          onClick={(e) => scrollToSection(e, item.url)}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted/10 transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </a>
                      )}
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      delay: menuItems.length * 0.1,
                      duration: 0.3,
                    }
                  }}
                  exit={{ opacity: 0, x: -20 }}
                  className="mt-2 pt-4 border-t border-border"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="cta-button group w-full"
                  >
                    <CalendarCheck className="w-5 h-5" />
                    <span>Umów Bezpłatną Konsultację</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}