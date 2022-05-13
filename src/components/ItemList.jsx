import React from 'react'
import Item from './Item'

function ItemList( { movies } ) {

    if( !movies.length)
        return <h4 className="text-center text-2xl color-gray-300">Cargando . . .</h4>
        
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-6 mx-auto">        
                <div className="flex flex-wrap sm:-m-4 -mx-8 -mb-10">   
                { movies.map( thismovie => {
                    return (
                    <Item movie={thismovie} key={thismovie.id} />
                    )
                }) }        
                </div>
            </div>
        </section>
    )
}

export default ItemList