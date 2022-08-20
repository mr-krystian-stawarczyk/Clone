import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Share from "../components/Share";
import Discovery from "../components/Discovery";

export default function Discover() {
	return (
		<>
			<Navigation />
			<Share />
			<Discovery />
			<Footer />
		</>
	);
}
