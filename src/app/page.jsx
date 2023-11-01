"use client"
import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Culture from "@/components/Culture";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import PreFooter from "@/components/PreFooter";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TeamComponent from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import En from "../i18n/en.json";
import Es from "../i18n/es.json";
import Pt from "../i18n/pt.json";
import Ar from "../i18n/ar.json";

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

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Banner />
        <About />
        <Culture />
        <TeamComponent />
        <Projects />
        <Services />
        <Partners />
        <Testimonials /> 
        <Blog />
        <PreFooter />
      </main>
      <Footer />
    </>
  )
}
