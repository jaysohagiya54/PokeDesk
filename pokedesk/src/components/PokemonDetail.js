// src/PokemonDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const PokemonDetail = () => {
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
    <div className='px-16 py-6'>
      <h1 className='details font-bold text-lg text-yellow-600 pb-4'>Pokemon Details</h1>
      {pokemonDetails && (
        <div className='container overflow-x-auto border w-[400px] border-radius-10 rounded-md mt-3 ml-[600px] align-middle'>
          <h2>{pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</h2>
          <img className='w-[200px]' src={pokemonDetails.sprites.other.home.front_default} alt={pokemonDetails.name} />
          <p>Base Experience: {pokemonDetails.base_experience}</p>
          {/* <p>Stats: {pokemonDetails.map((p) => (
           <li>
             {p.stats[0].stat.name}
           </li>
          ))}</p> */}
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
          {/* Add more details as needed */}
        </div>
      )}
      <div className='pt-5'>
      <Link  to='/'> <button className='bg-yellow-100 w-12 border-gray-300 rounded-sm border-radius-15 font-semibold'>Back</button></Link>
      </div>
    </div>
  );
};

export default PokemonDetail;
