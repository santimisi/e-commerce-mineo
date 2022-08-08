import React from 'react'
import './Navbar.css';
import CartWidget from './CartWidget';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import Catalogo from './Catalogo/Catalogo';
import Home from './Home/Home';
import { Link } from 'react-router-dom';


>>>>>>> dudas
function Navbar() {
  return (
<header className='navbar'>
    <ul>
<<<<<<< HEAD
        <li><Link to="#">Home</Link></li>
        <li><Link to="#">Catálogo</Link></li>
=======
        <li><Link to="/">Futura Brand</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
>>>>>>> dudas
        <li><Link to="#">Nosotros</Link></li>
        <li><Link to="#">Contacto</Link></li>
            <Link to="/"><CartWidget /></Link>
        
    </ul>

</header>

  );
}

export default Navbar;