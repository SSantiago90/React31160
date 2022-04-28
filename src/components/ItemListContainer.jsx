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
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl uppercase text-2xl font-large title-font mb-8 text-indigo-600">{titulo}</h1>
            <hr />
        </div>    
    </div>
    <ItemList movies={moviesEstado}/>
  </section>
  )
}

export default ItemListContainer
