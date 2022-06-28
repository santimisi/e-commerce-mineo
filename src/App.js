import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import ItemCount from './components/ItemCount';
import Greetings from './components/ItemListContainer'
import ItemList from './components/ItemList';
import Cards from './components/Card';
import 'bootstrap'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Body>
      <Greetings nombre="Santiago" />
      </Body>

    </div>
  );
}

export default App;
