import React from 'react'
import logo from './logo.svg';
import ReactDOM from "react-dom";
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart'
import Body from './components/Body';
import ItemCount from './components/ItemCount';
import Greetings from './components/ItemListContainer'
import ItemList from './components/ItemList';
<<<<<<< HEAD
=======
import ItemListContainer from './components/ItemListContainer';
>>>>>>> dudas
import 'bootstrap'
import ItemDetails from './components/ItemDetails';
import { Routes, Route } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo';
import Home from './components/Home/Home';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
=======
import { NotFound } from './components/NotFound';
import Item from './components/Item';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CategoryNavbar } from './components/CategoryNavbar';
import { CartContext, CartProvider } from './components/context/useContext';
>>>>>>> dudas

function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalogo" element={<Catalogo />}></Route>
      </Routes>
      <Body />
=======
      <CategoryNavbar />
      <CartProvider>
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
      
>>>>>>> dudas

    </div>
  );
}

export default App;