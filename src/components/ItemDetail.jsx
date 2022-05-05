import ItemCount from "./ItemCount";
import { useState } from "react";
import useCartContext from "../store/CartContext";

const ItemDetail = ({ movie }) => {
	const [isInCart, setIsInCart] = useState(false);
	const { addToCart } = useCartContext();

	function onAdd(count){		
		setIsInCart(true);
		addToCart(movie, count)
		console.log("Agregado al cart: ", movie, count);
	};

	return (
		<div className="xl:w-1/3 md:w-1/2 p-4">
			<div className="shadow-lg bg-gray-100 p-6 rounded-lg">
				<div>
					<img
						alt={movie.title}
						className="image object-contain bg-placeholder h-60 rounded w-full object-center mb-6"
						src={movie.imgUrl}
					/>
				</div>
				<h3 className="h-20 tracking-widest text-grey-800 font-bold title-font">
					{movie.title}
				</h3>
				<span className="title-font font-medium text-2xl text-gray-900">
					<h2 className="mb-4">${movie.price}</h2>
				</span>
				<p className="leading-relaxed text-base">{movie.genre}</p>

				{ isInCart? 
					<button>Ir al carrito</button>
				: 
					<ItemCount onAdd={onAdd} stock={movie.stock} initial={1}/>
				}
				
			</div>
		</div>
	);
};

export default ItemDetail;
