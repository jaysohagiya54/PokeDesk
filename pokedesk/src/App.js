import logo from './logo.svg';
import './App.css';
import PokemonList from './components/PokemonList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/pokemon/:name" Component={PokemonDetail} />
        <Route path="/" Component={PokemonList} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
