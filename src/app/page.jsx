"use client"
import About from "@/components/About";
import Banner from "@/components/Banner";
// import Blog from "@/components/Blog";
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
import { I18nextProvider } from 'react-i18next';
import i18n from "../i18n/index"
import Video from "../../public/img/Hero/bsas.mp4"
import { useTranslation } from 'react-i18next';

export default function Home() {

  // Hook de Traducción
  const { t } = useTranslation();

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Header />
        <main className="main">
          <Hero video={Video} title={t("heroTitle")} subtitle={t("heroSubtitle")} />
          <Banner />
          <About />
          <Culture />
          <TeamComponent />
          <Projects />
          <Services />
          <Partners />
          <Testimonials />
          {/* <Blog /> */}
          <PreFooter />
        </main>
        <Footer />
      </I18nextProvider>
    </>
  )
}
