import React, { useEffect, useState } from 'react';
import moviesDB from '../data/movies';
import ItemList from './ItemList';

function getMovies() {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(moviesDB);
    }, 2000);
  });
}

function ItemListContainer( { titulo } ) {   
  const [moviesEstado, setMovies] = useState([]);

  useEffect( () => {
    getMovies().then( respuestaPromise => {
      setMovies(respuestaPromise);
    });
  }, []);

  return (
    <div className="container px-5 py-8 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-pink-600">{ titulo }</h1>
        <ItemList movies={moviesEstado} />
      </div>
    </div>
  )
}

export default ItemListContainer
