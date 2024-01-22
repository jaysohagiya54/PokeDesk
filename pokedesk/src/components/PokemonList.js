// src/Pokemon.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeDetails from './PokeDetails';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (url = 'https://pokeapi.co/api/v2/pokemon') => {
    try {
      const response = await axios.get(url);
      setPokemonData(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };
  const handlePagination = (url) => {
    fetchData(url);
  };
  const handlepoke = () => {
      <PokeDetails/>
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul className='poke'>
        {pokemonData.map((pokemon) => (
          <li className="poke1" key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <div>
        {prevPage && <button onClick={() => handlePagination(prevPage)}>Previous</button>}
        {nextPage && <button onClick={() => handlePagination(nextPage)}>Next</button>}
      </div>
    </div>
  );
};

export default PokemonList;
