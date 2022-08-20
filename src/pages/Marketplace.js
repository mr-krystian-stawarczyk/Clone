import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../components/Navigation";

import Footer from "../components/Footer";

import Marketplaces from "../components/Marketplaces";

function Marketplace() {
	return (
		<>
			<Navigation />
			<Marketplaces />
			<Footer />
		</>
	);
}

export default Marketplace;
