import React, { useState } from 'react';
import '../stylesheets/App.css';
import pokemonsFromApi from '../data/pokemon.json';
import PokemonList from './PokemonList';

const App = () => {
  const [pokemons, setPokemons] = useState(pokemonsFromApi);

  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default App;
