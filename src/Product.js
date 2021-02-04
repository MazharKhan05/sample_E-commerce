import React from "react";
import "./Product.css";

function Product({ item }) {
	return (
		<div className="product">
			<div className="product__desc">
				<h3 className="product__head"> {item.name}</h3>
				<span className="product__price"> ${item.price}</span>
				<p>{item.Characteristics}</p>
			</div>
			<div className="product__img">
				<img src={item.img} className="product__img" alt="product-img" />
				<button className="product__btn">ADD </button>
			</div>
		</div>
	);
}

export default Product;
