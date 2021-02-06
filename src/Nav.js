import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Badge from "@material-ui/core/Badge";
import { cartContext } from "./CartContext";
import "./Nav.css";

function Nav({ handleInput, searchText }) {
	const context = useContext(cartContext);
	return (
		//style={{ fontSize: 45, marginBottom: 5 }}
		<div className="app__head">
			<Link to="/">
				<h2 className="app__menu">Menu</h2>
			</Link>
			<div className="app__headContents">
				<Link to="/cart">
					<IconButton>
						<Badge
							badgeContent={`${
								context.cartProducts.length < 1
									? 0
									: context.cartProducts.length
							}`}
							color="primary"
						>
							<ShoppingBasketIcon style={{ fontSize: 45, marginBottom: 5 }} />
						</Badge>
					</IconButton>
				</Link>
				<input
					className="app__search"
					type="text"
					value={searchText}
					onChange={(e) => handleInput(e)}
					placeholder="Search for..."
				/>
			</div>
		</div>
	);
}

export default Nav;
