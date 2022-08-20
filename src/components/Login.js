import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import LoginForm from "./LoginForm";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Login() {
	return (
		<>
			<ThemeProvider
				breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
				minBreakpoint="xxs"
			>
				<Navigation />
				<LoginForm />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default Login;
