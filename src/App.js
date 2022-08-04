import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap'
import { Routes, Route } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo';
import Home from './components/Home/Home';
import { NotFound } from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CategoryNavbar } from './components/CategoryNavbar';
import {CartProvider } from './components/context/useContext';
function App() {
  return (
    <div className="App">
        <CartProvider>
      <Navbar />
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
    </div>
  );
}
export default App;