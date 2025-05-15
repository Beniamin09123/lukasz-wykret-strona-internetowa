import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-5LQKN6TXK7');
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};