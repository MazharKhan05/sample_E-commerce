import React, { useContext } from "react";
import { cartContext } from "./CartContext";
import {
	Container,
	ListGroup,
	ListGroupItem,
	Card,
	CardBody,
	Col,
	Row,
} from "reactstrap";
import Button from "@material-ui/core/Button";
import "./Cart.css";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";

function Cart() {
	const context = useContext(cartContext);
	let newCart = [];
	let iniCart = [];
	let amount = 0;
	let incPrice;

	context.cartProducts.forEach(
		(item) => (amount = parseInt(amount) + parseInt(item.price))
	);

	const handleCountInc = (pro) => {
		newCart = context.cartProducts.filter((i) => i.id !== pro.id);
		const count = pro.no_quantity;
		const prize = pro.price / count;
		const incCount = pro.no_quantity + 1;
		incPrice = parseInt(pro.price) + parseInt(prize);

		context.setCartProducts([
			...newCart,
			{ ...pro, no_quantity: incCount, price: incPrice },
		]);
	};

	const handleCountDec = (pro) => {
		iniCart = context.cartProducts.filter((i) => i.uid !== pro.uid);
		const count = pro.no_quantity;
		const decPrize = pro.price / count;
		const decCount = pro.no_quantity - 1;
		const prize = parseInt(pro.price) - parseInt(decPrize);
		context.setCartProducts([
			...iniCart,
			{ ...pro, no_quantity: decCount, price: prize },
		]);
	};

	const removeItem = (item) => {
		context.setCartProducts(
			context.cartProducts.filter((singleItem) => singleItem.id !== item.id)
		);
	};
	const handlePayment = () => {
		context.setCartProducts([]);
	};
	return (
		<div className="cart">
			<Container fluid="md">
				<h1 className="text-success text-center">Purchase Cart</h1>
				<ListGroup>
					{context.cartProducts.map((item) => (
						<ListGroupItem key={item.id}>
							<Row md="auto">
								<Col className="col-md-2  product__img ml-0 mr-0 pl-0 pr-0">
									<img
										height={100}
										width={120}
										src={item.img}
										className="product__pic  img-thumbnail"
									/>
								</Col>
								<Col className="col-md-8 cart__contents ml-0 mr-0 pl-0 pr-0">
									<div className="product__name">{item.name}</div>
									<span className="product__cost">price: ${item.price}</span>

									<div className="product__quantity">
										<RemoveCircleOutline
											className="text-success "
											onClick={() => handleCountDec(item)}
										/>

										<span className="pr-1 pl-1">
											<b>{item.no_quantity}</b>
										</span>

										<AddCircleOutline
											className="text-success"
											onClick={() => handleCountInc(item)}
										/>
									</div>
									<Button
										className="product__del"
										color="secondary"
										variant="outlined"
										size="small"
										onClick={() => removeItem(item)}
									>
										Remove
									</Button>
								</Col>
							</Row>
						</ListGroupItem>
					))}
				</ListGroup>
				{context.cartProducts.length >= 1 ? (
					<Card className="cart__footer">
						<h4 className="cart__gtotal">Grand Total</h4>
						<span className="cart__totalAmount">${amount}</span>

						<button className="cart__btn" onClick={() => handlePayment()}>
							Check Out
						</button>
					</Card>
				) : (
					<div className="cart__empty">
						<h1>Your cart is Empty..</h1>
					</div>
				)}
			</Container>
		</div>
	);
}

export default Cart;
