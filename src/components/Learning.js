import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Learning = () => {
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
		return (
			<h1 className="bg-danger rounded">
				Please Wait Loading data from database...
			</h1>
		);
	}

	return (
		<Container
			fluid
			className=" pt-5"
			style={{ height: "100vh", backgroundColor: "#CF4C30" }}
		>
			<Row
				className="pt-5"
				style={{
					textAlign: "center",

					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col className="pt-5" md={4}>
					<h1>Learn Component</h1>
					<h3> Informations from database : </h3>
				</Col>
			</Row>

			<Row
				style={{
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col md={6} className=" mb-5">
					<Card
						className=" shadow-lg"
						style={{
							margin: "1rem",
							overflow: "hidden",
							backgroundColor: "gold",
							height: "30rem",
						}}
						key={posts[1].ID}
					>
						<h1 className="bg-primary rounded"> Card IMG:</h1>
						<a href={posts[1].LINK_THUMBNAIL}>
							<Card.Img
								variant="top"
								src={posts[1].LINK_THUMBNAIL}
								style={{
									height: "auto",
									width: "14rem",
									margin: "1rem",
									overflow: "hidden",
									objectFit: "cover",
								}}
							/>
						</a>
						<Card.Body>
							<h1 className="bg-primary rounded"> Link URL: </h1>
							<a href={posts[1].LINK_URL}>
								<Card.Title>{posts[1].LINK_URL}</Card.Title>
							</a>
							<h1 className="bg-primary rounded"> Profile IMG:</h1>
							<a href={posts[1].PROFILE_PICTURE}>
								<Card.Img
									variant="top"
									src={posts[1].PROFILE_PICTURE}
									style={{
										height: "auto",
										width: "14rem",
										margin: "1rem",
										overflow: "hidden",
										objectFit: "cover",
									}}
								/>
							</a>
						</Card.Body>
					</Card>
				</Col>
				<Col
					className="bg-secondary rounded mb-5"
					md={6}
					sm
					lg
					xl
					style={{
						height: "30rem",

						margin: "1rem",
						overflow: "hidden",
						backgroundColor: "gold",
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
			</Row>
		</Container>
	);
};

export default Learning;
