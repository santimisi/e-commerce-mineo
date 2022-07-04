import React from 'react'
import './Navbar.css';
import CartWidget from './CartWidget';
import Catalogo from './Catalogo/Catalogo';
import Home from './Home/Home';
function Navbar() {
  return (
<header className='navbar'>
    <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/catalogo">Catálogo</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
        <CartWidget />
    </ul>

</header>

  );
}

export default Navbar;