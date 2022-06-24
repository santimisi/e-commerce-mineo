import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import ItemCount from './components/ItemCount';
import Greetings from './components/ItemListContainer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Greetings nombre="Santiago" />
      <Body />

    </div>
  );
}

export default App;
