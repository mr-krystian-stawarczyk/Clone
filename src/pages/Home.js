import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Fetch from "../components/Fetch";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Section8 from "../components/Section8";
import Footer from "../components/Footer";

function Home() {
	return (
		<>
			<Navigation />
			<Header />
			<Section1 />
			<Section2 />
			<Section3 />
			<Fetch />
			<Section4 />
			<Section5 />
			<Section6 />
			<Section7 />
			<Section8 />
			<Footer />
		</>
	);
}
export default Home;
