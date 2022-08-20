import React from "react";
import { Container, Row, Col, Card, InputGroup, Form } from "react-bootstrap";
import Spline from "@splinetool/react-spline";

function Marketplaces() {
	return (
		<>
			<Container
				fluid
				className=" text-dark pt-5 "
				id="section3"
				style={{ backgroundColor: "rgb(120, 0, 22)", height: "100vh" }}
			>
				<Row>
					<Col md={5} sm className="mx-auto my-auto mt-5 pt-5">
						<Card
							style={{
								alignItems: "center",
								justifyContent: "center",
								border: "none",
							}}
							className="bg-transparent text-white pt-5"
						>
							<Card.Body>
								<Card.Title
									style={{
										fontSize: "5vw",
										lineHeight: "98%",
										color: "rgb(233, 192, 233)",
										fontWeight: "bold",
									}}
								>
									Connect more of you
								</Card.Title>

								<Card.Text
									style={{
										fontSize: "2vw",

										color: "rgb(233, 192, 233)",
									}}
								>
									Bring the best experiences across the internet to one place:
									your Linktree
								</Card.Text>
								<Col className="btn-group ">
									<InputGroup
										className="mb-3 "
										style={{ width: "160px", height: "50px" }}
									>
										<Form.Control
											placeholder="linktr.ee/yourname"
											aria-label="Username"
											aria-describedby="basic-addon1"
										/>
									</InputGroup>
								</Col>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6} sm className="mx-auto my-auto mt-5 pt-5">
						<Spline
							scene="https://prod.spline.design/BQnRN2YKd-fo6B0x/scene.splinecode"
							id="spline4"
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Marketplaces;
