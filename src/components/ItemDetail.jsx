import ItemCount from "./ItemCount";
import useCartContext from "../store/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ movie }) => {
	const { isInCart, addToCart } = useCartContext();

	function onAdd(count){		
		
		addToCart(movie, count)
		console.log("Agregado al cart: ", movie, count);
	};

	if (!movie){
		return <h4 className="text-center text-2xl color-gray-300">Cargando . . .</h4>
	}

	else{
		return (
			<div className="xl:w-1/3 md:w-1/2 p-4 text-center mx-auto">
				<div className="shadow-lg bg-gray-100 p-6 rounded-lg">
					<div>
						<img
							alt={movie.title}
							className="image object-contain bg-placeholder h-80 rounded w-full object-center mb-6"
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

					{ isInCart(movie.id)? 
						<Link to="/cart">Ir al carrito</Link>
					: 
						<ItemCount onAdd={onAdd} stock={movie.stock} initial={1}/>
					}
					
				</div>
			</div>
		);
	}
};

export default ItemDetail;
