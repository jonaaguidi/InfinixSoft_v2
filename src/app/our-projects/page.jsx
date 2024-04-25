"use client"
import Header from '@/components/Header'
import React from 'react'
import Projects_Cards from './components/ProjectsCards'
import Footer from '@/components/Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from "@/i18n";


const ProjectsPage = () => {
  return (
    <>
    <I18nextProvider i18n={i18n}>
    <Header />
    <Projects_Cards />
    <Footer />
    </I18nextProvider>
    </>
  )
}

export default ProjectsPage