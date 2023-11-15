"use client"
import Projects_Cards from "./components/Projects_Cards"
import { I18nextProvider } from 'react-i18next';
import i18n from "../../i18n/index"

const Projects = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <main>
        <Projects_Cards />
      </main>
    </I18nextProvider>
  )
}

export default Projects