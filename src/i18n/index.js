// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import En from "./en.json";
import Es from "./es.json";
import Pt from "./pt.json";
import Ar from "./ar.json";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem('language') || 'en', // Use the language from localStorage, or default to 'en'
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: En,
    },
    es: {
      translation: Es,
    },
    pt: {
      translation: Pt,
    },
    ar: {
      translation: Ar,
    },
  }
});

export default i18n;
