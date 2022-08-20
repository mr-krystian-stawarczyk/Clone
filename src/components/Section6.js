import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
export default function Section6() {
	return (
		<>
			<Container
				fluid
				className="bg-light text-dark pt-5 "
				style={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Row
					style={{
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
						fontSize: "4rem",
						lineHeight: "90%",
						fontWeight: "bold",
					}}
				>
					<Col className="d-flex   justify-content-center mt-5 pt-5 mb-3">
						<span>Fast, friendly and powerful.</span>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex   justify-content-center mt-2 mb-3">
						<Button
							style={{
								marginLeft: "1rem",
								height: "40px",
								backgroundColor: "rgb(233, 192, 233)",
								border: "none",
								color: "black",
							}}
							href="/pricing"
						>
							Explore all plans
						</Button>
					</Col>
				</Row>
				<Container fluid>
					<Row
						style={{
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Col md sm={3} xs className="  justify-content-center">
							<Card
								style={{
									alignItems: "center",
									justifyContent: "center",
									textAlign: "center",
								}}
								className="bg-transparent text-dark mx-auto my-auto mt-5 "
							>
								<Card.Img
									variant="top"
									src={"./assets/merakist-CNbRsQj8mHQ-unsplash.jpg"}
								/>
								<Card.Body>
									<Card.Text>
										Seamlessly connect your Linktree with the tools you already
										use.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md sm={3} xs className="  justify-content-center">
							<Card
								style={{
									alignItems: "center",
									justifyContent: "center",
									textAlign: "center",
								}}
								className="bg-transparent text-dark mx-auto my-auto mt-5 "
							>
								<Card.Img variant="top" src={"./assets/2.jpg"} />
								<Card.Body>
									<Card.Text>
										Customize your Linktree to match your brand. Make it feel
										like you.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md sm={3} xs className="   justify-content-center">
							<Card
								style={{
									alignItems: "center",
									justifyContent: "center",
									textAlign: "center",
								}}
								className="bg-transparent text-dark mx-auto my-auto mt-5  "
							>
								<Card.Img variant="top" src={"./assets/1.jpg"} />
								<Card.Body>
									<Card.Text>
										Manage, update and schedule content with our quick, easy
										editor.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
}
