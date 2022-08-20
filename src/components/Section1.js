import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Spline from "@splinetool/react-spline";
function Section1() {
	return (
		<>
			<Container
				fluid
				className="  pt-5 "
				style={{
					height: "100vh",
					backgroundColor: "rgb(233, 192, 233)",
				}}
				id="section1"
			>
				<Row>
					<Col md sm className="mx-auto my-auto mt-5 pt-5">
						<Spline
							id="spline2"
							scene="https://prod.spline.design/H224ysTKVD-UJyUV/scene.splinecode"
							style={{ width: "800px", height: "600px" }}
						/>
					</Col>
					<Col md sm className="mx-auto my-auto mt-5 pt-5">
						<Card
							style={{
								alignItems: "center",
								justifyContent: "center",
								border: "none",
							}}
							className="bg-transparent text-white"
						>
							<Card.Body>
								<Card.Title
									style={{
										fontSize: "5vw",
										lineHeight: "98%",
										color: "rgb(80, 34, 116)",
										fontWeight: "bold",
									}}
								>
									Create and customize your bio link in minutes
								</Card.Title>

								<Card.Text
									style={{
										fontSize: "2vw",
										color: "rgb(80, 34, 116)",
									}}
								>
									Connect your socials, website, store, videos, music, podcast,
									events and more. It all comes together in a link in bio
									landing page designed to convert.
								</Card.Text>
								<Col className="btn-group ">
									<Button
										variant="secondary"
										style={{
											marginLeft: "1rem",
											height: "40px",
											backgroundColor: "rgb(80, 34, 116)",
										}}
										href="/login"
									>
										Get started for free!
									</Button>
								</Col>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Section1;
