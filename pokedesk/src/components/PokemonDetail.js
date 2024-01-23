// src/PokemonDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './Footer';



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
      <img className='w-[250px] ml-[670px] mb-4' src='https://iili.io/Ja4Lyx9.png'/>
      {pokemonDetails && (
        <div className='container overflow-x-auto border-green-800  w-[400px] border-radius-20 rounded-md mt-[100px] ml-[600px] align-middle shadow-lg hover:shadow-2xl'>
          <h2 className='font-extrabold text-red-400 pt-3 pb-3'>{pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</h2>
          <img className='w-[200px] ml-[100px]' src={pokemonDetails.sprites.other.home.front_default} alt={pokemonDetails.name} />
          <p className='pt-3 pb-3'>Base Experience: {pokemonDetails.base_experience}</p>
          {/* <p>Stats: {pokemonDetails.map((p) => (
           <li>
             {p.stats[0].stat.name}
           </li>
          ))}</p> */}
          <p className='pt-3 pb-3'>Height: {pokemonDetails.height}</p>
          <p className='pt-3 pb-3'>Weight: {pokemonDetails.weight}</p>
          {/* Add more details as needed */}
        </div>
      )}
      <div className='pt-[140px]'>
      <Link  to='/'> <button className='bg-yellow-100 shadow-lg hover:shadow-2xl w-[50px] border border-yellow-600 border-opacity-45 rounded-md border-radius-[20px] font-semibold'>Back</button></Link>
      </div>
      <Footer/>
    </div>
  );
};

export default PokemonDetail;
