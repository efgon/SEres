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
            "Full-Stack Software Engineer with 2+ years of experience with HTML,
            CSS, Javascript, React and OOP languages such as Python and C++ and
            some of their frameworks (Django and .Net). Problem solver and great
            team-player. "
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
