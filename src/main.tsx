import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.tsx';
import ContactPage from './pages/contact.tsx';
import TermsPage from './pages/terms.tsx';
import PrivacyPage from './pages/privacy.tsx';
import { initGA, logPageView } from './lib/analytics';
import './index.css';

function AppWithAnalytics() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AppWithAnalytics />
    </Router>
  </StrictMode>
);