import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";

import Footer from "../components/Footer";
import Learning from "../components/Learning";

export default function Learn() {
	return (
		<>
			<ThemeProvider
				breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
				minBreakpoint="xxs"
			>
				<Learning />

				<Footer />
			</ThemeProvider>
		</>
	);
}
