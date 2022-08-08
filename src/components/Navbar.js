import React from 'react'
import './Navbar.css';
import CartWidget from './CartWidget';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import Catalogo from './Catalogo/Catalogo';
import Home from './Home/Home';
import { Link } from 'react-router-dom';


>>>>>>> dudas
=======
import { Link } from 'react-router-dom';
>>>>>>> entregafirebase
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
            <Link to="/cart"><CartWidget /></Link>
    </ul>
</header>
=======
import { Button, Container, Nav, Navbar as NavBarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
const categories = [
  { id: "todos los productos", address: '/', text: 'TODOS LOS PRODUCTOS' },
  { id: "men's clothing", address: "/category/men's clothing", text: "men's clothing" },
  { id: "women's clothing", address: "/category/women's clothing", text: "women's clothing" },
  { id: 'jewelery' , address: '/category/jewelery', text: 'jewelery' },
  { id: 'electronics', address: '/category/electronics', text: 'electronics' },
];
const NavBar = () => {
  return (
    <NavBarBS className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Dropdown>
        <Dropdown.Toggle  variant="none" id="dropdown-basic">
          Categorias
        </Dropdown.Toggle>
        <Dropdown.Menu>
          { categories.map((cat) => {
            return(
              <div className="links" key={cat.id}>
                  <Dropdown.Item value={ cat.id }><NavLink
                    to={cat.address}
                    className={({ isActive }) => (isActive ? 'activeClass' : '')}>
                  
                    {cat.text}
                  </NavLink></Dropdown.Item>
              </div>
            )})}
          
        </Dropdown.Menu>
      </Dropdown>
          <Nav.Link to="/nosotros" as={NavLink}>
            Nosotros
          </Nav.Link>
        </Nav>
        <Button style={{width: "3rem", height:"3rem" }} variant="outline-primary"
            className="rounded-circle" href=''>
              <Nav.Link to="/cart" as={NavLink} style={{padding:"0rem"}}>
                
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <CartWidget />
              </Nav.Link>
        </Button>
      </Container>
    </NavBarBS>
>>>>>>> trabajomejorado
  );
};
export default NavBar;