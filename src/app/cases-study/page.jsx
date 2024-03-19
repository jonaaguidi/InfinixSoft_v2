"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import Video from "../../../public/img/Hero/rio.mp4";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/i18n";

const CasesStudy = () => {
  // Hook de Traducción
  const { t } = useTranslation();

  return (
    <>
        <I18nextProvider i18n={i18n}>
          <Header />
          <main className="main">
            <Hero
              video={Video}
              title={t("heroTitle_Cases")}
              subtitle={t("heroSubtitle_Cases")}
              buttonText={t("buttonText_Cases")}
            />
          </main>
        </I18nextProvider>
    </>
  );
};

export default CasesStudy;
