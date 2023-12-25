import logo from "./logo.svg";
import "./App.css";
import MainWallet from "./components/MainWallet";
import { WalletContext } from "./Context/WalletContext";

function App() {
	return (
			<WalletContext>
				<MainWallet  />
			</WalletContext>
	);
}

export default App;
