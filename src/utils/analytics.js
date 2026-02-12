export const gtag = window.gtag;

const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

if (gtag && googleAnalyticsId) {
  gtag('config', googleAnalyticsId);

  window[`ga-disable-${googleAnalyticsId}`] = import.meta.env.DEV;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
  document.head.appendChild(script);
}
