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
									src={"./assets/HBO.png"}
									alt="First slide"
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
									src={"../assets/Comedy.jpg"}
									alt="Second slide"
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
									src={"/assets/redbull.png"}
									alt="Third slide"
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
