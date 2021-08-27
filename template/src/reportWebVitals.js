const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Chromium
      getFID(onPerfEntry); // Chromium, Firefox, Safari,
      getFCP(onPerfEntry); // Chromium, Firefox, Safari,
      getLCP(onPerfEntry); // Chromium
      getTTFB(onPerfEntry); // Chromium, Firefox, Safari,
    });
  }
};

export default reportWebVitals;
