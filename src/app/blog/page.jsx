"use client";
import Header from "@/components/Header";
import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/i18n";
import Video from "../../../public/img/Hero/dubai.mp4";
import Hero from "@/components/Hero";

const BlogLayout = () => {
  const { t } = useTranslation();

  return (
    <>
        <I18nextProvider i18n={i18n}>
          <Header />
          <main className="main">
            <Hero
              video={Video}
              title={t("heroTitle_Blog")}
              subtitle={t("heroSubtitle_Blog")}
              buttonText={t("buttonText_Cases")}
            />
          </main>
        </I18nextProvider>
    </>
  );
};

export default BlogLayout;
