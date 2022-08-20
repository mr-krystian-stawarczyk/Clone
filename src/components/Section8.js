import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function Section8() {
	return (
		<>
			<Container
				fluid
				className=" text-dark pt-4 "
				style={{ height: "100vh", backgroundColor: "rgb(120, 0, 22)" }}
				id="section8"
			>
				<Row
					style={{
						fontWeight: "bold",
						fontSize: "3rem",
						lineHeight: "90%",
						marginBottom: "2rem",
						color: "rgb(233, 192, 233)",
						textAlign: "center",
					}}
				>
					<Col md sm className="mx-auto my-auto mt-5 pt-5">
						<span> Got question ?</span>
					</Col>
				</Row>

				<Row
					style={{
						alignItems: "center",
						justifyContent: "center",
						border: "none",
					}}
				>
					<Col md sm>
						<Accordion flush>
							<Accordion.Item eventKey="0" className="mt-2 mb-2 rounded ">
								<Accordion.Header>
									<h3>What is a Linktree?</h3>
								</Accordion.Header>
								<Accordion.Body>
									Linktree is a single link that you can add to your bio on any
									social media platform, in your email signatures (and so many
									other places!) that enables you to share many links so your
									followers and visitors can choose which of your content to
									connect with. <br></br>“This is easy, convenient, fast,
									mobile-friendly and the perfect way to share everything you
									have going on – many projects – in one simple easy link! I
									love it!!” – Theresa B
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1" className="mt-2 mb-2 rounded">
								<Accordion.Header>
									<h3>What is Linktree used for?</h3>
								</Accordion.Header>
								<Accordion.Body>
									Linktree is a platform that enables you to share more than one
									link from your social media bios. It’s used on social media,
									email signatures, video descriptions, show notes, live
									streams, webinars and even in the offline world using QR codes
									to connect people to your online identity. “It’s a wonderful
									way to direct traffic to what matters.” – Grem
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2" className="mt-2 mb-2 rounded">
								<Accordion.Header>
									<h3>Why do I need a Linktree?</h3>
								</Accordion.Header>
								<Accordion.Body>
									Linktree is a single link that you can use to connect
									audiences to everything you are, everything you do and
									everything you care about. It enables you to share many links
									in one, so your followers, visitors and customers can find
									everything they’re looking for in one place. You can add it to
									your bio link on social media platforms like Tiktok and
									Instagram, include it in your email signatures, and even
									display it as a QR code to get your offline audiences
									connected with you online. Linktree is for everyone – that’s
									why more than 25 million creators already swear by it!
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="3" className="mt-2 mb-2 rounded">
								<Accordion.Header>
									<h3>Is Linktree the original link in bio tool?</h3>
								</Accordion.Header>
								<Accordion.Body>
									The short answer? Yes! Back in 2016, we created Linktree as an
									easy way to link out to all socials and unify digital
									ecosystems, pioneering the link-in-bio category. Linktree
									remains the leading, biggest and most popular link-in-bio
									solution – but that’s just the beginning. You can use your
									Linktree URL or QR code anywhere your audience is, including
									on your business cards, in your email signature, on
									paper-based posters and brochures, and even on your resumé. If
									you don’t have a website, that’s fine. If you have a Linktree,
									you don’t need one!
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="4" className="mt-2 mb-2 rounded">
								<Accordion.Header>
									<h3>Can you get paid and sell things from a Linktree?</h3>
								</Accordion.Header>
								<Accordion.Body>
									Yes, you can! We offer plenty of ways to sell products and
									monetize your audience. You can collect tips, request payments
									for services, collect revenue from affiliate links, and sell
									your products right in your Linktree. A lot of Linktree
									creators see incredible results with online sales on Linktree,
									because it removes the extra steps involved in a purchase.
									With Paypal or Square right in your Linktree, your customers
									won’t even need to leave your social media to go to another
									site and pay! “We love how Linktree has helped us manage our
									business by having all social media and ways to pay in one
									location. The QR code has made it easy for customers to access
									it all!” – Tiffany
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="5" className="mt-2 mb-2 rounded">
								<Accordion.Header>
									<h3>Is Linktree safe to use on any social media platform?</h3>
								</Accordion.Header>
								<Accordion.Body>
									Linktree is trusted by all social platforms, and is even used
									on many of Facebook, Instagram and TikTok’s own social media
									accounts! Because Linktree originated the concept of a
									link-in-bio tool, the linktr.ee link type will be the most
									identifiable, familiar link to your audiences. It’s a safe,
									smart and secure bio link that your audiences will feel safe
									clicking on.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</>
	);
}
