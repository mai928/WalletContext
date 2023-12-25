import React, { useContext } from "react";
import { ContextProvider } from "../Context/WalletContext";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TransactionsList = () => {
	const { state, DeleteTransaction } = useContext(ContextProvider);
	let navigate = useNavigate();

	console.log(state);
	let Balance = state.transaction?.map((item) => Number(item.amount));

	Balance = Balance?.reduce((acc, cur) => acc + cur,0);

	const CreateForm = () => {
		navigate(`/create/${Balance}`);
	};

	const OnEdit = (id) => {
		navigate(`/edit/${id}/${Balance}`);
	};

	localStorage.setItem("transactions", JSON.stringify(state.transaction));
	localStorage.setItem("Balance", JSON.stringify(Balance));

	return (
		<div className="Container">
			<div>
				<h3 className="heading">
					Manage your <span style={{ color: "#00ab41" }}>Money</span> Transfer{" "}
				</h3>
				<h3 className="heading">Easy Way </h3>
				<div className="BalanceContainer">
					<button className="createBTN" onClick={CreateForm}>
						Create
					</button>
					<p className="balance">Balance : {Balance} El</p>
				</div>
			</div>

			<div className="ListWrapper">
				<Table striped bordered hover>
					<tbody>
						<tr>
							<th>name</th>
							<th>amount</th>
							<th>type</th>
							<th>date</th>
						</tr>

						{state.transaction?.length > 0 ? (
							state.transaction?.map((item) => (
								<tr key={item.id}>
									<td>{item.name}</td>
									<td>{item.amount}</td>
									<td>{item.type}</td>
									<td>{item.date}</td>
									<td>
										<button
											className="createBTN"
											onClick={() => OnEdit(item.id)}
										>
											Edit
										</button>
									</td>
									<td>
										<button
											className="createBTN"
											onClick={() => DeleteTransaction(item.id)}
										>
											Delete
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>

								<td>
									no transaction yet
								</td>
							</tr> 
						)}
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default TransactionsList;
