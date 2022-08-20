import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../components/Footer";
import Share from "../components/Share";
import Discovery from "../components/Discovery";

export default function Discover() {
	return (
		<>
			<Share />
			<Discovery />
			<Footer />
		</>
	);
}
