import React from 'react';
// import pokemons from './data';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className="poke-card">
        <div className="poke-info">
          <p className="name">{name}</p>
          <p>{type}</p>
          <p>Average weight: {averageWeight.value} kg</p>
        </div>
        <img className="poke-img" src={image}></img>
      </div>
    );
  }
}

export default Pokemon;