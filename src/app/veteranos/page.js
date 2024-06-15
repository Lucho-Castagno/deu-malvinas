import styles from "./ver.modules.css";

export default function VeteranosPage() {
    return (
      <main role="main" className="main">
      <section>
        <div className="titulo">
          <h1>Nómina de veteranos de guerra de Malvinas</h1>

          <div className="search-bar">
            <label htmlFor="search-input" className="visually-hidden">Buscar veterano</label>
            <input id="search-input" type="text" placeholder="Buscar..." aria-label="Buscar veterano" />
            <button aria-label="Buscar">Buscar</button>
          </div>

        </div>
      </section>
      <section className=" table-responsive-sm tabla">
      <table className="data-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th className="d-none d-sm-table-cell">Documento</th>
            <th>Arma</th>
            <th className="d-none d-sm-table-cell">Grado</th>
            <th>Vive</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre 1</td>
            <td className="d-none d-sm-table-cell">Documeno 1</td>
            <td>Arma 1</td>
            <td className="d-none d-sm-table-cell">Grado 1</td>
            <td>Vive 1</td>
            <td>
            <button aria-label="Ver historia de Nombre 1">Historia</button>
            </td>
          </tr>
          <tr>
            <td>Nombre 1</td>
            <td className="d-none d-sm-table-cell">Documeno 1</td>
            <td>Arma 1</td>
            <td className="d-none d-sm-table-cell">Grado 1</td>
            <td>Vive 1</td>
            <td>
            <button aria-label="Ver historia de Nombre 1">Historia</button>
            </td>
          </tr>
          <tr>
            <td>Nombre 1</td>
            <td className="d-none d-sm-table-cell">Documeno 1</td>
            <td>Arma 1</td>
            <td className="d-none d-sm-table-cell">Grado 1</td>
            <td>Vive 1</td>
            <td>
            <button aria-label="Ver historia de Nombre 1">Historia</button>
            </td>
          </tr>
        </tbody>
      </table>
      </section>
    </main>
  );
  }