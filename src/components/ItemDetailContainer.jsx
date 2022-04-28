import React, { useEffect, useState } from 'react';
import moviesDB from '../data/movies';
import ItemDetail from './ItemDetail';

function getMovie(id) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const movieFound = moviesDB.find( (movie) => { 
        return id === movie.id   
      })
      resolve(movieFound);
    }, 2000);
  });  
}

function ItemListContainer( { id }) {   
  const [movie, setMovie] = useState([]);

  useEffect( () => {
    getMovie(id).then( respuestaPromise => {
      setMovie(respuestaPromise);
    });
  }, []);

  return (
    <section className="text-gray-600 body-font"> 
      <ItemDetail movie={movie}/>
  </section>
  )
}

export default ItemListContainer
