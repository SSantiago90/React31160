import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesDB from '../data/movies';
import ItemDetail from './ItemDetail';

function getMovie(id) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const movieFound = moviesDB.find( (movie) => { 
        return parseInt(id) === movie.id;
      })
      resolve(movieFound);
    }, 2000);
  });  
}

function ItemDetailContainer() {   

  const [movie, setMovie] = useState([]);
  const { itemid } = useParams();

  useEffect( () => {
    getMovie(itemid).then( respuestaPromise => {
      setMovie(respuestaPromise);
    });
  }, [itemid]);

  return (
    <section className="text-gray-600 body-font"> 
      <ItemDetail movie={movie}/>
  </section>
  )
}

export default ItemDetailContainer
