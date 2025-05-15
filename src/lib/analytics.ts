import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-5LQKN6TXK7', {
    gaOptions: {
      // Enable session tracking
      send_page_view: true,
      // Track user engagement
      user_properties: {
        first_visit_date: new Date().toISOString(),
        user_type: isNewUser() ? 'new' : 'returning'
      }
    }
  });
};

const isNewUser = () => {
  const visitedBefore = localStorage.getItem('visited');
  if (!visitedBefore) {
    localStorage.setItem('visited', 'true');
    localStorage.setItem('first_visit_date', new Date().toISOString());
    return true;
  }
  return false;
};

export const logPageView = () => {
  ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname,
    // Add user type dimension
    user_properties: {
      user_type: isNewUser() ? 'new' : 'returning'
    }
  });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
    // Add user type to events
    user_properties: {
      user_type: isNewUser() ? 'new' : 'returning'
    }
  });
};