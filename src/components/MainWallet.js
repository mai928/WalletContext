import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./Edit";
import TransactionsList from "./TransactionsList";
import Create from "./Create";

const MainWallet = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
                <Route element={<TransactionsList />} path="/" />
                <Route element={<Create/>} path="/create/:balance" />
					<Route element={<Edit />} path="/edit/:id/:balance" />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default MainWallet;
