import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, NavLink } from "react-router-dom";

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
						<Navbar.Brand>
							<Link
								to="/Clone/"
								style={{ textDecoration: "none" }}
								className="text-dark"
							>
								<Image
									src={"./assets/tree-svgrepo-com.svg"}
									width="30px"
									height="30px"
									alt="tree"
									style={{ marginRight: "1rem" }}
								/>
								Linktree
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav className="me-auto my-2 my-lg-0 p-1 m-1" navbarScroll>
								<NavLink
									to="/marketplace"
									className=" text-dark mr-1"
									style={{ margin: "1rem", textDecoration: "none" }}
								>
									Marketplace
								</NavLink>

								<NavLink
									to="/discover"
									className=" text-dark mr-1"
									style={{ margin: "1rem", textDecoration: "none" }}
								>
									Discover
								</NavLink>

								<NavLink
									to="/pricing"
									className=" text-dark mr-1"
									style={{ margin: "1rem", textDecoration: "none" }}
								>
									Pricing
								</NavLink>

								<NavLink
									to="/learn"
									className=" text-dark mr-1"
									style={{ margin: "1rem", textDecoration: "none" }}
								>
									Learn
								</NavLink>
							</Nav>

							<Form className="d-flex ">
								<Button
									className="btn btn-secondary text-dark rounded  "
									style={{ marginRight: "1rem" }}
								>
									<NavLink
										to="/login"
										className=" text-dark mr-1"
										style={{ margin: "1rem", textDecoration: "none" }}
									>
										Log In
									</NavLink>
								</Button>
								<Button className="btn btn-dark text-light rounded ">
									<NavLink
										to="/login"
										className=" text-light mr-1"
										style={{ margin: "1rem", textDecoration: "none" }}
									>
										Sign Up Free
									</NavLink>
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
