// src/Pokemon.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer';


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
    <img className='w-[250px] ml-[720px] mb-4' src='https://iili.io/Ja4Lyx9.png'/>
    <div className='flex flex-wrap justify-center'>
      {pokemonData.map((pokemon) => (
        
        <div key={pokemon.name} className='container pb-4 mx-2 w-1/6 shadow-md hover:shadow-2xl'>
          <div className='bg-white rounded-lg p-4 pb-2 shadow-md'>
            <img
              className='w-[90px] mx-auto'
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.url.split('/').slice(-2, -1)[0]}.png`}
              alt='poke'
            />
            <Link className='block mt-2 text-center' to={`/pokemon/${pokemon.name}`}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Link>
          </div>
        </div>
      ))}
    </div>
    <div className='mt-4 flex justify-center'>
      {prevPage && <button onClick={() => handlePagination(prevPage)} className='mx-2 px-4 py-2 bg-blue-500 text-white rounded-md'>Previous</button>}
      {nextPage && <button onClick={() => handlePagination(nextPage)} className='mx-2 px-4 py-2 bg-blue-500 text-white rounded-md'>Next</button>}
    </div>
    <Footer/>
  </div>
  );
};


export default PokemonList;
