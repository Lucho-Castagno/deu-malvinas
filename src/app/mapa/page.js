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
        loading: () => (
          <p role="status" aria-live="polite">
            {t("map_loading")}
          </p>
        ),
        onError: () => <p role="alert">{t("map_error")}</p>,
        ssr: false,
      }),
    [t]
  );

  return (
    <main role="main" className="main">
      <section className={"container-md"} aria-labelledby="map-section-title">
        <h1 id="map-section-title" className={`text-center subtitle my-5`}>{t("title")}</h1>
        <p>{t("description")}</p>
        <h2 className="titulo">{t("usage_title")}</h2>
        <p>{t("usage_description_one")}</p>
        <p>{t("usage_description_two")}</p>
      </section>
      <section aria-labelledby="map-section-title">
        <Map />
      </section>
    </main>
  );
}
