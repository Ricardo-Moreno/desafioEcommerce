import './NavBar.css'

function NavBar() {
    return (
            <nav>
              <ul className="menu">
                  <h2>DECORARI</h2>
                <li><a href="#">INICIO</a></li>
                <li><a href="#">CATALOGO</a>
                  <ul>
                    <li><a href="#">OFERTAS</a></li>
                    <li><a href="#">DESAYUNOS</a></li>
                    <li><a href="#">ARREGLOS</a></li>
                  </ul>  
                </li>
                <li><a href="#">ACERCA DE NOSOTROS</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </nav>
    )
}

export default NavBar