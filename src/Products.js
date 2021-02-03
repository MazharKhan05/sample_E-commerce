import React from "react";
import Product from "./Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Products.css";
import { Container, Col, Row } from "reactstrap";

function Products({ items }) {
	return (
		<>
			<div className="products__head">
				<h2 className="products__menu">Menu</h2>
				<div className="products__headContents">
					<IconButton>
						<ShoppingBasketIcon style={{ fontSize: 45, marginBottom: 5 }} />
					</IconButton>
					<input className="products__search" placeholder="Search for..." />
				</div>
			</div>
			<Container fluid>
				<Row className="products">
					{items.map((item, index) => (
						<Col md={4} key={index}>
							<Product item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
}

export default Products;
