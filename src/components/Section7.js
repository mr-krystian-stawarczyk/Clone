import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Section7() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<>
			<Container
				fluid
				className="bg-light text-dark pt-5 "
				style={{
					height: "100vh",
					justifyContent: "center",
					alignItems: "center",
				}}
				id="section7"
			>
				<Row
					style={{
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
						fontSize: "4rem",
						lineHeight: "90%",
						fontWeight: "bold",
					}}
				>
					<Col className="d-flex   justify-content-center mt-5 pt-5 mb-3">
						<span>As featured in...</span>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex   justify-content-center mt-2 mb-3">
						<Button
							variant="secondary"
							style={{
								marginLeft: "1rem",
								height: "40px",
								width: "200px",
							}}
						>
							TC
						</Button>
						<Button
							variant="secondary"
							style={{
								marginLeft: "1rem",
								height: "40px",
								width: "200px",
							}}
						>
							INSIDER
						</Button>
						<Button
							variant="secondary"
							style={{
								marginLeft: "1rem",
								height: "40px",
								width: "200px",
							}}
						>
							Mashable
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex   justify-content-center">
						<Carousel
							activeIndex={index}
							onSelect={handleSelect}
							indicators={false}
						>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded  rounded-circle"
									src="../assets/chris.jpg"
									alt="First slide"
								/>
								<Carousel.Caption>
									<h3>I use Link analytics everyday!</h3>
									<p>Luke Kidgell Comedian</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded  rounded-circle"
									src="../assets/kris.jpg"
									alt="Second slide"
								/>

								<Carousel.Caption className="text-dark">
									<h3>Link helps my customers a lot!</h3>
									<p>Christopher Founder of Pasry Chef</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded  rounded-circle"
									src="../assets/sig.jpg"
									alt="Third slide"
								/>

								<Carousel.Caption>
									<h3>Linktree simplifies proces of creation</h3>
									<p>Sig Youtuber. Content Creator</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</>
	);
}
