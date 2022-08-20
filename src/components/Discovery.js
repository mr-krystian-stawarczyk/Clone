import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Discovery() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchData();
	}, [posts]);
	const fetchData = async () => {
		const { data } = await axios.get(
			"https://api.test.dokume.net/public.php/object/465?include_data=true",
			{
				headers: {
					"X-DOKUME-API-KEY":
						"aJorRrbtlcNfONLWdg2tg0Wz1vEFeOjDhrxygQFUb9mdJSOexoUm6vjSmOt27hvq",
					"X-DOKUME-PROFILEID": "21152",
				},
			}
		);

		setPosts(data.MESSAGE);
	};

	if (posts.length === 0) {
		return (
			<h1 className="bg-danger rounded">
				Please Wait Loading data from database...
			</h1>
		);
	}

	return (
		<>
			<Container fluid className="bg-light pt-5 pb-5">
				<Row className="pt-5" style={{ textAlign: "center" }}>
					<Col className="pt-5">
						<h1>Discovery Component Fetched data</h1>
					</Col>
				</Row>
				<Row
					style={{
						textAlign: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{posts.map((item) => (
						<Card
							className="bg-transparent shadow-lg"
							style={{
								height: "26rem",
								width: "18rem",
								margin: "1rem",
								overflow: "hidden",
							}}
							key={item.ID}
						>
							<Card.Img
								variant="top"
								src={item.LINK_THUMBNAIL}
								style={{
									height: "auto",
									width: "14rem",
									margin: "1rem",
									overflow: "hidden",
									objectFit: "cover",
								}}
							/>
							<Card.Body>
								<Card.Title>{item.LINK_TITLE}</Card.Title>
								<Card.Text>
									<h3 className="pt-2 ">{item.USERNAME}</h3>
									<h3 className="pt-2 ">
										<a href={item.LINK_THUMBNAIL}> Link:</a>
									</h3>
								</Card.Text>
							</Card.Body>
						</Card>
					))}
				</Row>
			</Container>
		</>
	);
}
