import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch as RouterSwitch,
	Route,
} from "react-router-dom";
import { NativeSelect, FormControl } from "@material-ui/core";
import { Switch } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./Products";
import Locate from "./Locate";
import { products, mainProducts } from "./demoProducts";
import { cartContext } from "./CartContext";
import Nav from "./Nav";
import Cart from "./Cart";

function App() {
	const [catChange, setCatChange] = useState(false);
	const [variety, setVariety] = useState("");
	const [searchText, setSearchText] = useState("");
	const [cartProducts, setCartProducts] = useState([]);

	const handleCatChange = () => {
		catChange ? setCatChange(false) : setCatChange(true);
	};

	const handleInput = (e) => {
		setSearchText(e.target.value);
	};
	console.log(searchText);
	return (
		<div className="app">
			<Router>
				<cartContext.Provider value={{ cartProducts, setCartProducts }}>
					<RouterSwitch>
						<Route exact path="/">
							<Nav handleInput={handleInput} searchText={searchText} />
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
							</div>
							<Products
								catType={catChange}
								items={products}
								mainCat="Starters"
								searchText={searchText}
								variety={variety}
							/>
							<Products
								catType={catChange}
								items={mainProducts}
								mainCat="Main-Course"
								searchText={searchText}
								variety={variety}
							/>
						</Route>
						<Route path="/cart">
							<Nav handleInput={handleInput} searchText={searchText} />
							<Cart />
						</Route>
					</RouterSwitch>
				</cartContext.Provider>
			</Router>
		</div>
	);
}

export default App;
