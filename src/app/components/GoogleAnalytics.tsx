import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    if (!window.gtag) {
      // Load gtag script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: any[]) {
        window.dataLayer!.push(args);
      };

      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false
      });
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
  }, [location]);

  return null;
}

// Helper function to track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Predefined event trackers
export const trackCTAClick = (buttonName: string, page: string) => {
  trackEvent('cta_click', {
    button: buttonName,
    page: page
  });
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submission', {
    form_name: formName
  });
};

export const trackDemoRequest = () => {
  trackEvent('demo_request', {
    conversion: true
  });
};

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll', {
    depth: depth
  });
};
