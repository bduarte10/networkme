const languageCacheKey = "i18n_language";
const LanguageDetectorCache = {
  type: 'languageDetector',
  init: (_: any, __: any, i18nextOptions: any) => {
    const lng = window.localStorage.getItem(languageCacheKey);
    if (lng) {
      i18nextOptions.lng = lng;
    }
  },
  detect: () => { },
  cacheUserLanguage: (lng: string) => {
    window.localStorage.setItem(languageCacheKey, lng);
  }
};

export default LanguageDetectorCache;