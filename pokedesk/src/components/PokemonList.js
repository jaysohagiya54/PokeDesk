// src/Pokemon.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonData.map((pokemon) => (
          <li className='poke' key={pokemon.name}>
            <Link className='list' to={`/pokemon/${pokemon.name}`}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Link>
          </li>
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
