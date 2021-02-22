import React from 'react';
import './Pokedex.css';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {

  constructor() {
    super();
    this.state = {
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
  
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="pokedex">
          <Pokemon pokemon={data[this.state.currentPokemon]} key={data.id}/>
        </div>
        <Button handleClick={() => this.handleNextButton(data.length)}>Next</Button>
      </div>
    );
  }
}

export default Pokedex;
