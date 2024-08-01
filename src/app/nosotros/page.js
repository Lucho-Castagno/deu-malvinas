import "../globals.css";

export default function AboutPage() {
    return (
      <div className="container my-5 py-5" role="main">
        <h1 className={`text-center subtitle mb-5`}>Sobre Nosotros</h1>
        <section aria-labelledby="intro">
            <p id="intro">Somos un grupo de estudiantes de la Facultad de Informática de la Universidad Nacional de La Plata que estamos
                cursando una materia llamada Diseño Centrado en el Usuario.</p>
            <p>Nuestro objetivo es crear una página accesible para conocer las historias de los
                veteranos que participaron en la guerra de Malvinas.</p>
        </section>
        <section aria-labelledby="team">
          <h2 id="team"className="titulo">Nuestro equipo está formado por:</h2>
            <ul>
              <li>Estefany Santiago Rabines</li>
              <li>Luciano Castagno</li>
              <li>Ese Kai Oxalde</li>
            </ul>
          </section>
          <section aria-labelledby="contact">
          <h2 id="contact"className="titulo">Contacto</h2>
            <p>Si tenés dudas o querés conocer más sobre el proyecto, podes contactarnos 
            a <a href="mailto:historias.de.malvinas.argentinas@gmail.com">historias.de.malvinas.argentinas@gmail.com</a></p>
          </section>
        </div>
    );
  }