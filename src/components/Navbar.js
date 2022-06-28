import React from 'react'
import './Navbar.css';
import CartWidget from './CartWidget';
function Navbar() {
  return (
<header className='navbar'>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Catálogo</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
        <CartWidget />
    </ul>

</header>

  );
}

export default Navbar;