import React, { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Product.css";
import { cartContext } from "./CartContext";

function Product({ item }) {
	const [modal, setModal] = useState(false);
	const [quantity, setQuantity] = useState("");
	// const [products, setProducts] = useState([]);
	const context = useContext(cartContext);

	const toggle = () => {
		setModal(!modal);
	};
	const handleChange = (e) => {
		setQuantity(e.target.value);
	};

	const handleSubmit = (e, item, quantity) => {
		e.preventDefault();
		const alreadyAdded = context.cartProducts.findIndex((pro) => {
			return pro.id === item.id;
		});
		if (alreadyAdded === -1) {
			context.setCartProducts([
				...context.cartProducts,
				{
					id: item.id,
					name: item.name,
					price: item.price,
					cat: item.Cat,
					img: item.img,
					quantity: quantity,
					no_quantity: 1,
				},
			]);
		}
		setModal(!modal);
	};
	return (
		<div className="product">
			<div className="product__desc">
				<h3 className="product__head"> {item.name}</h3>
				<span className="product__price"> ${item.price}</span>
				<p>{item.Characteristics}</p>
			</div>
			<div className="product__img">
				<img src={item.img} className="product__img" alt="product-img" />
				<button className="product__btn" onClick={toggle}>
					ADD{" "}
				</button>
			</div>
			<Modal show={modal} centered>
				<Modal.Header>
					<h4>{item.name}</h4>
				</Modal.Header>
				<Modal.Body>
					<h5>Quantity</h5>
					<div className="modal__content">
						<input
							type="radio"
							id="small"
							name="quantity"
							value={item.quantity?.small}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
						<label>small</label>
					</div>
					<div className="modal__content">
						<input
							type="radio"
							id="medium"
							name="quantity"
							value={item.quantity?.medium}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
						<label>medium</label>
					</div>
					<div className="modal__content">
						<input
							type="radio"
							id="large"
							name="quantity"
							value={item.quantity?.large}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
						<label>large</label>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						onClick={(e) => {
							handleSubmit(e, item, quantity);
						}}
						className="modal__btn"
					>
						ADD ITEM
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Product;
