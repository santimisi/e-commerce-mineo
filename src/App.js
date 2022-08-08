import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart'
<<<<<<< HEAD
import Body from './components/Body';
import ItemCount from './components/ItemCount';
import Greetings from './components/ItemListContainer'
import ItemList from './components/ItemList';
<<<<<<< HEAD
=======
=======
>>>>>>> entregafirebase
import ItemListContainer from './components/ItemListContainer';
>>>>>>> dudas
import 'bootstrap'
import { Routes, Route } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo';
import Home from './components/Home/Home';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
=======
=======
>>>>>>> entregafirebase
import { NotFound } from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CategoryNavbar } from './components/CategoryNavbar';
<<<<<<< HEAD
import { CartContext, CartProvider } from './components/context/useContext';
>>>>>>> dudas

=======
import {CartProvider } from './components/context/useContext';
>>>>>>> entregafirebase
function App() {
  return (
    <div className="App">
        <CartProvider>
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalogo" element={<Catalogo />}></Route>
      </Routes>
      <Body />
=======
      <CategoryNavbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/catalogo" element={<Catalogo />}></Route>
        <Route path="/category/:catId" element={< ItemListContainer greeting={'FILTRADO'} />}></Route>
        <Route path="/item/:productsId" element={< ItemDetailContainer />}></Route>
        <Route path="*" element={< NotFound />}></Route>
        <Route path="/cart" element={< Cart />}></Route>
      </Routes>
      </CartProvider>
<<<<<<< HEAD
      
>>>>>>> dudas

    </div>
  );
}

=======
    </div>
  );
}
>>>>>>> entregafirebase
export default App;