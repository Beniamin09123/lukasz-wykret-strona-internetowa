import ReactGA from 'react-ga4';

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

export const initGA = () => {
  ReactGA.initialize('G-5LQKN6TXK7', {
    gaOptions: {
      send_page_view: true,
      user_properties: {
        first_visit_date: new Date().toISOString(),
        user_type: isNewUser() ? 'new' : 'returning',
        device_type: getDeviceType(),
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`
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
    user_properties: {
      user_type: isNewUser() ? 'new' : 'returning',
      device_type: getDeviceType(),
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`
    }
  });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
    user_properties: {
      user_type: isNewUser() ? 'new' : 'returning',
      device_type: getDeviceType(),
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`
    }
  });
};