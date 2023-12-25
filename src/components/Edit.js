import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextProvider } from "../Context/WalletContext";

const Edit = () => {
	const { EditTransaction, state } = useContext(ContextProvider);
	const navigate = useNavigate();
	const param = useParams();

	let [type, setType] = useState(null);

	const [id, setID] = useState(null);
	const [name, setName] = useState(null);
	const [date, setDate] = useState(null);

	const [message, setMessage] = useState("");

	let [amount, setAmount] = useState("");

	const data = state.transaction;

	useEffect(() => {
		const id = param.id;
		const SelectedTransaction = data.find((item) => item.id === parseInt(id));
		setType(SelectedTransaction.type);
		setAmount(SelectedTransaction.amount);
		setID(SelectedTransaction.id);
		setName(SelectedTransaction.name);
		setDate(SelectedTransaction.date);
	}, [param, data]);

	const OnEdit = () => {
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

			if (type === "add fund") {
				amount = Number(+amount);
				const newData = {
					id: id,
					name: name,
					amount: amount,
					type: type,
					date: date,
				};
				EditTransaction(newData);
				navigate("/");
			} else if (
				type === "withDraw" &&
				Number(param.balance) > Number(amount)
			) {
				amount = Number(-amount);
				const newData = {
					id: id,
					name: name,
					amount: amount,
					type: type,
					date: date,
				};
				EditTransaction(newData);
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
			<div style={{ color: "rgb(240, 107, 59)", marginBottom: "10px" }}>
				{message}
			</div>

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
				<p style={{ marginTop: "20px" }}>
					<span>type : </span>
					{type}
				</p>
				<button
					style={{ marginTop: "10px" }}
					className="createBTN"
					type="submit"
					onClick={OnEdit}
				>
					Edit
				</button>
			</div>
		</div>
	);
};

export default Edit;
