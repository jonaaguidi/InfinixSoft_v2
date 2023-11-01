"use client"
import Header_v2 from "./components/Header_v2"
import Projects_Cards from "./components/Projects_Cards"
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import En from "../../i18n/en.json";
import Es from "../../i18n/es.json";
import Pt from "../../i18n/pt.json";
import Ar from "../../i18n/ar.json";

i18next.use(initReactI18next).init({
  lng: 'en',
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

const Projects = () => {
  return (
    <>
      <Header_v2 />
        <Projects_Cards />
    </>
  )
}

export default Projects