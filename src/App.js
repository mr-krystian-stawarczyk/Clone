import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Pricing from "./pages/Pricing";
import Discover from "./pages/Discover";

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/"> Home</Link>
					</li>
					<li>
						<Link to="/marketplace"> marketplace</Link>
					</li>
					<li>
						<Link to="/pricing"> pricing</Link>
					</li>
					<li>
						<Link to="/discover"> pricing</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/marketplace" element={<Marketplace />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/discover" element={<Discover />} />
			</Routes>
		</>
	);
}
export default App;
