import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./Products.css";
import { Container, Col, Row } from "reactstrap";

function Products({ items, catType }) {
	let newProducts = [];
	const [products, setProducts] = useState([]);
	useEffect(() => {
		setProducts(items);
		newProducts = products.filter((pro) => {
			return pro.Cat === "Veg";
		});
		setProducts(newProducts);
	}, [catType]);
	console.log(newProducts);
	return (
		<Container fluid>
			<Row className="products">
				{products.map((item, index) => (
					<Col md={4} key={index}>
						<Product item={item} />
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Products;
