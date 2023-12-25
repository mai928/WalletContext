import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextProvider } from "../Context/WalletContext";
import { Table } from "react-bootstrap";

const Create = () => {
	const { addTransaction, state } = useContext(ContextProvider);
	const navigate = useNavigate();
	let [amount, setAmount] = useState("");

	const optionType = ["add fund", "withDraw"];
	const [type, setType] = useState(optionType[0]);

	const paramBalance = useParams();
	const [message, setMessage] = useState("");

	const handleSubmit = () => {
		if (amount > 0) {
			if (Number(amount) === 100 && type === "add fund") {
				amount = parseInt(amount) + 5;
			} else if (Number(amount) === 500 && type === "add fund") {
				amount = parseInt(amount) + 20;
			} else if (Number(amount) === 1000 && type === "add fund") {
				amount = parseInt(amount) + 50;
			} else {
				parseInt(amount);
			}

			const newTransaction = {
				id: Math.floor(Math.random() * 999),
				name: "transaction" + parseInt(state.transaction.length+1),
				amount: amount,
				type: type,
				Balance: paramBalance.balance,
				date: new Date().toLocaleDateString("en-CA"),
			};

			if (type === "add fund") {
				amount = Number(+amount);

				addTransaction(newTransaction);
				navigate("/");
			} else if (
				type === "withDraw" &&
				Number(paramBalance.balance) > Number(amount)
			) {
				amount = Number(-amount);
				const newTransaction = {
					id: Math.floor(Math.random() * 999),
					name: "transaction" + parseInt(state.transaction.length+1),
					amount: amount,
					type: type,
					Balance: paramBalance.balance,
					date: new Date().toLocaleDateString("en-CA"),
				};
				addTransaction(newTransaction);
				navigate("/");
			} else {
				setMessage("your balance is inEfficient");
			}
		} else {
			setMessage("please enter positive number");
		}
	};

	return (
		<div className="FormConatiner">
			<div style={{ color: "rgb(240, 107, 59)",marginBottom:'10px' }}>{message}</div>

			<div className="forms">
				<div>
					<label style={{ marginTop: "30px" }}>amount :</label>
					<input
						min="0"
						name="amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						type="number"
					/>
				</div>
				<div style={{ marginTop: "20px" }}>
					<label>Type : </label>
					<select onChange={(e) => setType(e.target.value)}>
						{optionType.map((item, index) => (
							<option key={index} id={index} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>
				<button
					style={{ marginTop: "40px" }}
					className="createBTN"
					onClick={handleSubmit}
					type="submit"
				>
					submit
				</button>
			</div>
		</div>
	);
};

export default Create;
