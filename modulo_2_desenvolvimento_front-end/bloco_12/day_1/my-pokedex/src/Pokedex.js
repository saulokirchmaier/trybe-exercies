import React, { Children } from 'react';
import './Pokedex.css';
import Pokemon from './Pokemon';
// import PokeTypes from './PokeTypes';
import Button from './Button';
import PokeTypesButtons from './PokeTypesButtons';

class Pokedex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemonsToShow: this.props.data,
      currentPokemon: 0,
    }
  }
  
  handleNextButton = (last) => {
    if (this.state.currentPokemon >= last - 1) {
      this.setState((_props) => ({currentPokemon: 0}));
    } else {
      this.setState((lastPokemon, _props) => ({currentPokemon: lastPokemon.currentPokemon + 1}));
    }
  };

  handlePokeFilter = (search) => {
    this.setState((_props) => ({currentPokemon: 0}));
    const { data } = this.props;
    if (search === 'All') this.setState((_props) => ({pokemonsToShow: data}));
    else {
      const pokeFiltered = data.filter(({type}) => type === search);
      this.setState((_props) => ({pokemonsToShow: pokeFiltered}));
    }
  }
  
  render() {
    const data = this.state.pokemonsToShow;
    const pokeTypes = this.props.data
      .reduce((unic, item) => unic
        .includes(item.type) ? unic : [...unic, item.type], []);
    pokeTypes.push('All');
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="pokedex">
          <Pokemon pokemon={data[this.state.currentPokemon]} key={data.id}/>
        </div>
        <Button handleClick={() => this.handleNextButton(data.length)}>Next</Button>
        <div>
          <Button handleClick={() => this.handlePokeFilter('All')}>All</Button>
          <Button handleClick={() => this.handlePokeFilter('Fire')}>Fire</Button>
          <Button handleClick={() => this.handlePokeFilter('Psychic')}>Psychic</Button>
        </div>
        <PokeTypesButtons pokeTypes={pokeTypes}/>
      </div>
    );
  }
}

export default Pokedex;
