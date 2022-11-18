import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Details from './components/Details';


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
          
          <Route 
          path="/:id" 
          element={ <Details /> } />

        </Routes>
    </div>
  );
}

export default App;
