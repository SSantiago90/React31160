import React, { useState } from "react";

function ItemCount(props) {
    const [count, setCount] = useState(props.initial);

    function handleAdd(){
        if (count < props.stock) setCount(count + 1);
    } 

    function handleSubstract(){
        if ( count > 1 ) setCount(count - 1);
    }   

    return (
        <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb">
                    Compra tus items
                </h1>
                <div>
                    <div>
                        <button onClick={handleSubstract}>-</button>
                        <span>    {count}    </span>
                        <button onClick={handleAdd}>+</button>
                    </div>
                    <div>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;
