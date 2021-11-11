import React from "react";
import img from "../img/IMG_3220.jpg";
import WebLinks from "./Web-Link";
import LetterP from "./Letter-of-P";
import NavBar from "./NavBar";
import { Container, Row, Col } from "react-bootstrap";
function Header() {
  return (
    <Container fluid className="App-header">
      <NavBar />
      <Row className="mt-5 mb-5">
        <Col>
          <img className="my-img w-75 mx-5" src={img} alt="" />

          <h6>
            "Former Marine and Logistics Manager looking to make a transition
            into the tech field. Seeking a position where I can use my excellent
            organization skills and newly acquired software engineer skills to
            create, develop, troubleshoot, Q/A new product."
          </h6>

          <WebLinks />
        </Col>
        <Col>
          <LetterP />
        </Col>
      </Row>
    </Container>
  );
}
export default Header;
