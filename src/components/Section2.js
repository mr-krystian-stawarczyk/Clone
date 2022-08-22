import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Spline from "@splinetool/react-spline";
import { NavLink } from "react-router-dom";
export default function Section2() {
	return (
		<>
			<Container
				fluid
				className="  pt-5 "
				style={{
					height: "100vh",
					backgroundColor: "rgb(120, 0, 22)",
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
										color: "rgb(233, 192, 233)",
										fontWeight: "bold",
									}}
								>
									Share your Linktree anywhere you like!
								</Card.Title>

								<Card.Text
									style={{
										fontSize: "2vw",

										color: "rgb(233, 192, 233)",
									}}
								>
									Add your unique Linktree URL to all the platforms and places
									you find your audience. Then use your QR code to drive your
									offline traffic online.
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
									>
										<NavLink
											to="/login"
											className=" text-dark "
											style={{ textDecoration: "none" }}
										>
											Get started for free!
										</NavLink>
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
