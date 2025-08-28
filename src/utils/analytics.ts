import ReactGA from 'react-ga4';

// Google Analytics configuration
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

export const initGA = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      testMode: import.meta.env.DEV, // Enable test mode in development
    });
  }
};

export const trackPageView = (path: string, title?: string) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title || document.title,
    });
  }
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.event({
      action,
      category,
      label,
      value,
    });
  }
};

export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.gtag('event', eventName, parameters);
  }
};

// Helper to check if GA is enabled
export const isGAEnabled = () => Boolean(GA_MEASUREMENT_ID);
