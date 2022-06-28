import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <div className="App">
      <h1>Scene It</h1>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/watchlist' element={<Watchlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
