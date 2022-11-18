import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div>
      
        <Routes>
          <Route
          path="/"
          element={<Home />}/>
          
          <Route
          path="/Beers"
          element={<Beers />}/>
          
          <Route
          path="/random-beer"
          element={<RandomBeer />}/>
          
          <Route
          path="/new-beer"
          element={<NewBeer />}/>

        </Routes>
    </div>
  );
}

export default App;
