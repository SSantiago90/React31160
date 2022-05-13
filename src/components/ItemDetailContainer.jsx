import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getItem as getMovie } from "../data";

function ItemDetailContainer() {
	const [movie, setMovie] = useState();
	const { itemid } = useParams();

	useEffect(() => {
		getMovie(itemid).then((respuestaPromise) => {
			setMovie(respuestaPromise);
		});
	}, [itemid]);

	return (
		<section className="text-gray-600 body-font">
			<ItemDetail movie={movie} />
		</section>
	);
}

export default ItemDetailContainer;
