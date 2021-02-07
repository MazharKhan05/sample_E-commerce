import React, { useState, useContext } from "react";
import {
	BrowserRouter as Router,
	Switch as RouterSwitch,
	Route,
	Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { cartContext } from "./CartContext";
import Nav from "./Nav";
import Cart from "./Cart";
import Login from "./Login";
import BuyPage from "./BuyPage";

function App() {
	const context = useContext(cartContext);
	const [cartProducts, setCartProducts] = useState([]);
	const [email, setEmail] = useState("");

	return (
		<div className="app">
			<Router>
				<cartContext.Provider
					value={{ cartProducts, setCartProducts, email, setEmail }}
				>
					<RouterSwitch>
						<Route exact path="/">
							<BuyPage />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/cart">
							<Nav />
							<Cart />
						</Route>
					</RouterSwitch>
				</cartContext.Provider>
			</Router>
		</div>
	);
}

export default App;
