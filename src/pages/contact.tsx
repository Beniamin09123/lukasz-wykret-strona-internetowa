import { Contact } from '@/components/sections/contact';
import { NavBar } from '@/components/ui/navbar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ContactPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-form') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Contact />
    </div>
  );
}