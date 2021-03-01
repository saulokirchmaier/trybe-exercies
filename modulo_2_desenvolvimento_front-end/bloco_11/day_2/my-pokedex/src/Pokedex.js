import React from 'react';
import './Pokedex.css';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="pokedex">
          {this.props.data.map(pokemon => <Pokemon pokemon={pokemon} />)}
        </div>
      </div>
    );
  }
}

export default Pokedex;
