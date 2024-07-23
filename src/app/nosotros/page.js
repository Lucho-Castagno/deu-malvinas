export default function AboutPage() {
    return (
      <div className="container my-5 py-5" role="main">
        <h1 className="mb-5">Sobre Nosotros</h1>
        <div className="row"> 
          <div className="col-md-12">
            <p>Somos un grupo de estudiantes de la Facultad de Informática de la Universidad Nacional de La Plata que estamos
                cursando una materia llamada Diseño Centrado en el Usuario.</p>
            <p>Nuestro objetivo es crear una página accesible para conocer las historias de los
                veteranos que participaron en la guerra de Malvinas.</p>
            <p>Nuestro equipo esta formado por:</p>
            <ul>
              <li>Estefany Santiago Rabines</li>
              <li>Luciano Castagno</li>
              <li>Ese Kai Oxalde</li>
            </ul>
            <p>Si tenés dudas o querés conocer más sobre el proyecto, podes contactarnos 
              a historias.de.malvinas.argentinas@gmail.com </p>  
          </div>
        </div>
      </div>
    );
  }