import React from "react";
import { CartFill } from "react-bootstrap-icons";
import useCartContext from "../store/CartContext";

function CartWidget() {
	const { cantInCart } = useCartContext();

	return (
		<>
			<CartFill className="mx-1" />
			<p className="mx-1">{cantInCart() !== 0 && cantInCart()}</p>
		</>
	);
}

export default CartWidget;
