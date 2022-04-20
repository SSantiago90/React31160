import React from 'react'
import movies from '../data/movies'

function Item( { movie}) {
    return (
        <div>
            <h1>{movie.title}</h1>
            <small>{movie.genre}</small>
            <p>${movie.price}</p>
            <hr/>
            <br/>
        </div>
    )
}

export default Item