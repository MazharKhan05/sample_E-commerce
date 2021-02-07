import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Badge from "@material-ui/core/Badge";
import { cartContext } from "./CartContext";
import "./Nav.css";

function Nav() {
	const context = useContext(cartContext);
	return (
		//style={{ fontSize: 45, marginBottom: 5 }}
		<div className="app__head">
			<Link to="/">
				<div className="nav__locate">
					<p>Punjabi, North Indian</p>
					<span>Best In Town.</span>
				</div>
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
							<ShoppingBasketIcon style={{ fontSize: 45 }} />
						</Badge>
					</IconButton>
				</Link>
			</div>
		</div>
	);
}

export default Nav;
