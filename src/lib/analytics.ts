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

let pageLoadTime = Date.now();
let sessionStartTime = Date.now();

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

  // Reset session start time
  sessionStartTime = Date.now();
  
  // Track session duration when user leaves the page
  window.addEventListener('beforeunload', () => {
    const sessionDuration = Math.round((Date.now() - sessionStartTime) / 1000);
    ReactGA.event({
      category: 'Session',
      action: 'Duration',
      value: sessionDuration,
      user_properties: {
        session_duration_seconds: sessionDuration,
        user_type: isNewUser() ? 'new' : 'returning',
        device_type: getDeviceType()
      }
    });
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
  // Calculate time spent on previous page
  const timeSpent = Math.round((Date.now() - pageLoadTime) / 1000);
  if (timeSpent > 0) {
    ReactGA.event({
      category: 'Page',
      action: 'Time Spent',
      value: timeSpent,
      user_properties: {
        page_duration_seconds: timeSpent,
        user_type: isNewUser() ? 'new' : 'returning',
        device_type: getDeviceType(),
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`
      }
    });
  }

  // Reset page load time for new page
  pageLoadTime = Date.now();

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