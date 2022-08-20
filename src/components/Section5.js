import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
export default function Section5() {
	return (
		<>
			<Container fluid className="bg-light text-dark pt-5 " id="section5">
				<Row>
					<Col lg md={3} sm={6} className="mx-auto ">
						<Card
							className="  mx-auto my-auto mt-5 "
							style={{
								backgroundColor: "rgb(233, 192, 233)",
								alignItems: "center",
								justifyContent: "center",
								color: "rgb(80, 34, 116)",
								textAlign: "center",
							}}
						>
							<Card.Img
								variant="top"
								src={"../assets/div1.png"}
								style={{ width: "400px", height: "270px" }}
							/>
							<Card.Body>
								<Card.Text>
									Share your content in limitless ways on your Linktree anywhere
									You are.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg md={3} sm={6} className="mx-auto ">
						<Card
							style={{
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: "rgb(210, 232, 35)",
								textAlign: "center",
							}}
							className=" text-dark mx-auto my-auto mt-5 "
						>
							<Card.Img
								variant="top"
								src={"/assets/div2.png"}
								style={{ width: "400px", height: "270px" }}
							/>
							<Card.Body>
								<Card.Text>
									Sell products and collect payments. It’s monetization made
									simple.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg md={3} sm={6} className="mx-auto ">
						<Card
							style={{
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: "rgb(120, 0, 22)",
								color: "rgb(233, 192, 233)",
								textAlign: "center",
							}}
							className=" mx-auto my-auto mt-5 "
						>
							<Card.Img
								variant="top"
								src={"./assets/div3.png"}
								style={{ width: "400px", height: "270px" }}
							/>
							<Card.Body>
								<Card.Text>
									Grow, own and engage your audience by unifying them in one
									place.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}
