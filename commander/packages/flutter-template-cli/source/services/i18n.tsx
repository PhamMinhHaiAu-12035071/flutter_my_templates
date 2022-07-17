import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from '../i18n/en';
import { vi } from '../i18n/vi';
import { jp } from '../i18n/jp';
// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  en: en,
  vi: vi,
  jp: jp,
};
i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  // Allowed languages
  supportedLngs: ['en', 'vi', 'jp'],
  interpolation: {
    escapeValue: false,
  },
});

export { i18next };
