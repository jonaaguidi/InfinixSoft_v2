// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import En from "./en.json";
import Es from "./es.json";
import Pt from "./pt.json";
import Ar from "./ar.json";

// Función para obtener el idioma del navegador o usar uno predeterminado
const getLanguage = () => {
  if (typeof window !== 'undefined') {
    // Si estamos en el lado del cliente, podemos acceder a localStorage
    return localStorage.getItem('language') || 'en';
  }
  // Si estamos en el lado del servidor
  return 'en';
};

i18n.use(initReactI18next).init({
  lng: getLanguage(),
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
