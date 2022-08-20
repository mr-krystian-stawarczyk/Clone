import { useState, useEffect } from "react";

import { Col, Container, Row, Button, Form, Carousel } from "react-bootstrap";
import axios from "axios";

export default function Fetch() {
	const [posts, setPosts] = useState([]);
	const [formData, setFormData] = useState({
		USERNAME: "",
		LINK_THUMBNAIL: "",
		LINK_TITLE: "",
	});

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

	const postData = async (e) => {
		e.preventDefault();
		console.log("form submited");
		const { data } = await axios.post(
			"https://api.test.dokume.net/public.php/object/465?include_data=true",
			formData,
			{
				headers: {
					"X-DOKUME-API-KEY":
						"aJorRrbtlcNfONLWdg2tg0Wz1vEFeOjDhrxygQFUb9mdJSOexoUm6vjSmOt27hvq",
					"X-DOKUME-PROFILEID": "21152",
				},
			}
		);
		console.log("form success");
		setFormData({
			USERNAME: "",
			LINK_THUMBNAIL: "",
			LINK_TITLE: "",
		});
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	if (posts.length === 0) {
		return <div>Loading data...</div>;
	}

	return (
		<Container
			fluid
			className="fetch pt-5 bg-light "
			style={{ height: "100vh", overflow: "hidden" }}
		>
			<Row
				className="row  justify-content-center pt-5 "
				style={{
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
					fontSize: "4vw",
					lineHeight: "90%",
					fontWeight: "bold",
				}}
			>
				<Col md sm lg className="pt-5">
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

			<Row style={{ justifyContent: "center" }}>
				<Col
					className="bg-secondary rounded mb-5"
					md={3}
					sm
					lg
					xl
					style={{
						marginLeft: "3rem",
						maxHeight: "300px",
						marginTop: "3rem",
						marginRight: "3rem",
					}}
				>
					<Form onSubmit={postData}>
						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label>Attach Img URL</Form.Label>
							<Form.Control
								type="url"
								name="LINK_THUMBNAIL"
								onChange={handleChange}
								value={formData.LINK_THUMBNAIL}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Title</Form.Label>
							<Form.Control
								onChange={handleChange}
								type="text"
								name="LINK_TITLE"
								placeholder="Enter title"
								value={formData.LINK_TITLE}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Username</Form.Label>
							<Form.Control
								onChange={handleChange}
								type="text"
								name="USERNAME"
								placeholder="Username"
								value={formData.USERNAME}
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>

				<Col md={8} sm lg xl className=" mt-5">
					<Carousel indicators={false} fade={true} style={{ height: "500px" }}>
						{posts.map((item) => (
							<Carousel.Item key={item.ID} className="bg-secondary  rounded ">
								<img
									className="d-block rounded pt-5"
									src={item.LINK_THUMBNAIL}
									alt="First slide"
									style={{
										height: "300px",
										width: "auto",
										objectFit: "contain",
										padding: "10px",
									}}
								/>
								<Carousel.Caption
									key={item.ID}
									className="text-dark "
									style={{ paddingLeft: "5rem" }}
								>
									<h3 className="pt-5 ">{item.LINK_TITLE}</h3>
									<h3 className="pt-5 ">{item.USERNAME}</h3>
									<h3 className="pt-5 ">
										<a href={item.LINK_THUMBNAIL}> Link:</a>
									</h3>
								</Carousel.Caption>
							</Carousel.Item>
						))}
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
}
