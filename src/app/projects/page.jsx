"use client"
import Projects_Cards from "./components/Projects_Cards"
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import En from "../../i18n/en.json";
import Es from "../../i18n/es.json";
import Pt from "../../i18n/pt.json";
import Ar from "../../i18n/ar.json";
import Header_v2 from "./components/Header_v2";
import Footer from "@/components/Footer";

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
    <main>
      <Projects_Cards />
    </main>
  )
}

export default Projects