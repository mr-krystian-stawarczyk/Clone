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
								<Carousel.Caption className="text-dark">
									<h2>Twitch</h2>
									<h4>Share Your content whatever You want!</h4>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded shadow-lg"
									src="https://lh3.googleusercontent.com/wAPeTvxh_EwOisF8kMR2L2eOrIOzjfA5AjE28W5asyfGeH85glwrO6zyqL71dCC26R63chADTO7DLOjnqRoXXOAB8t2f4C3QnU6o0BA"
									alt="Google Cloud"
									style={{ width: "300px", height: "500px" }}
								/>

								<Carousel.Caption className="text-dark">
									<h2>Google Cloud</h2>
									<h4>Link Your profile to any links.</h4>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded shadow-lg"
									src="https://brandirectory-live-public.s3.eu-west-2.amazonaws.com/logos/65a8d475-56ab-4baa-8625-56524ae56fd0.png%3Funnamed.png"
									alt="Wolf"
									style={{ width: "300px", height: "500px" }}
								/>

								<Carousel.Caption className="text-dark">
									<h2>Instagram</h2>
									<h4>Create profile and join Your links!</h4>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</>
	);
}
