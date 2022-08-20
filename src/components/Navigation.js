import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

function Navigation() {
	return (
		<>
			<Container className="bg-dark  ">
				<Navbar
					bg="light"
					expand="lg"
					fixed="top"
					className="rounded mt-5 border "
					id="navbar"
				>
					<Container>
						<Navbar.Brand href="/Clone">
							<Image
								src={"../assets/tree-svgrepo-com.svg"}
								width="30px"
								height="30px"
								alt="tree"
								style={{ marginRight: "1rem" }}
							/>
							Linktree
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav className="me-auto my-2 my-lg-0 p-1 m-1" navbarScroll>
								<Link to="/Clone">Home</Link>
								<Link to="/marketplace">Marketplace</Link>
								<Link to="/discover">Discover</Link>
								<Link to="/pricing">Pricing</Link>
								<Link to="/learn">Learn</Link>
							</Nav>
							<Form className="d-flex ">
								<Button
									href="/login"
									className="btn btn-secondary text-dark rounded  "
									style={{ marginRight: "1rem" }}
								>
									<Link to="/login">Log In</Link>
								</Button>
								<Button
									href="/login"
									className="btn btn-dark text-light rounded "
								>
									<Link to="/learn">Sign Up Free</Link>
								</Button>
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Container>
		</>
	);
}
export default Navigation;
