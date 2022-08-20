import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const LoginForm = () => {
	return (
		<Container className="bg-light pt-5" style={{ height: "100vh" }} fluid>
			<Row className="pt-5" style={{ textAlign: "center" }}>
				<Col className="pt-5">
					<h1>Log In Site</h1>
				</Col>
			</Row>
			<Row
				style={{
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col md={4}>
					<form>
						<h3>Sign Up</h3>
						<div className="mb-3">
							<label>First name</label>
							<input
								type="text"
								className="form-control"
								placeholder="First name"
							/>
						</div>
						<div className="mb-3">
							<label>Last name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Last name"
							/>
						</div>
						<div className="mb-3">
							<label>Email address</label>
							<input
								type="email"
								className="form-control"
								placeholder="Enter email"
							/>
						</div>
						<div className="mb-3">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Enter password"
							/>
						</div>
						<div className="d-grid">
							<button type="submit" className="btn btn-primary">
								Sign Up
							</button>
						</div>
						<p className="forgot-password text-right">
							Already registered <a href="/sign-in">sign in?</a>
						</p>
					</form>
				</Col>
			</Row>
			<Row>
				<Col></Col>
			</Row>
		</Container>
	);
};

export default LoginForm;
