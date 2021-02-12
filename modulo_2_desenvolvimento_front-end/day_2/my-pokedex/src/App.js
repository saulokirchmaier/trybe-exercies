import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import data from './data';

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
