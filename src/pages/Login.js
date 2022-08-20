import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import LoginForm from "../components/LoginForm";

import Footer from "../components/Footer";

function Login() {
	return (
		<>
			<ThemeProvider
				breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
				minBreakpoint="xxs"
			>
				<LoginForm />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default Login;
