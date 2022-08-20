import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";

export default function Section4(data, item) {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<>
			<Container
				fluid
				className="bg-light text-dark pt-5"
				style={{
					height: "100vh",
				}}
				id="section4"
			>
				<Row
					className="row  justify-content-center mt-5 pt-4"
					style={{
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
						fontSize: "4vw",
						lineHeight: "90%",
						fontWeight: "bold",
					}}
				>
					<Col md sm lg>
						<h1>Trusted by 25M+</h1>

						<Carousel
							controls={false}
							indicators={false}
							style={{
								color: "blue",
							}}
						>
							<Carousel.Item>
								<h3>Small Business</h3>
							</Carousel.Item>
							<Carousel.Item>
								<h3>Influencers</h3>
							</Carousel.Item>
							<Carousel.Item>
								<h3>Tech Industy</h3>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
				<Row>
					<Col md sm lg>
						<Carousel
							activeIndex={index}
							onSelect={handleSelect}
							indicators={false}
						>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded shadow-lg"
									src="https://www.tailorbrands.com/wp-content/uploads/2021/04/twitch-logo.png"
									alt="Twich"
									style={{ width: "300px", height: "500px" }}
								/>
								<Carousel.Caption>
									<h3>HBO</h3>
									<p>
										Nulla vitae elit libero, a pharetra augue mollis interdum.
									</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded shadow-lg"
									src="https://lh3.googleusercontent.com/wAPeTvxh_EwOisF8kMR2L2eOrIOzjfA5AjE28W5asyfGeH85glwrO6zyqL71dCC26R63chADTO7DLOjnqRoXXOAB8t2f4C3QnU6o0BA"
									alt="Google Cloud"
									style={{ width: "300px", height: "500px" }}
								/>

								<Carousel.Caption>
									<h3>Comedy Central</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded shadow-lg"
									src="https://i.pinimg.com/564x/a2/e3/7e/a2e37ea31ca0ee55c001b0d4f014754a.jpg"
									alt="Wolf"
									style={{ width: "300px", height: "500px" }}
								/>

								<Carousel.Caption>
									<h3>RedBull</h3>
									<p>
										Praesent commodo cursus magna, vel scelerisque nisl
										consectetur.
									</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</>
	);
}
