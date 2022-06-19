import './Navbar.css';

function Navbar() {
  return (
<header className='navbar'>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Catálogo</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
        <a href="#" alt="#"></a><img src="https://img.icons8.com/android/2x/shopping-cart-loaded.png" />
    </ul>

</header>

  );
}

export default Navbar;