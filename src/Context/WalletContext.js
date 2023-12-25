import { createContext, useReducer } from "react";
import React from "react";
import { WalletReducer } from "../reducer";

export const ContextProvider = createContext();

export const WalletContext = ({ children }) => {
	const initialValues = {
		transaction: [],
	};
	const [state, dispatch] = useReducer(WalletReducer, initialValues);

	const addTransaction = (transaction) => {
		dispatch({
			type: "add_transcation",
			payload: transaction,
		});
	};

	const EditTransaction = (transaction) => {
		dispatch({
			type: "Edit_transaction",
			payload: transaction,
		});
	};

	const DeleteTransaction = (transactionID) => {
		dispatch({
			type: "Delete_transaction",
			payload: transactionID,
		});
	};
	return (
		<ContextProvider.Provider
			value={{ addTransaction, EditTransaction, DeleteTransaction, state }}
		>
			{children}
		</ContextProvider.Provider>
	);
};
