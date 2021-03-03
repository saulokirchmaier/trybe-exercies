import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Details from './Details';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
        <Route path="/pokemons/:id" render={(props) => <Details {...props} pokemons={pokemons}/>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
