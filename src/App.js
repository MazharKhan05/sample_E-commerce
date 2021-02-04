import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { NativeSelect, FormControl } from "@material-ui/core";
import { Switch } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./Products";
import Locate from "./Locate";

const products = [
	{
		name: "Carrot",
		price: "100",
		Cat: "Veg",
		Characteristics: "Fresh and handpicked from farm",
		img: "https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg",
	},
	{
		name: "Beans",
		price: "130",
		Cat: "Veg",
		Characteristics: "Fresh and handpicked from farm",
		img:
			"https://post.healthline.com/wp-content/uploads/2020/09/kidney-beans-732x549-thumbnail.jpg",
	},
	{
		name: "broccoli",
		price: "150",
		Cat: "Non-Veg",
		Characteristics: "Fresh and handpicked from farm",
		img:
			"https://solidstarts.com/wp-content/uploads/Broccoli_edited-480x320.jpg",
	},
	{
		name: "spinach",
		price: "50",
		Cat: "Non-Veg",
		Characteristics: "Fresh and handpicked from farm",
		img:
			"https://www.bigbasket.com/media/uploads/p/l/40138448_3-fresho-baby-spinach.jpg",
	},
];
function App() {
	const [catChange, setCatChange] = useState(false);
	const [variety, setVariety] = useState("");

	const handleCatChange = () => {
		catChange ? setCatChange(false) : setCatChange(true);
		console.log(catChange);
	};

	return (
		<div className="app">
			<div className="app__head">
				<h2 className="app__menu">Menu</h2>
				<div className="app__headContents">
					<IconButton>
						<ShoppingBasketIcon style={{ fontSize: 45, marginBottom: 5 }} />
					</IconButton>
					<input className="app__search" placeholder="Search for..." />
				</div>
			</div>
			<Locate />
			<div className="app__utilities">
				<div className="app__toggle">
					<Switch onClick={handleCatChange} />
					<label htmlFor="cheese-status">VEG ONLY</label>
				</div>
				<FormControl>
					<NativeSelect
						className="bg-primary app__dropdown"
						defaultValue=""
						onChange={(e) => setVariety(e.target.value)}
					>
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
			</div>
			<Products catType={catChange} items={products} />
		</div>
	);
}

export default App;
