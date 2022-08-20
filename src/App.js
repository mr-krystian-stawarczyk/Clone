import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Pricing from "./pages/Pricing";
import Discover from "./pages/Discover";
import Learn from "./pages/Learn";
import Login from "./pages/Login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/Clone" element={<Home />} />
				<Route path="/marketplace" element={<Marketplace />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/discover" element={<Discover />} />
				<Route path="/learn" element={<Learn />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}
export default App;
