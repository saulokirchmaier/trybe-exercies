import React from 'react';
import './App.css';
import data from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex data={data}/>
      </div>
    );
  }
}

export default App;
