import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Spline from "@splinetool/react-spline";
export default function Section3() {
	return (
		<>
			<Container fluid className="bg-white text-dark pt-5 " id="section3">
				<Row>
					<Col md sm className="mx-auto my-auto mt-5 pt-5">
						<Spline
							scene="https://prod.spline.design/BQnRN2YKd-fo6B0x/scene.splinecode"
							id="spline4"
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
										color: "black",
										fontWeight: "bold",
									}}
								>
									Analyze your audience and keep them engaged
								</Card.Title>

								<Card.Text
									style={{
										fontSize: "2vw",

										color: "black",
									}}
								>
									Track your engagement over time, monitor revenue and learn
									what’s converting your audience. Make informed updates on the
									fly to keep them coming back.
								</Card.Text>
								<Col className="btn-group ">
									<Button
										style={{
											marginLeft: "1rem",
											height: "40px",
											backgroundColor: "rgb(233, 192, 233)",
											border: "none",
											color: "black",
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
