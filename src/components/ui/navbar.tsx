import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, User, Briefcase, FileText, Star, Users, Award } from 'lucide-react';
import { MobileMenu } from './mobile-menu';
import { cn } from "@/lib/utils";
import { Link, useNavigate } from 'react-router-dom';
import { logEvent } from '@/lib/analytics';

const navItems = [
  { name: 'Co mnie wyróżnia', url: '/#what-you-get', icon: Award },
  { name: 'Opinie', url: '/#testimonials', icon: Star },
  { name: 'Usługi', url: '/#services', icon: Briefcase },
  { name: 'Proces', url: '/#process', icon: FileText },
  { name: 'O mnie', url: '/#about', icon: User },
  { name: 'Kontakt', url: '/contact#form-top', icon: Users }
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string, itemName: string) => {
    e.preventDefault();
    
    logEvent('Navigation', 'Click', itemName);
    
    if (url.startsWith('/#')) {
      const element = document.querySelector(url.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(url);
    }
  };

  return (
    <div className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-2 border-[#2C65C8]/20",
      isScrolled ? "bg-white shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            onClick={() => logEvent('Navigation', 'Click', 'Logo')}
            className="flex items-center"
          >
            <span style={{ fontFamily: 'DM Serif Display' }} className="font-bold text-xl text-[#2C65C8]">
              ANNDERSON FINANSE
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={(e) => handleNavClick(e, item.url, item.name)}
                  style={{ fontFamily: 'Inter', fontWeight: 600 }}
                  className={item.name === 'Kontakt' ? 
                    "group inline-flex items-center gap-2 px-6 py-2 rounded-lg text-base transition-all duration-300 bg-gradient-to-r from-[#2C65C8] to-[#8596EA] text-white hover:shadow-lg hover:shadow-[#2C65C8]/25 hover:scale-[0.98]" :
                    "nav-item"
                  }
                >
                  {item.name}
                  {item.name === 'Kontakt' && (
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </a>
              ))}
            </div>

            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}