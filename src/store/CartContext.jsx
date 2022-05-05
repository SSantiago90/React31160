import { createContext } from "react";
import { useContext, useState } from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext; 

// Guardar en el estado los items que agreguemos al cart
// ? 0_ Necesitamos un ESTADO para guardar los items
// ? 1_ agregar items al estado del carrito
// ? 2_ eliminar items del estado del carrito
// ! 3_ limpiar todo del carrito
// ! 4_ comprobar si X item está en el carrito ---> Array.some()
// * 5_ devolver la cantidad de items en el carrito

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) => { 
        if (isInCart()){
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id){
                    const copyItem = {...cartItem};
                    copyItem.cant += cant;
                    return copyItem;
                }
                    
                else 
                    return cartItem;
            })  
            setCart(newCart);
        }
        else{            
            const newItem = {...item, cant};
            setCart([...cart, newItem]);
        }
    }
    
    const removeFromCart = (id) => {
        const newCart = [...cart];
        const cartFilter = newCart.filter( item =>{
            return item.id !== id;
        });
        setCart(cartFilter);
    }

    const isInCart = () =>{
        return true;
    }

    const contextFunction = () => console.log("Contexto listo!");

    const cantInCart = () => false;

    return(
        <Provider value={ { contextFunction, cart, addToCart, removeFromCart} }>
            {children}
        </Provider>
    )
}

export default useCartContext;