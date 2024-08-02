"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslations } from "next-intl";

export default function MapaPage() {
  const t = useTranslations("MapPage");
  const Map = useMemo(
    () =>
      dynamic(() => import("../components/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <main role="main" className="main">
      <h1 className={`text-center subtitle my-5`}>{t('title')}</h1>
      <section className={"container-md"}>
        <p>
        {t('description')}
        </p>
        <h2 className="titulo">{t('usage_title')}</h2>
        <p>
        {t('usage_description_one')}
        </p>
        <p>
        {t('usage_description_two')}
        </p>
      </section>
      <section>
        <Map />
      </section>
    </main>
  );
}
