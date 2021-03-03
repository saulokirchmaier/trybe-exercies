import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Details from './Details';
import About from './About';
import NoMatch from './NoMatch';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/" >Favorite Pokemon</Link>
        </nav>
        <Switch>
          <Route path="/pokemons/:id" render={(props) => <Details {...props} pokemons={pokemons}/>} />
          <Route path="/about" component={About} />
          <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
