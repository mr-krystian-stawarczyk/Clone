import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Price() {
	return (
		<>
			<Container
				fluid
				className=" pt-5"
				style={{ height: "100vh", backgroundColor: "rgb(233, 192, 233)" }}
			>
				<Row className="pt-5" style={{ textAlign: "center" }}>
					<Col className="pt-5 pb-5">
						<h1>Pick the perfect plan</h1>
					</Col>
				</Row>
				<Row
					style={{
						textAlign: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
					sm
					md
					lg
				>
					<Col md={3}>
						<Card
							style={{ height: "18rem" }}
							className="bg-transparent shadow-lg border-5 border-white"
						>
							<Card.Body>
								<div
									className=" rounded"
									style={{ backgroundColor: "purple", color: "white" }}
								>
									<Card.Title>9.99$ / Month</Card.Title>
									<Card.Title>Premium</Card.Title>
								</div>
								<Card.Text>
									<h4>
										The VIP support plan for businesses ready to monetize and
										sell on a larger scale.{" "}
									</h4>
								</Card.Text>
								<a href="/login">
									<Button variant="primary">Get Premium</Button>{" "}
								</a>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3}>
						<Card
							style={{ height: "18rem" }}
							className="bg-transparent shadow-lg border-5 border-white"
						>
							<Card.Body>
								<div
									className=" rounded"
									style={{ backgroundColor: "purple", color: "white" }}
								>
									<Card.Title>13.99$ / Month</Card.Title>
									<Card.Title>Pro Recommended</Card.Title>{" "}
								</div>
								<Card.Text>
									<h4>
										{" "}
										Grow, learn about and own your following forever with a
										branded Linktree.{" "}
									</h4>
								</Card.Text>
								<a href="/login">
									<Button variant="danger">Get Pro</Button>{" "}
								</a>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3}>
						<Card
							style={{ height: "18rem" }}
							className="bg-transparent shadow-lg border-5 border-white"
						>
							<Card.Body>
								<div
									className=" rounded"
									style={{ backgroundColor: "purple", color: "white" }}
								>
									<Card.Title>19.99$ / Month</Card.Title>
									<Card.Title>Starter</Card.Title>{" "}
								</div>
								<Card.Text>
									<h4>
										{" "}
										More customization and control for creators ready to drive
										more traffic to and through their Linktree.{" "}
									</h4>
								</Card.Text>
								<a href="/login">
									<Button variant="primary">Get Starter</Button>
								</a>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3}>
						<Card
							style={{ height: "18rem" }}
							className="bg-transparent shadow-lg border-5 border-white"
						>
							<Card.Body>
								<div
									className=" rounded"
									style={{ backgroundColor: "purple", color: "white" }}
								>
									<Card.Title>Free Plan</Card.Title>
									<Card.Title>Free</Card.Title>{" "}
								</div>
								<Card.Text>
									<h4>
										Unlimited links and a customizable Linktree to connect your
										community to everything you are.
									</h4>
								</Card.Text>
								<a href="/login">
									<Button variant="primary">Join for free</Button>{" "}
								</a>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Price;
