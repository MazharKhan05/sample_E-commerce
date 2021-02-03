import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Products from "./Products";

const products = [
	{
		name: "Carrot",
		price: "100",
		Characteristics: "Fresh and handpicked from farm",
		img:
			"https://cdn2.stylecraze.com/wp-content/uploads/2013/12/13-Incredible-Benefits-Of-Carrots-You-Must-Know-Today.jpg",
	},
	{
		name: "Beans",
		price: "130",
		Characteristics: "Fresh and handpicked from farm",
		img:
			"https://post.healthline.com/wp-content/uploads/2020/09/kidney-beans-732x549-thumbnail.jpg",
	},
	{
		name: "broccoli",
		price: "150",
		Characteristics: "Fresh and handpicked from farm",
		img:
			"https://solidstarts.com/wp-content/uploads/Broccoli_edited-480x320.jpg",
	},
	{
		name: "spinach",
		price: "50",
		Characteristics: "Fresh and handpicked from farm",
		img:
			"https://www.bigbasket.com/media/uploads/p/l/40138448_3-fresho-baby-spinach.jpg",
	},
];
function App() {
	return (
		<div className="app">
			<Products items={products} />
		</div>
	);
}

export default App;
