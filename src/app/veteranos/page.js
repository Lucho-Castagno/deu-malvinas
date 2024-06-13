import styles from "./ver.modules.css";

export default function VeteranosPage() {
    return (
      <main className="main">
      <section>
        <div className="titulo">
          <h1>Nómina de veteranos de guerra de Malvinas</h1>
          <div className="search-bar">
            <input type="text" placeholder="Buscar..." />
            <button>Buscar</button>
          </div>
        </div>
      </section>
      <section className="tabla">
      <table className="data-table">
        <thead>
          <tr>
            <th>Nombre y Apellido</th>
            <th>Documento</th>
            <th>Arma</th>
            <th>Grado</th>
            <th>Vive</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre 1</td>
            <td>Documeno 1</td>
            <td>Arma 1</td>
            <td>Grado 1</td>
            <td>Vive 1</td>
            <td>
              <button>Historia</button>
            </td>
          </tr>
          <tr>
            <td>Nombre 1</td>
            <td>Documeno 1</td>
            <td>Arma 1</td>
            <td>Grado 1</td>
            <td>Vive 1</td>
            <td>
              <button>Historia</button>
            </td>
          </tr>
          <tr>
            <td>Nombre 1</td>
            <td>Documeno 1</td>
            <td>Arma 1</td>
            <td>Grado 1</td>
            <td>Vive 1</td>
            <td>
              <button>Historia</button>
            </td>
          </tr>
        </tbody>
      </table>
      </section>
    </main>
  );
  }