import { useTranslations } from "next-intl";
import LocaleSwitcher from "../components/LocaleSwitcher/LocaleSwitcher";

export default function PersonalizacionPage() {
  const t = useTranslations("ConfigurationPage");

  return (
    <div className="container my-5 py-5" role="main">
      <h1 className="mb-5">{t('title')}</h1>
      <div className="row">
        <div className="col-md-6">
          {/*

            COMENTO ESTO POR SI EN ALGUN MOMENTO SE NOS PIDE AGREGARLO :)

            <div className="mb-5">
              <h2>Tema</h2>
              <p>Tema de color de la aplicación</p>
              <div className="card bg-lightyellow mb-5" style={{width: 18 + 'rem'}}>
                <select className="form-select bg-transparent" aria-label="Tema de color de la aplicación">
                  <option value="0" selected>Claro</option>
                  <option value="1">Oscuro</option>
                </select>
              </div>
            </div>
            <div className="mb-5">
              <h2>Tamaño de texto</h2>
              <div className="card bg-lightyellow mb-5" style={{width: 18 + 'rem'}}>
                <select className="form-select bg-transparent" aria-label="Tamaño del texto en porcentaje">
                  <option value="0" selected>100%</option>
                  <option value="1">125%</option>
                  <option value="2">150%</option>
                  <option value="3">175%</option>
                  <option value="4">200%</option>
                </select>
              </div>
            </div>
            */}
          <LocaleSwitcher />
        </div>
        <div className="col-md-6">
          <div className="mb-5">
            <h2>{t('shortcut_title')}</h2>
            <p>{t('shortcut_subtitle')}</p>
            <div className="row mb-3">
              <div className="col-8">
                <h3>{t('search')}</h3>
              </div>
              <div className="col-2">
                <div
                  className="card bg-lightyellow d-flex justify-content-center align-items-center"
                  style={{ width: 3 + "rem" }}
                >
                  <p>Ctrl</p>
                </div>
              </div>
              <div className="col-2">
                <div
                  className="card bg-lightyellow d-flex justify-content-center align-items-center"
                  style={{ width: 3 + "rem" }}
                >
                  <p>F</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-8">
                <h3>{t('text_size_increase')}</h3>
              </div>
              <div className="col-2">
                <div
                  className="card bg-lightyellow d-flex justify-content-center align-items-center"
                  style={{ width: 3 + "rem" }}
                >
                  <p>Ctrl</p>
                </div>
              </div>
              <div className="col-2">
                <div
                  className="card bg-lightyellow d-flex justify-content-center align-items-center"
                  style={{ width: 3 + "rem" }}
                >
                  <p>+</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-8">
                <h3>{t('text_size_reduce')}</h3>
              </div>
              <div className="col-2">
                <div
                  className="card bg-lightyellow d-flex justify-content-center align-items-center"
                  style={{ width: 3 + "rem" }}
                >
                  <p>Ctrl</p>
                </div>
              </div>
              <div className="col-2">
                <div
                  className="card bg-lightyellow d-flex justify-content-center align-items-center"
                  style={{ width: 3 + "rem" }}
                >
                  <p>-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
