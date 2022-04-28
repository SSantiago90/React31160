import React, { useEffect, useState } from 'react';
import moviesDB from '../data/movies';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function getMovies(categoryid) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      if (categoryid !== undefined) {
        const arrayFiltered = moviesDB.filter ( (movie) => {
          return movie.genre === categoryid;
        });
        resolve(arrayFiltered);
      }      
      else {
        resolve(moviesDB);
      }      
    }, 700);
  });
}

// Array.filter: filtra los elementos de un array

function ItemListContainer( { titulo } ) {   
  const [moviesEstado, setMovies] = useState([]);
  const { categoryid } = useParams();

  useEffect( () => {
    getMovies(categoryid).then( respuestaPromise => {
      setMovies(respuestaPromise);
    });
  }, [categoryid]);

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
