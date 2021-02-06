import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./Products.css";
import { Container, Col, Row } from "reactstrap";

function Products({ items, catType, searchText, mainCat, variety }) {
	let [newProducts, setNewProducts] = useState([...items]);
	let [products, setProducts] = useState([...items]);
	const [inputText, setInputText] = useState(searchText);

	useEffect(() => {
		if (catType && products) {
			products = products.filter((pro) => {
				return pro.Cat === "Veg";
			});
			setProducts(products);
		} else {
			// products = products.filter((pro) => {
			// 	return pro.Cat !== "Veg";
			// });
			// newProducts = [...products];
			setProducts(newProducts);
		}
	}, [catType]);
	useEffect(() => {
		if (variety === "Starters" && products) {
			products = products.filter((pro) => {
				return pro.mainCat === variety;
			});
			setProducts(products);
		}
		if (variety === "Main-Course" && products) {
			products = products.filter((pro) => {
				return pro.mainCat === variety;
			});
			setProducts(products);
		}
		if (variety === "Deserts" && products) {
			products = products.filter((pro) => {
				return pro.mainCat === variety;
			});
			setProducts(products);
		} else {
			setProducts(newProducts);
		}
	}, [variety]);
	useEffect(() => {
		if (searchText && products) {
			products = products.filter((pro) => {
				return pro.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
			});
			setProducts(products);
		} else {
			setProducts(newProducts);
		}
	}, [searchText]);
	// console.log(newProducts);
	// console.log(catType);
	return (
		<Container fluid>
			<Row className="products">
				<h2 className="products__mainCat ">{mainCat}</h2>
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
