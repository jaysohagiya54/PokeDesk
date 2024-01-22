// src/PokemonDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetail = ({ match }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const {name} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <div>
      <h1 className='details'>Pokemon Details</h1>
      {pokemonDetails && (
        <div className='pokedetails'>
          <h2>{pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</h2>
          <img className='pokeimg' src={pokemonDetails.sprites.other.home.front_default} alt={pokemonDetails.name} />
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
