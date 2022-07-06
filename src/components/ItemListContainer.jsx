import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getAllItems as getMovies, saveDoc, getItemsByCategory } from "../data";

function ItemListContainer({ titulo }) {
	const [moviesEstado, setMovies] = useState([]);
	const { categoryid } = useParams();

	useEffect(() => {
		if (categoryid === undefined) {
			getMovies().then((respuestaPromise) => {
				setMovies(respuestaPromise);
			});
		} else {
			getItemsByCategory(categoryid).then((respuestaPromise) => {
				setMovies(respuestaPromise);
			});
		}
	}, [categoryid]);


	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-12 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="sm:text-3xl uppercase text-2xl font-large title-font mb-8 text-indigo-600">
						{titulo}
					</h1>
					<hr />
				</div>
			</div>
			<ItemList movies={moviesEstado} />
			<button onClick={saveDoc}>Guardar Item</button>
		</section>
	);
}

export default ItemListContainer;
