import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Col } from "reactstrap";
import { cartContext } from "./CartContext";
import "./Login.css";

function Login() {
	const validEmailRegex = RegExp(
		/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	);

	const context = useContext(cartContext);
	const history = useHistory();
	const [name, setName] = useState(null);
	const [mobile, setMobile] = useState(null);
	const [table, setTable] = useState(null);
	// const [email, setEmail] = useState("");
	const [errors, setErrors] = useState({
		mobile: "",
		email: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (context.email && mobile) {
			history.push("/");
		} else {
			console.error("Invalid Form");
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;

		switch (name) {
			case "email":
				const validEmail = validEmailRegex.test(value);

				setErrors({ mobile: "", email: validEmail });

				if (validEmail) {
					context.setEmail(value);
				}

				break;
			case "mobileNum":
				const validNum =
					value.length < 10 ? "Mobile No must be 10 characters long!" : "";
				setErrors({ mobile: validNum, email: "" });
				if (validNum === "") {
					setMobile(value);
				} else {
					return;
				}
				console.log(validNum);
				break;
			case "selfname":
				setName(value);
				break;
			case "tableNum":
				setTable(value);
				break;
			default:
				break;
		}
	};
	return (
		<Container fluid="md" className="login__form">
			<Col className="col-md-6 login__col">
				<h3>Welcome to Shaik</h3>
				<p>Best in Town</p>
				<Form className="login__innnerForm" onSubmit={handleSubmit}>
					<input
						type="text"
						className="login__input"
						name="selfname"
						placeholder="Name"
						onChange={(e) => handleChange(e)}
					/>

					<input
						type="tel"
						className="login__input"
						name="mobileNum"
						placeholder="Mobile Number"
						onChange={(e) => handleChange(e)}
					/>
					<input
						type="number"
						className="login__input"
						name="tableNum"
						placeholder="Table Number"
						onChange={(e) => handleChange(e)}
					/>
					<input
						type="email"
						className="login__input"
						name="email"
						placeholder="Email"
						onChange={(e) => handleChange(e)}
					/>

					<button className="login__btn" type="submit">
						Get Started
					</button>
				</Form>
			</Col>
		</Container>
	);
}

export default Login;
