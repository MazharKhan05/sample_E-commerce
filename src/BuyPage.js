import React, { useState, useContext } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { Switch } from "antd";
import { products, mainProducts } from "./demoProducts";
import Products from "./Products";
import { cartContext } from "./CartContext";
import Nav from "./Nav";
import "./BuyPage.css";
import { Redirect } from "react-router-dom";

function BuyPage() {
	const context = useContext(cartContext);
	const [catChange, setCatChange] = useState(false);
	const [searchText, setSearchText] = useState("");

	const handleCatChange = () => {
		catChange ? setCatChange(false) : setCatChange(true);
	};

	const handleInput = (e) => {
		setSearchText(e.target.value);
	};

	if (context.email) {
		return (
			<div>
				<Nav />

				<div className="app__utilities">
					<div className="app__toggle">
						<Switch onClick={handleCatChange} />
						<label htmlFor="cheese-status">VEG ONLY</label>
					</div>
					<FormControl>
						<NativeSelect className="bg-primary app__dropdown" defaultValue="">
							<option value="All" key="all">
								All
							</option>
							<option value="Starters" key="starters">
								Starters
							</option>
							<option value="Main-Course" key="main">
								Main-Course
							</option>
							<option value="Deserts" key="deserts">
								Deserts
							</option>
						</NativeSelect>
					</FormControl>
					<input
						className="app__search"
						type="text"
						value={searchText}
						onChange={(e) => handleInput(e)}
						placeholder="Search for..."
					/>
				</div>
				<Products
					catType={catChange}
					items={products}
					mainCat="Starters"
					searchText={searchText}
				/>
				<Products
					catType={catChange}
					items={mainProducts}
					mainCat="Main-Course"
					searchText={searchText}
				/>
			</div>
		);
	} else {
		return <Redirect to="/login" />;
	}
}

export default BuyPage;
