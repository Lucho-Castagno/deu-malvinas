"use client";

import styles from "./Veteranos.module.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useGeoJsonData } from "../hook/useGeoJsonData";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

function processUrl(url) {
  if (url.startsWith(".")) {
    url = url.substring(1);
  }

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

  return url;
}

export default function VeteranosPage() {
  const veterans = useGeoJsonData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVeterans, setFilteredVeterans] = useState([]);
  const baseUrl = "https://www.bienestar.mil.ar/malvinas";
  const defaultPhotoUrl = "soldado2.png";
  const t = useTranslations("VeteransPage");

  const router = useRouter();

  useEffect(() => {
    setFilteredVeterans(veterans);
  }, [veterans]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredVeterans(veterans);
    } else {
      const results = veterans.filter((veteran) => {
        const props = veteran.properties;
        return (
          props && props.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredVeterans(results);
    }
  }, [searchTerm, veterans]);

  const handleMoreInfo = (veteran) => {
    localStorage.setItem("veteran", JSON.stringify(veteran));
    router.push("/historiaveterano");
  };

  return (
    <main
      className="container my-5 p-5"
      role="main"
      aria-labelledby="page-title"
    >
      <h1 id="page-title" className={`text-center ${styles.titulo} mb-5`}>
        {t("title")}
      </h1>
      <input
        type="text"
        placeholder={t("search_placeholder")}
        aria-label={t("search_aria")}
        className={`form-control mb-4 ${styles.searchInput}`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row">
        {filteredVeterans.length > 0 ? (
          filteredVeterans.map((veteran, index) => {
            const props = veteran.properties;
            const photoUrl =
              props && props.Foto
                ? `${baseUrl}${processUrl(props.Foto)}`
                : defaultPhotoUrl;

            return (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card h-100 bg-lightyellow p-3" role="article">
                  {props && (
                    <>
                      <div className="w-100 d-flex justify-content-center align-items-center">
                        <div style={{ width: "128px", height: "128px" }}>
                          <Image
                            src={photoUrl}
                            className="rounded-circle"
                            alt={`${props.Nombre}, ${props.Escalafon}`}
                            width={128}
                            height={128}
                          />
                        </div>
                      </div>
                      <div className="card-body">
                        <h2 className="card-title fs-5">{props.Nombre}</h2>
                        <p className="card-text">{props.Escalafon}</p>
                        <button
                          className="btn btn-success"
                          aria-label={t("more_info_btn_aria", {
                            name: props.Nombre,
                          })}
                          onClick={() => handleMoreInfo(veteran)}
                        >
                          {t("more_info_btn")}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p role="alert" className="text-center">
            {t("no_results")}
          </p>
        )}
      </div>
    </main>
  );
}
