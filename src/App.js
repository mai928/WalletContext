import logo from "./logo.svg";
import "./App.css";
import MainWallet from "./components/MainWallet";
import { WalletContext } from "./Context/WalletContext";
import Form from "./components/Form";

function App() {
	return (
			<WalletContext>
				<MainWallet  />
        {/* <Form/> */}
			</WalletContext>
	);
}

export default App;
