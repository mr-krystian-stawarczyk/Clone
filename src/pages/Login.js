import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import LoginForm from "../components/LoginForm";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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
