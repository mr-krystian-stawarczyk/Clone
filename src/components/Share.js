import React from "react";

import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Spline from "@splinetool/react-spline";

function Share() {
	return (
		<>
			<Container
				fluid
				className="  pt-5 "
				style={{
					height: "100vh",
					backgroundColor: "rgb(210, 232, 35)",
				}}
				id="section2"
			>
				<Row>
					<Col md={6} sm className="mx-auto my-auto mt-5 pt-5">
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
										fontSize: "4.5vw",
										lineHeight: "98%",
										color: "black",
										fontWeight: "bold",
									}}
								>
									The easiest place to update and share your content
								</Card.Title>

								<Card.Text
									style={{
										fontSize: "2vw",

										color: "black",
									}}
								>
									Help your followers discover everything you’re sharing all
									over the internet, in one simple place. They’ll thank you for
									it!
								</Card.Text>
								<Col className="btn-group ">
									<Button
										style={{
											marginLeft: "1rem",
											height: "40px",
											backgroundColor: "black",
											border: "none",
											color: "white",
										}}
										href="/login"
									>
										Get your free Linktree!
									</Button>
								</Col>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6} sm className="mx-auto my-auto mt-5 pt-5">
						<Spline
							id="spline3"
							scene="https://prod.spline.design/qlaiCVOIiq6j9rV2/scene.splinecode"
							style={{
								maxWidth: "600px !important",
								maxHeight: "500px !important",
							}}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Share;
