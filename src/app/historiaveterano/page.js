"use client";

import styles from "./historiavet.css";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

export default function HistoriaVeterano() {
  const [veteran, setVeteran] = useState(null);
  const t = useTranslations("VeteranHistoryPage");

  useEffect(() => {
    const storedVeterano = localStorage.getItem("veteran");
    if (storedVeterano) {
      setVeteran(JSON.parse(storedVeterano));
    }
  }, []);

  const Map = useMemo(
    () =>
      dynamic(() => import("./Map/Map"), {
        loading: () => <p>{t("map_loading")}</p>,
        ssr: false,
      }),
    [t]
  );

  if (!veteran) {
    return (
      <p role="status" aria-live="polite">
        {t("loading")}
      </p>
    );
  }

  const {
    Escalafon,
    Grado,
    Grado_PM,
    Arma,
    Nombre,
    DNI,
    Unidad,
    N_Madre,
    N_Padre,
    L_Deceso,
    L_Entierro,
    Tumba,
    L_Nac,
    F_Nac,
    Rol_Comb,
    F_Ingreso,
    F_Ascenso,
    F_Deceso,
    PDF,
    Foto,
  } = veteran.properties;

  const { coordinates } = veteran.geometry;
  const [Longitud, Latitud] = coordinates;

  const baseUrl = "https://www.bienestar.mil.ar/malvinas";
  const defaultPhotoUrl = "/images/soldado2.png"; // Ruta de la imagen por defecto

  function processUrl(url, type) {
    if (url.startsWith(".")) {
      url = url.substring(1);
    }

    if (type === "image") {
      const validExtensions = [".png", ".jpg", ".jpeg", ".gif"];
      const extIndex = url.lastIndexOf(".");
      if (extIndex !== -1) {
        const ext = url.substring(extIndex);
        if (!validExtensions.includes(ext)) {
          url = url.substring(0, extIndex) + ".png";
        }
      } else {
        url += ".png";
      }
    }

    return url;
  }

  const photoUrl = Foto
    ? `${baseUrl}${processUrl(Foto, "image")}`
    : defaultPhotoUrl;
  const pdfUrl = PDF ? `${baseUrl}${processUrl(PDF, "pdf")}` : null;

  const renderField = (label, value) => {
    if (!value) return null;
    return (
      <p>
        <strong>{label}:</strong> {value}
      </p>
    );
  };

  return (
    <main role="main" className="main container my-5 py-5">
      <section>
        <div className="titulo mb-5">
          <h1 className="mb-4">{t("title")}</h1>
        </div>
      </section>
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card h-100 bg-lightyellow p-3">
            <div className="d-flex align-items-center mb-3">
              <div
                style={{ width: "128px", height: "128px", marginRight: "15px" }}
              >
                <Image
                  src={photoUrl}
                  className="rounded-circle"
                  alt={Nombre}
                  width={128}
                  height={128}
                  role="presentation"
                />
              </div>
              <div>
                <h2 className="card-title mb-0 fs-5">{Nombre}</h2>
                {renderField(t("rank"), Escalafon)}
                {renderField(t("document"), DNI)}
                {pdfUrl && (
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    <button
                      className="btn btn-success"
                      aria-label={t("see_more_btn_aria", { name: Nombre })}
                    >
                      {t("see_more_btn")}
                    </button>
                  </a>
                )}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                {renderField(t("grade"), Grado)}
                {renderField(t("post_mortem_grade"), Grado_PM)}
                {renderField(t("weapon"), Arma)}
                {renderField(t("unit"), Unidad)}
                {renderField(t("date_of_death"), F_Deceso)}
                {renderField(t("place_of_death"), L_Deceso)}
                {renderField(t("mother"), N_Madre)}
                {renderField(t("father"), N_Padre)}
                {renderField(t("place_of_burial"), L_Entierro)}
                {renderField(t("grave"), Tumba)}
                {renderField(t("date_of_birth"), F_Nac)}
                {renderField(t("place_of_birth"), L_Nac)}
                {renderField(t("combat_role"), Rol_Comb)}
                {renderField(t("date_of_enlistment"), F_Ingreso)}
                {renderField(t("date_of_promotion"), F_Ascenso)}
              </div>
              <div className="col-md-6">
                <Map Latitud={Latitud} Longitud={Longitud} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
