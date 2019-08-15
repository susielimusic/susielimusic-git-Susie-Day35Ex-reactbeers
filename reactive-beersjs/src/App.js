import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer'
import BeerInfo from './components/BeerInfo';
import AddBeer from './pages/AddBeer';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/beers-list' component={Beers} />
            <Route path='/beer/:beerID' component={BeerInfo} />
            <Route path='/beers-random' component={RandomBeer} />
            <Route path='/beer-new' component={AddBeer} />
      </Switch>
    </div>
  );
}

export default App;
