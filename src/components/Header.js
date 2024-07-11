import React from "react";
import img from "../img/IMG_3220.jpg";
import WebLinks from "./Web-Link";
import LetterP from "./Letter-of-P";
import NavBar from "./NavBar";
import { Container, Row, Col } from "react-bootstrap";
function Header({ show = true }) {
  return (
    <div className="App-header">
      <Container fluid>
        <NavBar />
        {show ? (
          <Row className="mt-5 mb-5" style={{ animation: `fadeIn 3s` }}>
            <Col>
              <img className="my-img w-75 mx-5" src={img} alt="" />

              <h6>
                "Full-Stack Software Engineer with 6+ years of experience with
                OOP languages such as Python and some of its frameworks (Django,
                Flask) also JavaScript, Node.js, React, Angular, C++, SQL.
                Experience with Cloud Services such as Microsoft Azure and AWS.
                Problem solver and great team player."
              </h6>

              <WebLinks />
            </Col>
            <Col>
              <LetterP />
            </Col>
          </Row>
        ) : null}
      </Container>
    </div>
  );
}
export default Header;
