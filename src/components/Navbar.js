import React from 'react'
import './Navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
<header className='navbar'>
    <ul>
        <li><Link to="#">Home</Link></li>
        <li><Link to="#">Catálogo</Link></li>
        <li><Link to="#">Nosotros</Link></li>
        <li><Link to="#">Contacto</Link></li>
        <CartWidget />
    </ul>

</header>

  );
}

export default Navbar;