import React from "react";
import {
	Col,
	Container,
	Row,
	Form,
	Button,
	InputGroup,
	Image,
} from "react-bootstrap";

export default function Footer() {
	return (
		<>
			<Container
				fluid
				className=" text-dark pt-5  "
				style={{ backgroundColor: "rgb(80, 34, 116)" }}
			>
				<Container className="mt-4 pt-5">
					<Row
						style={{
							alignItems: "center",
							justifyContent: "center",
							textAlign: "center",
							color: "pink",
							fontSize: "5rem",
							lineHeight: "90%",
							fontWeight: "bold",
						}}
					>
						<Col md={8}>
							<span> Jumstart your corner of the internet today</span>
						</Col>
					</Row>
					<Row
						className="mb-5"
						style={{
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Col className="btn-group mt-3 " md={4}>
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

									backgroundColor: "rgb(210, 232, 35)",
								}}
								className="rounded"
								href="/login"
							>
								Claim Your Linktree
							</Button>
						</Col>
					</Row>
				</Container>

				<Container className="bg-light rounded">
					<Row className="mx-auto my-auto mt-5 pt-5">
						<Col md={3} sm={6}>
							<h4>Company</h4>
							<ul className="list-unstyled">
								<li>The Linktree Blog</li>
								<li>Engineering Blog</li>
								<li>Marketplace</li>
								<li>About</li>
								<li>Press</li>
								<li>Careers</li>
							</ul>
						</Col>
						<Col md={3} sm={6}>
							<h4>Community</h4>
							<ul className="list-unstyled">
								<li>Linktree for Enterprise</li>
								<li>2022 Creator Report</li>
								<li>Charities</li>
								<li>Linktree Ambassador</li>
								<li>Community Spotlight</li>
								<li>Creator Profile Directory</li>
							</ul>
						</Col>
						<Col md={3} sm={6}>
							<h4>Support</h4>
							<ul className="list-unstyled">
								<li>Help Topics</li>
								<li>Getting Started</li>
								<li>Linktree Pro</li>
								<li>Features & How-Tos</li>
								<li>FAQs</li>
								<li>Report a Violation</li>
							</ul>
						</Col>
						<Col md={3} sm={6}>
							<h4>Trust & Legal</h4>
							<ul className="list-unstyled">
								<li>Terms & Conditions</li>
								<li>Privacy Notice</li>
								<li>Cookie Notice</li>
								<li>Trust Center</li>
							</ul>
						</Col>
					</Row>
					<Row className="mt-2 mb-5 pb-3">
						<Col md={12}>
							<Form className="d-flex ">
								<Button
									className="btn  text-dark rounded  "
									style={{
										marginRight: "1rem",
										width: "100px",
										height: "50px",
										backgroundColor: "rgb(239, 240, 236)",
										border: "none",
									}}
									href="/login"
								>
									Log In
								</Button>
								<Button
									className="btn  text-dark rounded "
									style={{
										marginRight: "1rem",
										width: "200px",
										height: "50px",
										backgroundColor: "rgb(210, 232, 35)",
										border: "none",
									}}
									href="/login"
								>
									Get started for free
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>

				<Container className=" rounded  " id="footerTree">
					<Row
						style={{
							alignItems: "center",
							justifyContent: "center",
							textAlign: "center",
							height: "300px",
							fontSize: "8vw",
						}}
					>
						<Col md sm>
							<span>Linktree</span>
							<Image
								fluid
								src={"./assets/tree-svgrepo-com.svg"}
								width="90"
								height="90"
								alt=""
							/>
						</Col>
					</Row>
				</Container>

				<Container className="rounded mt-2">
					<Row
						style={{
							color: "rgb(233, 192, 233)",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
						}}
					>
						<Col md={6}>
							<h6>
								We acknowledge the Traditional Custodians of the land on which
								our office stands, The Wurundjeri people of the Kulin Nation,
								and pay our respects to Elders past, present and emerging.
							</h6>
						</Col>
					</Row>
					<Row
						style={{
							color: "rgb(233, 192, 233)",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							marginTop: "1rem",
						}}
					>
						<Col md={6}>
							<h6>
								Linktree Pty Ltd, 223 Liverpool St, Gadigal (Darlinghurst) NSW
								2010
							</h6>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
}
