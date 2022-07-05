import React from 'react'
import logo from './logo.svg';
import ReactDOM from "react-dom";
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import ItemCount from './components/ItemCount';
import Greetings from './components/ItemListContainer'
import ItemList from './components/ItemList';
import 'bootstrap'
import ItemDetails from './components/ItemDetails';
import { Routes, Route } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo';
import Home from './components/Home/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalogo" element={<Catalogo />}></Route>
      </Routes>
      <Body />

    </div>
  );
}

export default App;