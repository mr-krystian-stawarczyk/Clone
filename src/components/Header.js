import React from "react";
import { NavLink } from "react-router-dom";
import {
	Container,
	Row,
	Col,
	Card,
	InputGroup,
	Form,
	Button,
} from "react-bootstrap";

import Spline from "@splinetool/react-spline";

function Header() {
	return (
		<>
			<Container
				fluid
				className="  pt-5 "
				style={{
					backgroundColor: "rgb(37, 79, 26)",
					height: "100vh",
				}}
				id="header"
			>
				<Row>
					<Col sm md lg xl className="mx-auto my-auto mt-5 pt-5">
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
										color: "rgb(210, 232, 35)",
										fontWeight: "bold",
									}}
								>
									Everything you are. In one simple link.
								</Card.Title>

								<Card.Text
									style={{
										fontSize: "2vw",
										color: "rgb(210, 232, 35)",
									}}
								>
									Join 25M+ people and share everything you create, curate and
									sell online. All from the one link in bio.
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
									<Button
										style={{
											marginLeft: "1rem",
											color: "black",
											border: "none",
											height: "50px",
											backgroundColor: "rgb(233, 192, 233)",
										}}
										className="rounded"
									>
										<NavLink
											to="/login"
											className=" text-dark "
											style={{ textDecoration: "none" }}
										>
											Claim Your Linktree
										</NavLink>
									</Button>
								</Col>
							</Card.Body>
						</Card>
					</Col>

					<Col sm md lg xl className="mx-auto my-auto mt-5 pt-5">
						<Spline
							id="spline1"
							scene="https://prod.spline.design/1FU3vE4M9vpcgdti/scene.splinecode"
							style={{ width: "800px", height: "600px" }}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Header;
